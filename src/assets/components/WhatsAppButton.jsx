import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false); // Por defecto oculto

  const checkVisibility = () => {
    const hero = document.getElementById("hero");

    if (hero) {
      const heroRect = hero.getBoundingClientRect();

      // Verifica si el hero está al menos parcialmente en pantalla
      const isHeroVisible = heroRect.bottom > 0 && heroRect.top < window.innerHeight;

      // Si el hero está visible, ocultar botón. Si no, mostrarlo.
      setVisible(!isHeroVisible);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility); // Por si cambian el tamaño de la ventana
    checkVisibility(); // Comprobar al montar

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  return (
    visible && (
      <a
        href="https://wa.me/573183772353"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button-Float"
      >
        <FaWhatsapp color="white" size="60px" />
      </a>
    )
  );
};

export default WhatsAppButton;
