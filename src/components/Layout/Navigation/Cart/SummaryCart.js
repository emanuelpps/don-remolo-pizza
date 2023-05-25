import React, { useState } from "react";
import { MDBInput, MDBTypography } from "mdb-react-ui-kit";
import "./Cart.css";
import { useCartContext } from "../../../../Context/CartContext";

const SummaryCart = ({ items, total }) => {
  const [currentPayment, setCurrentPayment] = useState("Efectivo");
  const [currentAddress, setCurrentAddress] = useState();

  const paymentMethod = (newPayment) => {
    setCurrentPayment(newPayment);
  };

  const address = (newAddress) => {
    setCurrentAddress(newAddress);
  };

  const payMethod = JSON.stringify(currentPayment);
  const addressText = JSON.stringify(currentAddress);

  const { totalPrice, totalProducts, finishCheckout } = useCartContext();

  return (
    <div className="p-5">
      <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
        Resumen
      </MDBTypography>

      <hr className="my-4" />

      <div className="d-flex justify-content-between mb-4">
        <MDBTypography tag="h5" className="text-uppercase">
          {totalProducts()} Productos
        </MDBTypography>
        <MDBTypography tag="h5">${totalPrice()}</MDBTypography>
      </div>

      <MDBTypography tag="h5" className="text-uppercase mb-3">
        Indique medio de pago
      </MDBTypography>

      <div className="mb-4 pb-2">
        <select
          id="select-payment"
          onChange={(event) => paymentMethod(event.target.value)}
          className="select p-2 rounded bg-grey"
          style={{ width: "100%" }}
          value={currentPayment}
        >
          <option value="Efectivo">Efectivo</option>
          <option value="Tarjeta de Credito">Tarjeta de Crédito</option>
          <option value="Tarjeta de Debito">Tarjeta de Débito</option>
          <option value="Mercado Pago">Mercado Pago</option>
        </select>
      </div>

      <MDBTypography tag="h5" className="text-uppercase mb-3">
        ¿Donde enviamos tu pedido?
      </MDBTypography>

      <div className="mb-5">
        <MDBInput
          onChange={(event) => address(event.target.value)}
          size="lg"
          label="Ingresá tu dirección"
        />
      </div>

      <hr className="my-4" />

      <div className="d-flex justify-content-between mb-5">
        <MDBTypography tag="h5" className="text-uppercase">
          Precio Total
        </MDBTypography>
        <MDBTypography tag="h5">${totalPrice()}</MDBTypography>
      </div>

      <button
        target="_blank"
        onClick={() => finishCheckout(payMethod, addressText)}
        className="ButtonGreetings"
        color="#E74423"
      >
        Finalizar Compra
      </button>
    </div>
  );
};

export default SummaryCart;
