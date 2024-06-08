import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (nuevoProducto) => {
    const condicion = estaEnElCarrito(nuevoProducto.id);
    if (condicion) {
      const productosModificados = carrito.map((productoCarrito) => {
        if (productoCarrito.id === nuevoProducto.id) {
          return {
            ...productoCarrito,
            quantity: productoCarrito.quantity + nuevoProducto.quantity,
          };
        } else {
          return productoCarrito;
        }
      });
      setCarrito(productosModificados);
    } else {
      setCarrito([...carrito, nuevoProducto]);
    }
  };
  const cantidadTotal = () => {
    const cantidadTotalProductos = carrito.reduce(
      (total, producto) => total + producto.quantity,
      0
    );
    return cantidadTotalProductos;
  };
  const precioTotal = () => {
    const totalCompra = carrito.reduce(
      (total, productoCarrito) =>
        total + productoCarrito.price * productoCarrito.quantity,
      0
    );
    return totalCompra;
  };
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const estaEnElCarrito = (idProducto) => {
    const condicion = carrito.some(
      (productoCarrito) => productoCarrito.id === idProducto
    );
    return condicion;
  };
  const borrarProductoPorId = (idProducto) => {
    const productosFiltrados = carrito.filter(
      (productoCarrito) => productoCarrito.id !== idProducto
    );
    setCarrito(productosFiltrados);
  };
  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarProducto,
        cantidadTotal,
        vaciarCarrito,
        borrarProductoPorId,
        precioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
