import React, { useState } from "react";
import api from "../../api";
import "../../styles/GestaoCadastro.css";

function Vendedor({ vendedor, onDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisibleOpen, setIsModalVisibleOpen] = useState(false);
    const [editVendedor, setEditVendedor] = useState(vendedor);
    const [updatedVendedor, setUpdatedVendedor] = useState(vendedor);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditVendedor({ ...editVendedor, [name]: value });
    };

    const handleUpdate = () => {
        onUpdate(editVendedor);
    };

    const onUpdate = (updatedVendedor) => {
        setIsModalOpen(false);
        api.put(`api/gestao/vendedor/${updatedVendedor.vendedor_id}/`, updatedVendedor).then((res) => {
            if (res.status === 200) {
                setUpdatedVendedor(updatedVendedor); // Atualiza o estado local com os novos dados
                alert("Vendedor atualizado com sucesso!");
            } else {
                alert("Falha em atualizar o Vendedor.");
            }
        });
        setIsModalVisibleOpen(false);
    }

    return (
        <>
            <tr>
                <td>{updatedVendedor.vendedor_nome}</td>
                <td>{updatedVendedor.area_vendedor}</td>
                <td>{updatedVendedor.comissao_padrao_percentual}</td>
                <td>
                    <button className="edit-button" onClick={() => setIsModalOpen(true)}>Editar</button>
                    <button className="delete-button" onClick={() => onDelete(vendedor.vendedor_id)}>Excluir</button>
                    {/* <button className="more-button" onClick={() => setIsModalVisibleOpen(true)}>Visualizar</button> */}
                </td>
            </tr>

            {isModalOpen && (
                <div className="modal" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Editar Vendedor</h2>
                        <form className="edit-form">
                            {/* Renderize os campos de edição aqui */}
                            {Object.keys(editVendedor).map((key, index) => (
                                <div key={index} className="form-field">
                                    <label>{key}</label>
                                    <input
                                        type="text"
                                        name={key}
                                        value={editVendedor[key]}
                                        onChange={handleChange}
                                    />
                                </div>
                            ))}
                            <button className="edit-button" onClick={handleUpdate}>Salvar</button>
                        </form>
                    </div>
                </div>
            )}

            {isModalVisibleOpen && (
                <div className="modal" onClick={() => setIsModalVisibleOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setIsModalVisibleOpen(false)}>&times;</span>
                        <h2>Visualizar Vendedor</h2>
                        <div className="vendedor-info">
                            {Object.keys(updatedVendedor).map((key, index) => (
                                <div key={index} className="vendedor-info-field">
                                    <label>{key}:</label>
                                    <span>{updatedVendedor[key]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Vendedor;
