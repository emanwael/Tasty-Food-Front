import React from 'react'
import { Carousel } from 'react-bootstrap'
import './topDishes.css'

export default function TopDishes() {
  return (
    <section class="dishes">
    <div class="containers">
      <h2>Top <span style={{color:"rgb(246,114,64)"}}> Dishes </span></h2>
      <Carousel>
        <Carousel.Item>
            <div class="dish grids columns">
                <span  className="img-card">
                    <img src='./images/dish1.png' alt=''/>
                </span>

                <span className="img-card">
                    <img src='./images/dish2.png' alt=''/>
                </span>

                <span className="img-card">
                    <img src='./images/dish3.png' alt=''/>
                </span>

                <span className="img-card">
                    <img src='./images/dish4.png' alt=''/>
                </span>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div class="dish grids columns">
                <span  className="img-card">
                    <img src='./images/dish5.png' alt=''/>
                </span>

                <span className="img-card">
                    <img src='./images/dish6.png' alt=''/>
                </span>

                <span className="img-card">
                    <img src='./images/dish7.png' alt=''/>
                </span>

                <span className="img-card">
                    <img src='./images/dish8.png' alt=''/>
                </span>
            </div>
        </Carousel.Item>
      </Carousel>
    </div>
  </section>
  )
}
