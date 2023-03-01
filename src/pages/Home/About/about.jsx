import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

import "./about.css";
import "../home.css";

const categoryData1 = [
  {
    display: "Fastfood",
    imgUrl: "../images/category-01.png",
  },
  {
    display: "Pizza",
    imgUrl: "../images/category-02.png",
  },

  {
    display: "Asian Food",
    imgUrl: "../images/category-03.png",
  },

  {
    display: "Row Meat",
    imgUrl: "../images/category-04.png",
  },
];
const categoryData2 = [
  {
    display: "Bread",
    imgUrl: "../images/bread.png",
  },
  {
    display: "Fried Potatoes",
    imgUrl: "../images/fried-potatoes.png",
  },
  {
    display: "Juice",
    imgUrl: "../images/bread.png",
  },
  {
    display: "Fish",
    imgUrl: "../images/fried-potatoes.png",
  },
];

export default function About() {
  return (
    <div className="menu-section">
      <h2 className="menu-title">Our Menu</h2>
      <Container>
        <Carousel interval={3000}>
          <Carousel.Item>
            <Row>
              {categoryData1.map((item, index) => (
                <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
                  <div className="category__item d-flex align-items-center gap-3 shadow">
                    <div className="category__img">
                      <img src={item.imgUrl} alt="category__item" />
                    </div>
                    <h6>{item.display}</h6>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              {categoryData2.map((item, index) => (
                <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
                  <div className="category__item d-flex align-items-center gap-3 shadow">
                    <div className="category__img">
                      <img src={item.imgUrl} alt="category__item" />
                    </div>
                    <h6>{item.display}</h6>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
