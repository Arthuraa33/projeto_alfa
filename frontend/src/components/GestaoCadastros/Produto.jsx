import React, { useState } from "react";
import api from "../../api";
import "../../styles/GestaoCadastro.css";

function Produto({ produto, onDelete, marcas }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisibleOpen, setIsModalVisibleOpen] = useState(false);
    const [editProduto, setEditProduto] = useState(produto);
    const [updatedProduto, setUpdatedProduto] = useState(produto);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditProduto({ ...editProduto, [name]: value });
    };

    const handleUpdate = () => {
        onUpdate(editProduto);
    };

    const onUpdate = (updatedProduto) => {
        setIsModalOpen(false);
        api.put(`api/gestao/produto/${updatedProduto.produto_id}/`, updatedProduto).then((res) => {
            if (res.status === 200) {
                setUpdatedProduto(updatedProduto);
                alert("Produto atualizado com sucesso!");
            } else {
                alert("Falha em atualizar o Produto.");
            }
        });
        setIsModalVisibleOpen(false);
    };

    return (
        <>
            <tr>
                <td>{updatedProduto.produto_nome}</td>
                <td>{updatedProduto.marca_nome}</td>
                <td>{updatedProduto.peso_produto}</td>
                <td>{updatedProduto.embalagem_produto}</td>
                <td>
                    <button className="edit-button" onClick={() => setIsModalOpen(true)}>Editar</button>
                    <button className="delete-button" onClick={() => onDelete(produto.produto_id)}>Excluir</button>
                </td>
            </tr>

            {/* Modal para editar */}
            {isModalOpen && (
                <div className="modal" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Editar Produto</h2>
                        <form className="edit-form">
                            {Object.keys(editProduto).map((key, index) => (
                                (key !== "marca_id" && key !== "produto_id") && ( // Oculta marca_id e produto_id
                                    <div key={index} className="form-field">
                                        {key === "marca_nome" ? (
                                            <>
                                                <label>Marca</label>
                                                <select
                                                    name="marca_id" // Você usará o ID da marca no envio
                                                    value={editProduto.marca_id}
                                                    onChange={handleChange}
                                                >
                                                    {marcas.map((marca) => (
                                                        <option key={marca.marca_id} value={marca.marca_id}>
                                                            {marca.marca_nome}
                                                        </option>
                                                    ))}
                                                </select>
                                            </>
                                        ) : (
                                            <>
                                                <label>{key}</label>
                                                <input
                                                    type="text"
                                                    name={key}
                                                    value={editProduto[key]}
                                                    onChange={handleChange}
                                                />
                                            </>
                                        )}
                                    </div>
                                )
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
                        <h2>Visualizar Produto</h2>
                        <div className="produto-info">
                            {Object.keys(updatedProduto).map((key, index) => (
                                <div key={index} className="produto-info-field">
                                    <label>{key}:</label>
                                    <span>{updatedProduto[key]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Produto;
