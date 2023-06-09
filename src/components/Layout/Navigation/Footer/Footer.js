import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <footer class="mt-auto py-3  ">
        <div class="container text-center">
          <span class="text-muted">Diseñado por <Link to="https://emanuelpps.github.io/" style={{ textDecoration: 'none', color:"#E74423" }} className="link-portfolio" target="_blank">Emanuel Pages</Link></span>
        </div>
      </footer>
    </div>
  );
}
