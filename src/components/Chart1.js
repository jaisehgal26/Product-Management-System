import React from "react";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Fade from "react-reveal/Fade";

function GraphChart() {
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState([]);

  const selectChart = (e) => {
    axios.get(`http://localhost:3000/productviewed`).then((res) => {
      const countryData = res.data;
      let count = 0;
      let productName = [];
      let price = [];
      let products = [];
      let countData = [];
      countryData.forEach((element) => {
        productName.push(element.productname);
        price.push(element.price);
      });
      products = [...new Set(productName)];
      for (let i = 0; i < products.length; i++) {
        count = 0;
        for (let j = 0; j < productName.length; j++) {
          if (products[i] === productName[j]) {
            count++;
          }
        }
        countData.push(count);
      }

      setProduct(products);
      setPrice(countData);
    });
  };
  useEffect(() => {
    selectChart();
  }, []);
  const data = {
    labels: product,
    datasets: [
      {
        label: "Top Selling Products",
        data: price,
        fill: true,
        backgroundColor: "rgba(246, 211, 101, 1)",
        borderColor: "rgba(253, 160, 133, 1)",
      },
    ],
  };
  return (
    <Fade bottom>
      <hr />
      <Line data={data} />

      <h6 className="text-center mt-1 Playfair">Our Top Selling Product</h6>
      <hr />
    </Fade>
  );
}
export default GraphChart;
