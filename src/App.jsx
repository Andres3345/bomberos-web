import React, { useState } from "react";
import "./App.css";
import Historia from "./componentes/Historia"
import Entrenamiento from "./componentes/Entrenamiento"
import Sucesos from "./componentes/Sucesos"
import Unite from "./componentes/Unite"
import Navegacion from "./componentes/Navegacion"
import logo from "/images/BVC-Logo.jpeg"
import ParqueAutomotor from "./componentes/ParqueAutomotor"

function App(){
    const[activeTab, setActiveTab] = useState("historia");

    return(
        
        <div className="App">
            
            <header>
                <img src={logo} alt="Logo BVC"/>
                <h1>Bomberos Voluntarios - Concepción </h1>
                <h2>🔥"El que salva una vida, salva al mundo"🔥</h2>
            </header>
            <Navegacion setActiveTab={setActiveTab}/>

            <main>
                {activeTab === "historia" && <Historia setActiveTab={setActiveTab}/>}
                {activeTab === "entrenamiento" && <Entrenamiento/>}
                {activeTab === "sucesos" && <Sucesos/>}
                {activeTab === "unite" && <Unite/>}
                {activeTab === "parque" && <ParqueAutomotor setActiveTab={setActiveTab}/>}

                <div className="botones-flotantes">
                    <a href="#" className="boton-red social-fb" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="boton-red social-ig" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="boton-red social-tel" aria-label="Telefono">
                        <i className="fas fa-phone-alt"></i>
                    </a>
                </div>
            </main>
        </div>
    );
}

export default App;