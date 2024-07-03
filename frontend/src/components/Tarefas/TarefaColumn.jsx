import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import Card from "./TarefaCard";
import "../../styles/scroll.css";

const Droppable = lazy(() => import("react-beautiful-dnd").then(module => ({ default: module.Droppable })));

const Container = styled.div`
    background-color: #f4f5f7;
    border-radius: 2.5px;
    width: 400px;
    height: 900px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border: 1px solid gray;
`;

const Title = styled.h3`
    padding: 8px;
    background-color: pink;
    text-align: center;
`;

const TaskList = styled.div`
    padding: 3px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.$isDraggingOver ? "lightblue" : "#f4f5f7")};
    flex-grow: 1;
    min-height: 100px;
`;

export default function Column({ title, tasks, id }) {
    // console.log("Rendering Column with tasks:", tasks);
    return (
        
        <Container className="column">
            <Title
                style={{
                    backgroundColor: "lightblue",
                    position: "sticky",
                    top: "0",
                }}
            >
                {title}
            </Title>
            <Suspense fallback={<div>Loading...</div>}>
                <Droppable droppableId={id ? id.toString() : ""}>
                    {(provided, snapshot) => (
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            $isDraggingOver={snapshot.isDraggingOver}
                        >
                            {tasks.map((task, index) => (
                                <Card key={task.tarefa_id} index={index} task={task} />
                            ))}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Suspense>
        </Container>
    );
}
