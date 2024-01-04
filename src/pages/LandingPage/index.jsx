import React from "react";
import "./index.css";
import Cards from "./Section/Cards/Cards";
import Table from "./Section/Table/Table";
import RightSide from "./Section/RightSide/RightSide";
import ServiceInfo from "./Section/ServiceInfo/ServiceInfo";
import Team_info from "./Section/Team_info/Team_info";
import Experience from "./Section/Experience/Experience";
// import Hero from './Section/Hero/Hero'

import Spline from "@splinetool/react-spline";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="main">
        {/* <Hero /> */}
        <div className="LeftSide">
          <span>
            <span>슈링크플레이션</span> 발생 제품 한눈에 보기
          </span>
          <div className="explain">
            최근 1년간 가격대신 부피가 줄어든 상품이에요.
          </div>

          {/* <Cards/>
          <Table/> */}
        </div>
        {/* <div className="RightSide" >
          <RightSide/>
        </div> */}
        <Spline scene="https://prod.spline.design/kDVBUHewOGZNtJ5C/scene.splinecode" />
      </div>
      <div className="ServiceInfo">
        <ServiceInfo />
      </div>
      <Experience />
      <Team_info />
    </div>
  );
};

export default LandingPage;
