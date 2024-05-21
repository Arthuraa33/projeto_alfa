import React from 'react';
import caminhaoVolvo from '../styles/images/caminhao_volvo.jpg'

function BannerApp(){

    return <section id="banner">
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <h1>Uma plataforma de CRM simples de configurar e fácil de usar.</h1>
                    <h4>Gerencie seus clientes em um único lugar.</h4>
                </div>

                <div className="col-lg-6">
                  <img src={caminhaoVolvo} alt="Caminhão Volvo" />   
                </div>
       
            </div>
        </div>
    </section>;
  }

export default BannerApp;