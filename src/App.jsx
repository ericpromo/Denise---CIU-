import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import { CartProvider } from './context/CartContext'; 
import Carrito from './pages/Carrito'; 
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';

function App() {
  // modo oscuro
  const [darkMode, setDarkMode] = useState(false);

  // agrega o quita el dark-mode
  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className="container mt-4 flex-grow-1">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/productos/:id" element={<DetalleProducto />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </div>
          <Footer />
          
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;