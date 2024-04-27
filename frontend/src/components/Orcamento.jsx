import React, { useState } from "react";
import "../styles/Client.css";

function Orcamento({ orcamento, onDelete}) {
    const [orcamentos, setOrcamentos] = useState([]);

    useEffect(() => {
        getOrcamentos();
    }, []);

    const getOrcamentos = () => {
        api
            .get("/api/cadastro/orcamento/")
            .then((res) => res.data)
            .then((data) => {
                setOrcamentos(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteOrcamento = (cliente_id) => {
        api
            .delete(`/api/gestao/cliente/delete/${cliente_id}/`)
            .then((res) => {
                if (res.status === 204) alert("Cliente Excluido!");
                else alert("Falha em deletar o Cliente");
                getClientes();
            })
            .catch((error) => alert(error));
    };

    const editarOrcamento = (cliente_id) => {
        api
            .delete(`/api/gestao/cliente/delete/${cliente_id}/`)
            .then((res) => {
                if (res.status === 204) alert("Cliente Excluido!");
                else alert("Falha em deletar o Cliente");
                getClientes();
            })
            .catch((error) => alert(error));
    };

    return (
        <div className="orcamento-container">
            <p className="orcamento-id">{orcamento.orcamento_id}</p>
            <p className="cliente-id">{orcamento.cliente_id}</p>
            <p className="vendedor-id">{orcamento.vendedor_id}</p>

            <button className="edit-button" onClick={handleEdit}>
                Editar
            </button>
            <button className="details-button" onClick={toggleDetails}>
                {showDetails ? "Esconder Detalhes" : "Mostrar Detalhes"}
            </button>

            {showDetails && (
                <div className="details-container">
                    <p className="orcamento-id">ID do Orçamento: {orcamento.orcamento_id}</p>
                    <p className="cliente-id">ID do Cliente: {orcamento.cliente_id}</p>
                    <p className="vendedor-id">ID do Vendedor: {orcamento.vendedor_id}</p>
                    {/* Adicione mais informações aqui, se necessário */}
                </div>
            )}

            <button className="delete-button" onClick={() => onDelete(orcamento.orcamento_id)}>
                Excluir
            </button>
        </div>
    );
}

export default Orcamento;
