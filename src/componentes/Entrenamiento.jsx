import React, {useEffect} from "react";
import "./Entrenamiento.css";

function Entrenamiento() {

    useEffect(()=> {
        const items = document.querySelectorAll(".gallery-item");
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry =>{
                if (entry.isIntersecting){
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },{threshold:0.2});
        items.forEach(item => observer.observe(item));
    },[]);

    return(
        <section className="entrenamiento-section">

            <h1 className="animate-title">Conocé nuestro Entrenamiento</h1>
            <h2 className="animate-title">Formando personal 100% capacitado para salvar vidas</h2>
            <div className="gallery">
                <div className="gallery-item">
                    <img src="/images/fuego2.jpeg" alt="simulacro-1"/>
                </div>
                <div className="gallery-item">
                    <img src="/images/fuego1.jpeg" alt="simulacro-1"/>
                </div>
                <div className="gallery-item">
                    <img src="/images/fuego3.jpeg" alt="simulacro-1"/>
                </div>
                <h3 className="Intro">
                A la hora de combatir situaciones que involucran "Fuego" es necesario que nuestro personal cuente con la mayor
                capacidad posible para desenvolverse efectivamente en un entorno hostil, para asi controlar las llamas 
                con la precaucion y los conocimientos necesarios para resguardar tanto su vida como la de los civiles 
                que puedan estar involucrados. Por eso, nuestros entrenamientos de "FUEGO" buscan ser lo más realistas posibles 
                para preparar de la mmejor manera a nuestro personal.
            </h3>
            </div>
            <br/>
            <div className="gallery">
                <div className="gallery-item">
                    <img src="/images/socorrismo1.jpeg" alt="simulacro-1"/>                
                </div>
                <div className="gallery-item">
                    <img src="/images/socorrismo2.jpeg" alt="simulacro-1"/>           
                </div>
                <div className="gallery-item">
                    <img src="/images/socorrismo3.jpeg" alt="simulacro-1"/>   
                </div>
                <h3 className="Intro">
                    Socorrismo es un area enfocada en el contacto directo con la victima, la finalidad de dicha area 
                    es lograr que nuestros bomberos estén capacitados para actuar ante cualquier situacion en la que se 
                    requieran primeros auxilios.
                    Buscamos el constante crecimiento y aprendizaje para desarrollar técnicas y maniobras orientadas
                    a salvaguardar la vida.
                </h3>
            </div>
            <br/>
            <div className="gallery">
                <div className="gallery-item">
                    <img src="/images/vehicular1.jpeg" alt="simulacro-1"/>                
                </div>
                <div className="gallery-item">
                    <img src="/images/vehicular2.jpeg" alt="simulacro-1"/>           
                </div>
                <div className="gallery-item">
                    <img src="/images/vehicular3.jpeg" alt="simulacro-1"/>   
                </div>
                <h3 className="Intro">
                    Lamentablemente, los siniestros viales son moneda corriente en nuestro trabajo, nuestro cuartel
                    cuenta con las herramientas necesarias para acudir al rescate de las victimas de dichos siniestros, 
                    y para eso nuestras practicas de RESCATE estan pensadas para que el personal pueda usar
                    dichas erramientas de forma eficiente para poner a salvo a las victimas y poder practicarle los 
                    primeros auxilios para que puedan ser derivadas al centro de salud más cercano.
                </h3>
            </div>
            

        </section>
    );
}

export default Entrenamiento;  