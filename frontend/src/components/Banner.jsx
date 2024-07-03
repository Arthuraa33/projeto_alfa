import React from 'react';
import { useNavigate } from 'react-router-dom';

function Banner(){

    const navigate = useNavigate();

    const handleSignup = () => {
      navigate('/register');
    };
  
    const handleLogin = () => {
      navigate('/login');
    };

    return <section id="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h1>Uma Plataforma de CRM simples de configurar e fácil de usar.</h1>
                    <h4>Gerencie seus clientes em um único lugar</h4>
                    <button type="button" className="btn btn-dark btn-lg btn-banner" onClick={handleSignup}>Criar uma conta</button>
                    <button type="button" className="btn btn-outline-light btn-lg btn-banner" onClick={handleLogin}>Fazer Login</button>
                </div>
            </div>
        </div>
    </section>;
  }

export default Banner;