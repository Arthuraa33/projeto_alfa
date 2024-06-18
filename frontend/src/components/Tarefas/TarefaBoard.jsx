import React, { useState, useEffect, startTransition } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./TarefaColumn";
import api from "../../api";

export default function Board() {
    const [columns, setColumns] = useState([]);
    const [tasks, setTasks] = useState({});

    useEffect(() => {
        getColumn();
        getTask();
    }, []);

    const getColumn = async () => {
        try {
            const res = await api.get("/tarefas/statustarefa/");
            const columnData = res.data;
            console.log("Fetched columns:", columnData); // Debugging: Log columns
            setColumns(columnData);

            // Initialize tasks for each column
            const tasksInit = {};
            columnData.forEach(column => {
                tasksInit[column.status_tarefa_id] = [];
            });
            setTasks(tasksInit);
        } catch (err) {
            console.error('Erro ao buscar Status:', err);
        }
    };

    const getTask = async () => {
        try {
            const res = await api.get("/tarefas/tarefa/");
            const taskData = res.data;
            console.log("Fetched tasks data:", taskData); // Debugging: Log tasks data

            const tasksByColumn = {};
            taskData.forEach(task => {
                if (!tasksByColumn[task.status_tarefa_id]) {
                    tasksByColumn[task.status_tarefa_id] = [];
                }
                tasksByColumn[task.status_tarefa_id].push(task);
            });

            setTasks(prevTasks => ({
                ...prevTasks,
                ...tasksByColumn,
            }));
            console.log("Updated tasks state:", tasksByColumn); // Debugging: Log updated tasks state
        } catch (err) {
            console.error('Erro ao buscar Tarefas:', err); // Added error logging
        }
    };

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

    console.log("Rendered tasks state:", tasks); // Debugging: Log rendered tasks state

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
