import React from 'react';
import { Modal } from 'react-bootstrap';

const CustomModal = ({ modalData, onClose }) => {
  if (!modalData) {
    return null; // No renderizamos el modal si no hay datos
  }

  return (
    <Modal
      show={modalData !== null}
      onHide={onClose}
      centered
      size="lg"
      dialogClassName="custom-modal"
      contentClassName="p-4"
    >
      <button
        onClick={onClose}
        className="close-btn"
      >
        ×
      </button>

      <Modal.Body className="text-center">
        <h4 className="fw-bold mb-3">{modalData.title}</h4>
        <p style={{ textAlign: 'justify' }}>{modalData.fullDescription}</p>
        {modalData.image && (
          <img
            src={modalData.image}
            alt={modalData.title}
            className="modal-image"
          />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
