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
  const { cart, totalProducts } = useCartContext();

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
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography tag="h1" className="fw-bold mb-0">
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
                            {totalProducts()}
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
