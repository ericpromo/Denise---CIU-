import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const { carrito } = useContext(CartContext);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-theme mb-4 shadow-sm">
      <div className="container">
        
        <Link className="navbar-brand d-flex align-items-center fw-bold" to="/" onClick={cerrarMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--color-acento)" className="bi bi-bag-fill me-2" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
          </svg>
          
          Denise
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={menuAbierto}
          aria-label="Toggle navigation"
          style={{ filter: darkMode ? 'invert(1)' : 'none' }} 
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuAbierto ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={cerrarMenu}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos" onClick={cerrarMenu}>Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto" onClick={cerrarMenu}>Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/carrito" onClick={cerrarMenu}>
                Carrito
                {carrito.length > 0 && (
                  <span className="badge bg-danger ms-2">{carrito.length}</span>
                )}
              </Link>
            </li>
            
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button 
                type="button"
                onClick={toggleDarkMode} 
                className="btn btn-sm btn-outline-secondary d-flex align-items-center"
                title="Cambiar tema"
              >
                {darkMode ? '☀️ Claro' : '🌙 Oscuro'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;