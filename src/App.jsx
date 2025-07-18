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
                <h1>Bomberos Voluntarios Concepcion</h1>
                <h2>"El que salva una vida, salva al mundo"</h2>
            </header>
            <Navegacion setActiveTab={setActiveTab}/>

            <main>
                {activeTab === "historia" && <Historia setActiveTab={setActiveTab}/>}
                {activeTab === "entrenamiento" && <Entrenamiento/>}
                {activeTab === "sucesos" && <Sucesos/>}
                {activeTab === "unite" && <Unite/>}
                {activeTab === "parque" && <ParqueAutomotor setActiveTab={setActiveTab}/>}
            </main>
        </div>
    );
}

export default App;