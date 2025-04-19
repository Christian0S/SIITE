// src/components/Navbar.js
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';  // Usamos Link de react-router-dom
import '../styles/header.css'; 
import logo from "../imagenes/logo.png"; // Asegúrate de tener el logo aquí

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-siite sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo SIITE"
            className="img-fluid logo-siite"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Enlace de ancla para "Inicio" */}
            <li className="nav-item">
              <a className="nav-link" href="#hero">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosotros">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicios">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">Noticias</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contáctanos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
