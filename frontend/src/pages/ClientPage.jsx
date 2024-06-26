import { useState, useEffect } from "react";
import api from "../api";
import Client from "../components/Client";
import "../styles/Home.css"

function ClientePage() {
    const [clients, setClients] = useState([]);
    const [nome, setNome] = useState([]);
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

    useEffect(() => {
        getClients();
    }, []);

    const getClients = () => {
        api
            .get("/api/cliente/")
            .then((res) => res.data)
            .then((data) => {
                setClients(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/cliente/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Client deleted!");
                else alert("Failed to delete Client.");
                getClients();
            })
            .catch((error) => alert(error));
    };

    const createClient = (e) => {
        e.preventDefault();
        api
            .post("/api/cliente/", { nome, 
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
                if (res.status === 201) alert("Cliente Cadastrado!");
                else alert("Falha em criar o Cliente.");
                getClients();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <div>
                <h2>Notes</h2>
                {clients.map((client) => (
                    <Client client={client} onDelete={deleteNote} key={client.id} />
                ))}
            </div>
            <h2>Cadastro de Clientes</h2>
            <form onSubmit={createClient}>
                <label htmlFor="nome">Cliente:</label>
                <br />
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
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
        </div>
    );
}

export default ClientePage;