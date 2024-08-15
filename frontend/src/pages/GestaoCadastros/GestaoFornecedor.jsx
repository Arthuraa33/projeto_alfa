import { useState, useEffect } from "react";
import api from "../../api";
import Menu from "../../components/Menu";
import Fornecedor from "../../components/GestaoCadastros/Fornecedor";
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
            <Menu />
            <div>
                <h2>Fornecedores</h2>
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
                        {fornecedores.map((fornecedor) => (
                            <Fornecedor 
                                key={fornecedor.fornecedor_id} 
                                fornecedor={fornecedor} 
                                onDelete={deleteFornecedor} 
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GestaoFornecedor;
