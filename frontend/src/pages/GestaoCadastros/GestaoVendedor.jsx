import { useState, useEffect } from "react";
import api from "../../api";
import Menu from "../../components/Menu";
import Vendedor from "../../components/GestaoCadastros/Vendedor";
import "../../styles/Home.css"

function GestaoVendedor() {
    const [vendedores, setVendedores] = useState([]);

    useEffect(() => {
        getVendedores();
    }, []);

    const getVendedores = () => {
        api
            .get("/api/gestao/vendedor/")
            .then((res) => res.data)
            .then((data) => {
                setVendedores(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };
    const deleteVendedor = (vendedores_id) => {
        api
            .delete(`/api/gestao/vendedor/delete/${vendedores_id}/`)
            .then((res) => {
                if (res.status === 204) alert("Vendedor Excluido!");
                else alert("Falha em deletar o vendedor");
                getVendedores();
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <Menu />
            <div>
                <h2>Vendedores</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nome Vendedor</th>
                            <th>Area Vendedor</th>
                            <th>Comissao Percentual Padrão</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendedores.map((vendedor) => (
                            <Vendedor
                                key={vendedor.vendedor_id} 
                                vendedor={vendedor} 
                                onDelete={deleteVendedor} 
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GestaoVendedor;
