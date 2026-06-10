import React, { useState } from 'react';
import ProductoCard from '../components/ProductoCard';
import { productos } from '../Data/productos'; 

const Productos = () => {
  // Estados para los filtros
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  // Extraer categorías únicas dinámicamente
  const categoriasUnicas = ['Todas', ...new Set(productos.flatMap(p => p.categoria))];

  // Lógica de filtrado
  const productosFiltrados = productos.filter((producto) => {
    const coincideTexto = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    
    const coincideCategoria = categoriaSeleccionada === 'Todas' || producto.categoria.includes(categoriaSeleccionada);
    
    return coincideTexto && coincideCategoria;
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center fw-bold">Nuestro Catálogo</h2>

      <div className="row mb-4 filter-panel p-3 rounded shadow-sm">
        <div className="col-md-6 mb-3 mb-md-0">
          <label className="form-label fw-bold">Buscar producto:</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Buscar por nombre..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        
        <div className="col-md-6">
          <label className="form-label fw-bold">Filtrar por categoría:</label>
          <select 
            className="form-select" 
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          >
            {categoriasUnicas.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <div className="col" key={producto.id}>
              <ProductoCard producto={producto} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center mt-4">
            <p className="fs-4 text-muted">No se encontraron productos para tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Productos;