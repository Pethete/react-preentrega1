import { RiShoppingBag2Fill, RiShoppingCart2Fill } from "react-icons/ri";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./cartwidget.css";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  let cantidad = cantidadTotal();

  return (
    <Link
      to="/cart"
      className={
        cantidad >= 1 ? "cartwidget cart-white" : "cartwidget cart-red"
      }
    >
      <RiShoppingBag2Fill size={30} />
      <p className="number">{cantidad >= 1 && cantidad} </p>
    </Link>
  );
};

export default CartWidget;
