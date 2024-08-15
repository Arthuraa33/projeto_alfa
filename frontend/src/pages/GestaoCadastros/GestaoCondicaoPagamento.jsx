import { useState, useEffect } from "react";
import api from "../../api";
import Menu from "../../components/Menu";
import CondicaoPagamento from "../../components/GestaoCadastros/CondicaoPagamento";
import "../../styles/Home.css";

function GestaoCondicaoPagamento() {
    const [condicao_pagamentos, setCondicaoPagamentos] = useState([]);

    useEffect(() => {
        getCondicaoPagamentos();
    }, []);

    const getCondicaoPagamentos = () => {
        api
            .get("/api/cadastro/condicaopagamento/")
            .then((res) => res.data)
            .then((data) => {
                setCondicaoPagamentos(data);
            })
            .catch((err) => alert(err));
    };

    const deleteCondicaoPagamento = (condicao_pagamento_id) => {
        api
            .delete(`/api/gestao/condicaopagamento/delete/${condicao_pagamento_id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Condição de Pagamento excluído!");
                    getCondicaoPagamentos();
                } else {
                    alert("Falha em deletar o Condicão Pagamento");
                }
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <Menu />
            <div>
                <h2>CondiçãoPagamentos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Condição de Pagamento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {condicao_pagamentos.map((condicao_pagamento) => (
                            <CondicaoPagamento 
                                key={condicao_pagamento.condicao_pagamento_id} 
                                condicao_pagamento={condicao_pagamento} 
                                onDelete={deleteCondicaoPagamento} 
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GestaoCondicaoPagamento;
