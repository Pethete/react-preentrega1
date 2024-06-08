import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  const [ocultarCount, setOcultarCount] = useState(false);
  const { agregarProducto } = useContext(CartContext);

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count };

    agregarProducto(productCart);
    setOcultarCount(true);
  };

  return (
    <div className="item-detail">
      <div className="image-detail">
        <img src={product.image} />
      </div>
      <div className="content-detail">
        <p className="name-detail">{product.name}</p>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>
        {ocultarCount ? (
          <Link className="button-cart" to="/cart">
            Ir al carrito
          </Link>
        ) : (
          <ItemCount stock={product.stock} addProduct={addProduct} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
