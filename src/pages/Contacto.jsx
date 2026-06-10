import React from 'react';

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Mensaje enviado con éxito! Te responderemos a la brevedad.");
    e.target.reset();
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Contactanos</h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm p-4 theme-card">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-bold">Nombre</label>
                <input type="text" className="form-control" required placeholder="Tu nombre" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Correo Electrónico</label>
                <input type="email" className="form-control" required placeholder="tuemail@ejemplo.com" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Mensaje</label>
                <textarea className="form-control" rows="5" required placeholder="¿En qué te podemos ayudar?"></textarea>
              </div>
              <button type="submit" className="btn btn-acento w-100">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;