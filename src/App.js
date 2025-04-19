import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import Footer from "./assets/components/Footer";
import WhatsAppButton from "./assets/components/WhatsAppButton";
import Servicios from "./assets/components/Servicios";
import SobreNosotros from "./assets/components/SobreNosotros";
import Blog from "./assets/components/Blog";
import Contacto from "./assets/components/Contacto";
import './assets/styles/modal.css';



function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <SobreNosotros />
      <Servicios />
      <Blog />
      <Contacto />
      <WhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;
