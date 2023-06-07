import React, { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  //seteo el cart en un state y lo transformo en un JSON para guardarlo en el local storage
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  //transformo el cart en un string para recuperarlo y enviarlo a un array
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // agregar producto al carrito
  const addToCart = (item, quantity) => {
    if (quantity === 0) {
      setCart([]);
    } else if (isInCart(item.id)) {
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

  //funcion para saber si un producto esta en el carrito
  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false;
  };

  // reduce el quantity de un producto especifico en el cart
  const reduceFromCart = (id) => {
    const productFind = cart.find(item => item.id === id);
    if(productFind.quantity > 1)
    productFind.quantity--
    setCart([...cart])
  };

  // aumenta el quantity de un producto especifico en el cart
  const sumFromCart = (id) => {
    const productFind = cart.find(item => item.id === id);
    productFind.quantity++
    setCart([...cart])
  };

  // devuelve el precio total de todos los productos
  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  // devuelve la cantidad total de productos
  const totalProducts = () => {
    let quantity = 0;
    cart.map(i => quantity += i.quantity);
    return quantity;
  };

  // elimina un producto especifico del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
    console.log("ahora este cart" + cart);
  };

  // limpia el carrito de productos y devuelve el array cart vacio
  const clearFromCart = () => setCart([]);

  // una vez que se concreta la compra, la orden es derivada a whatsapp
  const checkoutSuccess = (payMethod, address) => {
    let wppProducts = cart.map(
      (product) =>
        `  ${product.quantity} ${product.category} de ${product.name},`
    );
    const orderProducts = wppProducts.join("\n");
    window.location.href =
      "https://api.whatsapp.com/send?phone=+5492981111111&text=Hola!%20Quiero%20hacer%20un%20pedido%20de:%20" +
      orderProducts +
      " Precio Total $" +
      totalPrice() +
      " Voy a pagar con: " +
      payMethod +
      ", Mi direccion es: " +
      address;
  };

  // consultar si desea proceder con la compra
  const finishCheckout = (payMethod, address) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Desea finalizar su compra?",
        text: "Será trasladado a Whatsapp",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, deseo comprar!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Muchas Gracias!",
            "Pronto te enviaremos tu pedido",
            "success"
          );
          checkoutSuccess(payMethod, address);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelado",
            "Tu pedido no se realizó",
            "error"
          );
        }
      });
  };

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
        checkoutSuccess,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
