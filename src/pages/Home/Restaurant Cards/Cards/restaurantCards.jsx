import React from "react";
import { Link } from "react-router-dom";
import "./restaurantCard.css";

export default function RestaurantCards() {
  return (
    <div className="container restaurant">
      <h3 className="text-center row-md-6 row-sm-4 fs-5">
        Favourite Restaurants
      </h3>
      <div className="cards colums containers grid-container">
        <div className="grid-item card">
          <div className="rows">
            <img src="./images/restaurant1.jpg" alt="" />
          </div>
          <div className="rows justify-content-between p-3">
            <h5>Rates</h5>
            <div>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
            </div>
          </div>

          <div class="img_content rows">
            <div class="icons">
              <h4>Restaurant Name</h4>
              <Link to="/restaurant/:id" style={{ textDecoration: "none" }}>
                <p>Go To Restaurant Page</p>
              </Link>
            </div>
          </div>
        </div>

        <div class="grid-item card">
          <div class="rows">
            <img src="./images/restaurant2.jpg" alt="" />
          </div>

          <div className="rows justify-content-between p-3">
            <h5>Rates</h5>
            <div>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
            </div>
          </div>

          <div class="img_content rows">
            <div class="icons">
              <h4>Restaurant Name</h4>
              <Link to="/restaurant/:id" style={{ textDecoration: "none" }}>
                <p>Go To Restaurant Page</p>
              </Link>
            </div>
          </div>
        </div>

        <div class="grid-item card">
          <div class="rows">
            <img src="./images/restaurant3.jpg" alt="" />
          </div>

          <div className="rows justify-content-between p-3">
            <h5>Rates</h5>
            <div>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
            </div>
          </div>

          <div class="img_content rows">
            <div class="icons">
              <h4>Restaurant Name</h4>
              <Link to="/restaurant/:id" style={{ textDecoration: "none" }}>
                <p>Go To Restaurant Page</p>
              </Link>
            </div>
          </div>
        </div>

        <div class="grid-item card">
          <div class="rows">
            <img src="./images/restaurant4.jpg" alt="" />
          </div>

          <div className="rows justify-content-between p-3">
            <h5>Rates</h5>
            <div>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
            </div>
          </div>

          <div class="img_content rows">
            <div class="icons">
              <h4>Restaurant Name</h4>
              <Link to="/restaurant/:id" style={{ textDecoration: "none" }}>
                <p>Go To Restaurant Page</p>
              </Link>
            </div>
          </div>
        </div>

        <div class="grid-item card">
          <div class="rows">
            <img src="./images/restaurant5.jpg" alt="" />
          </div>

          <div className="rows justify-content-between p-3">
            <h5>Rates</h5>
            <div>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
            </div>
          </div>

          <div class="img_content rows">
            <div class="icons">
              <h4>Restaurant Name</h4>
              <Link to="/restaurant/:id" style={{ textDecoration: "none" }}>
                <p>Go To Restaurant Page</p>
              </Link>
            </div>
          </div>
        </div>

        <div class="grid-item card">
          <div class="rows">
            <img src="./images/restaurant6.jpg" alt="" />
          </div>

          <div className="rows justify-content-between p-3">
            <h5>Rates</h5>
            <div>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
            </div>
          </div>

          <div class="img_content rows">
            <div class="icons">
              <h4>Restaurant Name</h4>
              <Link to="/restaurant/:id" style={{ textDecoration: "none" }}>
                <p>Go To Restaurant Page</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
