import React, { useState } from "react";
import api from "../../api";
import "../../styles/GestaoCadastro.css";

function Cliente({ cliente, onDelete, areasVenda, classificacoesCliente }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
        api.put(`api/gestao/cliente/${updatedCliente.cliente_id}/`, updatedCliente)
            .then((res) => {
                if (res.status === 200) {
                    setUpdatedCliente(updatedCliente);
                    alert("Cliente atualizado com sucesso!");
                } else {
                    alert("Falha em atualizar o Cliente.");
                }
            })
            .catch((err) => {
                console.error("Erro ao atualizar cliente:", err);
                alert("Erro ao atualizar cliente.");
            });
    };

    return (
        <>
            <tr>
                <td>{updatedCliente.cliente_nome}</td>
                <td>{updatedCliente.cidade}</td>
                <td>{updatedCliente.estado}</td>
                <td>{updatedCliente.area_nome}</td>
                <td>{updatedCliente.classificacao_nome}</td>
                <td>
                    <button className="edit-button" onClick={() => setIsModalOpen(true)}>Editar</button>
                    <button className="delete-button" onClick={() => onDelete(cliente.cliente_id)}>Excluir</button>
                </td>
            </tr>

            {isModalOpen && (
                <div className="modal" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Editar Cliente</h2>
                        <form className="edit-form">
                            {Object.keys(editCliente).map((key, index) => (
                                (key !== "area_id" && key !== "area_nome" && key !== "classificacao_id") && (
                                    <div key={index} className="form-field">
                                        <label>{key}</label>
                                        <input
                                            type="text"
                                            name={key}
                                            value={editCliente[key]}
                                            onChange={handleChange}
                                        />
                                    </div>
                                )
                            ))}
                            <div className="form-field">
                                <label>Área de Venda</label>
                                <select
                                    name="area_id"
                                    value={editCliente.area_venda_id}
                                    onChange={handleChange}
                                >
                                    {areasVenda.map((area) => (
                                        <option key={area.area_id} value={area.area_id}>
                                            {area.area_nome}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-field">
                                <label>Classificação</label>
                                <select
                                    name="classificacao_id"
                                    value={editCliente.classificacao_id}
                                    onChange={handleChange}
                                >
                                    {classificacoesCliente.map((classificacao) => (
                                        <option key={classificacao.classificacao_id} value={classificacao.classificacao_id}>
                                            {classificacao.classificacao_nome}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button className="edit-button" onClick={handleUpdate}>Salvar</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cliente;
