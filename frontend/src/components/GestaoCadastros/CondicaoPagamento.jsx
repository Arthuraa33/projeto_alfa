import React, { useState } from "react";
import api from "../../api";
import "../../styles/GestaoCadastro.css";
 
function CondicaoPagamento({ condicao_pagamento, onDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisibleOpen, setIsModalVisibleOpen] = useState(false);
    const [editCondicaoPagamento, setEditCondicaoPagamento] = useState(condicao_pagamento);
    const [updatedCondicaoPagamento, setUpdatedCondicaoPagamento] = useState(condicao_pagamento);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditCondicaoPagamento({ ...editCondicaoPagamento, [name]: value });
    };

    const handleUpdate = () => {
        onUpdate(editCondicaoPagamento);
    };

    const onUpdate = (updatedCondicaoPagamento) => {
        setIsModalOpen(false);
        api.put(`api/gestao/condicaopagamento/${updatedCondicaoPagamento.condicao_pagamento_id}/`, updatedCondicaoPagamento).then((res) => {
            if (res.status === 200) {
                setUpdatedCondicaoPagamento(updatedCondicaoPagamento);
                alert("Condição de Pagamento atualizado com sucesso!");
            } else {
                alert("Falha em atualizar o Condição de Pagamento.");
            }
        });
        setIsModalVisibleOpen(false);
    };

    return (
        <>
            <tr>
                <td>{updatedCondicaoPagamento.condicao_pagamento_nome}</td>
                <td>
                    <button className="edit-button" onClick={() => setIsModalOpen(true)}>Editar</button>
                    <button className="delete-button" onClick={() => onDelete(condicao_pagamento.condicao_pagamento_id)}>Excluir</button>
                    {/* <button className="more-button" onClick={() => setIsModalVisibleOpen(true)}>Visualizar</button> */}
                </td>
            </tr>

            {/* Modal para editar */}
            {isModalOpen && (
                <div className="modal" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Editar Condição de Pagamento</h2>
                        <form className="edit-form">
                            {/* Renderize os campos de edição aqui */}
                            {Object.keys(editCondicaoPagamento).map((key, index) => (
                                <div key={index} className="form-field">
                                    <label>{key}</label>
                                    <input
                                        type="text"
                                        name={key}
                                        value={editCondicaoPagamento[key]}
                                        onChange={handleChange}
                                    />
                                </div>
                            ))}
                            <button className="edit-button" onClick={handleUpdate}>Salvar</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal para visualizar */}
            {isModalVisibleOpen && (
                <div className="modal" onClick={() => setIsModalVisibleOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setIsModalVisibleOpen(false)}>&times;</span>
                        <h2>Visualizar Condição de Pagamento</h2>
                        <div className="condicao_pagamento-info">
                            {Object.keys(updatedCondicaoPagamento).map((key, index) => (
                                <div key={index} className="condicao_pagamento-info-field">
                                    <label>{key}:</label>
                                    <span>{updatedCondicaoPagamento[key]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CondicaoPagamento;
