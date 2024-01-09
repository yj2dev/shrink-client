import { Container } from "./styled";
import vote from "../../img/vote-shadow.png";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Story3Section = () => {

  const contentRef = useRef(null);


  useEffect(() => {
    const contentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'slide-left 3s forwards';
            entry.target.style.opacity = 1;
          } else {
            entry.target.style.animation = 'none';
            entry.target.style.opacity = 0;
          }
        });
      },
      { threshold: 0.5 } 
    );


    contentObserver.observe(contentRef.current);

    return () => {
      contentObserver.disconnect();
    };
  }, []);


  return (
    <Container id="story3">
      <div className="wrapper">
          <div className="content" ref={contentRef}>
            <div className="content-header"> 
              대부분의 소비자들은 <br />
              변화를 잘 눈치채지 못 해요
             </div>
              <div className="content-text"> 
              · 슈링크 플레이션 상품을 알고 있었습니까? <br/>
              <span>*306명 응답</span>
              </div>
            </div>
            <div className="img-wrapper">
            <img src={vote} className='vote-img' alt="vote-img" />
          </div>
          </div>
    </Container>
  );
};

export default Story3Section;
