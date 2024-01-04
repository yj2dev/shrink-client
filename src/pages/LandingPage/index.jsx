import React from "react";
import "./index.css";
import RightSide from "./Section/RightSide/RightSide";
import ServiceInfo from "./Section/ServiceInfo/ServiceInfo";
import Team_info from "./Section/Team_info/Team_info";
import Experience from "./Section/Experience/Experience";

import Spline from "@splinetool/react-spline";
    
const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="main">
        <div className="LeftSide">
          <span>
            어쩌고 저쩌고 <br /> <span>슈링크플레이션</span> 
          </span>
          <div className="explain">
            속고 사지 마세요 !! 
          </div>
        </div>
        <div className="spline-container">
        <Spline scene="https://prod.spline.design/6lr9wc0t8XiooGtR/scene.splinecode" />
        </div>
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
