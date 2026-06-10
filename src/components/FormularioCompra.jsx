import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const FormularioCompra = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    tipoEntrega: '' 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (carrito.length === 0) {
      alert("Tu carrito está vacío!");
      return;
    }

    // Mensaje personalizado según el método de entrega
    const mensaje = formData.tipoEntrega === 'domicilio' 
      ? `Gracias ${formData.nombre}, tu pedido llegará a ${formData.direccion}.`
      : `Gracias ${formData.nombre}, te esperamos en nuestra sucursal más cercana.`;

    console.log("Datos del comprador:", formData);
    alert(mensaje);
    
    vaciarCarrito();
    setFormData({ nombre: '', email: '', telefono: '', direccion: '', tipoEntrega: '' });
  };

  return (
    <div className="container mt-5">
      <h3>Finalizar Compra</h3>
      <form onSubmit={handleSubmit} className="p-4 border rounded theme-panel">
        {/* Campos obligatorios siempre visibles */}
        <div className="mb-3">
          <label>Nombre y Apellido</label>
          <input type="text" name="nombre" className="form-control" required onChange={handleChange} value={formData.nombre} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" required onChange={handleChange} value={formData.email} />
        </div>
        <div className="mb-3">
          <label>Teléfono</label>
          <input type="tel" name="telefono" className="form-control" required onChange={handleChange} value={formData.telefono} />
        </div>

        {/* Selección de entrega */}
        <div className="mb-3">
          <label className="fw-bold">Método de entrega:</label>
          <select name="tipoEntrega" className="form-select" required onChange={handleChange} value={formData.tipoEntrega}>
            <option value="">Selecciona una opción...</option>
            <option value="domicilio">Envío a domicilio</option>
            <option value="sucursal">Retiro en sucursal</option>
          </select>
        </div>

        {/* Solo se muestra si elige domicilio */}
        {formData.tipoEntrega === 'domicilio' && (
          <div className="mb-3 animate__animated animate__fadeIn">
            <label>Dirección de entrega</label>
            <input type="text" name="direccion" className="form-control" required onChange={handleChange} value={formData.direccion} />
          </div>
        )}

        <button type="submit" className="btn btn-success w-100">Confirmar Compra ($ {precioTotal()})</button>
      </form>
    </div>
  );
};

export default FormularioCompra;