import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './header.css'
import '../home.css'


export default function Header() {
  return (
    <Carousel fade>
      <Carousel.Item interval={5000}>
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero__content  ">
                  <h5 className="mb-3">Easy way to make an order</h5>
                  <h1 className="mb-4 hero__title">
                    <span>HUNGRY?</span> Just wait <br /> food at
                    <span> your door</span>
                  </h1>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aliquam odit ducimus aut accusamus obcaecati pariatur perferendis, 
                    sed qui commodi dolore dolorem, inventore in libero iusto optio tempora error esse nesciunt.
                  </p>

                  <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button className="order__btn d-flex align-items-center justify-content-between">
                      Order now <i class="ri-arrow-right-s-line"></i>
                    </button>

                    <button className="all__foods-btn">
                      <Link to="/foods" className='link'>See all foods</Link>
                    </button>
                  </div>

                  <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                    <p className=" d-flex align-items-center gap-2 ">
                      <span className="shipping__icon">
                        <i 
                        class="fa-thin fa-truck"
                        style={{
                          padding: 10,
                          background: '#f67240',
                          color: '#fff',
                          borderRadius: '50%',
                          fontWeight: 500,
                        }}></i>
                      </span>{" "}
                      No shipping charge
                    </p>

                    <p className=" d-flex align-items-center gap-2 ">
                      <span className="shipping__icon">
                        <i class="fa-solid fa-money-check-dollar"
                        style={{
                          padding: 10,
                          background: '#f67240',
                          color: '#fff',
                          borderRadius: '50%',
                          fontWeight: 500,
                        }}></i>
                      </span>{" "}
                      100% secure checkout
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg="6" md="6">
                <div className="hero__img">
                  <img src='./images/hero.png' alt="hero-img" className="w-100" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Carousel.Item>

      <Carousel.Item>
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero__content  ">
                  <h5 className="mb-3">Easy way to make an order</h5>
                  <h1 className="mb-4 hero__title">
                    <span>HUNGRY?</span> Just wait <br /> open our website
                    <span> and make an order.</span>
                  </h1>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aliquam odit ducimus aut accusamus obcaecati pariatur perferendis, 
                    sed qui commodi dolore dolorem, inventore in libero iusto optio tempora error esse nesciunt.
                  </p>

                  <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button className="order__btn d-flex align-items-center justify-content-between">
                      Order now <i class="ri-arrow-right-s-line"></i>
                    </button>

                    <button className="all__foods-btn">
                      <Link to="/foods" className='link'>See all foods</Link>
                    </button>
                  </div>

                  <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                    <p className=" d-flex align-items-center gap-2 ">
                      <span className="shipping__icon">
                        <i 
                        class="fa-solid fa-truck-fast" 
                        style={{
                          padding: 10,
                          background: '#f67240',
                          color: '#fff',
                          borderRadius: '50%',
                          fontWeight: 500,
                        }}></i>
                      </span>{" "}
                      No shipping charge
                    </p>

                    <p className=" d-flex align-items-center gap-2 ">
                      <span className="shipping__icon">
                        <i class="fa-solid fa-money-check-dollar"
                        style={{
                          padding: 10,
                          background: '#f67240',
                          color: '#fff',
                          borderRadius: '50%',
                          fontWeight: 500,
                        }}></i>
                      </span>{" "}
                      100% secure checkout
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg="6" md="6">
                <div className="hero__img">
                  <img src='./images/Order food-pana.png' alt="hero-img" className="w-100" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Carousel.Item>

      <Carousel.Item>
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero__content  ">
                  <h5 className="mb-3">Easy way to make an order</h5>
                  <h1 className="mb-4 hero__title">
                    <span>Still Worry?</span> Just wait <br /> We have 
                    <span> a secure <span style={{color:'#f67240' , fontWeight:'bold'}}>Payment</span> method</span>
                  </h1>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aliquam odit ducimus aut accusamus obcaecati pariatur perferendis, 
                    sed qui commodi dolore dolorem, inventore in libero iusto optio tempora error esse nesciunt.
                  </p>

                  <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button className="order__btn d-flex align-items-center justify-content-between">
                      Order now <i class="ri-arrow-right-s-line"></i>
                    </button>

                    <button className="all__foods-btn">
                      <Link to="/foods" className='link'>See all foods</Link>
                    </button>
                  </div>

                  <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                    <p className=" d-flex align-items-center gap-2 ">
                      <span className="shipping__icon">
                        <i 
                        class="fa-solid fa-truck-fast" 
                        style={{
                          padding: 10,
                          background: '#f67240',
                          color: '#fff',
                          borderRadius: '50%',
                          fontWeight: 500,
                        }}></i>
                      </span>{" "}
                      No shipping charge
                    </p>

                    <p className=" d-flex align-items-center gap-2 ">
                      <span className="shipping__icon">
                        <i class="fa-solid fa-money-check-dollar"
                        style={{
                          padding: 10,
                          background: '#f67240',
                          color: '#fff',
                          borderRadius: '50%',
                          fontWeight: 500,
                        }}></i>
                      </span>{" "}
                      100% secure checkout
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg="6" md="6">
                <div className="hero__img">
                  <img src='./images/payment.png' alt="hero-img" className="w-100" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Carousel.Item>
    </Carousel>
  )
}
