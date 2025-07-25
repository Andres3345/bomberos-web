import React, { useState } from "react";
import "./Unite.css";

function Unite() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const correo = e.target.correo.value;
    const telefono = e.target.telefono.value;
    const edad = e.target.edad.value;
    const motivo = e.target.motivo.value;

    const destinatario = "juarez.a938@gmail.com"; // ← Reemplazar por el real
    const asunto = encodeURIComponent("Solicitud para Unirse a los Bomberos Voluntarios");
    const cuerpo = encodeURIComponent(
      `Nombre Completo: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nEdad: ${edad}\nMotivo:\n${motivo}`
    );

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;
    }, 2000);
  };

  return (
    <section className="unite-section">
      <div className="unite-content">
        <h2>¿Querés ser parte?</h2>
        <p>Unite a los Bomberos Voluntarios y hacé la diferencia.</p>

        {showAlert && (
          <div className="custom-alert">Redirigiendo a tu aplicación de correo...</div>
        )}

        <form className="form" onSubmit={handleSubmit}>
          <input type="text" name="nombre" placeholder="Nombre Completo" required />
          <input type="email" name="correo" placeholder="Correo Electrónico" required />
          <input type="tel" name="telefono" placeholder="Teléfono" required />
          <input type="number" name="edad" placeholder="Edad" required min="18" />
          <textarea name="motivo" placeholder="¿Por qué querés unirte?" rows="4" required></textarea>
          <button type="submit">Postularme</button>
        </form>
      </div>
    </section>
  );
}

export default Unite;

