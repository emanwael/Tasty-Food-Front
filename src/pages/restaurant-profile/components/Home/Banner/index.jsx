import React from "react";
import "./styles.css";
import bannerImg from "./banner.png";
import Logo from "../../common/Logo";
import { useSelector } from "react-redux";

const Banner = ({ handleScrollMenu }) => {
  const { restaurantInfo } = useSelector((state) => state.mealSlice);
  const { logo, restaurant_name } = restaurantInfo;
  return (
    <header>
      <div className="header-content">
        {/* <Logo /> */}
        <div className="content-main">
          <h1>{restaurant_name}</h1>
          {/* <p>We made fresh and healthy meals with different recipes</p> */}
          <button onClick={handleScrollMenu}>
            View Menu <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
      <img className="header-img" src={bannerImg} alt="banner" />
    </header>
  );
};

export default Banner;
