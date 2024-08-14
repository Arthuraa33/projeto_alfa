import { useState, useEffect } from "react";
import api from "../../api";
import Menu from "../../components/Menu";
import "../../styles/Home.css"

function CadastroTipoTarefas() {
    const [tipo_tarefa_nome, setTipoTarefaNome] = useState([]);

    const createTipoTarefa = (e) => {
        e.preventDefault();
        api
            .post("/tarefas/tipotarefa/", { tipo_tarefa_nome })
            .then((res) => {
                if (res.status === 201) alert("Tipo de Tarefa Cadastrada!");
                else alert("Falha em criar a Tipo de Tarefa.");
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Menu/>
            <h2>Cadastro de Tipo de Tarefas</h2>
            <form onSubmit={createTipoTarefa}>
                <label htmlFor="tipo_tarefa">Tipo de Tarefa:</label>
                <br />
                <input
                    type="text"
                    id="tipo_tarefa"
                    name="tipo_tarefa"
                    required
                    onChange={(e) => setTipoTarefaNome(e.target.value)}
                    value={tipo_tarefa_nome}
                />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default CadastroTipoTarefas;