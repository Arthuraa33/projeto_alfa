import React from "react";
import "../styles/Fornecedor.css"

function Cliente({ fornecedor, onDelete}) {
    return (
        <div className="fornecedor-container">
            <p className="fornecedor-id">{fornecedor.fornecedor_id}</p>
            <p className="fornecedor-nome">{fornecedor.nome}</p>
            <p className="fornecedor-contato">{fornecedor.contato}</p>
            <p className="fornecedor-aniversario">{fornecedor.aniversario}</p>
            <p className="fornecedor-telefone">{fornecedor.telefone}</p>
            <p className="fornecedor-email">{fornecedor.email}</p>
            <p className="fornecedor-cnpj">{fornecedor.cnpj}</p>
            <p className="fornecedor-rua">{fornecedor.rua}</p>
            <p className="fornecedor-numero_rua">{fornecedor.numero_rua}</p>
            <p className="fornecedor-complemento_rua">{fornecedor.complemento_rua}</p>
            <p className="fornecedor-ponto_referencia">{fornecedor.ponto_referencia}</p>
            <p className="fornecedor-bairro">{fornecedor.bairro}</p>
            <p className="fornecedor-cidade">{fornecedor.cidade}</p>
            <p className="fornecedor-estado">{fornecedor.estado}</p>
            <p className="fornecedor-observacao">{fornecedor.observacao}</p>

            <button className="delete-button" onClick={() => onDelete(fornecedor.fornecedor_id)}>
                Delete
            </button>
        </div>
    );
}

export default Cliente