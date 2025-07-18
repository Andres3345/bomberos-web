import React, { useState, useEffect } from "react";
import "./ParqueAutomotor.css";
import movil1 from"../images/movil1.jpeg"
import movil2 from "../images/movil2.jpeg"
import movil3 from "../images/movil3.jpeg"
import movil4 from "../images/movil4.jpeg"
import movil5 from"../images/movil5.jpeg"
import movil6 from "../images/movil6.jpeg"
import movil7 from "../images/movil7.jpeg"

function ParqueAutomotor ({setActiveTab})
{
    const imagenes = [movil1,movil2,movil3,movil4,movil5,movil6,movil7,];

    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    const abrirModal = (img) => {setImagenSeleccionada(img);};

    const cerrarModal = () => {setImagenSeleccionada(null);};

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape"){
                cerrarModal();
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return() => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    
    }, []);


    return(
        <section className="galeria">
            <h1>🚒🔥Parque Automotor🔥🚒</h1>
            
            <div className="grid">
                {imagenes.map((img, idx)=>(<div key={idx} className="imagen-card" onClick={() => abrirModal(img)}>
                    <img src={img} alt={"Vehiculo ${idx 1}"}/>
                </div>
                ))}
            </div>

            <div className="volver-wrapper">
                <button className="volver" onClick={()=> setActiveTab("historia")}>
                    Volver a Historia
                </button>

                {imagenSeleccionada && (
                    <div className="modal" onClick={cerrarModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <img src={imagenSeleccionada} alt="Imagen ampliada"/>
                            <button className="cerrar" onClick={cerrarModal}>X</button>

                        </div>

                    </div>
                )}

            </div>
           

            
        </section>
    );
}
export default ParqueAutomotor;