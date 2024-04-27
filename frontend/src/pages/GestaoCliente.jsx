import { useState, useEffect } from "react";
import api from "../api";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Cliente from "../components/Cliente";
import "../styles/Home.css"

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
                console.log(data);
            })
            .catch((err) => alert(err));
    };
    const deleteCliente = (cliente_id) => {
        api
            .delete(`/api/gestao/cliente/delete/${cliente_id}/`)
            .then((res) => {
                if (res.status === 204) alert("Cliente Excluido!");
                else alert("Falha em deletar o Cliente");
                getClientes();
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <Menu/>
            <div>
                <h2>Clientes</h2>

                {clientes.map((cliente) => (
                    <Cliente cliente={cliente} onDelete={deleteCliente} key={cliente.cliente_id} />
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default GestaoCliente;
