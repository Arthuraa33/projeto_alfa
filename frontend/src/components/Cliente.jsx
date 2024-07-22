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
                setUpdatedCliente(updatedCliente); // Atualiza o estado local com os novos dados
                alert("Cliente atualizado com sucesso!");
            } else {
                alert("Falha em atualizar o Cliente.");
            }
        });
        setIsModalVisibleOpen(false);
    };

    const tableHeaders = [
        { label: "Nome" },
        { label: "Contato" },
        { label: "Cidade" },
        { label: "Estado" },
        { label: "Observação" },
        { label: "", width: "9%" }
    ];

    const tableData = [
        { label: "cliente_nome" },
        { label: "contato" },
        { label: "cidade" },
        { label: "estado" },
        { label: "observacao" }
    ];

    const clienteFields = [
        { label: "Nome", value: updatedCliente.cliente_nome },
        { label: "Contato", value: updatedCliente.contato },
        { label: "Aniversário", value: updatedCliente.aniversario },
        { label: "Telefone", value: updatedCliente.telefone },
        { label: "Email", value: updatedCliente.email },
        { label: "CNPJ", value: updatedCliente.cnpj },
        { label: "Rua", value: updatedCliente.rua },
        { label: "Número", value: updatedCliente.numero_rua },
        { label: "Complemento", value: updatedCliente.complemento_rua },
        { label: "Ponto de Referência", value: updatedCliente.ponto_referencia },
        { label: "Bairro", value: updatedCliente.bairro },
        { label: "Cidade", value: updatedCliente.cidade },
        { label: "Estado", value: updatedCliente.estado },
        { label: "Área de Venda", value: updatedCliente.area_id },
        { label: "Classificação do Cliente", value: updatedCliente.classificacao_id },
        { label: "Observação", value: updatedCliente.observacao },
    ];

    const editFields = [
        { label: "Nome", name: "cliente_nome", value: editCliente.cliente_nome },
        { label: "Contato", name: "contato", value: editCliente.contato },
        { label: "Aniversário", name: "aniversario", value: editCliente.aniversario },
        { label: "Telefone", name: "telefone", value: editCliente.telefone },
        { label: "Email", name: "email", value: editCliente.email },
        { label: "CNPJ", name: "cnpj", value: editCliente.cnpj },
        { label: "Rua", name: "rua", value: editCliente.rua },
        { label: "Número", name: "numero_rua", value: editCliente.numero_rua },
        { label: "Complemento", name: "complemento_rua", value: editCliente.complemento_rua },
        { label: "Ponto de Referência", name: "ponto_referencia", value: editCliente.ponto_referencia },
        { label: "Bairro", name: "bairro", value: editCliente.bairro },
        { label: "Cidade", name: "cidade", value: editCliente.cidade },
        { label: "Estado", name: "estado", value: editCliente.estado },
        { label: "Área de Venda", name: "area_id", value: editCliente.area_id },
        { label: "Classificação do Cliente", name: "classificacao_id", value: editCliente.classificacao_id },
        { label: "Observação", name: "observacao", value: editCliente.observacao },
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
                                {updatedCliente[data.label]}
                            </td>
                        ))}
                        <td style={{ width: '9%' }}>
                            <button className="edit-button" onClick={() => setIsModalOpen(true)}>
                                Editar
                            </button>
                            <button className="delete-button" onClick={() => onDelete(cliente.cliente_id)}>
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
                        <h2>Editar Cliente</h2>
                        <form className="edit-form">
                            {editFields.map((field, index) => (
                                <div key={index} className="form-field">
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
                        <h2>Visualizar Cliente</h2>
                        <form className="cliente-info">
                            {clienteFields.map((field, index) => (
                                <div key={index} className="cliente-info-field">
                                    <label>{field.label}:</label>
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

export default Cliente;
