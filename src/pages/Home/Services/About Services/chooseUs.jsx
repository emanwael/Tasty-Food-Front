import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import '../../home.css'

export default function ChooseUs() {
  return (
    <section className="why__choose-us">
    <Container>
      <Row>
        <Col lg="6" md="6">
          <img src='./images/location.png' alt="why-tasty-treat" className="w-100" />
        </Col>

        <Col lg="6" md="6">
          <div className="why__tasty-treat">
            <h2 className="tasty__treat-title mb-4">
              Why <span>Tasty Treat?</span>
            </h2>
            <p className="tasty__treat-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorum, minus. Tempora reprehenderit a corporis velit,
              laboriosam vitae ullam, repellat illo sequi odio esse iste
              fugiat dolor, optio incidunt eligendi deleniti!
            </p>

            <ListGroup className="mt-4">
              <ListGroupItem className="border-0 ps-0">
                <p className=" choose__us-title d-flex align-items-center gap-2 ">
                <i class="fa-solid fa-check"
                  style={{
                    padding: 5,
                    background: '#df2020',
                    color: '#fff',
                    borderRadius: '50%',
                    fontWeight: 500,
                  }}></i> Fresh and tasty
                  foods
                </p>
                <p className="choose__us-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quia, voluptatibus.
                </p>
              </ListGroupItem>

              <ListGroupItem className="border-0 ps-0">
                <p className="choose__us-title d-flex align-items-center gap-2 ">
                <i class="fa-solid fa-check"
                  style={{
                    padding: 5,
                    background: '#df2020',
                    color: '#fff',
                    borderRadius: '50%',
                    fontWeight: 500,
                  }}></i> Quality support
                </p>
                <p className="choose__us-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Qui, earum.
                </p>
              </ListGroupItem>

              <ListGroupItem className="border-0 ps-0">
                <p className="choose__us-title d-flex align-items-center gap-2 ">
                <i class="fa-solid fa-check"
                  style={{
                    padding: 5,
                    background: '#df2020',
                    color: '#fff',
                    borderRadius: '50%',
                    fontWeight: 500,
                  }}></i>Order from any
                  location{" "}
                </p>
                <p className="choose__us-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Qui, earum.
                </p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}
