import React, { useState } from "react";
import api from "../../api";
import "../../styles/GestaoCadastro.css";

function AreaVenda({ area, onDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisibleOpen, setIsModalVisibleOpen] = useState(false);
    const [editAreaVenda, setEditAreaVenda] = useState(area);
    const [updatedAreaVenda, setUpdatedAreaVenda] = useState(area);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditAreaVenda({ ...editAreaVenda, [name]: value });
    };

    const handleUpdate = () => {
        onUpdate(editAreaVenda);
    };

    const onUpdate = (updatedAreaVenda) => {
        setIsModalOpen(false);
        api.put(`api/gestao/areavenda/${updatedAreaVenda.area_id}/`, updatedAreaVenda).then((res) => {
            if (res.status === 200) {
                setUpdatedAreaVenda(updatedAreaVenda);
                alert("AreaVenda atualizado com sucesso!");
            } else {
                alert("Falha em atualizar o AreaVenda.");
            }
        });
        setIsModalVisibleOpen(false);
    };

    return (
        <>
            <tr>
                <td>{updatedAreaVenda.area_nome}</td>
                <td>
                    <button className="edit-button" onClick={() => setIsModalOpen(true)}>Editar</button>
                    <button className="delete-button" onClick={() => onDelete(area.area_id)}>Excluir</button>
                    {/* <button className="more-button" onClick={() => setIsModalVisibleOpen(true)}>Visualizar</button> */}
                </td>
            </tr>

            {/* Modal para editar */}
            {isModalOpen && (
                <div className="modal" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Editar AreaVenda</h2>
                        <form className="edit-form">
                            {/* Renderize os campos de edição aqui */}
                            {Object.keys(editAreaVenda).map((key, index) => (
                                <div key={index} className="form-field">
                                    <label>{key}</label>
                                    <input
                                        type="text"
                                        name={key}
                                        value={editAreaVenda[key]}
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
                        <h2>Visualizar AreaVenda</h2>
                        <div className="area-info">
                            {Object.keys(updatedAreaVenda).map((key, index) => (
                                <div key={index} className="area-info-field">
                                    <label>{key}:</label>
                                    <span>{updatedAreaVenda[key]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AreaVenda;
