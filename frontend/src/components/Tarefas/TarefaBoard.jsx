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
                // Fetch columns data
                const columnRes = await api.get("/tarefas/statustarefa/");
                const columnData = columnRes.data;
                console.log("Column data fetched from API:", columnData); // Log columns data
                setColumns(columnData);

                // Fetch tasks data
                const tasksRes = await api.get("/tarefas/tarefa/");
                const taskData = tasksRes.data;
                console.log("Task data fetched from API:", taskData); // Log tasks data

                const tasksByColumn = {};
                taskData.forEach(task => {
                    if (!tasksByColumn[task.status_tarefa_id]) {
                        tasksByColumn[task.status_tarefa_id] = [];
                    }
                    tasksByColumn[task.status_tarefa_id].push(task);
                });
                console.log("Tasks grouped by column:", tasksByColumn); // Log tasks grouped by columns
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
                let destinationTasks;
    
                if (source.droppableId === destination.droppableId) {
                    destinationTasks = sourceTasks;
                } else {
                    destinationTasks = prevTasks[destination.droppableId] ? Array.from(prevTasks[destination.droppableId]) : [];
                }
    
                const [movedTask] = sourceTasks.splice(source.index, 1);
                destinationTasks.splice(destination.index, 0, movedTask);
    
                const updatedTasks = {
                    ...prevTasks,
                    [source.droppableId]: sourceTasks,
                    [destination.droppableId]: destinationTasks,
                };

                // Log updated tasks after drag and drop
                console.log("Tasks after move:", updatedTasks);

                // Se a tarefa foi movida para uma nova coluna, atualize o status no backend
                if (source.droppableId !== destination.droppableId) {
                    updateTaskStatus(movedTask.tarefa_id, destination.droppableId);
                }

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
                {columns
                    .sort((a, b) => Number(a.status_ordem) - Number(b.status_ordem)) // Ensure status_ordem is numeric
                    .map((column) => {
                        
                        return (
                            <Column
                                key={column.status_tarefa_id}
                                title={column.status_nome}
                                tasks={tasks[column.status_tarefa_id] || []}
                                id={column.status_tarefa_id}
                            />
                        );
                    })}
            </div>
        </DragDropContext>
    );
}
