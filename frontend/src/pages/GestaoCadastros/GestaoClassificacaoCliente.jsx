import { useState, useEffect } from "react";
import api from "../../api";
import Menu from "../../components/Menu";
import ClassificacaoCliente from "../../components/GestaoCadastros/ClassificacaoCliente";
import "../../styles/Home.css";

function GestaoClassificacaoCliente() {
    const [classificacao_clientes, setClassificacaoClientes] = useState([]);

    useEffect(() => {
        getClassificacaoClientes();
    }, []);

    const getClassificacaoClientes = () => {
        api
            .get("/api/cadastro/classificacaocliente/")
            .then((res) => res.data)
            .then((data) => {
                setClassificacaoClientes(data);
            })
            .catch((err) => alert(err));
    };

    const deleteClassificacaoCliente = (classificacao_cliente_id) => {
        api
            .delete(`/api/gestao/classificacaocliente/delete/${classificacao_cliente_id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("ClassificacaoCliente excluído!");
                    getClassificacaoClientes();
                } else {
                    alert("Falha em deletar o ClassificacaoCliente");
                }
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <Menu />
            <div>
                <h2>Classificacao Clientes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Classificação</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classificacao_clientes.map((classificacao_cliente) => (
                            <ClassificacaoCliente 
                                key={classificacao_cliente.classificacao_cliente_id} 
                                classificacao_cliente={classificacao_cliente} 
                                onDelete={deleteClassificacaoCliente} 
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GestaoClassificacaoCliente;
