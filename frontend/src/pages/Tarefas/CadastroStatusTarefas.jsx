import { useState, useEffect } from "react";
import api from "../../api";
import Menu from "../../components/Menu";
import "../../styles/Home.css"

function CadastroStatusTarefas() {
    const [pedido_fechado, setPedidoFechado] = useState([]);
    const [status_nome, setStatusTarefa] = useState([]);

    const createStatusTarefa = (e) => {
        e.preventDefault();
        api
            .post("/tarefas/statustarefa/", { pedido_fechado, status_descricao })
            .then((res) => {
                if (res.status === 201) alert("Status de Tarefa Cadastrada!");
                else alert("Falha em criar a Status de Tarefa.");
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Menu/>
            <h2>Cadastro de Status de Tarefas</h2>
            <form onSubmit={createStatusTarefa}>
                <label htmlFor="pedido_fechado">O pedido foi fechado?</label>
                <br />
                <input
                    type="text"
                    id="pedido_fechado"
                    name="pedido_fechado"
                    required
                    onChange={(e) => setPedidoFechado(e.target.value)}
                    value={pedido_fechado}
                />

                <label htmlFor="status_nome">Status de Tarefa:</label>
                <br />
                <input
                    type="text"
                    id="status_nome"
                    name="status_nome"
                    required
                    onChange={(e) => setStatusTarefa(e.target.value)}
                    value={status_nome}
                />

                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default CadastroStatusTarefas;