import { useState, useEffect } from "react";
import api from "../api";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/Pedido.css"

function CadastroPedido() {

    const [clientes, setClientes] = useState([]);
    const [cliente_id, setClienteId] = useState([]);
    const [cliente_nome, setClienteNome] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [marca_id, setMarcaId] = useState([]);
    const [marca_nome, setMarcaNome] = useState([]);
    const [transportes, setTransportes] = useState([]);
    const [transporte_id, setTransporteId] = useState([]);
    const [transporte_nome, setTransporteNome] = useState([]);
    const [tipo_transportes, setTipoTransportes] = useState([]);
    const [tipo_transporte_id, setTipoTransporteId] = useState([]);
    const [tipo_transporte_nome, setTipoTransporteNome] = useState([]);

    const [pesquisa_preco, setPesquisaPreco] = useState([]);
    const [pesquisa_preco_sugerido, setPesquisaPrecoSugerido] = useState([]);

    useEffect(() => {
        getClientes();
        getMarcas();
        getTransportes();
        getTipoTransportes();
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

      const getMarcas = () => {
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

      const createPesquisa = (e) => {
        e.preventDefault();
        const selectedCliente = clientes.find(cliente => cliente.cliente_nome === cliente_nome);
        const cliente_id = selectedCliente ? selectedCliente.cliente_id : null;
        
        const selectedMarca = marcas.find(marca => marca.marca_nome === marca_nome);
        const marca_id = selectedMarca ? selectedMarca.marca_id : null;

        const selectedTransporte = transportes.find(transporte => transporte.transporte_nome === transporte_nome);
        const transporte_id = selectedTransporte ? selectedTransporte.transporte_id : null;

        const selectedTipoTransporte = tipo_transportes.find(tipo_transporte => tipo_transporte.tipo_transporte_nome === tipo_transporte_nome);
        const tipo_transporte_id = selectedTipoTransporte ? selectedTipoTransporte.tipo_transporte_id : null;

        const selectedVendedor = vendedores.find(vendedor => vendedor.vendedor_nome === vendedor_nome);
        const vendedor_id = selectedVendedor ? selectedVendedor.vendedor_id : null;

        api
            .post("/api/cadastro/pesquisa/", { cliente_id,
                                            marca_id, 
                                            transporte_id,
                                            tipo_transporte_id,
                                            vendedor_id,
                                            pesquisa_preco,
                                            pesquisa_preco_sugerido
                                        })
            .then((res) => {
                if (res.status === 201) alert("Pesquisa Cadastrada!");
                else alert("Falha em criar a Pesquisa");
            })
            .catch((err) => alert(err));
    };

    return (
                <div>
                <Menu/>
                <div className="formulario">
                    <h2>Cadastro da Pesquisa</h2>
                    <form onSubmit={createPesquisa}>
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
                        
                        <label htmlFor="pesquisa_preco">Preço Praticado:</label>
                        <br />
                        <input
                            type="text"
                            id="pesquisa_preco"
                            name="pesquisa_preco"
                            required
                            onChange={(e) => setPesquisaPreco(e.target.value)}
                            value={pesquisa_preco}
                        />

                        <label htmlFor="pesquisa_preco_sugerido">Preço Sugerido:</label>
                        <br />
                        <input
                            type="text"
                            id="pesquisa_preco_sugerido"
                            name="pesquisa_preco_sugerido"
                            required
                            onChange={(e) => setPesquisaPrecoSugerido(e.target.value)}
                            value={pesquisa_preco_sugerido}
                        />
                        <input type="submit" value="Enviar"></input>
                    </form>
                </div>
                <Footer/>
            </div>
    );
}

export default CadastroPedido;