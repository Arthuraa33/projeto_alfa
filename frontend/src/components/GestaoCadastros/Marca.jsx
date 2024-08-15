import React, { useState } from "react";
import api from "../../api";
import "../../styles/GestaoCadastro.css";

function Marca({ marca, onDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisibleOpen, setIsModalVisibleOpen] = useState(false);
    const [editMarca, setEditMarca] = useState(marca);
    const [updatedMarca, setUpdatedMarca] = useState(marca);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditMarca({ ...editMarca, [name]: value });
    };

    const handleUpdate = () => {
        onUpdate(editMarca);
    };

    const onUpdate = (updatedMarca) => {
        setIsModalOpen(false);
        api.put(`api/gestao/marca/${updatedMarca.marca_id}/`, updatedMarca).then((res) => {
            if (res.status === 200) {
                setUpdatedMarca(updatedMarca);
                alert("Marca atualizado com sucesso!");
            } else {
                alert("Falha em atualizar o Marca.");
            }
        });
        setIsModalVisibleOpen(false);
    };

    return (
        <>
            <tr>
                <td>{updatedMarca.marca_nome}</td>
                <td>
                    <button className="edit-button" onClick={() => setIsModalOpen(true)}>Editar</button>
                    <button className="delete-button" onClick={() => onDelete(marca.marca_id)}>Excluir</button>
                    {/* <button className="more-button" onClick={() => setIsModalVisibleOpen(true)}>Visualizar</button> */}
                </td>
            </tr>

            {/* Modal para editar */}
            {isModalOpen && (
                <div className="modal" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Editar Marca</h2>
                        <form className="edit-form">
                            {/* Renderize os campos de edição aqui */}
                            {Object.keys(editMarca).map((key, index) => (
                                <div key={index} className="form-field">
                                    <label>{key}</label>
                                    <input
                                        type="text"
                                        name={key}
                                        value={editMarca[key]}
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
                        <h2>Visualizar Marca</h2>
                        <div className="marca-info">
                            {Object.keys(updatedMarca).map((key, index) => (
                                <div key={index} className="marca-info-field">
                                    <label>{key}:</label>
                                    <span>{updatedMarca[key]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Marca;
