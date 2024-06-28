import { useState, useEffect } from "react";
import api from "../api";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/Home.css";
import "../styles/Formulario.css";

function CadastroCliente() {
    const [cliente_nome, setNome] = useState("");
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
    const [area_id, setAreaId] = useState("");
    const [area_nome, setAreaNome] = useState("");
    const [classificacao, setClassificacaoCliente] = useState([]);
    const [classificacao_id, setClassificacaoId] = useState("");
    const [classificacao_nome, setClassificacaoNome] = useState("");

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
                console.error("Erro ao buscar Área de Venda:", err);
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
                console.error("Erro ao buscar Classificação do Cliente:", err);
            });
    };

    const createClient = (e) => {
        e.preventDefault();
        const selectedArea = areas.find((area) => area.area_nome === area_nome);
        const area_id = selectedArea ? selectedArea.area_id : null;

        const selectedClassificacao = classificacao.find(
            (classificacao) => classificacao.classificacao_nome === classificacao_nome
        );
        const classificacao_id = selectedClassificacao
            ? selectedClassificacao.classificacao_id
            : null;

        // Converter a data para o formato ISO 8601
        const isoAniversario = new Date(aniversario).toISOString();

        api.post("/api/cadastro/cliente/", {
            cliente_nome,
            contato,
            aniversario: isoAniversario,
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
            observacao,
        })
            .then((res) => {
                if (res.status === 201) alert("Cliente Cadastrado!");
                else alert("Falha em criar o Cliente.");
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Menu />
            <div className="formulario">
                <h2>Cadastro de Clientes</h2>
                <form onSubmit={createClient}>
                    <div className="form-group">
                        <label htmlFor="cliente_nome">Cliente:</label>
                        <input
                            type="text"
                            id="cliente_nome"
                            name="cliente_nome"
                            required
                            placeholder="Digite o nome do cliente"
                            onChange={(e) => setNome(e.target.value)}
                            value={cliente_nome}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contato">Contato:</label>
                        <input
                            type="text"
                            id="contato"
                            name="contato"
                            required
                            placeholder="Digite o contato"
                            onChange={(e) => setContato(e.target.value)}
                            value={contato}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="aniversario">Data de nascimento:</label>
                        <input
                            type="date"
                            id="aniversario"
                            name="aniversario"
                            required
                            onChange={(e) => setAniversario(e.target.value)}
                            value={aniversario}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefone">Telefone:</label>
                        <input
                            type="text"
                            id="telefone"
                            name="telefone"
                            required
                            placeholder="Digite o telefone"
                            onChange={(e) => setTelefone(e.target.value)}
                            value={telefone}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-Mail:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            required
                            placeholder="Digite o email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cnpj">CNPJ:</label>
                        <input
                            type="text"
                            id="cnpj"
                            name="cnpj"
                            required
                            placeholder="Digite o CNPJ"
                            onChange={(e) => setCnpj(e.target.value)}
                            value={cnpj}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rua">Rua/Avenida:</label>
                        <input
                            type="text"
                            id="rua"
                            name="rua"
                            required
                            placeholder="Digite a Rua ou Avenida"
                            onChange={(e) => setRua(e.target.value)}
                            value={rua}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numero_rua">Número:</label>
                        <input
                            type="text"
                            id="numero_rua"
                            name="numero_rua"
                            required
                            placeholder="Número"
                            onChange={(e) => setNumero_rua(e.target.value)}
                            value={numero_rua}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="complemento_rua">Complemento:</label>
                        <input
                            type="text"
                            id="complemento_rua"
                            name="complemento_rua"
                            required
                            placeholder="Digite o complemento"
                            onChange={(e) => setComplemento_rua(e.target.value)}
                            value={complemento_rua}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ponto_referencia">Ponto Referência:</label>
                        <input
                            type="text"
                            id="ponto_referencia"
                            name="ponto_referencia"
                            required
                            placeholder="Digite o ponto de referência"
                            onChange={(e) => setPonto_referencia(e.target.value)}
                            value={ponto_referencia}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bairro">Bairro:</label>
                        <input
                            type="text"
                            id="bairro"
                            name="bairro"
                            required
                            placeholder="Digite o bairro"
                            onChange={(e) => setBairro(e.target.value)}
                            value={bairro}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cidade">Cidade:</label>
                        <input
                            type="text"
                            id="cidade"
                            name="cidade"
                            required
                            placeholder="Digite a Cidade"
                            onChange={(e) => setCidade(e.target.value)}
                            value={cidade}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="estado">Estado:</label>
                        <input
                            type="text"
                            id="estado"
                            name="estado"
                            required
                            placeholder="Digite o Estado"
                            onChange={(e) => setEstado(e.target.value)}
                            value={estado}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="area">Área de Venda:</label>
                        <select
                            id="area"
                            name="area"
                            onChange={(e) => setAreaId(e.target.value)}
                            value={area_id}
                        >
                            {areas.map((area) => (
                                <option key={area.area_id} value={area.area_id}>
                                    {area.area_nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="classificacao">Classificação Cliente:</label>
                        <select
                            id="classificacao"
                            name="classificacao"
                            onChange={(e) => setClassificacaoId(e.target.value)}
                            value={classificacao_id}
                        >
                            {classificacao.map((classificacao) => (
                                <option
                                    key={classificacao.classificacao_id}
                                    value={classificacao.classificacao_id}
                                >
                                    {classificacao.classificacao_nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="observacao">Observação:</label>
                        <input
                            type="text"
                            id="observacao"
                            name="observacao"
                            required
                            placeholder="Digite a observação"
                            onChange={(e) => setObservacao(e.target.value)}
                            value={observacao}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CadastroCliente;
