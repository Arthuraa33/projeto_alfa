import { useState, useEffect } from "react";
import api from "../api";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/Home.css"

function CadastroMarca() {
    const [marca, setMarca] = useState([]);

    const createMarca = (e) => {
        e.preventDefault();
        api
            .post("/api/cadastro/marca/", { marca })
            .then((res) => {
                if (res.status === 201) alert("Marca Cadastrada!");
                else alert("Falha em criar a Marca.");
                // getClients();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Menu/>
            <h2>Cadastro de Marcas</h2>
            <form onSubmit={createMarca}>
                <label htmlFor="marca">Marca:</label>
                <br />
                <input
                    type="text"
                    id="marca"
                    name="marca"
                    required
                    onChange={(e) => setMarca(e.target.value)}
                    value={marca}
                />
                <input type="submit" value="Submit"></input>
            </form>
            <Footer/>
        </div>
    );
}

export default CadastroMarca;