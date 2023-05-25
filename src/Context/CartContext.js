import React, { useState, useContext, useEffect } from "react";
import Swal from 'sweetalert2';
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart]);

  const addToCart = (item, quantity, id) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
      console.log(cart);
    }
  };

  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false;
  };

  const reduceFromCart = () => {
    setCart(cart.filter((item) => item.quantity--));
  };

  const sumFromCart = () => {
    setCart(cart.filter((item) => item.quantity++));
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const totalProducts = () => {
    let quantity = 0;
    cart.map((i) => (quantity += i.quantity));
    return quantity;
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
    console.log("ahora este cart" + cart);
  };

  const clearFromCart = () => setCart([]);

  const checkoutSuccess = (payMethod,address) =>{
    let wppProducts = cart.map(product => `  ${product.quantity} ${product.category} de ${product.name},`);
    const orderProducts = wppProducts.join('\n');
    window.location.href = 'https://api.whatsapp.com/send?phone=+549298461-1387&text=Hola!%20Quiero%20hacer%20un%20pedido%20de:%20' + orderProducts + ' Precio Total $' + totalPrice() + ' Voy a pagar con: ' +  payMethod + ', Mi direccion es: ' + address
  }

  const finishCheckout = (payMethod,address) =>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Desea finalizar su compra?',
      text: "Será trasladado a Whatsapp",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, deseo comprar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Muchas Gracias!',
          'Pronto te enviaremos tu pedido',
          'success',
        )
        checkoutSuccess(payMethod,address)
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tu pedido no se realizó',
          'error'
        )
      }
    })
    }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        clearFromCart,
        removeFromCart,
        totalPrice,
        totalProducts,
        cart,
        reduceFromCart,
        sumFromCart,
        finishCheckout,
        checkoutSuccess
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
