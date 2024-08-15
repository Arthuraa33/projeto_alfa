import React, { useState } from "react";
import api from "../../api";
import "../../styles/GestaoCadastro.css";

function TipoTransporte({ tipo_transporte, onDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisibleOpen, setIsModalVisibleOpen] = useState(false);
    const [editTipoTransporte, setEditTipoTransporte] = useState(tipo_transporte);
    const [updatedTipoTransporte, setUpdatedTipoTransporte] = useState(tipo_transporte);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditTipoTransporte({ ...editTipoTransporte, [name]: value });
    };

    const handleUpdate = () => {
        onUpdate(editTipoTransporte);
    };

    const onUpdate = (updatedTipoTransporte) => {
        setIsModalOpen(false);
        api.put(`api/gestao/tipotransporte/${updatedTipoTransporte.tipo_transporte_id}/`, updatedTipoTransporte).then((res) => {
            if (res.status === 200) {
                setUpdatedTipoTransporte(updatedTipoTransporte);
                alert("TipoTransporte atualizado com sucesso!");
            } else {
                alert("Falha em atualizar o TipoTransporte.");
            }
        });
        setIsModalVisibleOpen(false);
    };

    const CheckboxField = ({ id, label, value, onChange }) => (
        <div className="form-group">
            <label>{label}</label>
            <div className="d-flex">
                <div className="form-check form-check-inline">
                    <input
                        type="radio"
                        id={`${id}_sim`}
                        name={id}
                        className="form-check-input"
                        onChange={() => onChange(true)}
                        checked={value === true}
                    />
                    <label className="form-check-label" htmlFor={`${id}_sim`}>Sim</label>
                </div>
                <div className="form-check form-check-inline ml-3">
                    <input
                        type="radio"
                        id={`${id}_nao`}
                        name={id}
                        className="form-check-input"
                        onChange={() => onChange(false)}
                        checked={value === false}
                    />
                    <label className="form-check-label" htmlFor={`${id}_nao`}>Não</label>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <tr>
                <td>{updatedTipoTransporte.tipo_transporte_nome}</td>
                <td>{updatedTipoTransporte.cif}</td>
                <td>{updatedTipoTransporte.fob}</td>
                <td>{updatedTipoTransporte.carregamento}</td>

                <td>
                    <button className="edit-button" onClick={() => setIsModalOpen(true)}>Editar</button>
                    <button className="delete-button" onClick={() => onDelete(tipo_transporte.tipo_transporte_id)}>Excluir</button>
                    {/* <button className="more-button" onClick={() => setIsModalVisibleOpen(true)}>Visualizar</button> */}
                </td>
            </tr>

            {/* Modal para editar */}
            {isModalOpen && (
                <div className="modal" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Editar Tipo Transporte</h2>
                        <form className="edit-form">
                            {/* Renderize os campos de edição aqui */}
                            {Object.keys(editTipoTransporte).map((key, index) => (
                                <div key={index} className="form-field">
                                    <label>{key}</label>
                                    <input
                                        type="text"
                                        name={key}
                                        value={editTipoTransporte[key]}
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
                        <h2>Visualizar TipoTransporte</h2>
                        <div className="tipo_transporte-info">
                            {Object.keys(updatedTipoTransporte).map((key, index) => (
                                <div key={index} className="tipo_transporte-info-field">
                                    <label>{key}:</label>
                                    <span>{updatedTipoTransporte[key]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default TipoTransporte;
