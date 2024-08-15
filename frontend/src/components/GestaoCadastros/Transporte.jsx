import React, { useState } from "react";
import api from "../../api";
import "../../styles/GestaoCadastro.css";

function Transporte({ transporte, onDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisibleOpen, setIsModalVisibleOpen] = useState(false);
    const [editTransporte, setEditTransporte] = useState(transporte);
    const [updatedTransporte, setUpdatedTransporte] = useState(transporte);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditTransporte({ ...editTransporte, [name]: value });
    };

    const handleUpdate = () => {
        onUpdate(editTransporte);
    };

    const onUpdate = (updatedTransporte) => {
        setIsModalOpen(false);
        api.put(`api/gestao/transporte/${updatedTransporte.transporte_id}/`, updatedTransporte).then((res) => {
            if (res.status === 200) {
                setUpdatedTransporte(updatedTransporte);
                alert("Transporte atualizado com sucesso!");
            } else {
                alert("Falha em atualizar o Transporte.");
            }
        });
        setIsModalVisibleOpen(false);
    };

    return (
        <>
            <tr>
                <td>{updatedTransporte.transporte_nome}</td>
                <td>{updatedTransporte.capacidade_kg}</td>
                <td>{updatedTransporte.capacidade_un}</td>
                <td>{updatedTransporte.preco_km}</td>

                <td>
                    <button className="edit-button" onClick={() => setIsModalOpen(true)}>Editar</button>
                    <button className="delete-button" onClick={() => onDelete(transporte.transporte_id)}>Excluir</button>
                    {/* <button className="more-button" onClick={() => setIsModalVisibleOpen(true)}>Visualizar</button> */}
                </td>
            </tr>

            {/* Modal para editar */}
            {isModalOpen && (
                <div className="modal" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Editar Transporte</h2>
                        <form className="edit-form">
                            {/* Renderize os campos de edição aqui */}
                            {Object.keys(editTransporte).map((key, index) => (
                                <div key={index} className="form-field">
                                    <label>{key}</label>
                                    <input
                                        type="text"
                                        name={key}
                                        value={editTransporte[key]}
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
                        <h2>Visualizar Transporte</h2>
                        <div className="transporte-info">
                            {Object.keys(updatedTransporte).map((key, index) => (
                                <div key={index} className="transporte-info-field">
                                    <label>{key}:</label>
                                    <span>{updatedTransporte[key]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Transporte;
