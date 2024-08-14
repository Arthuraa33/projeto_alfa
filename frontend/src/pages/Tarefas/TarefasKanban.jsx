import { useState, useEffect } from "react";
import api from "../../api";
import Menu from "../../components/Menu";
import Board from "../../components/Tarefas/TarefaBoard";
// import "../styles/Home.css"

function TarefasKanban() {

    return (
        <div>
            <Menu/>
            <div>
                <Board/>
            </div>
        </div>
    );
}

export default TarefasKanban;
