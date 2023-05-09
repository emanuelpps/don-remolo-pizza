import React from 'react'

export default function Checkout() {

    if (cart.length !== 0) {
  return (
    <div className="cart-container">
                <div className="cart">
                    <div className="cart-columns">
                        <p></p>
                        <p className="column">Imagen</p>
                        <p className="column">Nombre</p>
                        <p className="column">Cantidad</p>
                        <p className="column">Precio</p>
                        <p className="column">Total</p>
                    </div>
                    <div className="cart-items">
                        {
                            cart.map( ({ id, item, name, quantity, price, img, total }) =>(
                                <CartList key={item} id={id} name={name} quantity={quantity} price={price} img={img} total={total} removeFromCart={removeFromCart}  />
                            ))
                        }
                    </div>
                    <div className="cart-total">
                        <p className="total-amount">
                        Subtotal $ {totalPrice()} 
                        </p>
                        <Link to="/checkout" element={<Checkout cart={cart} totalPrice={totalPrice} clearCart={clearCart} createBuyOrder={createBuyOrder}/>} className="waves-effect btn">Finalizar compra</Link>
                    </div>
                </div>
            </div>
        )

    } else {
        return(
            <div className="cart-container-empty">
                <i className="material-icons empty-cart"></i>
                <h4 className="empty-cart-title">Carrito vacío <br/> </h4>
                <Link to="/"><button className="waves-effect waves-light btn backToLanding-btn">Volver a la tienda</button></Link> 
            </div>
  )
}


}