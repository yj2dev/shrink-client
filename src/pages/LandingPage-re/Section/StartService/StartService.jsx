import React, { useEffect } from "react";
import Info from "./images/click_img.png";
import "./StartService.css";
import { Link } from "react-router-dom";
const StartService = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="StartService-section-container">
      <div className="StartService-section-text-container hidden">
        <section>
          <p className="StartService-subheading">
            <span>줄었슈링크가</span>
            여러분이 원하는 용량 정보를 
            <br />
            <span>알려드릴게요 </span>
            <div className="StartService-section-image-container">
              <Link to="/analysis">
                <img src={Info} alt="" />
              </Link>
            </div>
          </p>
        </section>
        <div className="StartService-heading hidden">
          줄었슈링크와 함께 똑똑한 소비생활을 시작해보세요
        </div>
        {/* <div className="StartService-text hidden">
          슈링크플레이션은 제품의 가격은 그대로 두고 제품의 수량이나 크기,
          품질을 낮춰 판매하는 것입니다.
          <br />
          상품의 가격이 오르면 소비자가 쉽게 눈치채지만, 양이 줄어드는
          슈링크플레이션은 소비자가 알아채기 어려워 공정한 소비를 방해하는
          요인이 될 수 있습니다.
          <br />
          이를 방지하고자 저희 줄었슈링크는 소비자의 똑똑한 소비를 위한
          슈링크플레이션 방지 서비스를 개발하였습니다.
        </div> */}
      </div>
    </div>
  );
};

export default StartService;