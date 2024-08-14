import React from "react";
import "../styles/Transporte.css"

function Transporte({ transporte, onDelete}) {
    return (
        <div className="transporte-container">
            <p className="transporte-id">{transporte.transporte_id}</p>
            <p className="transporte-nome">{transporte.transporte}</p>
            <p className="transporte-marca">{transporte.capacidade_kg}</p>
            <p className="transporte-peso_transporte">{transporte.capacidade_un}</p>
 
            <button className="delete-button" onClick={() => onDelete(transporte.transporte_id)}>
                Delete
            </button>
        </div>
    );
}

export default Transporte