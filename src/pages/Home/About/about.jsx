import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

import "./about.css";

export default function About() {
  return (
    <section class="service">
    <div class="containers">
      <h2>Main <span style={{color:"rgb(246,114,64)"}}> Menu </span></h2>
      <div class="cards grids columns">
        <span  className="s-card">
          <i class="fa-solid fa-burger"></i>
          <h4>Burger</h4>
        </span>

        <span className="s-card">
          <i class="fa-solid fa-pizza-slice"></i>
          <h4>Pizaa</h4>
        </span>

        <span className="s-card">
        <i class="fa-solid fa-mug-saucer"></i>
          <h4>Coffe</h4>
        </span>

        <span className="s-card">
        <i class="fa-solid fa-ice-cream"></i>
          <h4>Sweets</h4>
        </span>

        <span className="s-card">
          <i class="fa-solid fa-bread-slice"></i>
          <h4>Breads</h4>
        </span>
      </div>
    </div>
  </section>
  );
}
