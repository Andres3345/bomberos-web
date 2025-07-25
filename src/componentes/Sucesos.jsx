import React, {useState, useEffect} from "react";
import "./Sucesos.css"

const sucesosData = [
{ 
  año: "🔥28 / 07 / 2024 - Contencion de principio de Incendio🔥",
  texto: "Principio de incendio en Barrio Alvear, Solo se registraron daños materiales en el interior del domicilio y el fuego controlado por completo por bomberos evitando asi que el siniestro ocacione mayores consecuencias.",
  imagen: "/images/incendioBA.webp",
},
{
  año: "🔥16 / 03 / 2025 - Combate de incendio en una forrajeria🔥",
  texto: "Bomberos Voluntarios de Concepción (Tucumán) intervinieron en un voraz incendio que arrasó con la forrajería “Nutrición Sustentable”, ubicada en calle España al 900. Acto por el cual fueron reconocidos por el honorable concejo deliberante",
  imagen: "/images/incendioF.webp"
},
{
  año: "🔥04 / 04 / 2025 - Rescate a bebe por broncoaspiracion🔥",
  texto: "Cerca de las 11 de la mañana de este viernes, un hecho estremecedor ocurrió en el interior de la comisaría de Concepción. Allí, una mujer pedía auxilio a gritos para salvar la vida del bebé de dos meses que tenía en brazos. En ese momento, un móvil de Bomberos Voluntarios de Concepción pasaba por el lugar y, al pedirles auxilio, llevaron al bebé a la guardia de pediatría del Hospital Regional local, el Sgto 1ro Sergio Andrada, que iba a bordo, le realizo maniobras de reanimacion, logrando que el niño llegara con signos vitales al hospital local,",
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
    setIndice((prev) => (prev === 0 ? sucesosData.length - 1 : prev -1));
  };

  const siguiente = () => {
    setIndice((prev) => (prev === sucesosData.length -1 ? 0 : prev + 1));
  };

  const {año, texto, imagen } = sucesosData[indice];
  return(
    <section className="sucesos-section">
      <h2>🎖️Nuestro Servicio a la Sociedad🎖️</h2>
      <div className="carrusel">
          <div className={"suceso ${animar ? 'fade-in' : ''}"} >
              <img src={imagen} alt={"Suceso $ {año}"} />
              <h3>{año}</h3>
              <p>{texto}</p>
          </div>
      </div>
      <div className="flecha-abajo">
          <button className="flecha" onClick={anterior}>&#8592;</button>
          <button className="flecha" onClick={siguiente}>&#8594;</button>
          </div>
    </section>
  )
}

export default Sucesos;
