import React from 'react'

import Footer from "./Footer/footer";
import Review from './Services/Review/review';
import ChooseUs from "./Services/About Services/chooseUs";
import Features from './Services/Features/features';
import About from './About/about';
import Header from './Header/header';
import MyNavbar from './Navbar/myNavbar';
import AppInstall from './Services/Features/appInstall';
import RestaurantCards from './Restaurant Cards/Cards/restaurantCards';
import TopDishes from './Restaurant Cards/Top Dishes/topDishes';

export default function HomePage() {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <Header></Header>
      <About></About>
      <RestaurantCards></RestaurantCards>
      <TopDishes></TopDishes>
      <Features></Features>
      <ChooseUs></ChooseUs>
      <AppInstall></AppInstall>
      <Review></Review>
      <Footer></Footer>
    </div>
  )
}
