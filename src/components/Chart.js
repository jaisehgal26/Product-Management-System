import React from "react";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import Fade from "react-reveal/Fade";

function GraphChart() {
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState([]);

  const selectChart = (e) => {
    axios.get(`http://localhost:3000/products`).then((res) => {
      const productData = res.data;
      let productName = [];
      let price = [];
      productData.forEach((element) => {
        productName.push(element.productname);
        price.push(element.price);
      });
      setProduct(productName);
      setPrice(price);
    });
  };
  useEffect(() => {
    selectChart();
  }, []);
  const data = {
    labels: product,
    datasets: [
      {
        label: "Products Price in $",
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
      <Bar data={data} />
      <h6 className="text-center mt-1 Playfair">Products Pricing in USD$</h6>
      <hr />
    </Fade>
  );
}
export default GraphChart;
