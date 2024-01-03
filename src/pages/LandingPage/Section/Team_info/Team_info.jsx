import React from "react";
import './Team_info.css'

import DM from "./image/dm.png";
import YJ from "./image/YJ.png";
import DI from "./image/DI.png";
import JW from "./image/JW.png";
import SH from "./image/SH.png";
import SJ from "./image/SJ.png";
import SM from "./image/SM.png";
import AH from "./image/AH.png";


const Team_info = () => {
  
  const workInfoData = [
    {
      image: JW,
      title: "🐻김진우",
      text: "Model",
    },
    {
      image: DI,
      title: "🐰최다인",
      text: "Model ",
    },
    {
      image: DM,
      title: "🐶김동민",
      text: "Infra",
    },
    {
      image: SJ,
      title: "🐼이승주",
      text: "Frontend",
    },
    {
      image: YJ,
      title: "🪿이유진",
      text: "Frontend",
    },
    {
      image: AH,
      title: "🐱홍아현",
      text: "Frontend",
    },
    {
      image: SM,
      title: "🐻‍❄️김성민",
      text: "Backend ",
    },
    {
      image: SH,
      title: "🐯박성현",
      text: "Backend",
    },

  ];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else{
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  return (
   <div className="team-section-wrapper">
    <div className="team-section-top hidden">
      <p className="team-subheading">팀 소개</p>
      <div className="team-heading">전남/전북 AI 9반 26조</div>
      <p className="team-text">
        KT Aivle School 4기 AI트랙 빅프로젝트 진행하는 26조입니다🤭
      </p>
      <p className="team-text">
        김동민, 김성민, 김진우, 박성현, 이승주, 이유진, 최다인, 홍아현 총 8명의 팀원으로 이루어져 있습니다.✌️😊
      </p>
    </div>
    <div className="team-section-bottom hidden">
      {workInfoData.map((data) => (
        <div className="team-section-info" key={data.title}>
          <div className="team-boxes-img-container">
            <img src={data.image} alt="" />
          </div>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
      ))}
    </div>
</div>
);
  
};

export default Team_info;
