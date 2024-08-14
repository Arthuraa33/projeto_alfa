import { useState, useEffect } from "react";
import api from "../api";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/Home.css"

function CadastroTransporte() {
    const [transporte_nome, setTransporte] = useState([]);
    const [capacidade_kg, setCapacidadeKg] = useState([]);
    const [capacidade_un, setCapacidadeUn] = useState([]);
    const [preco_km, setPrecoKm] = useState([]);

    const createTransporte = (e) => {
        e.preventDefault();
        api
            .post("/api/cadastro/transporte/", { transporte_nome , 
                                            capacidade_kg,
                                            capacidade_un,
                                            preco_km
                                        })
            .then((res) => {
                if (res.status === 201) alert("Transporte Cadastrado!");
                else alert("Falha em criar o Transporte.");

            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Menu/>
            <h2>Cadastro de Transporte</h2>
            <form onSubmit={createTransporte}>
                <label htmlFor="transporte_nome">Transporte:</label>
                <br />
                <input
                    type="text"
                    id="transporte_nome"
                    name="transporte_nome"
                    required
                    placeholder="Digite o transporte"
                    onChange={(e) => setTransporte(e.target.value)}
                    value={transporte_nome}
                />
                <label htmlFor="capacidade_kg">Capacidade em KG:</label>
                <br />
                <input
                    type="text"
                    id="capacidade_kg"
                    name="capacidade_kg"
                    required
                    placeholder="Digite a capacidade"
                    onChange={(e) => setCapacidadeKg(e.target.value)}
                    value={capacidade_kg}
                />
                <label htmlFor="capacidade_un">Capacidade em UN:</label>
                <br />
                <input
                    type="text"
                    id="capacidade_un"
                    name="capacidade_un"
                    required
                    placeholder="Digite a capacidade em UN"
                    onChange={(e) => setCapacidadeUn(e.target.value)}
                    value={capacidade_un}
                />
                <label htmlFor="preco_km">Embalagem de Transporte:</label>
                <br />
                <input
                    type="text"
                    id="preco_km"
                    name="preco_km"
                    required
                    placeholder="Digite a embalagem de transporte"
                    onChange={(e) => setPrecoKm(e.target.value)}
                    value={preco_km}
                />
                <input type="submit" value="Enviar"></input>
            </form>
        </div>
    );
}

export default CadastroTransporte;