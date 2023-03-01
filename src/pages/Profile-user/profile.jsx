import React from "react";

import "./profile.css";
import MyNavbar from "../Home/Navbar/myNavbar";
import Userprofile from "./userProfile/userprofile";
import Favrestaurants from "./favRasturant/favrestaurants";

export default function Profile() {
  return (
    <div className="App-container">
      <MyNavbar />
      <Userprofile></Userprofile>
      <Favrestaurants></Favrestaurants>
    </div>
  );
}
