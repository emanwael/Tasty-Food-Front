import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Customers from './customers'

import './review.css'
import '../../home.css'

export default function Review() {
  return (
    <section>
    <Container>
      <Row>
        <Col lg="6" md="6">
          <div className="testimonial ">
            <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
            <h2 className="testimonial__title mb-4">
              What our <span>customers</span> are saying
            </h2>
            <h5 className="testimonial__subtitle mb-2"> REVIEWS </h5>
            <Customers></Customers>
          </div>
        </Col>

        <Col lg="6" md="6">
          <img src='./images/customer reviews.png' alt="testimonial-img" className="w-100" />
        </Col>
      </Row>
    </Container>
  </section>
  )
}
