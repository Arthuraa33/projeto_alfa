import React from "react";
import "../styles/Client.css"

function Vendedor({ vendedor, onDelete}) {
    return (
        <div className="client-container">
            <p className="vendedor-id">{vendedor.vendedor_id}</p>
            <p className="vendedor-nome">{vendedor.nome_vendedor}</p>
            <p className="vendedor-contato">{vendedor.area_vendedor}</p>
            <p className="vendedor-aniversario">{vendedor.comissao_padrao_percentual}</p>

            <button className="delete-button" onClick={() => onDelete(vendedor.vendedor_id)}>
                Delete
            </button>
        </div>
    );
}

export default Vendedor