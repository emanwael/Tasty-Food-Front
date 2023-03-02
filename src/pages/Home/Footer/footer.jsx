import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './footer.css'
import '../home.css'

export default function Footer() {
  return (
    <footer className="footer">
    <Container>
      <Row>
        <Col lg="3" md="4" sm="6">
          <div className=" footer__logo text-start">
            <img src='./images/logo.png' alt="logo" />
            <h5>Tasty Treat</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt pariatur accusamus
            </p>
          </div>
        </Col>

        <Col lg="3" md="4" sm="6">
          <h5 className="footer__title">Delivery Time</h5>
          <ListGroup className="deliver__time-list">
            <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <span style={{fontWeight:'bold' , color:'#333'}}>Sunday - Thursday</span>
              <p>10:00am - 11:00pm</p>
            </ListGroupItem>

            <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <span style={{fontWeight:'bold' , color:'#333'}}>Friday - Saturday</span>
              <p>Off day</p>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg="3" md="4" sm="6">
          <h5 className="footer__title">Contact</h5>
          <ListGroup className="deliver__time-list">
            <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <p><strong>Location:</strong> ZindaBazar, Sylhet-3100, Bangladesh</p>
            </ListGroupItem>
            <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <span style={{color:'#333'}}><strong>Phone:</strong> 01712345678</span>
            </ListGroupItem>

            <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <span style={{color:'#333'}}><strong>Email:</strong> example@gmail.com</span>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg="3" md="4" sm="6">
          <h5 className="footer__title">Newsletter</h5>
          <p>Subscribe our newsletter</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <span>
            <i class="fa-solid fa-paper-plane"
                style={{
                    color: '#fff',
                    padding:5,
                    borderRadius: '50%',
                    fontWeight: 500,
                    fontSize:25,
                    width:50,
                    textAlign:'center'
                }}
            ></i>
            </span>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg="6" md="6">
          <p className="copyright__text">
            Copyright - 2022, website made by ITI Team. All Rights
            Reserved.
          </p>
        </Col>
        <Col lg="6" md="6">
          <div className="social__links d-flex align-items-center gap-4 justify-content-end">
            <p className="m-0 fw-bold">Follow: </p>
            <span>
              {" "}
              <Link to="https://www.facebook.com">
                <i class="fa-brands fa-facebook"
                    style={{
                        padding: 10,
                        background: '#333',
                        color: '#fff',
                        borderRadius: '50%',
                        fontWeight: 500,
                    }}
                ></i>
              </Link>{" "}
            </span>

            <span>
              {" "}
              <Link to=" https://www.youtube.com">
                <i class="fa-brands fa-youtube"
                    style={{
                        padding: 10,
                        background: '#333',
                        color: '#fff',
                        borderRadius: '50%',
                        fontWeight: 500,
                    }}
                ></i>
              </Link>{" "}
            </span>

            <span>
              {" "}
              <Link to=" https://www.pinterest.com">
                <i class="fa-brands fa-pinterest"
                    style={{
                        padding: 10,
                        background: '#333',
                        color: '#fff',
                        borderRadius: '50%',
                        fontWeight: 500,
                    }}
                ></i>
              </Link>{" "}
            </span>

            <span>
              {" "}
              <Link to=" https://www.instagram.com">
                <i class="fa-brands fa-instagram"
                    style={{
                        padding: 10,
                        background: '#333',
                        color: '#fff',
                        borderRadius: '50%',
                        fontWeight: 500,
                    }}
                ></i>
              </Link>{" "}
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}
