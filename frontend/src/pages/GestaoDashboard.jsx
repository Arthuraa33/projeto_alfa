import { useState, useEffect } from "react";
import api from "../api";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import DashboardTeste from "../components/DashboardTeste";
import "../styles/Home.css"

function GestaoDashboard() {

    return (
        <div>
            <Menu/>
            <div>
                <DashboardTeste/>
            </div>
            <Footer/>
        </div>
    );
}

export default GestaoDashboard;
