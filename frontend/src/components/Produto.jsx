import React from "react";
import "../styles/Produto.css"

function Produto({ produto, onDelete}) {
    return (
        <div className="produto-container">
            <p className="produto-id">{produto.produto_id}</p>
            <p className="produto-nome">{produto.produto_nome}</p>
            <p className="produto-marca">{produto.marca}</p>
            <p className="produto-peso_produto">{produto.peso_produto}</p>
            <p className="produto-embalagem_produto">{produto.embalagem_produto}</p>
 
            <button className="delete-button" onClick={() => onDelete(produto.produto_id)}>
                Delete
            </button>
        </div>
    );
}

export default Produto