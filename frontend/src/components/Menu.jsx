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
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cadastro/pedido">Pedido</Link>
            </li>
            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Gestão
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/gestao/cliente">Cliente</Link></li>
                                
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
                                <li><Link className="dropdown-item" to="/cadastro/tabelaprecos">Tabela de Preços</Link></li>
                                <li><Link className="dropdown-item" to="/cadastro/areavenda">Area de Venda</Link></li>
                                <li><Link className="dropdown-item" to="/cadastro/classificacaocliente">Classificação do Cliente</Link></li>
                                <li><Link className="dropdown-item" to="/cadastro/pesquisa">Pesquisa</Link></li>
                                
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