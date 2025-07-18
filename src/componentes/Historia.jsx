import React from "react";
import "./CardSection.css";

function Historia({setActiveTab}){
  return(
    <section>
      <h2 className="animate-title">🤫UN POCO DE NUESTRA HISTORIA🤫</h2>
      <div className="card">
        <img src="/images/PrimeraComision.jpeg" alt="Fundacion"/>
        <img src="/images/PrimeraComision2.jpeg" alt="Fundacion"/>
        <p>Un 31 de julio del 2002 un grupo de vecinos fundo la "ASOCIACION CIVIL CUERPO DE BOMBEROS VOLUNTARIOS CONCEPCION",
          presidida por el Sr. José Flores, su fundador. Durante 2 años se capacito al personal con la ayuda de los Bomberos Voluntarios de Aguilares,
           quienes aportaron instructores, para el 19 de junio de 2004 se pone al cuartel en actividad, con el Lic. Graneros Marcelo 
           como jefe del cuerpo activo, seguido del segundo jefe, el Sr. Fernando Martin. 
        </p>
      </div>
      <div className="card">
        <img src="/images/cuartel1.jpeg" alt="Fundacion"/>
        <img src="/images/cuartel2.jpeg" alt="Fundacion"/>
        <img src="/images/cuartel3.jpeg" alt="Fundacion"/>
        <p>Primeramente, nuestro cuartel estaba ubicado instalaciones prestadas por el Club Atletico Belgrano, por calle
          Marconi 363, donde seguimos equipandonos, capacitandonos y sumando personal. Luego, despues de constantes gestiones se consigue la 
          donacion del actual predio por parte de la Municipalidad de Concepcion, por calle Padilla. 
          Y adonde nos trasladamos el 3 de octubre del 2015 y donde nos encontramos actualmente.
        </p> 
      </div>
      <div className="card">
        <img src="/images/movil2.jpeg" alt="Fundacion"/>
        <img src="/images/movil4.jpeg" alt="Fundacion"/>
        <p>
          Actualmente nuestro parque automotor cuenta con 8 moviles, todos equipados para distintas tareas, tanto de 
          socorrismo como asi para combatir el fuego y demas tareas que sean necesarias, nuestros moviles estan plenamente equipados
          con las herramientas y equipos necesarios para facilitar el trabajo a nuestros bomberos y garantizar tanto su seguridad, 
          como asi la de las victimas (si las hubiera.)
        </p>
        <div style={{marginTop: "1rem"}}>
          <button className="ver-mas" onClick={() => setActiveTab("parque")}>
          CONOCE NUESTROS MOVILES
        </button>
        </div>
      </div>
    </section>
  );
}

export default Historia;