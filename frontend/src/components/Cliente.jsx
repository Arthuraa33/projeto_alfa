import React, { useState } from "react";
import api from "../api";
import "../styles/GestaoCadastro.css";

function Cliente({ cliente, onDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisibleOpen, setIsModalVisibleOpen] = useState(false);
    const [editCliente, setEditCliente] = useState(cliente);
    const [updatedCliente, setUpdatedCliente] = useState(cliente);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditCliente({ ...editCliente, [name]: value });
    };

    const handleUpdate = () => {
        onUpdate(editCliente);
    };

    const onUpdate = (updatedCliente) => {
        setIsModalOpen(false);
        api.put(`api/gestao/cliente/${updatedCliente.cliente_id}/`, updatedCliente).then((res) => {
            if (res.status === 200) {
                setUpdatedCliente(updatedCliente);
                alert("Cliente atualizado com sucesso!");
            } else {
                alert("Falha em atualizar o Cliente.");
            }
        });
        setIsModalVisibleOpen(false);
    };

    return (
        <>
            <tr>
                <td>{updatedCliente.cliente_nome}</td>
                <td>{updatedCliente.contato}</td>
                <td>{updatedCliente.cidade}</td>
                <td>{updatedCliente.estado}</td>
                <td>{updatedCliente.observacao}</td>
                <td>
                    <button className="edit-button" onClick={() => setIsModalOpen(true)}>Editar</button>
                    <button className="delete-button" onClick={() => onDelete(cliente.cliente_id)}>Excluir</button>
                    {/* <button className="more-button" onClick={() => setIsModalVisibleOpen(true)}>Visualizar</button> */}
                </td>
            </tr>

            {/* Modal para editar */}
            {isModalOpen && (
                <div className="modal" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Editar Cliente</h2>
                        <form className="edit-form">
                            {/* Renderize os campos de edição aqui */}
                            {Object.keys(editCliente).map((key, index) => (
                                <div key={index} className="form-field">
                                    <label>{key}</label>
                                    <input
                                        type="text"
                                        name={key}
                                        value={editCliente[key]}
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
                        <h2>Visualizar Cliente</h2>
                        <div className="cliente-info">
                            {Object.keys(updatedCliente).map((key, index) => (
                                <div key={index} className="cliente-info-field">
                                    <label>{key}:</label>
                                    <span>{updatedCliente[key]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cliente;
