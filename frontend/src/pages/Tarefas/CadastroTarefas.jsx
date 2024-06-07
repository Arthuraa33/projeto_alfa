import { useState, useEffect } from "react";
import api from "../../api";
import Menu from "../../components/Menu";
import "../../styles/Home.css"

function CadastroTarefas() {
    const [tarefa_nome, setTarefaNome] = useState([]);
    const [cliente_id, setClienteId] = useState([]);
    const [cliente_nome, setClienteNome] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [tipo_tarefa_id, setTipoTarefaId] = useState([]);
    const [tipo_tarefa_nome, setTipoTarefaNome] = useState([]);
    const [tipo_tarefas, setTipoTarefas] = useState([]);
    const [status_tarefa_id, setStatusTarefaId] = useState([]);
    const [status_tarefa_nome, setStatusTarefaNome] = useState([]);
    const [status_tarefas, setStatusTarefas] = useState([]);

    // const [pesquisa_id, setPesquisaId] = useState(0);
    // const [pedido_id, setPedidoId] = useState(0);

    const [values, setValues] = useState({
        pesquisa_id: 0,
        pedido_id: 0,
    });

    const [outro_motivo_negocio_perdido, setMotivoNegocioPerdido] = useState([]);
    const [criador_tarefa, setCriadorTarefa] = useState([]);
    
    const [vendedores, setVendedores] = useState([]);
    const [vendedor_id, setVendedorId] = useState([]);
    const [vendedor_nome, setVendedorNome] = useState([]);

    const [inicio_tarefa, setInicioTarefa] = useState([]);
    const [fim_tarefa, setFimTarefa] = useState([]);

    useEffect(() => {
        getCliente();
        getTipoTarefa();
        getStatusTarefa();
        getVendedores();

    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = parseInt(value, 10);

        if (!isNaN(parsedValue) || value === '') {
            setValues({
                ...values,
                [name]: parsedValue || 0
            });
        }
    };

    const getCliente = () => {
        api
          .get("/api/cadastro/cliente/")
          .then((res) => {
            setClientes(res.data);
            if (res.data.length > 0) {
                setClienteNome(res.data[0].cliente_nome); 
            }
          })
          .catch((err) => {
            console.error('Erro ao buscar cliente:', err);
          });
      };
    
    const getTipoTarefa = () => {
    api
        .get("/tarefas/tipotarefa/")
        .then((res) => {
        setTipoTarefas(res.data);
        if (res.data.length > 0) {
            setTipoTarefaNome(res.data[0].tipo_tarefa_nome); 
        }
        })
        .catch((err) => {
        console.error('Erro ao buscar Tipo Tarefa:', err);
        });
    };

    const getStatusTarefa = () => {
        api
            .get("/tarefas/statustarefa/")
            .then((res) => {
            setStatusTarefas(res.data);
            if (res.data.length > 0) {
                setStatusTarefaNome(res.data[0].status_tarefa_nome); 
            }
            })
            .catch((err) => {
            console.error('Erro ao buscar Status Tarefa:', err);
            });
        };
    
    const getVendedores = () => {
        api
            .get("/api/cadastro/vendedor/")
            .then((res) => {
            setVendedores(res.data); 
            if (res.data.length > 0) {
                setVendedorNome(res.data[0].vendedor_nome);
            }
            })
            .catch((err) => {
            console.error('Erro ao buscar Vendedor:', err);
            });
        };


    const createTarefa = (e) => {
        e.preventDefault();

        const selectedCliente = clientes.find(cliente => cliente.cliente_nome === cliente_nome);
        const cliente_id = selectedCliente ? selectedCliente.cliente_id : null;

        const selectedTipoTarefa = tipo_tarefas.find(tipo_tarefa => tipo_tarefa.tipo_tarefa_nome === tipo_tarefa_nome);
        const tipo_tarefa_id = selectedTipoTarefa ? selectedTipoTarefa.tipo_tarefa_id : null;

        const selectedStatusTarefa = status_tarefas.find(status_tarefa => status_tarefa.status_tarefa_nome === status_tarefa_nome);
        const status_tarefa_id = selectedStatusTarefa ? selectedStatusTarefa.status_tarefa_id : null;

        const selectedVendedor = vendedores.find(vendedor => vendedor.vendedor_nome === vendedor_nome);
        const vendedor_id = selectedVendedor ? selectedVendedor.vendedor_id : null;

        const isoInicioTarefa = new Date(inicio_tarefa).toISOString();
        const isoFimTarefa = new Date(fim_tarefa).toISOString();

        api
            .post("/tarefas/tarefa/", { tarefa_nome, 
                                        cliente_id,
                                        tipo_tarefa_id,
                                        pesquisa_id,
                                        pedido_id,
                                        status_tarefa_id,
                                        outro_motivo_negocio_perdido,
                                        vendedor_id,
                                        inicio_tarefa,
                                        fim_tarefa
                                    
                                    })
            .then((res) => {
                if (res.status === 201) alert("Tarefa Cadastrada!");
                else alert("Falha em criar a Tarefa.");
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Menu/>
                <div className="formulario">
                    <h2>Cadastro de Tarefas</h2>
                    <form onSubmit={createTarefa}>
                        <label htmlFor="tarefa_nome">Nome da Tarefa:</label>
                        <br />
                        <input
                            type="text"
                            id="tarefa_nome"
                            name="tarefa_nome"
                            required
                            onChange={(e) => setTarefaNome(e.target.value)}
                            value={tarefa_nome}
                        />
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

                        <div className="form-group">
                            <label htmlFor="pesquisa_id">Número da Pesquisa:</label>
                            <input
                                type="number"
                                id="pesquisa_id"
                                name="pesquisa_id"
                                required
                                onChange={handleInputChange}
                                value={values.pesquisa_id}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="pedido_id">Número do Pedido:</label>
                            <input
                                type="number"
                                id="pedido_id"
                                name="pedido_id"
                                required
                                onChange={handleInputChange}
                                value={values.pedido_id}
                            />
                        </div>

                        <div>
                            <label htmlFor="tipo_tarefa">Tipo da Tarefa:</label>
                            <select 
                                id="tipo_tarefa" 
                                name="tipo_tarefa"
                                onChange={(e) => setTipoTarefaId(e.target.value)}
                                value={tipo_tarefa_id}
                            >
                                {tipo_tarefas.map(tipo_tarefa => (
                                    <option key={tipo_tarefa.tipo_tarefa_id} value={tipo_tarefa.tipo_tarefa_id}>{tipo_tarefa.tipo_tarefa_nome}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="status_tarefa">Status da Tarefa:</label>
                            <select 
                                id="status_tarefa" 
                                name="status_tarefa"
                                onChange={(e) => setStatusTarefaId(e.target.value)}
                                value={status_tarefa_id}
                            >
                                {status_tarefas.map(status_tarefa => (
                                    <option key={status_tarefa.status_tarefa_id} value={status_tarefa.status_tarefa_id}>{status_tarefa.status_tarefa_nome}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="outro_motivo_negocio_perdido">Outro Motivo de Perda do Negócio:</label>
                            <input
                                type="text"
                                id="outro_motivo_negocio_perdido"
                                name="outro_motivo_negocio_perdido"
                                required
                                onChange={(e) => setMotivoNegocioPerdido(e.target.value)}
                                value={outro_motivo_negocio_perdido}
                            />
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

                        <div className="form-group">
                            <label htmlFor="inicio_tarefa">Início da Tarefa:</label>
                            <input
                                type="date"
                                id="inicio_tarefa"
                                name="inicio_tarefa"
                                required
                                onChange={(e) => setInicioTarefa(e.target.value)}
                                value={inicio_tarefa}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="fim_tarefa">Fim da Tarefa:</label>
                            <input
                                type="date"
                                id="fim_tarefa"
                                name="fim_tarefa"
                                required
                                onChange={(e) => setFimTarefa(e.target.value)}
                                value={fim_tarefa}
                            />
                        </div>

                    </form>
                </div>
                <input type="submit" value="Submit"></input>
            
        </div>
    );
}

export default CadastroTarefas;