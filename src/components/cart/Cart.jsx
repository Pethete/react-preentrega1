import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, borrarProductoporId, precioTotal } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="cart-empty">
        <h1>El carrito esta vacio</h1>
        <Link to="/">Ver productos</Link>
      </div>
    );
  }
  return (
    <div className="cart">
      <h1>Carrito de compras</h1>
      {carrito.map((productoCarrito) => (
        <div className="cart-item" key={productoCarrito.id}>
          <img
            className="cart-img"
            src={productoCarrito.image}
            alt={productoCarrito.name}
          />
          <h3>Cantidad: {productoCarrito.quantity} </h3>
          <h3>Precio unitario: {productoCarrito.price} </h3>
          <h3>
            Precio parcial: {productoCarrito.quantity * productoCarrito.price}{" "}
          </h3>
          <button onClick={() => borrarProductoporId(productoCarrito.id)}>
            Borrar
          </button>
        </div>
      ))}
      <h2>Total de la compra: ${precioTotal()} </h2>
      <Link>Continuar con mi compra</Link>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
