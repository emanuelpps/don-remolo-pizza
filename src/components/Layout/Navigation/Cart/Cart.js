import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import ItemCart from "./ItemCart";
import SummaryCart from "./SummaryCart";
import "./Cart.css";
import { useCartContext } from "../../../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearFromCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <section className=" ">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center ">
            <MDBCol size="12">
              <MDBCard
                className="card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">
                    <MDBCol lg="8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5 ">
                          <MDBTypography tag="h2" className="fw-bold mb-0  text-center mx-auto">
                            Tu Carrito esta Vacío
                          </MDBTypography>
                        </div>
                        <Link to="/food-selection">
                          <div className="pt-5">
                            <MDBTypography tag="h6" className="mb-0">
                              <MDBCardText
                                tag="a"
                                href="#!"
                                className="text-body"
                              >
                                <MDBIcon fas icon="long-arrow-alt-left me-2" />{" "}
                                Volver al Menu
                              </MDBCardText>
                            </MDBTypography>
                          </div>
                        </Link>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  } else {
    return (
      <section className=" ">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center ">
            <MDBCol size="12">
              <MDBCard
                className="card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">
                    <MDBCol lg="8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography tag="h1" className="fw-bold mb-0">
                            Mi Pedido
                          </MDBTypography>
                          <MDBTypography className="mb-0 text-muted">
                            <button
                            onClick={() => clearFromCart()} className="button-trash"
                            title="Vaciar Carrito">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              class="bi bi-trash"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                            </svg>
                            </button>
                          </MDBTypography>
                        </div>

                        {cart.map(
                          ({
                            id,
                            category,
                            description,
                            img,
                            name,
                            price,
                            stock,
                            quantity,
                          }) => (
                            <ItemCart
                              id={id}
                              category={category}
                              description={description}
                              img={img}
                              name={name}
                              price={price}
                              stock={stock}
                              quantity={quantity}
                            />
                          )
                        )}
                        <Link to="/food-selection">
                          <div className="pt-5">
                            <MDBTypography tag="h6" className="mb-0">
                              <MDBCardText
                                tag="a"
                                href="#!"
                                className="text-body"
                              >
                                <MDBIcon fas icon="long-arrow-alt-left me-2" />{" "}
                                Volver al Menu
                              </MDBCardText>
                            </MDBTypography>
                          </div>
                        </Link>
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" className="bg-grey">
                      <SummaryCart />
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
};

export default Cart;
