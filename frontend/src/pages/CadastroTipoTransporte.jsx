import { useState, useEffect } from "react";
import api from "../api";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/Home.css"

function CadastroTipoTransporte() {
    const [tipo_transporte_nome, setTipoTransporte] = useState([]);
    const [cif, setCif] = useState([]);
    const [fob, setFob] = useState([]);
    const [carregamento, setCarregamento] = useState([]);

    const createTipoTransporte = (e) => {
        e.preventDefault();
        api
            .post("/api/cadastro/tipotransporte/", { tipo_transporte_nome , 
                                            cif,
                                            fob,
                                            carregamento
                                        })
            .then((res) => {
                if (res.status === 201) alert("Tipo de Transporte Cadastrado!");
                else alert("Falha em criar o Tipo de Transporte.");

            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Menu/>
            <h2>Cadastro de Tipo de Transporte</h2>
            <form onSubmit={createTipoTransporte}>
                <label htmlFor="tipo_transporte_nome">Tipo de Transporte:</label>
                <br />
                <input
                    type="text"
                    id="tipo_transporte_nome"
                    name="tipo_transporte_nome"
                    required
                    placeholder="Digite o tipo de transporte"
                    onChange={(e) => setTipoTransporte(e.target.value)}
                    value={tipo_transporte_nome}
                />
                <label htmlFor="cif">CIF?</label>
                <br />
                <input
                    type="text"
                    id="cif"
                    name="cif"
                    required
                    placeholder="Digite o CIF"
                    onChange={(e) => setCif(e.target.value)}
                    value={cif}
                />
                <label htmlFor="fob"> FOB?</label>
                <br />
                <input
                    type="text"
                    id="fob"
                    name="fob"
                    required
                    placeholder="Digite o FOB"
                    onChange={(e) => setFob(e.target.value)}
                    value={fob}
                />
                <label htmlFor="carregamento"> Carregamento?</label>
                <br />
                <input
                    type="text"
                    id="carregamento"
                    name="carregamento"
                    required
                    placeholder="Digite a carregamento"
                    onChange={(e) => setCarregamento(e.target.value)}
                    value={carregamento}
                />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default CadastroTipoTransporte;