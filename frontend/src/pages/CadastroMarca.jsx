import { useState } from "react";
import api from "../api";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/Home.css";

function CadastroMarca() {
    const [marca, setMarca] = useState("");

    const createMarca = (e) => {
        e.preventDefault();
        api
            .post("/api/cadastro/marca/", { marca_nome: marca })
            .then((res) => {
                console.log("Requisição bem-sucedida:", res);
                if (res.status === 201) alert("Marca Cadastrada!");
                else alert("Falha em criar a Marca.");
            })
            .catch((err) => {
                console.error("Erro na requisição:", err);
                alert("Erro ao cadastrar a marca.");
            });
    };

    return (
        <div>
            <Menu />
            <h2>Cadastro de Marcas</h2>
            <form onSubmit={createMarca}>
                <label htmlFor="marca">Marca:</label>
                <br />
                <input
                    type="text"
                    id="marca"
                    name="marca"
                    required
                    placeholder="Digite a marca"
                    onChange={(e) => setMarca(e.target.value)}
                    value={marca}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default CadastroMarca;