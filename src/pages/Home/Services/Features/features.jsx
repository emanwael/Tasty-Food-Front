import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./features.css";
import "../../home.css";

const orderSteps = [
  {
    title: "Choose Restaurant",
    imgUrl: "../../images/restaurant.jpg",
    desc: "Browse the menu of the restaurant and order directly from our web app.",
  },

  {
    title: "Save your Time & Don't Wait",
    imgUrl: "../../images/order.jpg",
    desc: "Your order will immediately collected and sent by our courier.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: "../../images/door.jpg",
    desc: "Pick Up delivery at your door , Be calm with our payment methods and enjoy delicious foods.",
  },
];
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: "../../images/service-01.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: "../../images/service-02.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: "../../images/service-03.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

export default function Features() {
  return (
    <section className="order_section">
      <Container>
        {/* section1 */}
        <Row>
          <Col lg="12" className="text-center">
            <h5 className="feature__subtitle mb-4">How to make an Order?</h5>
            <h2 className="feature__title">Just Three Easy Steps</h2>
          </Col>
          {orderSteps.map((item, index) => (
            <Col
              lg="4"
              md="6"
              sm="6"
              key={index}
              className="mt-5 mb-5"
              style={{ paddingBottom: 50 }}
            >
              <div className="feature__item card-item text-center px-5 py-3">
                <img
                  src={item.imgUrl}
                  alt="feature-img"
                  className="w-50 mb-3"
                  style={{borderRadius:'50%'}}
                />
                <h5 className=" fw-bold mb-3">{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
            <hr></hr>
        {/* section2 */}
        <Row>
          <Col lg="12" className="text-center">
            <h5 className="feature__subtitle mb-4">What we serve?</h5>
            <h2 className="feature__title">Just sit back at home</h2>
            <h2 className="feature__title">
              we will <span>take care</span>
            </h2>
            <p className="mb-1 mt-4 feature__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              officiis?
            </p>
          </Col>

          {featureData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index} className="mt-5">
              <div className="feature__item card-item text-center px-5 py-3">
                <img
                  src={item.imgUrl}
                  alt="feature-img"
                  className="w-25 mb-3"
                />
                <h5 className=" fw-bold mb-3">{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
