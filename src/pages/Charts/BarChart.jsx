import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  BarElement,
  CategoryScale,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import axios from "axios";
ChartJS.register(CategoryScale, LinearScale, BarElement);

const BarChart = () => {
  const [chart, setChart] = useState({ x: [], y: [], totalOrders: 0 });
  var baseUrl =
    "http://localhost:5100/analysis/restaurant/63d1867c42eb0fcac7149f49";
  const getData = async () => {
    try {
      const response = await axios.get(`${baseUrl}`);
      // console.log(response)
      var orders = [];
      var meals = [];

      var AllOrders = response.data.total_orders;
      response.data.meals_orders.map((meal) => {
        orders.push(meal.number_of_orders);
        meals.push(meal.meal_id.meal_name);
      });
      setChart({ x: meals, y: orders, totalOrders: AllOrders });
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getData();
  }, []);

  var data = {
    labels: chart.x.map((mealName) => mealName),
    datasets: [
      {
        label: `Total orders ${chart.totalOrders}`,
        data: chart.y.map((numOrders) => numOrders),
        //data: chart?.analysis?.map(x => x.number_of_orders),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return (
    <div>
      <Bar data={data} height={200} options={options} />
    </div>
  );
};

export default BarChart;
