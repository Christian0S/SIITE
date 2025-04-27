import React, { useState } from "react";
import "../styles/hero.css";
import heroImage from "../imagenes/heroImage1.png";
import serviciosImg from "../imagenes/servicios.jpg";
import { FaWhatsapp } from "react-icons/fa";
import CustomModal from './CustomModal'; // Asegúrate de importar el componente CustomModal
import { useEffect } from "react";


const Hero = () => {
  const [modalData, setModalData] = useState(null); // Estado para el popup

  const [serviciosDestacados, setServiciosDestacados] = useState([]);

useEffect(() => {
  fetch("/Servicios.json")
    .then((res) => res.json())
    .then((data) => setServiciosDestacados(data))
    .catch((error) => console.error("Error al cargar servicios:", error));
}, []);


  const handleCardClick = (text, idx) => {
    if (idx < 3 && serviciosDestacados[idx]) {
      const servicio = serviciosDestacados[idx];
      setModalData({
        title: text,
        fullDescription: servicio.fullDescription,
        image: servicio.image,
      });
    } else {
      document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  

  return (
    <>
      {/* Hero con fondo */}
      <section
        id="hero"
        className="hero-section text-white d-flex align-items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "70vh",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h1 className="display-5 fw-bold">SIITE S.A.S</h1>
              <p className="lead text-justify">
                Empresa especializada en soluciones tecnológicas para diversos
                sectores. Desarrollamos software a la medida e innovamos en
                servicios digitales, respaldados por un equipo altamente
                calificado. Acompañamos a nuestros clientes en cada etapa de su
                transformación digital.
              </p>
            </div>
            <div className="col-md-5 text-md-end mt-4 mt-md-0 d-flex flex-column align-items-md-end align-items-center">
              <h5 className="mb-3">CONTÁCTANOS</h5>
              <a
                href="https://wa.me/3183772353"
                className="whatsapp-button d-flex justify-content-center align-items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="whatsapp-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="bg-white py-5">
        <div className="container">
          <h3 className="text-center text-dark mb-4">Servicios Destacados</h3>
          <div className="highlighted-services p-4 rounded-3 mx-auto bg-light-blue">
            <div className="CONTENER row g-2 align-items-stretch">
              {/* Imagen */}
              <div className="col-12 col-md-3 d-flex justify-content-center">
                <img
                  src={serviciosImg}
                  alt="Servicios"
                  className="img-fluid rounded servicio-img"
                />
              </div>

              {/* Tarjetas */}
              <div className="col-12 col-md-8">
                <div className="row h-100 g-3">
                  {[
                    "Montaje de Redes y Cableado Estructurado",
                    "Circuito Cerrado de Televisión (CCTV)",
                    "Desarrollo de Software a la Medida",
                    "Ver Todos Los Servicios",
                  ].map((text, idx) => (
                    <div key={idx} className="col-12 col-sm-6">
                      <div
                        className="tarjeta-servicio h-100 d-flex align-items-center justify-content-center text-center fw-semibold"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleCardClick(text, idx)}
                      >
                        {text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usando el componente CustomModal */}
      <CustomModal
        modalData={modalData}
        onClose={() => setModalData(null)} // Función para cerrar el modal
      />
    </>
  );
};

export default Hero;
