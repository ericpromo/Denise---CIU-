import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import FormularioCompra from '../components/FormularioCompra';

const Carrito = () => {
  const { 
    carrito, 
    eliminarDelCarrito, 
    vaciarCarrito, 
    precioTotal, 
    cantidadTotal, 
    sumarCantidad, 
    restarCantidad 
  } = useContext(CartContext);

const [mostrandoFormulario, setMostrandoFormulario] = useState(false);  

  if (carrito.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <p>¿No sabes qué comprar? ¡Tenemos muchas opciones!</p>
        <Link to="/productos" className="btn btn-acento">Ir a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      {!mostrandoFormulario ? (
        <>
          <h2 className="mb-4">Tu Carrito de Compras</h2>
          <div className="table-responsive theme-panel rounded p-3 mb-4">
            <table className="table table-theme align-middle text-center">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th className="text-start">Nombre</th>
                  <th>Precio Unit.</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((item) => (
                  <tr key={item.id}>
                    <td><img src={item.imagen} alt={item.nombre} style={{ width: '50px', height: '50px', objectFit: 'cover' }} /></td>
                    <td className="text-start">{item.nombre}</td>
                    <td>${item.precio}</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => restarCantidad(item.id)} disabled={item.cantidad === 1}>-</button>
                        <span className="mx-3 fw-bold">{item.cantidad}</span>
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => sumarCantidad(item.id)} disabled={item.cantidad >= item.stock}>+</button>
                      </div>
                    </td>
                    <td className="fw-bold">${item.precio * item.cantidad}</td>
                    <td><button className="btn btn-danger btn-sm" onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 p-3 theme-panel rounded">
            <div>
              <h4 className="mb-1">Total a pagar: ${precioTotal()}</h4>
              <p className="mb-0 text-muted">Cantidad total de artículos: {cantidadTotal()}</p>
            </div>
            <div className="mt-3 mt-md-0">
              <button className="btn btn-outline-danger me-2" onClick={vaciarCarrito}>Vaciar Carrito</button>
              <button className="btn btn-success" onClick={() => setMostrandoFormulario(true)}>Finalizar Compra</button>
            </div>
          </div>
        </>
      ) : (
        // Renderiza el formulario cunado mostrandoFormulario es TRUE
        <div className="mt-4">
          <button className="btn btn-link mb-3" onClick={() => setMostrandoFormulario(false)}>← Volver al carrito</button>
          <FormularioCompra />
        </div>
      )}
    </div>
  );
};

export default Carrito;