import { useState } from "react";
import api from "../api";
import Menu from "../components/Menu";
import "../styles/Home.css";

function CadastroCondicaoPagamento() {
    const [condicao_pagamento, setCondicaoPagamento] = useState("");

    const createCondicaoPagamento = (e) => {
        e.preventDefault();
        api
            .post("/api/cadastro/condicaopagamento/", { condicao_pagamento_nome: condicao_pagamento })
            .then((res) => {
                console.log("Requisição bem-sucedida:", res);
                if (res.status === 201) alert("CondicaoPagamento Cadastrada!");
                else alert("Falha em criar a Condição de Pagamento.");
            })
            .catch((err) => {
                console.error("Erro na requisição:", err);
                alert("Erro ao cadastrar a Condição de Pagamento.");
            });
    };

    return (
        <div>
            <Menu />
            <h2>Cadastro de Condição de Pagamento</h2>
            <form onSubmit={createCondicaoPagamento}>
                <label htmlFor="condicao_pagamento">Condição Pagamento:</label>
                <br />
                <input
                    type="text"
                    id="condicao_pagamento"
                    name="condicao_pagamento"
                    required
                    placeholder="Digite a Condição de Pagamento"
                    onChange={(e) => setCondicaoPagamento(e.target.value)}
                    value={condicao_pagamento}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default CadastroCondicaoPagamento;