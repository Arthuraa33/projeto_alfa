import { useState, useEffect } from "react";
import api from "../../api";
import Menu from "../../components/Menu";
import Transporte from "../../components/GestaoCadastros/Transporte";
import "../../styles/Home.css";

function GestaoTransporte() {
    const [transportes, setTransportes] = useState([]);

    useEffect(() => {
        getTransportes();
    }, []);

    const getTransportes = () => {
        api
            .get("/api/cadastro/transporte/")
            .then((res) => res.data)
            .then((data) => {
                setTransportes(data);
            })
            .catch((err) => alert(err));
    };

    const deleteTransporte = (transporte_id) => {
        api
            .delete(`/api/gestao/transporte/delete/${transporte_id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Transporte excluído!");
                    getTransportes();
                } else {
                    alert("Falha em deletar o Transporte");
                }
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <Menu />
            <div>
                <h2>Transportes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Transporte</th>
                            <th>Capacidade em KG</th>
                            <th>Capacidade em UN</th>
                            <th>Preço por KM</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transportes.map((transporte) => (
                            <Transporte 
                                key={transporte.transporte_id} 
                                transporte={transporte} 
                                onDelete={deleteTransporte} 
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GestaoTransporte;
