import React from 'react'
import Chart from "react-apexcharts";
import './RightSide.css'

const RightSide = () => {
    const data = {
        series: [
          {
            name: "가격",
            data: [1000, 2000, 1000, 4000, 3000, 6000, 5000],
          },
        ],
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
    
          fill: {
            colors: ["#fff"],
            type: "gradient",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            colors: ["#ff929f"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: true,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
          },
          yaxis: {
            show: true
          },
          toolbar:{
            show: false
          }
        },
      };
      return (
      
      <div className="ProductGraph">
            <h2>00상품 가격 변동</h2>
            <Chart options={data.options} series={data.series} type="area" />
            <h2>00상품 가격 변동</h2>
            <Chart options={data.options} series={data.series} type="area" />
            <h2>00상품 가격 변동</h2>
            <Chart options={data.options} series={data.series} type="area" />
      </div>
      
      );
}

export default RightSide
