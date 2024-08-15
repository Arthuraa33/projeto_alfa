import { useState, useEffect } from "react";
import api from "../../api";
import Menu from "../../components/Menu";
import Cliente from "../../components/GestaoCadastros/Cliente";
import "../../styles/Home.css";

function GestaoCliente() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        getClientes();
    }, []);

    const getClientes = () => {
        api
            .get("/api/cadastro/cliente/")
            .then((res) => res.data)
            .then((data) => {
                setClientes(data);
            })
            .catch((err) => alert(err));
    };

    const deleteCliente = (cliente_id) => {
        api
            .delete(`/api/gestao/cliente/delete/${cliente_id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Cliente excluído!");
                    getClientes();
                } else {
                    alert("Falha em deletar o Cliente");
                }
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <Menu />
            <div>
                <h2>Clientes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Contato</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Observação</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <Cliente 
                                key={cliente.cliente_id} 
                                cliente={cliente} 
                                onDelete={deleteCliente} 
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GestaoCliente;
