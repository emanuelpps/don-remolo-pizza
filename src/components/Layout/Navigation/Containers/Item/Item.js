import "./Item.css";
import { useState } from "react";
import { useCartContext } from "../../../../../Context/CartContext";
//import { Link } from "react-router-dom";

export const Item = ({ ...item}) => {
  const { addToCart } = useCartContext();

  const [quantity, setQuantity] = useState(0);

  const plus = () => {
    if (quantity < item.stock) {
      setQuantity(quantity + 1);
    } else {
      alert("Producto sin stock");
    }
  };

  const subs = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const sendToCartAndReset = () => {
    addToCart(item, quantity);
    setQuantity(0);
    console.log(item,quantity)
  };

  return (
    <div class="menu_item">
      <div class="item_image">
        <img src={item.img} alt={item.name} />
      </div>
      <div class="copy std_copy">
        <h3 class="hdr">{item.name}</h3>
        <div class="content">{item.featured}</div>
        <h2 className="item-price">${item.price}</h2>
        <div class="card-button">
          <button type="button" class="btn ButtonCard" onClick={plus}>
            +
          </button>
          <span className="mt-4 stock-number">{quantity}</span>
          <button type="button" class="btn ButtonCard" onClick={subs}>
            -
          </button>
        </div>
        <div>
          <button
            type="button"
            class="btn ButtonCard"
            onClick={() => sendToCartAndReset()}
          >
            Agregar a mi Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
