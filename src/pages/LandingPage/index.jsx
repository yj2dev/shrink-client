import React from "react";

import ServiceInfo from "./Section/ServiceInfo/ServiceInfo";
import Team_info from "./Section/Team_info/Team_info";
import Experience from "./Section/Experience/Experience";
import Main_back from "./Main_backimg.png";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="main">
          <span>
            어쩌고 저쩌고 <br />
            <span>슈링크플레이션</span> <br />
            <span>속고 사지 마세요 !! </span>
          </span>
          <img src={Main_back} alt="Main" />
          
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
