import { useState, useEffect } from "react";
import api from "../../api";
import Menu from "../../components/Menu";
import Cliente from "../../components/GestaoCadastros/Cliente";
import "../../styles/Home.css";

function GestaoCliente() {
    const [clientes, setClientes] = useState([]);
    const [areasVenda, setAreasVenda] = useState([]);
    const [classificacoesCliente, setClassificacoesCliente] = useState([]);

    useEffect(() => {
        // Carregar áreas de venda e classificações ao montar o componente
        const fetchData = async () => {
            try {
                const [areasRes, classificacoesRes] = await Promise.all([
                    api.get("/api/cadastro/areavenda/"),
                    api.get("/api/cadastro/classificacaocliente/")
                ]);

                setAreasVenda(areasRes.data);
                setClassificacoesCliente(classificacoesRes.data);

                // Após carregar as áreas e classificações, carregar os clientes
                getClientes(areasRes.data, classificacoesRes.data);
            } catch (err) {
                console.error('Erro ao buscar dados iniciais:', err);
            }
        };

        fetchData();
    }, []);

    const getClientes = async (areasVenda, classificacoesCliente) => {
        try {
            const res = await api.get("/api/cadastro/cliente/");
            console.log("Resposta da API de clientes:", res.data);

            const clientesComDados = res.data.map((cliente) => {
                const areaVendaEncontrada = areasVenda.find((area) => area.area_id === cliente.area_id);
                const classificacaoEncontrada = classificacoesCliente.find((classificacao) => classificacao.classificacao_id === cliente.classificacao_id);

                return {
                    ...cliente,
                    area_nome: areaVendaEncontrada ? areaVendaEncontrada.area_nome : "Área desconhecida",
                    classificacao_nome: classificacaoEncontrada ? classificacaoEncontrada.classificacao_nome : "Classificação desconhecida",
                };
            });

            setClientes(clientesComDados);
            console.log("Clientes carregados com dados adicionais:", clientesComDados);
        } catch (err) {
            console.error('Erro ao buscar Clientes:', err);
        }
    };

    const deleteCliente = (cliente_id) => {
        api.delete(`/api/gestao/cliente/delete/${cliente_id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Cliente excluído!");
                    // Recarregar os clientes após a exclusão
                    getClientes(areasVenda, classificacoesCliente);
                } else {
                    alert("Falha em deletar o Cliente");
                }
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <Menu />
            <div>
                <h2>Clientes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Área de Venda</th>
                            <th>Classificação</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.length > 0 ? (
                            clientes.map((cliente) => (
                                <Cliente
                                    key={cliente.cliente_id}
                                    cliente={cliente}
                                    onDelete={deleteCliente}
                                    areasVenda={areasVenda}
                                    classificacoesCliente={classificacoesCliente}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">Nenhum cliente encontrado</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GestaoCliente;
