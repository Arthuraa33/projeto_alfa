import React, { useState } from "react";
import "../styles/Client.css";

function Cliente({ cliente, onDelete, onUpdate }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisibleOpen, setIsModalVisibleOpen] = useState(false);
    const [editCliente, setEditCliente] = useState(cliente);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditCliente({ ...editCliente, [name]: value });
    };

    const handleUpdate = () => {
        onUpdate(editCliente);
        setIsModalOpen(false);
        setIsModalVisibleOpen(false);
    };

    return (
        <div className="client-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Contato</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Observação</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{cliente.cliente_id}</td>
                        <td>{cliente.cliente_nome}</td>
                        <td>{cliente.contato}</td>
                        <td>{cliente.cidade}</td>
                        <td>{cliente.estado}</td>
                        <td>{cliente.observacao}</td>
                        <td> 
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
                        <form>
                            <label>ID</label>
                            <input type="text" name="cliente_id" value={editCliente.cliente_id} onChange={handleChange} readOnly />
                            
                            <label>Nome</label>
                            <input type="text" name="cliente_nome" value={editCliente.cliente_nome} onChange={handleChange} />
                            
                            <label>Contato</label>
                            <input type="text" name="contato" value={editCliente.contato} onChange={handleChange} />
                            
                            <label>Aniversário</label>
                            <input type="text" name="aniversario" value={editCliente.aniversario} onChange={handleChange} />
                            
                            <label>Telefone</label>
                            <input type="text" name="telefone" value={editCliente.telefone} onChange={handleChange} />
                            
                            <label>Email</label>
                            <input type="text" name="email" value={editCliente.email} onChange={handleChange} />
                            
                            <label>CNPJ</label>
                            <input type="text" name="cnpj" value={editCliente.cnpj} onChange={handleChange} />
                            
                            <label>Rua</label>
                            <input type="text" name="rua" value={editCliente.rua} onChange={handleChange} />
                            
                            <label>Número</label>
                            <input type="text" name="numero_rua" value={editCliente.numero_rua} onChange={handleChange} />
                            
                            <label>Complemento</label>
                            <input type="text" name="complemento_rua" value={editCliente.complemento_rua} onChange={handleChange} />
                            
                            <label>Ponto de Referência</label>
                            <input type="text" name="ponto_referencia" value={editCliente.ponto_referencia} onChange={handleChange} />
                            
                            <label>Bairro</label>
                            <input type="text" name="bairro" value={editCliente.bairro} onChange={handleChange} />
                            
                            <label>Cidade</label>
                            <input type="text" name="cidade" value={editCliente.cidade} onChange={handleChange} />
                            
                            <label>Estado</label>
                            <input type="text" name="estado" value={editCliente.estado} onChange={handleChange} />
                            
                            <label>Observação</label>
                            <input type="text" name="observacao" value={editCliente.observacao} onChange={handleChange} />

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
                        <form>
                            <div>
                                <label>ID:</label>
                                <span>{editCliente.cliente_id}</span>
                            </div>
                            <div>
                                <label>Nome:</label>
                                <span>{editCliente.cliente_nome}</span>
                            </div>
                            <div>
                                <label>Contato:</label>
                                <span>{editCliente.contato}</span>
                            </div>
                            <div>
                                <label>Aniversário:</label>
                                <span>{editCliente.aniversario}</span>
                            </div>
                            <div>
                                <label>Telefone:</label>
                                <span>{editCliente.telefone}</span>
                            </div>
                            <div>
                                <label>Email:</label>
                                <span>{editCliente.email}</span>
                            </div>
                            <div>
                                <label>CNPJ:</label>
                                <span>{editCliente.cnpj}</span>
                            </div>
                            <div>
                                <label>Rua:</label>
                                <span>{editCliente.rua}</span>
                            </div>
                            <div>
                                <label>Número:</label>
                                <span>{editCliente.numero_rua}</span>
                            </div>
                            <div>
                                <label>Complemento:</label>
                                <span>{editCliente.complemento_rua}</span>
                            </div>
                            <div>
                                <label>Ponto de Referência:</label>
                                <span>{editCliente.ponto_referencia}</span>
                            </div>
                            <div>
                                <label>Bairro:</label>
                                <span>{editCliente.bairro}</span>
                            </div>
                            <div>
                                <label>Cidade:</label>
                                <span>{editCliente.cidade}</span>
                            </div>
                            <div>
                                <label>Estado:</label>
                                <span>{editCliente.estado}</span>
                            </div>
                            <div>
                                <label>Observação:</label>
                                <span>{editCliente.observacao}</span>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cliente;
