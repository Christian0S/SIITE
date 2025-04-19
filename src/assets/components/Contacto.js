import React, { useState } from "react";
import emailjs from "emailjs-com"; // Asegúrate de tener esto instalado
import "../styles/contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    correo: "",
    nombre: "",
    telefono: "",
    mensaje: ""
  });

  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_8bakyhc",  // Cambia esto por tu ID de servicio de EmailJS
      "template_vg1c31b", // Cambia esto por tu ID de plantilla de EmailJS
      {
        from_name: formData.nombre,
        from_email: formData.correo,
        phone: formData.telefono,
        message: formData.mensaje,
        to_email: "christian.s.mojica@gmail.com" // Cambia esto por el correo al que quieres enviar el mensaje
      },
      "VjodkeNM_vIIb4MREPLI0" // Cambia esto por tu ID de usuario de EmailJS
    )    
    .then((result) => {
      setMensajeEnviado(true);
      setFormData({
        correo: "",
        nombre: "",
        telefono: "",
        mensaje: ""
      });
      setTimeout(() => setMensajeEnviado(false), 5000);
    })
    .catch((error) => {
      console.error("Error al enviar el mensaje:", error.text);
    });
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-box">
        <div className="formulario">
          <h4>CONTACTANOS</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="correo"
              placeholder="Correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
            />
            <textarea
              name="mensaje"
              rows="3"
              placeholder="Ingrese su mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
            <button type="submit">Enviar</button>
          </form>
          {mensajeEnviado && <p className="mensaje-exito">Mensaje enviado correctamente.</p>}
        </div>
        <div className="imagen-contacto" />
      </div>
    </section>
  );
};

export default Contacto;
