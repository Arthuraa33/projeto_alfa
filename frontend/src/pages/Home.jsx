import { useState, useEffect } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import "../styles/Home.css"

function Home() {
   
    return (
        <div>
            <Menu/>
            <Banner/>
            <Footer/>
        </div>
    );
}

export default Home;