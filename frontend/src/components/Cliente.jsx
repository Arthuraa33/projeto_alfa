import React from "react";
import "../styles/Client.css"

function Cliente({ cliente, onDelete}) {
    return (
        <div className="client-container">
            <p className="cliente-id">{cliente.cliente_id}</p>
            <p className="cliente-nome">{cliente.nome}</p>
            <p className="cliente-contato">{cliente.contato}</p>
            <p className="cliente-aniversario">{cliente.aniversario}</p>
            <p className="cliente-telefone">{cliente.telefone}</p>
            <p className="cliente-email">{cliente.email}</p>
            <p className="cliente-cnpj">{cliente.cnpj}</p>
            <p className="cliente-rua">{cliente.rua}</p>
            <p className="cliente-numero_rua">{cliente.numero_rua}</p>
            <p className="cliente-complemento_rua">{cliente.complemento_rua}</p>
            <p className="cliente-ponto_referencia">{cliente.ponto_referencia}</p>
            <p className="cliente-bairro">{cliente.bairro}</p>
            <p className="cliente-cidade">{cliente.cidade}</p>
            <p className="cliente-estado">{cliente.estado}</p>
            <p className="cliente-observacao">{cliente.observacao}</p>

            <button className="delete-button" onClick={() => onDelete(cliente.cliente_id)}>
                Delete
            </button>
        </div>
    );
}

export default Cliente