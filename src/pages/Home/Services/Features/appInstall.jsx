import React from 'react'

import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
// import '../../home.css'
import './appInstall.css'

export default function AppInstall() {
  return (
    <section className="install-app">
    <Container>
      <Row>
        <h2 className="title mb-4">
            Get The APP Now
        </h2>
        <Col lg="6" md="6">
            <div className="app">
                <p className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut provident dicta nostrum rem officiis? 
                    Ab exercitationem dolorum vitae recusandae, culpa,
                     praesentium labore nulla nemo dolore consequuntur nihil harum ullam dolorem?
                    <i class="fa-solid fa-download"
                    style={{
                        fontSize:30,
                        padding:20
                    }}></i>
                </p>

                <ListGroup className="m-5">
                    <Col className="border-0 ps-0">
                        <div className="icon d-flex align-items-between gap-2 ">
                            <img src='./images/google play.jpg' ></img>
                        </div>
                    </Col>

                    <Col className="border-0 ps-0" >
                        <div className=" icon d-flex align-items-between gap-2 ">
                            <img src='./images/app store.jpg'></img>
                        </div>
                    </Col>
                </ListGroup>
            </div>
        </Col>

        <Col lg="6" md="6">
          <img src='./images/install.png' className="w-100" />
        </Col>

      </Row>
    </Container>
  </section>
  )
}
