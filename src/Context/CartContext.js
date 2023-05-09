import React, { useState, useContext } from "react";
export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
  
  const [show,setShow] = useState(false);


  
const handleShowCanvas = () =>{
  setShow(true);
}

const handleCloseCanvas = () =>{
  setShow(false)
}


  const [cart, setCart] = useState ([]);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)){
      setCart(cart.map(product => {
        return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
      }));
    } else{
      setCart([...cart, {...item, quantity}]);
    }
};


const isInCart = (id) =>
  cart.find(product => product.id === id) ? true : false;

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

  const totalPrice = () =>{
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
  }

  const totalProducts = () => cart.reduce((acc, actProd) => acc + actProd.quantity,0);

  const removeFromCart = (id) =>{
    setCart(cart.filter(product => product.id !== id));
  }


  const clearFromCart = () => setCart([])

  return(
    <CartContext.Provider value={{
      addToCart,
      clearFromCart,
      removeFromCart,
      totalPrice,
      totalProducts,
      cart,
      show,
      handleCloseCanvas,
      handleShowCanvas
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;