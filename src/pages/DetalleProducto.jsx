import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../Data/productos';
import { CartContext } from '../context/CartContext';
import ProductoCard from '../components/ProductoCard';

const DetalleProducto = () => {
    const { id } = useParams();
    const { agregarAlCarrito } = useContext(CartContext);

    const producto = productos.find((p) => p.id === parseInt(id));

    if (!producto) {
        return <h2 className="text-center mt-5">Producto no encontrado</h2>;
    }

    // Lógica para filtrar productos relacionados
    const productosRelacionados = productos
        .filter((p) => {
            const esDistinto = p.id !== producto.id;
            const comparteCategoria = p.categoria.some(cat => producto.categoria.includes(cat));
            return esDistinto && comparteCategoria;
        })
        .slice(0, 4);

    return (
        <div className="container mt-4 mb-5">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-5 text-center mb-4 mb-md-0">
                    <img
                        src={producto.imagen}
                        className="img-fluid rounded shadow-sm"
                        alt={producto.nombre}
                        style={{ maxHeight: '400px', width: 'auto', objectFit: 'contain' }}
                    />
                </div>
                <div className="col-md-6 offset-md-1">
                    <h1 className="fw-bold display-5">{producto.nombre}</h1>
                    <p className="fs-3 fw-bold text-success mb-2">${producto.precio}</p>
                    <p className="text-muted bg-light p-3 rounded">{producto.descripcion}</p>
                    <button
                        className={`btn btn-lg w-100 mt-3 ${producto.stock > 0 ? 'btn-acento' : 'btn-secondary'}`}
                        disabled={producto.stock === 0}
                        onClick={() => agregarAlCarrito(producto)}
                    >
                        {producto.stock > 0 ? 'Agregar al Carrito' : 'Producto Agotado'}
                    </button>
                </div>
            </div>

            {productosRelacionados.length > 0 && (
                <div className="mt-5 pt-4 border-top">
                    <h3 className="mb-4 fw-bold text-secondary">También te puede interesar...</h3>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        {productosRelacionados.map((prod) => (
                            <div className="col" key={prod.id}>
                                <ProductoCard producto={prod} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetalleProducto;