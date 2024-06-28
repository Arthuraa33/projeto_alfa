import { useState, useEffect } from "react";
import api from "../api";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/Home.css"

function CadastroFornecedor() {
    const [fornecedor_nome, setNome] = useState([]);
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

    const createFornecedor = (e) => {
        e.preventDefault();
        api
            .post("/api/cadastro/fornecedor/", { fornecedor_nome, 
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
                observacao
              })
            .then((res) => {
                if (res.status === 201) alert("Fornecedor Cadastrado!");
                else alert("Falha em criar o Fornecedor.");

            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Menu/>
            <div className="formulario">
                <h2>Cadastro de Fornecedores</h2>
                <form onSubmit={createFornecedor}>
                    <label htmlFor="fornecedor_nome">Fornecedor:</label>
                    <br />
                    <input
                        type="text"
                        id="fornecedor_nome"
                        name="fornecedor_nome"
                        required
                        placeholder="Digite o fornecedor"
                        onChange={(e) => setNome(e.target.value)}
                        value={fornecedor_nome}
                    />
                    <label htmlFor="contato">Contato:</label>
                    <br />
                    <input
                        type="text"
                        id="contato"
                        name="contato"
                        required
                        placeholder="Digite o contato"
                        onChange={(e) => setContato(e.target.value)}
                        value={contato}
                    />
                    <label htmlFor="aniversario">Aniversário:</label>
                    <input
                        type="date"
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
                        placeholder="Digite o telefone"
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
                        placeholder="Digite o email"
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
                        placeholder="Digite o CNPJ"
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
                        placeholder="Digite a Rua ou Avenida"
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
                        placeholder="Digite o número"
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
                        placeholder="Digite o complemento"
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
                        placeholder="Digite o ponto de referência"
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
                        placeholder="Digite o bairro"
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
                        placeholder="Digite o cidade"
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
                        placeholder="Digite o Estado"
                        onChange={(e) => setEstado(e.target.value)}
                        value={estado}
                    />
                    <label htmlFor="observacao">Observação:</label>
                    <br />
                    <input
                        type="text"
                        id="observacao"
                        name="observacao"
                        required
                        placeholder="Digite alguma observação"
                        onChange={(e) => setObservacao(e.target.value)}
                        value={observacao}
                    />
                    <input type="submit" value="Submit"></input>
                </form>

            </div>
        </div>
    );
}

export default CadastroFornecedor;