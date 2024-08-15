import { useState, useEffect } from "react";
import api from "../../api";
import Menu from "../../components/Menu";
import TipoTransporte from "../../components/GestaoCadastros/TipoTransporte";
import "../../styles/Home.css";

function GestaoTipoTransporte() {
    const [tipo_transportes, setTipoTransportes] = useState([]);

    useEffect(() => {
        getTipoTransportes();
    }, []);

    const getTipoTransportes = () => {
        api
            .get("/api/cadastro/tipotransporte/")
            .then((res) => res.data)
            .then((data) => {
                setTipoTransportes(data);
            })
            .catch((err) => alert(err));
    };

    const deleteTipoTransporte = (tipo_transporte_id) => {
        api
            .delete(`/api/gestao/tipotransporte/delete/${transporte_id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Tipo Transporte excluído!");
                    getTransportes();
                } else {
                    alert("Falha em deletar o Tipo do Transporte");
                }
            })
            .catch((error) => alert(error));
    };
    
    return (
        <div>
            <Menu />
            <div>
                <h2>Tipo de Transportes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Tipo Transporte</th>
                            <th>CIF</th>
                            <th>FOB</th>
                            <th>Tipo Carregamento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tipo_transportes.map((tipo_transporte) => (
                            <TipoTransporte 
                                key={tipo_transporte.tipo_transporte_id} 
                                tipo_transporte={tipo_transporte} 
                                onDelete={deleteTipoTransporte} 
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GestaoTipoTransporte;
