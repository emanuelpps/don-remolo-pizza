import "./Item.css";
import { useState } from "react";
import { useCartContext } from "../../../../../Context/CartContext";
//import { Link } from "react-router-dom";

export const Item = ({ ...item }) => {
  const { addToCart } = useCartContext();

  const [quantity, setQuantity] = useState(1);

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
    setQuantity(1);
    console.log(item, quantity);
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
          <button type="button" class="Button-Card" onClick={plus}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              class="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </button>
          <span className="mt-4 stock-number">{quantity}</span>
          <button type="button" class="Button-Card" onClick={subs}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              class="bi bi-dash-lg"
              viewBox="0 0 16 16"
            >
              <path
                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
              />
            </svg>
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
