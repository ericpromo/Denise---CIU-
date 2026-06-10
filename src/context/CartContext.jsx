import React, { createContext, useState, useEffect } from 'react';

// Creacion la caja donde se guarda la info el contexto
export const CartContext = createContext();

// Creacion del proveedo, el que reparte la info en toda la app
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((p) => p.id === producto.id);
    if (productoExistente) {
      setCarrito(
        carrito.map((p) =>
          p.id === producto.id && p.cantidad < p.stock ? { ...p, cantidad: p.cantidad + 1 } : p
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const sumarCantidad = (id) => {
    setCarrito(
        carrito.map((p) =>
            p.id === id && p.cantidad < p.stock ? { ...p, cantidad: p.cantidad + 1 } : p
        )
    );
  };

  const restarCantidad = (id) => {
    setCarrito(
        carrito.map((p) =>
            p.id === id && p.cantidad > 1 ? { ...p, cantidad: p.cantidad - 1 } : p
        )
    );
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  };

  // Vaciar todo el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Calcular el precio total
  const precioTotal = () => {
    return carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  };

  const cantidadTotal = () => {
    return carrito.reduce((total, producto) => total + producto.cantidad, 0);
  }

  return (
    <CartContext.Provider 
      value={{ 
        carrito,
        agregarAlCarrito, 
        sumarCantidad,
        restarCantidad,
        eliminarDelCarrito, 
        vaciarCarrito, 
        precioTotal,
        cantidadTotal 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};