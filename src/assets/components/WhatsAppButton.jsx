import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppButton.css"; // Asegúrate de tener este archivo CSS

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(true);

  const checkVisibility = () => {
    const hero = document.getElementById("hero");

    if (hero) {
      const heroRect = hero.getBoundingClientRect();
      // Verifica si el hero ha llegado completamente a la parte superior de la pantalla.
      if (heroRect.top <= 0 && heroRect.bottom > 0) {
        // Si el hero está visible completamente en la parte superior, no mostrar el botón
        setVisible(false);
      } else {
        // De lo contrario, mostrar el botón
        setVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();  // Verificar visibilidad al montar el componente
    return () => window.removeEventListener("scroll", checkVisibility);
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
