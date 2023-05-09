import "./Item.css";
import { useState } from "react";
import { useCartContext } from "../../../../../Context/CartContext";
//import { Link } from "react-router-dom";

export const Item = ({ ...item}) => {
  const { addToCart } = useCartContext();

  const [numberValue, setNumberValue] = useState(0);

  const plus = () => {
    if (numberValue < item.stock) {
      setNumberValue(numberValue + 1);
    } else {
      alert("Producto sin stock");
    }
  };

  const subs = () => {
    if (numberValue > 0) setNumberValue(numberValue - 1);
  };

  const sendToCartAndReset = (quantity) => {
    addToCart(item, quantity);
    setNumberValue(0);
    console.log(item,numberValue)
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
          <button type="button" class="btn ButtonGreetings" onClick={plus}>
            +
          </button>
          <span className="mt-4 stock-number">{numberValue}</span>
          <button type="button" class="btn ButtonGreetings" onClick={subs}>
            -
          </button>
        </div>
        <div>
          <button
            type="button"
            class="btn ButtonGreetings"
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
