import { useState, useEffect } from "react";
import api from "../../api";
import Menu from "../../components/Menu";
import AreaVenda from "../../components/GestaoCadastros/AreaVenda";
import "../../styles/Home.css";

function GestaoAreaVenda() {
    const [areas, setAreaVendas] = useState([]);

    useEffect(() => {
        getAreaVendas();
    }, []);

    const getAreaVendas = () => {
        api
            .get("/api/cadastro/areavenda/")
            .then((res) => res.data)
            .then((data) => {
                setAreaVendas(data);
            })
            .catch((err) => alert(err));
    };

    const deleteAreaVenda = (area_id) => {
        api
            .delete(`/api/gestao/areavenda/delete/${area_id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Area Venda excluído!");
                    getAreaVendas();
                } else {
                    alert("Falha em deletar o Area Venda");
                }
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <Menu />
            <div>
                <h2>Área de Vendas</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Área de Vendas</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {areas.map((area) => (
                            <AreaVenda 
                                key={area.area_id} 
                                area={area} 
                                onDelete={deleteAreaVenda} 
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GestaoAreaVenda;
