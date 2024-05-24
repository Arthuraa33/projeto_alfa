import { useState, useEffect } from "react";
import api from "../api";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/Home.css"

function CadastroAreaVenda() {
    const [area_nome, setAreaVenda] = useState([]);

    const createAreaVenda = (e) => {
        e.preventDefault();
        api
            .post("/api/cadastro/areavenda/", { area_nome })
            .then((res) => {
                if (res.status === 201) alert("Área de Venda Cadastrada!");
                else alert("Falha em criar a Área de Venda.");
                // getClients();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Menu/>
            <h2>Cadastro de Áreas de Venda</h2>
            <form onSubmit={createAreaVenda}>
                <label htmlFor="area_venda">Área de Venda:</label>
                <br />
                <input
                    type="text"
                    id="area_venda"
                    name="area_venda"
                    required
                    onChange={(e) => setAreaVenda(e.target.value)}
                    value={area_nome}
                />
                <input type="submit" value="Criar"></input>
            </form>
            <Footer/>
        </div>
    );
}

export default CadastroAreaVenda;