import React from 'react';
import { Link } from 'react-router-dom';

function Menu(){
    return <nav className="navbar fixed-top navbar-expand-md navbar-dark">

    <div className="container">
            
        <a className="navbar-brand">
          <img src="Images/logo.png" alt="" height="28" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/app">Home</Link>
            </li>
            <li className="nav-item">
              
            </li>
            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Vendas
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/cadastro/pedido">Criar Pedido</Link></li>
                                <li><Link className="dropdown-item" to="/cadastro/pesquisa">Criar Pesquisa</Link></li>
                            </ul>
            </li>
            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Gestão de Vendas
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="nav-link" to="/gestao/dashboard">Dashboards</Link></li>
                                
                            </ul>
            </li>
            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tarefas
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/tarefas/kanban">Kanban</Link></li>
                                <li><Link className="dropdown-item" to="/tarefas/tarefa">Cadastro Tarefa</Link></li>
                                <li><Link className="dropdown-item" to="/tarefas/statustarefa">Cadastro Status</Link></li>
                                <li><Link className="dropdown-item" to="/tarefas/tipotarefa">Cadastro Tipo</Link></li>
                                
                            </ul>
            </li>
            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Gestão Cadastros
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/gestao/cliente">Cliente</Link></li>
                                <li><Link className="dropdown-item" to="/gestao/fornecedor">Fornecedor</Link></li>
                                <li><Link className="dropdown-item" to="/gestao/vendedor">Vendedor</Link></li>
                                <li><Link className="dropdown-item" to="/gestao/marca">Marca</Link></li>
                                <li><Link className="dropdown-item" to="/gestao/produto">Produto</Link></li>
                                <li><Link className="dropdown-item" to="/gestao/transporte">Transporte</Link></li>
                                <li><Link className="dropdown-item" to="/gestao/tipotransporte">Tipo de Transporte</Link></li>
                                <li><Link className="dropdown-item" to="/gestao/condicaopagamento">Condição de Pagamento</Link></li>
                                <li><Link className="dropdown-item" to="/gestao/areavenda">Área de Venda</Link></li>
                                <li><Link className="dropdown-item" to="/gestao/classificacaocliente">Classificação do Cliente</Link></li>
                                
                                
                            </ul>
            </li>
            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cadastros
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/cadastro/cliente">Cliente</Link></li>
                                <li><Link className="dropdown-item" to="/cadastro/fornecedor">Fornecedor</Link></li>
                                <li><Link className="dropdown-item" to="/cadastro/vendedor">Vendedor</Link></li>
                                <li><Link className="dropdown-item" to="/cadastro/marca">Marca</Link></li>
                                <li><Link className="dropdown-item" to="/cadastro/produto">Produto</Link></li>
                                <li><Link className="dropdown-item" to="/cadastro/transporte">Transporte</Link></li>
                                <li><Link className="dropdown-item" to="/cadastro/tipotransporte">Tipo Transporte</Link></li>
                                <li><Link className="dropdown-item" to="/cadastro/condicaopagamento">Condição de Pagamento</Link></li>
                                <li><Link className="dropdown-item" to="/cadastro/areavenda">Area de Venda</Link></li>
                                <li><Link className="dropdown-item" to="/cadastro/classificacaocliente">Classificação do Cliente</Link></li>
                                
                                
                            </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page">Contato</a>
            </li>
          </ul>
        </div>    
      
    </div>
  </nav>;
  }

export default Menu;