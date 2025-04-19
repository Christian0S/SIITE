import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import CustomModal from './CustomModal'; // Importar el Modal reutilizable
import { FaCode, FaNetworkWired, FaVideo, FaTools, FaWindows, FaUserTie } from 'react-icons/fa';

const iconMap = {
  FaCode: FaCode,
  FaNetworkWired: FaNetworkWired,
  FaVideo: FaVideo,
  FaTools: FaTools,
  FaWindows: FaWindows,
  FaUserTie: FaUserTie
};

const Servicios = () => {
  const [servicios, setServicios] = useState([]);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetch('/Servicios.json')
      .then((res) => res.json())
      .then((data) => {
        const serviciosConIconos = data.map((servicio) => ({
          ...servicio,
          icon: iconMap[servicio.icon] || FaCode
        }));
        setServicios(serviciosConIconos);
      })
      .catch((err) => console.error('Error al cargar los servicios:', err));
  }, []);

  return (
    <section style={{ backgroundColor: '#022a3a', padding: '3rem 0' }} id="servicios">
      <Container>
        <h2 className="text-center text-white mb-5">Servicios</h2>
        <Row className="g-4">
          {servicios.map((servicio, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <div onClick={() => setModalData(servicio)}>
                <ServiceCard {...servicio} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Usamos el CustomModal */}
      <CustomModal modalData={modalData} onClose={() => setModalData(null)} />
    </section>
  );
};

export default Servicios;
