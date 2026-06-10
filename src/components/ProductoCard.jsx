import React from 'react';
import { Link } from 'react-router-dom';

const ProductoCard = ({ producto }) => {
  const hayStock = producto.stock > 0;
  
  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={producto.imagen} 
        className="card-img-top" 
        alt={producto.nombre} 
        style={{ height: '280px', objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{producto.nombre}</h5>
        <p className="card-text text-muted small flex-grow-1">{producto.descripcion}</p>
        <p className="fw-bold fs-5 mb-3">${producto.precio}</p>
        
        {hayStock ? (
          <Link to={`/productos/${producto.id}`} className="btn btn-acento w-100 mt-auto">
             Ver detalle
          </Link>
        ) : (
          <button className="btn btn-secondary w-100 mt-auto" disabled>
            Sin stock
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductoCard;