import React from "react";
import {
  MDBBtn,
  MDBInput,
  MDBTypography
} from "mdb-react-ui-kit";
import "./Cart.css";
import { useCartContext } from "../../../../Context/CartContext";

const SummaryCart = ({ items, total }) => {

    const { cart, totalPrice,totalProducts } = useCartContext();

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
          className="select p-2 rounded bg-grey"
          style={{ width: "100%" }}
        >
          <option value="1">Efectivo</option>
          <option value="2">Tarjeta de Crédito</option>
          <option value="3">Tarjeta de Débito</option>
          <option value="4">Mercado Pago</option>
        </select>
      </div>

      <MDBTypography tag="h5" className="text-uppercase mb-3">
        Cupón de Descuento
      </MDBTypography>

      <div className="mb-5">
        <MDBInput size="lg" label="Ingrese su código" />
      </div>

      <hr className="my-4" />

      <div className="d-flex justify-content-between mb-5">
        <MDBTypography tag="h5" className="text-uppercase">
          Precio Total
        </MDBTypography>
        <MDBTypography tag="h5">${totalPrice()}</MDBTypography>
      </div>

      <MDBBtn className="ButtonGreetings" color="#E74423" block size="lg">
        Finalizar Compra
      </MDBBtn>
    </div>
  );
};

export default SummaryCart;
