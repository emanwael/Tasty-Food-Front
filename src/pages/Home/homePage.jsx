import React from 'react'

import Footer from "./Footer/footer";
import Review from './Services/Review/review';
import ChooseUs from "./Services/About Services/chooseUs";
import Features from './Services/Features/features';
import About from './About/about';
import Header from './Header/header';
import MyNavbar from './Navbar/myNavbar';

export default function HomePage() {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <Header></Header>
      <About></About>
      <Features></Features>
      <ChooseUs></ChooseUs>
      <Review></Review>
      <Footer></Footer>
    </div>
  )
}
