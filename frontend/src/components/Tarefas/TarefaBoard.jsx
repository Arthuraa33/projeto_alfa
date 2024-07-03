import React, { useState, useEffect, startTransition } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./TarefaColumn";
import api from "../../api";

export default function Board() {
    const [columns, setColumns] = useState([]);
    const [tasks, setTasks] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const columnRes = await api.get("/tarefas/statustarefa/");
                const columnData = columnRes.data;
                setColumns(columnData);

                const tasksRes = await api.get("/tarefas/tarefa/");
                const taskData = tasksRes.data;

                const tasksByColumn = {};
                taskData.forEach(task => {
                    if (!tasksByColumn[task.status_tarefa_id]) {
                        tasksByColumn[task.status_tarefa_id] = [];
                    }
                    tasksByColumn[task.status_tarefa_id].push(task);
                });
                setTasks(tasksByColumn);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    const updateTaskStatus = async (taskId, newStatusId) => {
        try {
            await api.patch(`/tarefas/tarefa/${taskId}/`, { status_tarefa_id: newStatusId });
            console.log(`Task ${taskId} updated to status ${newStatusId}`);
        } catch (error) {
            console.error(`Error updating task ${taskId}:`, error);
        }
    };

    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) return;

        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }

        startTransition(() => {
            setTasks(prevTasks => {
                const sourceTasks = Array.from(prevTasks[source.droppableId]);
                const destinationTasks = source.droppableId === destination.droppableId ? sourceTasks : Array.from(prevTasks[destination.droppableId]);

                const [movedTask] = sourceTasks.splice(source.index, 1);
                destinationTasks.splice(destination.index, 0, movedTask);

                const updatedTasks = {
                    ...prevTasks,
                    [source.droppableId]: sourceTasks,
                    [destination.droppableId]: destinationTasks,
                };

                // Se a tarefa foi movida para uma nova coluna, atualize o status no backend
                if (source.droppableId !== destination.droppableId) {
                    updateTaskStatus(movedTask.tarefa_id, destination.droppableId);
                }

                console.log("Tasks after move:", updatedTasks); // Debugging: Log tasks after move
                return updatedTasks;
            });
        });
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <h2 style={{ textAlign: "center" }}>PROGRESS BOARD</h2>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    width: "1300px",
                    margin: "0 auto",
                }}
            >
                {columns.map((column) => (
                    <Column
                        key={column.status_tarefa_id}
                        title={column.status_nome}
                        tasks={tasks[column.status_tarefa_id] || []}
                        id={column.status_tarefa_id}
                    />
                ))}
            </div>
        </DragDropContext>
    );
}
