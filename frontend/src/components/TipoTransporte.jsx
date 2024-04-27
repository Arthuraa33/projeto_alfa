import React from "react";
import "../styles/TipoTransporte.css"

function TipoTransporte({ tipotransporte, onDelete}) {
    return (
        <div className="tipotransporte-container">
            <p className="tipotransporte-id">{tipotransporte.tipotransporte_id}</p>
            <p className="tipotransporte-nome">{tipotransporte.tipotransporte}</p>
            <p className="tipotransporte-cif">{tipotransporte.cif}</p>
            <p className="tipotransporte-fob">{tipotransporte.fob}</p>
            <p className="tipotransporte-carregamento">{tipotransporte.carregamento}</p>
 
            <button className="delete-button" onClick={() => onDelete(tipotransporte.tipotransporte_id)}>
                Delete
            </button>
        </div>
    );
}

export default TipoTransporte