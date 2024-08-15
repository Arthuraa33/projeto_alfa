import { useState, useEffect } from "react";
import api from "../../api";
import Menu from "../../components/Menu";
import Produto from "../../components/GestaoCadastros/Produto";
import "../../styles/Home.css";

function GestaoProduto() {
    const [produtos, setProdutos] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [marcasCarregadas, setMarcasCarregadas] = useState(false); // Novo estado

    useEffect(() => {
        // Carregar marcas
        getMarca();
    }, []);

    // Novo useEffect que só é chamado quando as marcas forem carregadas
    useEffect(() => {
        if (marcasCarregadas) {
            getProdutos();
        }
    }, [marcasCarregadas]); // Executa somente quando `marcasCarregadas` for true

    const getMarca = async () => {
        try {
            const res = await api.get("/api/cadastro/marca/");
            setMarcas(res.data);
            setMarcasCarregadas(true); // Marcar como carregadas
        } catch (err) {
            console.error('Erro ao buscar Marca:', err);
        }
    };

    const getProdutos = async () => {
        try {
            const res = await api.get("/api/cadastro/produto/");
            const produtosComMarca = res.data.map((produto) => {
                const marcaEncontrada = marcas.find((marca) => marca.marca_id === produto.marca_id);
                return {
                    ...produto,
                    marca_nome: marcaEncontrada ? marcaEncontrada.marca_nome : "Marca desconhecida",
                };
            });
            setProdutos(produtosComMarca);
        } catch (err) {
            alert(err);
        }
    };

    const deleteProduto = (produto_id) => {
        api
            .delete(`/api/gestao/produto/delete/${produto_id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Produto excluído!");
                    getProdutos();
                } else {
                    alert("Falha em deletar o Produto");
                }
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <Menu />
            <div>
                <h2>Produtos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Produto Nome</th>
                            <th>Marca</th>
                            <th>Peso</th>
                            <th>Embalagem</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto) => (
                            <Produto 
                                key={produto.produto_id} 
                                produto={produto} 
                                onDelete={deleteProduto} 
                                marcas={marcas}  // Passa as marcas para o componente Produto
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GestaoProduto;
