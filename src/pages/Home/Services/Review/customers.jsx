import React from 'react'
import './review.css'
import '../../home.css'
import { Carousel } from 'react-bootstrap';
export default function Customers() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Carousel {...settings}>
      <Carousel.Item>
        <div>
          <p className="review__text">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            atque, quam minus totam maiores laborum! Impedit consectetur illum
            aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
            quis dolorem quas!"
          </p>
          <div className=" slider__content d-flex align-items-center gap-3 ">
            <img src='./images/ava-1.jpg' alt="avatar" className=" rounded" />
            <h6>Jhon Doe</h6>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div>
          <p className="review__text">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            atque, quam minus totam maiores laborum! Impedit consectetur illum
            aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
            quis dolorem quas!"
          </p>
          <div className="slider__content d-flex align-items-center gap-3 ">
            <img src='./images/ava-2.jpg' alt="avatar" className=" rounded" />
            <h6>Mitchell Marsh</h6>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div>
          <p className="review__text">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            atque, quam minus totam maiores laborum! Impedit consectetur illum
            aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
            quis dolorem quas!"
          </p>
          <div className="slider__content d-flex align-items-center gap-3 ">
            <img src='./images/ava-3.jpg' alt="avatar" className=" rounded" />
            <h6>Steven Crock</h6>
          </div>
        </div>
      </Carousel.Item>
  </Carousel>
  )
}
