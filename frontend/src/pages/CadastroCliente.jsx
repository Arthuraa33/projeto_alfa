import { useState, useEffect } from "react";
import api from "../api";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/Home.css"

function CadastroCliente() {
    const [cliente_nome, setNome] = useState([]);
    const [contato, setContato] = useState("");
    const [aniversario, setAniversario] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [rua, setRua] = useState("");
    const [numero_rua, setNumero_rua] = useState("");
    const [complemento_rua, setComplemento_rua] = useState("");
    const [ponto_referencia, setPonto_referencia] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [observacao, setObservacao] = useState("");
    const [areas, setAreas] = useState([]);
    const [area_id, setAreaId] = useState([]);
    const [area_nome, setAreaNome] = useState([]);

    const [classificacao, setClassificacaoCliente] = useState([]);
    const [classificacao_id, setClassificacaoId] = useState([]);
    const [classificacao_nome, setClassificacaoNome] = useState([]);

    useEffect(() => {
        getAreaVenda();
        getClassificacaoCliente();
    }, []);

    const getAreaVenda = () => {
        api
          .get("/api/cadastro/areavenda/")
          .then((res) => {
            setAreas(res.data);
            if (res.data.length > 0) {
                setAreaNome(res.data[0].area_nome); 
            }
          })
          .catch((err) => {
            console.error('Erro ao buscar Área de Venda:', err);
          });
      };
    
    const getClassificacaoCliente = () => {
        api
          .get("/api/cadastro/classificacaocliente/")
          .then((res) => {
            setClassificacaoCliente(res.data);
            if (res.data.length > 0) {
                setClassificacaoNome(res.data[0].classificacao_nome); 
            }
          })
          .catch((err) => {
            console.error('Erro ao buscar Classificação do Cliente:', err);
          });
      };

    const createClient = (e) => {
        e.preventDefault();
        const selectedArea = areas.find(area => area.area_nome === area_nome);
        const area_id = selectedArea ? selectedArea.area_id : null;

        const selectedClassificacao = classificacao.find(classificacao => classificacao.classificacao_nome === classificacao_nome);
        const classificacao_id = selectedClassificacao ? selectedClassificacao.classificacao_id : null;
        api
            .post("/api/cadastro/cliente/", { cliente_nome, 
                contato,
                aniversario, 
                telefone, 
                email,
                cnpj,
                rua,
                numero_rua,
                complemento_rua,
                ponto_referencia,
                bairro,
                cidade,
                estado,
                area_id,
                classificacao_id,
                observacao
              })
            .then((res) => {
                if (res.status === 201) alert("Cliente Cadastrado!");
                else alert("Falha em criar o Cliente.");

            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Menu/>
            <h2>Cadastro de Clientes</h2>
            <form onSubmit={createClient}>
                <label htmlFor="cliente_nome">Cliente:</label>
                <br />
                <input
                    type="text"
                    id="cliente_nome"
                    name="cliente_nome"
                    required
                    onChange={(e) => setNome(e.target.value)}
                    value={cliente_nome}
                />
                <label htmlFor="contato">Contato:</label>
                <br />
                <input
                    type="text"
                    id="contato"
                    name="contato"
                    required
                    onChange={(e) => setContato(e.target.value)}
                    value={contato}
                />
                <label htmlFor="aniversario">Aniversário:</label>
                <br />
                <input
                    type="text"
                    id="aniversario"
                    name="aniversario"
                    required
                    onChange={(e) => setAniversario(e.target.value)}
                    value={aniversario}
                />
                <label htmlFor="telefone">Telefone:</label>
                <br />
                <input
                    type="text"
                    id="telefone"
                    name="telefone"
                    required
                    onChange={(e) => setTelefone(e.target.value)}
                    value={telefone}
                />
                <label htmlFor="email">E-Mail:</label>
                <br />
                <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <label htmlFor="cnpj">CNPJ:</label>
                <br />
                <input
                    type="text"
                    id="cnpj"
                    name="cnpj"
                    required
                    onChange={(e) => setCnpj(e.target.value)}
                    value={cnpj}
                />
                <label htmlFor="rua">Rua/Avenida:</label>
                <br />
                <input
                    type="text"
                    id="rua"
                    name="rua"
                    required
                    onChange={(e) => setRua(e.target.value)}
                    value={rua}
                />
                <label htmlFor="numero_rua">Número:</label>
                <br />
                <input
                    type="text"
                    id="numero_rua"
                    name="numero_rua"
                    required
                    onChange={(e) => setNumero_rua(e.target.value)}
                    value={numero_rua}
                />
                <label htmlFor="complemento_rua">Complemento:</label>
                <br />
                <input
                    type="text"
                    id="complemento_rua"
                    name="complemento_rua"
                    required
                    onChange={(e) => setComplemento_rua(e.target.value)}
                    value={complemento_rua}
                />
                <label htmlFor="ponto_referencia">Ponto Referência:</label>
                <br />
                <input
                    type="text"
                    id="ponto_referencia"
                    name="ponto_referencia"
                    required
                    onChange={(e) => setPonto_referencia(e.target.value)}
                    value={ponto_referencia}
                />
                <label htmlFor="bairro">Bairro:</label>
                <br />
                <input
                    type="text"
                    id="bairro"
                    name="bairro"
                    required
                    onChange={(e) => setBairro(e.target.value)}
                    value={bairro}
                />
                <label htmlFor="cidade">Cidade:</label>
                <br />
                <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    required
                    onChange={(e) => setCidade(e.target.value)}
                    value={cidade}
                />
                <label htmlFor="estado">Estado:</label>
                <br />
                <input
                    type="text"
                    id="estado"
                    name="estado"
                    required
                    onChange={(e) => setEstado(e.target.value)}
                    value={estado}
                />

                <div>
                    <label htmlFor="area">Área de Venda:</label>
                    <select 
                        id="area" 
                        name="area"
                        onChange={(e) => setAreaId(e.target.value)}
                        value={area_id}
                    >
                        {areas.map(area => (
                            <option key={area.area_id} value={area.area_id}>{area.area_nome}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="classificacao">Área de Venda:</label>
                    <select 
                        id="classificacao" 
                        name="classificacao"
                        onChange={(e) => setClassificacaoId(e.target.value)}
                        value={classificacao_id}
                    >
                        {classificacao.map(classificacao => (
                            <option key={classificacao.classificacao_id} value={classificacao.classificacao_id}>{classificacao.classificacao_nome}</option>
                        ))}
                    </select>
                </div>

                <label htmlFor="observacao">Observação:</label>
                <br />
                <input
                    type="text"
                    id="observacao"
                    name="observacao"
                    required
                    onChange={(e) => setObservacao(e.target.value)}
                    value={observacao}
                />

                <input type="submit" value="Submit"></input>
            </form>
            <Footer/>
        </div>
    );
}

export default CadastroCliente;