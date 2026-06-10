import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
        <div className="container mt-5 text-center">
            <div className="p-4 p-md-5 mb-4 rounded shadow-sm bg-theme-card">
                <div className="col-md-10 mx-auto px-0">
                    <h1 className="display-4 fw-bold">Bienvenido a Nuestra Tienda</h1>
                    <p className="lead my-3 text-theme">
                        Descubrí la mejor indumentaria de temporada. Tenemos todo lo que necesitas para armar tu outfit ideal, desde prendas básicas hasta ropa formal y accesorios.
                    </p>

                    <div className="mb-4">
                        <img
                            src="/img/bannerDenise.png"
                            alt="Banner de la tienda"
                            className="img-fluid rounded shadow"
                            style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <Link to="/productos" className="btn btn-acento btn-lg fw-bold px-5 py-3 mt-3">
                        ¡Ir al Catálogo!
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Inicio;