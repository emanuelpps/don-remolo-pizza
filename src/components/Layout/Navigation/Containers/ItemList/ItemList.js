import React from "react";
import { Link } from "react-router-dom";
//import FoodSelection from "../../FoodSelection/FoodSelection";
import { Item } from "../Item/Item";
import { useCartContext } from "../../../../../Context/CartContext";


export const ItemList = ({ items, categoryId, description }) => {

  const { handleShow } = useCartContext();

  return (
    <div className="container">
      <section className="row row-cols-1 row-cols-md-3 g-0 justify-content-center">
        {items?.map((item) => (
          <Item
            {...item}
            key={item.id}
            category={item.category}
            featured={item.description}
          />
        ))}
      </section>
      <section className="mt-5 mb-5">
      <Link to='/food-selection/'>
        <button className="ButtonGreetings">
          <span>Volver al Menu</span>
        </button>
        </Link>

        <Link to='/cart/'>
        <button className="ButtonGreetings" onClick={handleShow} >
          <span>Ver Mi Pedido</span>
        </button>
        </Link>
      </section>
    </div>
  );
};

export default ItemList;
