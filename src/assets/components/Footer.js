import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css'; 

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">

          {/* Dirección */}
          <div className="col-md-4 d-flex align-items-start mb-3 mb-md-0">
              <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991231.png" // Cambia la ruta a la imagen de Google Maps
              alt="Google Maps"
              style={{ width: '40px', height: '40px', marginRight: '10px' }}
            />
            <div className="text-start">
              <h6 className="mb-1 fw-semibold">Dirección</h6>
              <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                Cra 19 # 28-12 manzana J casa 7 <br />
                Castilla real 1 Girón - Santander
              </p>
            </div>
          </div>

          {/* Nombre Empresa */}
          <div className="col-md-4 mb-3 mb-md-0 d-flex justify-content-center">
            <span className="fw-bold fs-5">SIITE S.A.S</span>
          </div>

          {/* Contacto y redes */}
          <div className="col-md-4 text-md-end text-center">
            <h6 className="fw-semibold mb-1">Correo:</h6>
            <p className="mb-2" style={{ fontSize: '0.9rem' }}>siteingsas@gmail.com</p>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://wa.me/+573183772353" target="_blank" rel="noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width="30" height="30" />
              </a>
              
              <a href="https://www.instagram.com/siiteingsas/" target="_blank" rel="noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="30" height="30" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
/* <a href="https://facebook.com/" target="_blank" rel="noreferrer">
<img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="30" height="30" />
</a> */