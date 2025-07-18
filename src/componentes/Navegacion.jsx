import React from "react";
import "./Navegacion.css";

function Navegacion({setActiveTab}){
  return(
    <nav className="nav">
      <button onClick={() => setActiveTab("historia")}>Historia</button>
      <button onClick={() => setActiveTab("entrenamiento")}>Entrenamiento</button>
      <button onClick={() => setActiveTab("sucesos")}>Sucesos</button>
      <button onClick={() => setActiveTab("unite")}>Unite</button>
    </nav>
  )
}

export default Navegacion;