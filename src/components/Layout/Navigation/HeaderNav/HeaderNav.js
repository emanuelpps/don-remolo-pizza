import React from "react";
import "./HeaderNav.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import LogoNavBar from '../../../../assets/images/logo-nav-bar-noBrand.jpg'

export default function HeaderNav() {
  return (
    <nav class="navbar sticky-top">
      <div class="container">
        <Link class="navbar-brand text-center" to="/don-remolo-pizza/">
          <img
            className="LogoImg"
            src={LogoNavBar}
            alt="Logo Pizzeria Don Remolo"
          />
        </Link>
        <CartWidget/>
      </div>
    </nav>
  );
}
