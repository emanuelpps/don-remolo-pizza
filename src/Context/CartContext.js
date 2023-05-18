import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity, id) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map(product => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    console.log(cart)
    }
  };

  const isInCart = (id) =>{
    return cart.find(product => product.id === id) ? true : false;
  };
  

  /* const addToCart = (item, qtyValue) => {
    console.log(item)
    let newCart;
    let product = cart.find(product => product === item.id);
    if(product){
      product.qtyValue += qtyValue++;
      newCart = [...cart]
    }else{
      product = {...item, qtyValue: qtyValue};
      newCart = [...cart, product];
    }
    setCart(newCart);
  } */

  //const pricePerProduct = (id) =>{

  //

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const totalProducts = () => {
    let quantity = 0;
    cart.map(i => quantity += i.quantity);
    return quantity;
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

  const clearFromCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        clearFromCart,
        removeFromCart,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
