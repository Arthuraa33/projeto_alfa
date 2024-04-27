import { useState, useEffect } from "react";
import api from "../api";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/Pedido.css"

function CadastroPedido() {

    const [clientes, setClientes] = useState([]);
    const [cliente_id, setClienteId] = useState([]);
    const [cliente_nome, setClienteNome] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [produto_id, setProdutoId] = useState([]);
    const [produto_nome, setProdutoNome] = useState([]);
    const [transportes, setTransportes] = useState([]);
    const [transporte_id, setTransporteId] = useState([]);
    const [transporte_nome, setTransporteNome] = useState([]);
    const [tipo_transportes, setTipoTransportes] = useState([]);
    const [tipo_transporte_id, setTipoTransporteId] = useState([]);
    const [tipo_transporte_nome, setTipoTransporteNome] = useState([]);
    const [vendedores, setVendedores] = useState([]);
    const [vendedor_id, setVendedorId] = useState([]);
    const [vendedor_nome, setVendedorNome] = useState([]);
    const [pedido_quantidade, setPedidoQuantidade] = useState([]);

    useEffect(() => {
        getClientes();
        getProdutos();
        getTransportes();
        getTipoTransportes();
        getVendedores();
    }, []);
    
      const getClientes = () => {
        api
          .get("/api/cadastro/cliente/")
          .then((res) => {
            setClientes(res.data); // corrigindo aqui para setar as produtos
            if (res.data.length > 0) {
                setClienteNome(res.data[0].cliente_nome); // definindo a primeira marca como padrão
            }
          })
          .catch((err) => {
            console.error('Erro ao buscar Cliente:', err);
          });
      };

      const getProdutos = () => {
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

      const getTransportes = () => {
        api
          .get("/api/cadastro/transporte/")
          .then((res) => {
            setTransportes(res.data); // corrigindo aqui para setar as marcas
            if (res.data.length > 0) {
                setTransporteNome(res.data[0].transporte_nome); // definindo a primeira marca como padrão
            }
          })
          .catch((err) => {
            console.error('Erro ao buscar Transporte:', err);
          });
      };

      const getTipoTransportes = () => {
        api
          .get("/api/cadastro/tipotransporte/")
          .then((res) => {
            setTipoTransportes(res.data); // corrigindo aqui para setar as marcas
            if (res.data.length > 0) {
                setTipoTransporteNome(res.data[0].tipo_transporte_nome); // definindo a primeira marca como padrão
            }
          })
          .catch((err) => {
            console.error('Erro ao buscar Tipo de Transporte:', err);
          });
      };

      const getVendedores = () => {
        api
          .get("/api/cadastro/vendedor/")
          .then((res) => {
            setVendedores(res.data); // corrigindo aqui para setar as marcas
            if (res.data.length > 0) {
                setVendedorNome(res.data[0].vendedor_nome); // definindo a primeira marca como padrão
            }
          })
          .catch((err) => {
            console.error('Erro ao buscar Vendedor:', err);
          });
      };

      const createPedido = (e) => {
        e.preventDefault();
        const selectedCliente = clientes.find(cliente => cliente.cliente_nome === cliente_nome);
        const cliente_id = selectedCliente ? selectedCliente.cliente_id : null;
        
        const selectedProduto = produtos.find(produto => produto.produto_nome === produto_nome);
        const produto_id = selectedProduto ? selectedProduto.produto_id : null;

        const selectedTransporte = transportes.find(transporte => transporte.transporte_nome === transporte_nome);
        const transporte_id = selectedTransporte ? selectedTransporte.transporte_id : null;

        const selectedTipoTransporte = tipo_transportes.find(tipo_transporte => tipo_transporte.tipo_transporte_nome === tipo_transporte_nome);
        const tipo_transporte_id = selectedTipoTransporte ? selectedTipoTransporte.tipo_transporte_id : null;

        const selectedVendedor = vendedores.find(vendedor => vendedor.vendedor_nome === vendedor_nome);
        const vendedor_id = selectedVendedor ? selectedVendedor.vendedor_id : null;

        api
            .post("/api/cadastro/pedido/", { cliente_id,
                                            produto_id, 
                                            transporte_id,
                                            tipo_transporte_id,
                                            vendedor_id,
                                            pedido_quantidade
                                        })
            .then((res) => {
                if (res.status === 201) alert("Pedido Cadastrado!");
                else alert("Falha em criar o Pedido.");
            })
            .catch((err) => alert(err));
    };

    return (
                <div>
                <Menu/>
                <div className="formulario">
                    <h2>Cadastro de Pedido</h2>
                    <form onSubmit={createPedido}>
                        <div>
                            <label htmlFor="cliente">Cliente:</label>
                            <select 
                                id="cliente" 
                                name="cliente"
                                onChange={(e) => setClienteId(e.target.value)}
                                value={cliente_id}
                            >
                                {clientes.map(cliente => (
                                    <option key={cliente.cliente_id} value={cliente.cliente_id}>{cliente.cliente_nome}</option>
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

                        <div>
                            <label htmlFor="transporte">Transporte:</label>
                            <select 
                                id="transporte" 
                                name="transporte"
                                onChange={(e) => setTransporteId(e.target.value)}
                                value={transporte_id}
                            >
                                {transportes.map(transporte => (
                                    <option key={transporte.transporte_id} value={transporte.transporte_id}>{transporte.transporte_nome}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="tipo_transporte">Tipo de Transporte:</label>
                            <select 
                                id="tipo_transporte" 
                                name="tipo_transporte"
                                onChange={(e) => setTipoTransporteId(e.target.value)}
                                value={tipo_transporte_id}
                            >
                                {tipo_transportes.map(tipo_transporte => (
                                    <option key={tipo_transporte.tipo_transporte_id} value={tipo_transporte.tipo_transporte_id}>{tipo_transporte.tipo_transporte_nome}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="vendedor">Vendedor:</label>
                            <select 
                                id="vendedor" 
                                name="vendedor"
                                onChange={(e) => setVendedorId(e.target.value)}
                                value={vendedor_id}
                            >
                                {vendedores.map(vendedor => (
                                    <option key={vendedor.vendedor_id} value={vendedor.vendedor_id}>{vendedor.vendedor_nome}</option>
                                ))}
                            </select>
                        </div>
                        <label htmlFor="pedido_quantidade">Quantidade do Pedido:</label>
                        <br />
                        <input
                            type="text"
                            id="pedido_quantidade"
                            name="pedido_quantidade"
                            required
                            onChange={(e) => setPedidoQuantidade(e.target.value)}
                            value={pedido_quantidade}
                        />
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
                <Footer/>
            </div>
    );
}

export default CadastroPedido;