// src/components/SobreNosotros.js
import React from 'react';
import '../styles/sobreNosotros.css'; 
const SobreNosotros = () => {
  return (
    <section id="nosotros" className="sobre-nosotros py-5">
      <div className="container">
        <h2 className="text-center mb-4">Sobre Nosotros</h2>
        <div className="descripcion-general bg-light p-4 rounded text-center mb-5 shadow-sm">
          <p>
            SIITE S.A.S es una empresa con la misión de generar, crear y brindar diferentes soluciones tecnológicas especializadas en diversos sectores de la economía, a partir del desarrollo e innovación de software generando valor a través de nuestros productos y servicios, aportando nuestra experiencia y conocimiento de nuestro talento humano altamente calificado, lo cual nos permitirá satisfacer las necesidades de cada uno de nuestros clientes.
          </p>
        </div>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card bg-light p-3 h-100 shadow-sm">
              <h5 className="mb-3">Misión</h5>
              <p>
                Brindar soluciones tecnológicas innovadoras y personalizadas que impulsen la transformación digital de nuestros clientes. Nos enfocamos en el desarrollo de software, infraestructura de redes y sistemas de seguridad, garantizando calidad, eficiencia y soporte continuo.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card bg-light p-3 h-100 shadow-sm">
              <h5 className="mb-3">Visión</h5>
              <p>
                Ser líderes en el sector tecnológico, reconocidos por nuestra capacidad de innovación y compromiso con la excelencia. Buscamos expandir nuestras soluciones a nivel nacional e internacional, ayudando a las empresas a optimizar sus procesos mediante tecnología de vanguardia.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card bg-light p-3 h-100 shadow-sm">
              <h5 className="mb-3">Valores</h5>
              <p>
                En SIITE S.A.S, trabajamos con innovación, compromiso e integridad, ofreciendo soluciones de alta calidad. Fomentamos el trabajo en equipo y una fuerte orientación al cliente para garantizar el éxito de cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
