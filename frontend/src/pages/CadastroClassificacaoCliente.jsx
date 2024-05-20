import { useState, useEffect } from "react";
import api from "../api";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/Home.css"

function CadastroClassificacaoCliente() {
    const [classificacao, setClassificacaoCliente] = useState([]);

    const createClassificacaoCliente = (e) => {
        e.preventDefault();
        api
            .post("/api/cadastro/classificacaocliente/", { classificacao_nome })
            .then((res) => {
                if (res.status === 201) alert("Classificação de Cliente Cadastrada!");
                else alert("Falha em criar a Classificação do Cliente.");
                // getClients();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Menu/>
            <h2>Cadastro de Classificação do Cliente</h2>
            <form onSubmit={createClassificacaoCliente}>
                <label htmlFor="classificacao">Classificação do Cliente:</label>
                <br />
                <input
                    type="text"
                    id="classificacao"
                    name="classificacao"
                    required
                    onChange={(e) => setClassificacaoCliente(e.target.value)}
                    value={classificacao}
                />
                <input type="submit" value="Criar"></input>
            </form>
            <Footer/>
        </div>
    );
}

export default CadastroClassificacaoCliente;