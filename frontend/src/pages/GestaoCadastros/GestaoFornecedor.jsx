import { useState, useEffect } from "react";
import api from "../../api";
import Menu from "../../components/Menu";
import Fornecedor from "../../components/Fornecedor";
import "../../styles/Home.css"

function GestaoFornecedor() {
    const [fornecedores, setFornecedores] = useState([]);

    useEffect(() => {
        getFornecedores();
    }, []);

    const getFornecedores = () => {
        api
            .get("/api/gestao/fornecedor/")
            .then((res) => res.data)
            .then((data) => {
                setFornecedores(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };
    const deleteFornecedor = (fornecedores_id) => {
        api
            .delete(`/api/gestao/fornecedor/delete/${fornecedores_id}/`)
            .then((res) => {
                if (res.status === 204) alert("Fornecedor Excluido!");
                else alert("Falha em deletar o fornecedor");
                getFornecedores();
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <Menu/>
            <div>
                <h2>Fornecedores</h2>

                {fornecedores.map((fornecedor) => (
                    <Fornecedor fornecedor={fornecedor} onDelete={deleteFornecedor} key={fornecedor.fornecedor_id} />
                ))}
            </div>
        </div>
    );
}

export default GestaoFornecedor;
