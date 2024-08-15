import React, { useState } from "react";
import api from "../../api";
import "../../styles/GestaoCadastro.css";

function ClassificacaoCliente({ classificacao_cliente, onDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisibleOpen, setIsModalVisibleOpen] = useState(false);
    const [editClassificacaoCliente, setEditClassificacaoCliente] = useState(classificacao_cliente);
    const [updatedClassificacaoCliente, setUpdatedClassificacaoCliente] = useState(classificacao_cliente);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditClassificacaoCliente({ ...editClassificacaoCliente, [name]: value });
    };

    const handleUpdate = () => {
        onUpdate(editClassificacaoCliente);
    };

    const onUpdate = (updatedClassificacaoCliente) => {
        setIsModalOpen(false);
        api.put(`api/gestao/classificacaocliente/${updatedClassificacaoCliente.classificacao_id}/`, updatedClassificacaoCliente).then((res) => {
            if (res.status === 200) {
                setUpdatedClassificacaoCliente(updatedClassificacaoCliente);
                alert("ClassificacaoCliente atualizado com sucesso!");
            } else {
                alert("Falha em atualizar o ClassificacaoCliente.");
            }
        });
        setIsModalVisibleOpen(false);
    };

    return (
        <>
            <tr>
                <td>{updatedClassificacaoCliente.classificacao_nome}</td>
                <td>
                    <button className="edit-button" onClick={() => setIsModalOpen(true)}>Editar</button>
                    <button className="delete-button" onClick={() => onDelete(classificacao_cliente.classificacao_cliente_id)}>Excluir</button>
                    {/* <button className="more-button" onClick={() => setIsModalVisibleOpen(true)}>Visualizar</button> */}
                </td>
            </tr>

            {/* Modal para editar */}
            {isModalOpen && (
                <div className="modal" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Editar ClassificacaoCliente</h2>
                        <form className="edit-form">
                            {/* Renderize os campos de edição aqui */}
                            {Object.keys(editClassificacaoCliente).map((key, index) => (
                                <div key={index} className="form-field">
                                    <label>{key}</label>
                                    <input
                                        type="text"
                                        name={key}
                                        value={editClassificacaoCliente[key]}
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
                        <h2>Visualizar ClassificacaoCliente</h2>
                        <div className="classificacao_cliente-info">
                            {Object.keys(updatedClassificacaoCliente).map((key, index) => (
                                <div key={index} className="classificacao_cliente-info-field">
                                    <label>{key}:</label>
                                    <span>{updatedClassificacaoCliente[key]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ClassificacaoCliente;
