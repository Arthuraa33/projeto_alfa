import { useState, useEffect } from "react";
import api from "../../api";
import Menu from "../../components/Menu";
import Marca from "../../components/GestaoCadastros/Marca";
import "../../styles/Home.css";

function GestaoMarca() {
    const [marcas, setMarcas] = useState([]);

    useEffect(() => {
        getMarcas();
    }, []);

    const getMarcas = () => {
        api
            .get("/api/cadastro/marca/")
            .then((res) => res.data)
            .then((data) => {
                setMarcas(data);
            })
            .catch((err) => alert(err));
    };

    const deleteMarca = (marca_id) => {
        api
            .delete(`/api/gestao/marca/delete/${marca_id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Marca excluído!");
                    getMarcas();
                } else {
                    alert("Falha em deletar o Marca");
                }
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <Menu />
            <div>
                <h2>Marcas</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marcas.map((marca) => (
                            <Marca 
                                key={marca.marca_id} 
                                marca={marca} 
                                onDelete={deleteMarca} 
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GestaoMarca;
