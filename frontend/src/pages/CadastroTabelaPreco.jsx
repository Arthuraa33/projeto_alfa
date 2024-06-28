import { useState, useEffect } from "react";
import api from "../api";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/Formulario.css"

function CadastroTabelaPreco() {

    const [fornecedores, setFornecedores] = useState([]);
    const [fornecedor_nome, setFornecedorNome] = useState([]);
    const [fornecedor_id, setFornecedorId] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [produto_nome, setProdutoNome] = useState([]);
    const [produto_id, setProdutoId] = useState([]);
    const [preco_compra, setPrecoCompra] = useState([]);
    const [preco_sugestao, setPrecoSugestao] = useState([]);

    useEffect(() => {
        getFornecedor();
        getProduto()
    }, []);

    const getFornecedor = () => {
        api
          .get("/api/cadastro/fornecedor/")
          .then((res) => {
            setFornecedores(res.data); // corrigindo aqui para setar as produtos
            if (res.data.length > 0) {
                setFornecedorNome(res.data[0].fornecedor_nome); // definindo a primeira marca como padrão
            }
          })
          .catch((err) => {
            console.error('Erro ao buscar Fornecedor:', err);
          });
      };

    const getProduto = () => {
        api
          .get("/api/cadastro/produto/")
          .then((res) => {
            setProdutos(res.data); // corrigindo aqui para setar as marcas
            if (res.data.length > 0) {
                setProdutoNome(res.data[0].produto_nome); // definindo a primeira marca como padrão
            }
          })
          .catch((err) => {
            console.error('Erro ao buscar Produto:', err);
          });
      };

    const createTabelaPreco = (e) => {
        e.preventDefault();
        const selectedFornecedor = fornecedores.find(fornecedor => fornecedor.fornecedor_nome === fornecedor_nome);
        const fornecedor_id = selectedFornecedor ? selectedFornecedor.fornecedor_id : null;

        const selectedProduto = produtos.find(produto => produto.produto_nome === produto_nome);
        const produto_id = selectedProduto ? selectedProduto.produto_id : null;

        api
            .post("/api/cadastro/tabelaprecos/", { 
                                            fornecedor_id , 
                                            produto_id,
                                            preco_compra,
                                            preco_sugestao
                                        })
            .then((res) => {
                if (res.status === 201) alert("Preco Cadastrado!");
                else alert("Falha em criar o Preco.");
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Menu/>
            <div className="formulario">
                <h2>Cadastro Tabela de Precos</h2>
                <form onSubmit={createTabelaPreco}>
                    <div>
                        <label htmlFor="fornecedor">Fornecedor:</label>
                        <select 
                            id="fornecedor" 
                            name="fornecedor"
                            onChange={(e) => setFornecedorId(e.target.value)}
                            value={fornecedor_id}
                        >
                            {fornecedores.map(fornecedor => (
                                <option key={fornecedor.fornecedor_id} value={fornecedor.fornecedor_id_id}>{fornecedor.fornecedor_nome}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="produto">Produto:</label>
                        <select 
                            id="produto" 
                            name="produto"
                            onChange={(e) => setProdutoId(e.target.value)}
                            value={produto_id}
                        >
                            {produtos.map(produto => (
                                <option key={produto.produto_id} value={produto.produto_id}>{produto.produto_nome}</option>
                            ))}
                        </select>
                    </div>

                    <label htmlFor="preco_compra">Preco Produto:</label>
                    <br />
                    <input
                        type="text"
                        id="preco_compra"
                        name="preco_compra"
                        required
                        onChange={(e) => setPrecoCompra(e.target.value)}
                        value={preco_compra}
                    />
                    <label htmlFor="preco_sugestao">Sugestão de Preço do Produto:</label>
                    <br />
                    <input
                        type="text"
                        id="preco_sugestao"
                        name="preco_sugestao"
                        required
                        onChange={(e) => setPrecoSugestao(e.target.value)}
                        value={preco_sugestao}
                    />
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
}

export default CadastroTabelaPreco;