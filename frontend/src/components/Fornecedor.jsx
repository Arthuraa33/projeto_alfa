import React, { useState } from "react";
import api from "../api";
import "../styles/Client.css";

function Fornecedor({ fornecedor, onDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisibleOpen, setIsModalVisibleOpen] = useState(false);
    const [editFornecedor, setEditFornecedor] = useState(fornecedor);
    const [updatedFornecedor, setUpdatedFornecedor] = useState(fornecedor);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditFornecedor({ ...editFornecedor, [name]: value });
    };

    const handleUpdate = () => {
        onUpdate(editFornecedor);
    };

    const onUpdate = (updatedFornecedor) => {
        setIsModalOpen(false);
        api.put(`api/gestao/fornecedor/${updatedFornecedor.fornecedor_id}/`, updatedFornecedor).then((res) => {
            if (res.status === 200) {
                setUpdatedFornecedor(updatedFornecedor); // Atualiza o estado local com os novos dados
                alert("Fornecedor atualizado com sucesso!");
            } else {
                alert("Falha em atualizar o Fornecedor.");
            }
        });
        setIsModalVisibleOpen(false);
    }

    const tableHeaders = [
        { label: "Nome" },
        { label: "Contato" },
        { label: "Cidade" },
        { label: "Estado" },
        { label: "Observação" },
        { label: "", width: "9%" }
    ];

    const tableData = [
        { label: "fornecedor_nome" },
        { label: "contato" },
        { label: "cidade" },
        { label: "estado" },
        { label: "observacao" }
    ];

    const fornecedorFields = [
        { label: "Fornecedor", value: updatedFornecedor.fornecedor_nome },
        { label: "Contato", value: updatedFornecedor.contato },
        { label: "Aniversário", value: updatedFornecedor.aniversario },
        { label: "Telefone", value: updatedFornecedor.telefone },
        { label: "Email", value: updatedFornecedor.email },
        { label: "CNPJ", value: updatedFornecedor.cnpj },
        { label: "Rua/Avenida", value: updatedFornecedor.rua },
        { label: "Número", value: updatedFornecedor.numero_rua },
        { label: "Complemento", value: updatedFornecedor.complemento_rua },
        { label: "Ponto de Referência", value: updatedFornecedor.ponto_referencia },
        { label: "Bairro", value: updatedFornecedor.bairro },
        { label: "Cidade", value: updatedFornecedor.cidade },
        { label: "Estado", value: updatedFornecedor.estado },
        { label: "Observação", value: updatedFornecedor.observacao }
    ];

    const editFields = [
        { label: "Fornecedor", name: "fornecedor_nome", value: editFornecedor.fornecedor_nome },
        { label: "Contato", name: "contato", value: editFornecedor.contato },
        { label: "Aniversário", name: "aniversario", value: editFornecedor.aniversario },
        { label: "Telefone", name: "telefone", value: editFornecedor.telefone },
        { label: "Email", name: "email", value: editFornecedor.email },
        { label: "CNPJ", name: "cnpj", value: editFornecedor.cnpj },
        { label: "Rua/Avenida", name: "rua", value: editFornecedor.rua },
        { label: "Número", name: "numero_rua", value: editFornecedor.numero_rua },
        { label: "Complemento", name: "complemento_rua", value: editFornecedor.complemento_rua },
        { label: "Ponto de Referência", name: "ponto_referencia", value: editFornecedor.ponto_referencia },
        { label: "Bairro", name: "bairro", value: editFornecedor.bairro },
        { label: "Cidade", name: "cidade", value: editFornecedor.cidade },
        { label: "Estado", name: "estado", value: editFornecedor.estado },
        { label: "Observação", name: "observacao", value: editFornecedor.observacao }
    ];

    return (
        <div className="gestao-cadastro-container">
            <table>
                <thead>
                    <tr>
                        {tableHeaders.map((header, index) => (
                            <th key={index} style={{ width: header.width || "auto" }}>
                                {header.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {tableData.map((data, index) => (
                            <td key={index} style={{ width: data.width || "auto" }}>
                                {updatedFornecedor[data.label]}
                            </td>
                        ))}
                        <td style={{ width: "9%" }}>
                            <button className="edit-button" onClick={() => setIsModalOpen(true)}>
                                Editar
                            </button>
                            <button className="delete-button" onClick={() => onDelete(updatedFornecedor.fornecedor_id)}>
                                Excluir
                            </button>
                            <button className="more-button" onClick={() => setIsModalVisibleOpen(true)}>
                                Visualizar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {isModalOpen && (
                <div className="modal" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Editar Fornecedor</h2>
                        <form className="edit-modal">
                            {editFields.map((field, index) => (
                                <div key={index}>
                                    <label>{field.label}</label>
                                    <input
                                        type="text"
                                        name={field.name}
                                        value={field.value}
                                        onChange={handleChange}
                                        readOnly={field.readOnly}
                                    />
                                </div>
                            ))}
                            <button type="button" onClick={handleUpdate}>
                                Salvar
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {isModalVisibleOpen && (
                <div className="modal" onClick={() => setIsModalVisibleOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setIsModalVisibleOpen(false)}>&times;</span>
                        <h2>Visualizar Fornecedor</h2>
                        <form className="fornecedor-info">
                            {fornecedorFields.map((field, index) => (
                                <div key={index} className="fornecedor-info-field">
                                    <label>{field.label}</label>
                                    <span>{field.value}</span>
                                </div>
                            ))}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Fornecedor;
