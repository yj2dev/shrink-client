import React from "react";
import Info from "./images/click_img(F0F0F0).png";
import "./ServiceInfo.css";
import { Link } from "react-router-dom";

const ServiceInfo = () => {
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
    <div className="ServiceInfo-section-container">
      
      <div className="ServiceInfo-section-text-container">
      <section className="hidden">
        <p className="ServiceInfo-subheading">
          <span>슈링크플레이션 상품은</span>
          줄었슈링크에게
          <br />
          <span>물어보세요!! </span>
          <div className="ServiceInfo-section-image-container">
            <Link to="/analysis">
              <img src={Info} alt="" />
            </Link>
          </div>
        </p>
        </section>
        <div className="ServiceInfo-heading hidden">
          슈링크 플레이션 방지 서비스로 똑똑한 소비를!
        </div>
        <div className="ServiceInfo-text hidden">
          슈링크플레이션은 제품의 가격은 그대로 두고 제품의 수량이나 크기,
          품질을 낮춰 판매하는 것입니다.
          <br />
          상품의 가격이 오르면 소비자가 쉽게 눈치채지만, 양이 줄어드는
          슈링크플레이션은 소비자가 알아채기 어려워 공정한 소비를 방해하는
          요인이 될 수 있습니다.
          <br />
          이를 방지하고자 저희 줄었슈링크는 소비자의 똑똑한 소비를 위한
          슈링크플레이션 방지 서비스를 개발하였습니다.
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
