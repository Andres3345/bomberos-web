import React, { useState, useEffect } from "react";
import "./Sucesos.css";

const sucesosData = [
  {
    año: "🔥28 / 07 / 2024 - Contención de principio de Incendio🔥",
    texto: "Principio de incendio en Barrio Alvear...",
    imagen: "/images/incendioBA.webp",
  },
  {
    año: "🔥16 / 03 / 2025 - Combate de incendio en una forrajería🔥",
    texto: "Bomberos Voluntarios de Concepción intervinieron...",
    imagen: "/images/incendioF.webp",
  },
  {
    año: "🔥04 / 04 / 2025 - Rescate a bebé por broncoaspiración🔥",
    texto: "Un hecho estremecedor ocurrió en la comisaría...",
    imagen: "/images/sucesob.jpg",
  },
];

function Sucesos() {
  const [indice, setIndice] = useState(0);
  const [animar, setAnimar] = useState(false);

  useEffect(() => {
    setAnimar(true);
    const timer = setTimeout(() => setAnimar(false), 400);
    return () => clearTimeout(timer);
  }, [indice]);

  const anterior = () => {
    setIndice((prev) => (prev === 0 ? sucesosData.length - 1 : prev - 1));
  };

  const siguiente = () => {
    setIndice((prev) => (prev === sucesosData.length - 1 ? 0 : prev + 1));
  };

  const { año, texto, imagen } = sucesosData[indice];

  return (
    <section className="sucesos-section">
      <h2>Nuestro Servicio a la Sociedad</h2>
      <div className="carrusel">
        <div className={`suceso ${animar ? "fade-in" : ""}`}>
          <img src={imagen} alt={`Suceso ${año}`} />
          <h3>{año}</h3>
          <p>{texto}</p>
        </div>
      </div>
      <div className="flecha-abajo">
        <button className="flecha" onClick={anterior}>&#8592;</button>
        <button className="flecha" onClick={siguiente}>&#8594;</button>
      </div>
    </section>
  );
}

export default Sucesos;
