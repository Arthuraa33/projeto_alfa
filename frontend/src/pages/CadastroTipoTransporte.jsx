import { useState } from "react";
import api from "../api";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/Home.css";

const InputField = ({ id, label, type, value, onChange }) => (
    <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input
            type={type}
            id={id}
            name={id}
            className="form-control"
            onChange={onChange}
            value={value}
        />
    </div>
);

const CheckboxField = ({ id, label, value, onChange }) => (
    <div className="form-group">
        <label>{label}</label>
        <div className="d-flex">
            <div className="form-check form-check-inline">
                <input
                    type="radio"
                    id={`${id}_sim`}
                    name={id}
                    className="form-check-input"
                    onChange={() => onChange(true)}
                    checked={value === true}
                />
                <label className="form-check-label" htmlFor={`${id}_sim`}>Sim</label>
            </div>
            <div className="form-check form-check-inline ml-3">
                <input
                    type="radio"
                    id={`${id}_nao`}
                    name={id}
                    className="form-check-input"
                    onChange={() => onChange(false)}
                    checked={value === false}
                />
                <label className="form-check-label" htmlFor={`${id}_nao`}>Não</label>
            </div>
        </div>
    </div>
);

const CadastroTipoTransporte = () => {
    const [tipo_transporte_nome, setTipoTransporte] = useState("");
    const [cif, setCif] = useState(false);
    const [fob, setFob] = useState(false);
    const [carregamento, setCarregamento] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post("/api/cadastro/tipotransporte/", {
            tipo_transporte_nome,
            cif,
            fob,
            carregamento
        })
            .then((res) => {
                if (res.status === 201) alert("Tipo de Transporte Cadastrado!");
                else alert("Falha em criar o Tipo de Transporte.");
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Menu />
            <div className="container mt-5">
                <h2>Cadastro de Tipo de Transporte</h2>
                <form onSubmit={handleSubmit}>
                    <InputField
                        id="tipo_transporte_nome"
                        label="Tipo de Transporte"
                        type="text"
                        value={tipo_transporte_nome}
                        onChange={(e) => setTipoTransporte(e.target.value)}
                    />
                    <CheckboxField
                        id="cif"
                        label="CIF"
                        value={cif}
                        onChange={setCif}
                    />
                    <CheckboxField
                        id="fob"
                        label="FOB"
                        value={fob}
                        onChange={setFob}
                    />
                    <CheckboxField
                        id="carregamento"
                        label="Carregamento"
                        value={carregamento}
                        onChange={setCarregamento}
                    />
                    <button type="submit" className="btn btn-primary mt-3">Criar</button>
                </form>
            </div>

        </div>
    );
};

export default CadastroTipoTransporte;
