import { useState, useEffect } from "react";
import api from "../api";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/Formulario.css"

function CadastroProduto() {
    const [produto_nome, setProduto] = useState([]);
    const [marca_id, setMarcaId] = useState([]);
    const [marca_nome, setMarcaNome] = useState([]);
    const [peso_produto, setPeso] = useState([]);
    const [embalagem_produto, setEmbalagem] = useState([]);
    const [marcas, setMarcas] = useState([]);
    
    useEffect(() => {
        getMarca();
    }, []);

    const getMarca = () => {
        api
          .get("/api/cadastro/marca/")
          .then((res) => {
            setMarcas(res.data); // corrigindo aqui para setar as marcas
            if (res.data.length > 0) {
                setMarcaNome(res.data[0].marca_nome); // definindo a primeira marca como padrão
            }
          })
          .catch((err) => {
            console.error('Erro ao buscar Marca:', err);
          });
      };

    const createProduto = (e) => {
        e.preventDefault();
        const selectedMarca = marcas.find(marca => marca.marca_nome === marca_nome);
        const marca_id = selectedMarca ? selectedMarca.marca_id : null;
        console.log({ produto, marca_id, peso_produto, embalagem_produto });
        api
            .post("/api/cadastro/produto/", { produto_nome,
                                            marca_id , 
                                            peso_produto,
                                            embalagem_produto})
            .then((res) => {
                if (res.status === 201) alert("Produto Cadastrado!");
                else alert("Falha em criar o Produto.");
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Menu/>
            <div className="formulario">
                <h2>Cadastro de Produto</h2>
                <form onSubmit={createProduto}>
                    <label htmlFor="produto_nome">Produto:</label>
                    <br />
                    <input
                        type="text"
                        id="produto_nome"
                        name="produto_nome"
                        required
                        placeholder="Digite o nome do produto"
                        onChange={(e) => setProduto(e.target.value)}
                        value={produto_nome}
                    />
                    <div>
                        <label htmlFor="marca">Marca:</label>
                        <select 
                            id="marca" 
                            name="marca"
                            onChange={(e) => setMarcaId(e.target.value)}
                            value={marca_id}
                        >
                            {marcas.map(marca => (
                                <option key={marca.marca_id} value={marca.marca_id}>{marca.marca_nome}</option>
                            ))}
                        </select>
                    </div>
                    <label htmlFor="peso_produto">Peso Produto:</label>
                    <br />
                    <input
                        type="text"
                        id="peso_produto"
                        name="peso_produto"
                        required
                        placeholder="Digite o peso do produto"
                        onChange={(e) => setPeso(e.target.value)}
                        value={peso_produto}
                    />
                    <label htmlFor="embalagem_produto">Embalagem Produto:</label>
                    <br />
                    <input
                        type="text"
                        id="embalagem_produto"
                        name="embalagem_produto"
                        required
                        placeholder="Digite a embalagem do produto"
                        onChange={(e) => setEmbalagem(e.target.value)}
                        value={embalagem_produto}
                    />
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
}

export default CadastroProduto;