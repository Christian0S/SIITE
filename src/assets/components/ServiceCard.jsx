import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceCard = ({ title, shortDescription, fullDescription, icon: Icon, expanded }) => {
  return (
    <Card
      className="h-50 shadow-sm" 
      style={{
        borderRadius: '20px', 
        padding: '1.2rem', 
        backgroundColor: 'white',
        transition: 'all 0.3s ease-in-out', 
        cursor: 'pointer', 
        minHeight: '200px',  // Asegura que todas las tarjetas tengan el mismo tamaño
      }}
    >
      <Card.Body>
        <div className="d-flex align-items-start mb-3">
          <Icon size={30} className="me-2" />
          <Card.Title
            as="h5"
            className="fw-bold text-center w-100"
            style={{ fontSize: '1rem', color: 'black' }} // Título negro
          >
            {title}
          </Card.Title>
        </div>
        <Card.Text className="text-justify" style={{ fontSize: '0.95rem' }}>
          {expanded ? fullDescription : shortDescription}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
