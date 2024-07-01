import React, { useState } from "react";
import "../styles/Client.css";

function Fornecedor({ fornecedor, onDelete, onUpdate }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisibleOpen, setIsModalVisibleOpen] = useState(false);
    const [editFornecedor, setEditFornecedor] = useState(fornecedor);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditFornecedor({ ...editFornecedor, [name]: value });
    };

    const handleUpdate = () => {
        onUpdate(editFornecedor);
        setIsModalOpen(false);
        setIsModalVisibleOpen(false);
    };

    return (
        <div className="gestao-cadastro-container">
            <table>
                <thead>
                    <tr>
                        <th style={{ width: '5%' }}>ID</th>
                        <th>Nome</th>
                        <th>Contato</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Observação</th>
                        <th style={{ width: '9%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ width: '5%' }} >{fornecedor.fornecedor_id}</td>
                        <td>{fornecedor.fornecedor_nome}</td>
                        <td>{fornecedor.contato}</td>
                        <td>{fornecedor.cidade}</td>
                        <td>{fornecedor.estado}</td>
                        <td>{fornecedor.observacao}</td>
                        <td style={{ width: '9%' }}> 
                            <button className="edit-button" onClick={() => setIsModalOpen(true)}>
                                Editar
                            </button>
                            <button className="delete-button" onClick={() => onDelete(fornecedor.fornecedor_id)}>
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
                        <form>
                            <label>ID</label>
                            <input type="text" name="fornecedor_id" value={editFornecedor.fornecedor_id} onChange={handleChange} readOnly />
                            
                            <label>Nome</label>
                            <input type="text" name="fornecedor_nome" value={editFornecedor.fornecedor_nome} onChange={handleChange} />
                            
                            <label>Contato</label>
                            <input type="text" name="contato" value={editFornecedor.contato} onChange={handleChange} />
                            
                            <label>Aniversário</label>
                            <input type="text" name="aniversario" value={editFornecedor.aniversario} onChange={handleChange} />
                            
                            <label>Telefone</label>
                            <input type="text" name="telefone" value={editFornecedor.telefone} onChange={handleChange} />
                            
                            <label>Email</label>
                            <input type="text" name="email" value={editFornecedor.email} onChange={handleChange} />
                            
                            <label>CNPJ</label>
                            <input type="text" name="cnpj" value={editFornecedor.cnpj} onChange={handleChange} />
                            
                            <label>Rua</label>
                            <input type="text" name="rua" value={editFornecedor.rua} onChange={handleChange} />
                            
                            <label>Número</label>
                            <input type="text" name="numero_rua" value={editFornecedor.numero_rua} onChange={handleChange} />
                            
                            <label>Complemento</label>
                            <input type="text" name="complemento_rua" value={editFornecedor.complemento_rua} onChange={handleChange} />
                            
                            <label>Ponto de Referência</label>
                            <input type="text" name="ponto_referencia" value={editFornecedor.ponto_referencia} onChange={handleChange} />
                            
                            <label>Bairro</label>
                            <input type="text" name="bairro" value={editFornecedor.bairro} onChange={handleChange} />
                            
                            <label>Cidade</label>
                            <input type="text" name="cidade" value={editFornecedor.cidade} onChange={handleChange} />
                            
                            <label>Estado</label>
                            <input type="text" name="estado" value={editFornecedor.estado} onChange={handleChange} />
                            
                            <label>Observação</label>
                            <input type="text" name="observacao" value={editFornecedor.observacao} onChange={handleChange} />

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
                        <form>
                            <div>
                                <label>ID:</label>
                                <span>{editFornecedor.fornecedor_id}</span>
                            </div>
                            <div>
                                <label>Nome:</label>
                                <span>{editFornecedor.fornecedor_nome}</span>
                            </div>
                            <div>
                                <label>Contato:</label>
                                <span>{editFornecedor.contato}</span>
                            </div>
                            <div>
                                <label>Aniversário:</label>
                                <span>{editFornecedor.aniversario}</span>
                            </div>
                            <div>
                                <label>Telefone:</label>
                                <span>{editFornecedor.telefone}</span>
                            </div>
                            <div>
                                <label>Email:</label>
                                <span>{editFornecedor.email}</span>
                            </div>
                            <div>
                                <label>CNPJ:</label>
                                <span>{editFornecedor.cnpj}</span>
                            </div>
                            <div>
                                <label>Rua:</label>
                                <span>{editFornecedor.rua}</span>
                            </div>
                            <div>
                                <label>Número:</label>
                                <span>{editFornecedor.numero_rua}</span>
                            </div>
                            <div>
                                <label>Complemento:</label>
                                <span>{editFornecedor.complemento_rua}</span>
                            </div>
                            <div>
                                <label>Ponto de Referência:</label>
                                <span>{editFornecedor.ponto_referencia}</span>
                            </div>
                            <div>
                                <label>Bairro:</label>
                                <span>{editFornecedor.bairro}</span>
                            </div>
                            <div>
                                <label>Cidade:</label>
                                <span>{editFornecedor.cidade}</span>
                            </div>
                            <div>
                                <label>Estado:</label>
                                <span>{editFornecedor.estado}</span>
                            </div>
                            <div>
                                <label>Observação:</label>
                                <span>{editFornecedor.observacao}</span>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Fornecedor;
