import { useState, useEffect } from "react";
import api from "../api";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/Home.css"

function CadastroVendedor() {
    const [vendedor_nome, setVendedorNome] = useState([]);
    const [area_vendedor, setAreaVendedor] = useState([]);
    const [comissao_padrao_percentual, setComissaoPadrao] = useState([]);

    const createVendedor = (e) => {
        e.preventDefault();
        api
            .post("/api/cadastro/vendedor/", {vendedor_nome,
                                            area_vendedor,
                                            comissao_padrao_percentual
                                            })
            .then((res) => {
                if (res.status === 201) alert("Vendedor Cadastrado!");
                else alert("Falha em criar Vendedor");
                // getClients();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Menu/>
            <h2>Cadastro de Vendedores</h2>
            <form onSubmit={createVendedor}>
                <label htmlFor="vendedor_nome">Nome Vendedor:</label>
                <br />
                <input
                    type="text"
                    id="vendedor_nome"
                    name="vendedor_nome"
                    required
                    placeholder="Digite o nome do vendedor"
                    onChange={(e) => setVendedorNome(e.target.value)}
                    value={vendedor_nome}
                />
                <label htmlFor="area_vendedor">Área:</label>
                <br />
                <input
                    type="text"
                    id="area_vendedor"
                    name="area_vendedor"
                    required
                    placeholder="Área do vendendor"
                    onChange={(e) => setAreaVendedor(e.target.value)}
                    value={area_vendedor}
                />
                <label htmlFor="comissao_padrao_percentual">Comissao Padrao Percentual:</label>
                <br />
                <input
                    type="text"
                    id="comissao_padrao_percentual"
                    name="comissao_padrao_percentual"
                    required
                    placeholder="Digite a comissão"
                    onChange={(e) => setComissaoPadrao(e.target.value)}
                    value={comissao_padrao_percentual}
                />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default CadastroVendedor;