import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <div className="container">
        <h5 className="mb-3">Mi Tienda de Ropa</h5>
        <p className="mb-1">Calidad y estilo en cada prenda.</p>
        <p className="small text-muted mb-0">
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

