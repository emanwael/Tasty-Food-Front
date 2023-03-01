import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import logo from "./logo.png";

const Logo = () => {
  // const { restaurantInfo } = useSelector((state) => state.menuSlice);
  // const { logo, restaurant_name } = restaurantInfo;
  return (
    <div className="header-content_logo">
      <div>
        <img src={logo} alt="logo" />
        <span>{/* <b>Tasty food</b> */}</span>
      </div>
      <p>
        {/* <b>Restaurant & BBQ</b> */}
        <b>Tasty food</b>
      </p>
    </div>
  );
};

export default Logo;
