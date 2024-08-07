import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import { Avatar } from "antd";

const Draggable = lazy(() => import("react-beautiful-dnd").then(module => ({ default: module.Draggable })));

const Container = styled.div`
    border-radius: 10px;
    box-shadow: 5px 5px 5px 2px grey;
    padding: 8px;
    color: #000;
    margin-bottom: 8px;
    min-height: 120px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: ${(props) => bgcolorChange(props)};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2px;
`;

const TextContent = styled.div`
    margin: 4px 0;
`;

const Icons = styled.div`
    display: flex;
    justify-content: end;
    padding: 2px;
`;

function bgcolorChange(props) {
    return props.$isDragging
        ? "lightgreen"
        : props.$isDraggable
            ? props.$isBacklog
                ? "#F2D7D5"
                : "#DCDCDC"
            : props.$isBacklog
                ? "#F2D7D5"
                : "#EAF4FC";
}

export default function Card({ task, index }) {
    // console.log("Rendering Card for task:", task);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Draggable draggableId={`${task.tarefa_id}`} key={task.tarefa_id} index={index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        $isDragging={snapshot.isDragging}
                    >
                        <div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
                            <span>
                                <small>
                                    #{task.tarefa_id}
                                    {"  "}
                                </small>
                            </span>
                        </div>
                        <TextContainer>
                            <TextContent>{task.tarefa_nome}</TextContent>
                            <TextContent>{task.cliente_nome}</TextContent>
                        </TextContainer>
                        <Icons>
                            <div>
                                <Avatar
                                    onClick={() => console.log(task)}
                                    src={"https://joesch.moe/api/v1/random?key=" + task.tarefa_id}
                                />
                            </div>
                        </Icons>
                    </Container>
                )}
            </Draggable>
        </Suspense>
    );
}
