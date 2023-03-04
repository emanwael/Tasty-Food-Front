import React from "react";
import SingleCard from "./singleCard";
import "./dashboard.css";
import "../basics.css";
import MenuCard from "./menuCard";
import BarChart from "./../../pages/Charts/BarChart";
import DoughutChart from "./../../pages/Charts/DoughutChart";
import LineChart from "./../../pages/Charts/LineChart";
import PieChart from "./../../pages/Charts/PieChart";

const carObj = {
  title: "Total Orders",
  totalNumber: 750,
  icon: "fa-solid fa-mobile",
};

const tripObj = {
  title: "Daily Visits",
  totalNumber: 1697,
  icon: "fa-solid fa-mobile",
};
const clientObj = {
  title: "Clients Annually",
  totalNumber: "85k",
  icon: "fa-solid fa-user",
};

const distanceObj = {
  title: "Rates",
  totalNumber: 2167,
  icon: "fa-solid fa-star",
};

const orders1 = [
  {
    id: "01",
    carName: "Mini Cooper",
    rentPrice: 32,
    retweet: "132",
    imgUrl: "./images/product_01.3.jpg",
    percentage: "74",
  },
  {
    id: "02",
    carName: "Porsche 911 Carrera",
    rentPrice: 28,
    retweet: "130",
    imgUrl: "./images/product_2.2.jpg",
    percentage: "74",
  },
  {
    id: "03",
    carName: "Porsche 911 Carrera",
    rentPrice: 28,
    retweet: "130",
    imgUrl: "./images/product_4.3.png",
    percentage: "74",
  },
];

const orders2 = [
  {
    id: "01",
    carName: "Mini Cooper",
    rentPrice: 32,
    retweet: "132",
    imgUrl: "./images/product_01.3.jpg",
    percentage: "74",
  },
  {
    id: "02",
    carName: "Porsche 911 Carrera",
    rentPrice: 28,
    retweet: "130",
    imgUrl: "./images/product_2.2.jpg",
    percentage: "74",
  },
  {
    id: "03",
    carName: "Porsche 911 Carrera",
    rentPrice: 28,
    retweet: "130",
    imgUrl: "./images/product_4.3.png",
    percentage: "74",
  },
];
export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          {/* <SingleCard item={tripObj} />
          <SingleCard item={clientObj} /> */}
          <SingleCard item={distanceObj} />
        </div>

        {/* <div className="recommend__cars-wrapper">
          {orders1.map((item) => (
            <MenuCard item={item} key={item.id} />
          ))}
        </div>
        <div className="recommend__cars-wrapper">
          {orders2.map((item) => (
            <MenuCard item={item} key={item.id} />
          ))}
        </div> */}

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title"> Statistics</h3>
            <BarChart></BarChart>
            <br />
            <br />
            <PieChart></PieChart>
          </div>
          <div className="stats">
            <h3 className="stats__title"> Statistics</h3>
            <DoughutChart></DoughutChart>
            <br />
            <br />
            <LineChart></LineChart>
          </div>
        </div>
      </div>
    </div>
  );
}
