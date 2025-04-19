import React from 'react';
import { Modal } from 'react-bootstrap';

const NewsModal = ({ modalData, onClose }) => {
  if (!modalData) return null;

  return (
    <Modal
      show={modalData !== null}
      onHide={onClose}
      centered
      size="lg"
      dialogClassName="custom-modal"
      contentClassName="p-4"
    >
      <button onClick={onClose} className="close-btn">×</button>

      <Modal.Body className="text-center">
        <h4 className="fw-bold mb-3">{modalData.title}</h4>
        {modalData.image && (
          <img
            src={modalData.image}
            alt={modalData.title}
            className="modal-image mb-3"
          />
        )}
        <p style={{ textAlign: 'justify' }}>{modalData.description}</p>

        {modalData.link && modalData.link.trim() !== '' && (
          <a
            href={modalData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary mt-3"
          >
            Go to full article 🔗
          </a>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default NewsModal;
