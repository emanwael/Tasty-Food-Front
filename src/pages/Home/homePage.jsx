import React, { useState } from "react";

import Footer from "./Footer/footer";
import Review from "./Services/Review/review";
import ChooseUs from "./Services/About Services/chooseUs";
import Features from "./Services/Features/features";
import About from "./About/about";
import Header from "./Header/header";
import MyNavbar from "./Navbar/myNavbar";
import AppInstall from "./Services/Features/appInstall";
import RestaurantCards from "./Restaurant Cards/Cards/restaurantCards";
import TopDishes from "./Restaurant Cards/Top Dishes/topDishes";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function HomePage() {
  const [categore, setCategore] = useState("all");

  const chosseCategory = (resturantCategory) => {
    setCategore(resturantCategory);
  };
  return (
    <div>
      <MyNavbar></MyNavbar>
      <Header></Header>
      <About chosseCategory={chosseCategory}></About>
      <RestaurantCards categore={categore}></RestaurantCards>
      <TopDishes></TopDishes>
      <Features></Features>
      <ChooseUs></ChooseUs>
      <AppInstall></AppInstall>
      <Review></Review>
      <Footer id="contact" name="contact"></Footer>
    </div>
  );
}
