// import Main_back from "../../image/Main_backimg.png";
import Main_img from "../../image/iPhone_mockup.png";
import Main_back from '../../image/Main_back_img.png';
import './Hero.css' 
import { Link, Element } from 'react-scroll';
// import React, { useEffect } from 'react';


const Hero = () => {
    // useEffect(() => {
    //     window.onbeforeunload = function pushRefresh() {
    //       window.scrollTo(0, 0);
    //     };
    
    // }, []);
  return (

    <section id="heroSection">
        <div className="hero--section">
            <div className="hero--section--content--box">
                <div className="main-back" >
                    <img src={Main_back} className="background-image"/>
                </div>
                    <div className="hero--section--content">
                        <div className="section--title">어쩌고저쩌고</div>
                    <div className="hero--section--title">
                        <span className="hero--section-title--color">슈링크플래이션</span>
                    </div>
                    <p className="hero--section-description">
                        속지말고 사세요 ~~~!~! ~~!~! ~! 
                        <br /> ~~~~~~~~~~~~~
                    </p>
                    </div>
            </div>
                <div className="hero--section--img">
                    <img src={Main_img}  alt="Hero Section" />
                </div>
                
                <Element name="section-1">
                    <Link to="section2" spy={true} smooth={true} duration={600} offset={-50} id="scroll-btn"></Link>
                </Element>
        </div>
        
        <div id="section2" className="hero2">
            <div className="hero--section--title2" >
                <span className="hero--section-title--color">항상 구매하던 제품 양이<br />줄었다고 느낀 적 없으세요?</span>
                <p className="hero--section-description2">
                    그 느낌, 착각이 아니란 걸 알려드릴게요
                </p>
            </div>
        </div>
    </section>
  )
}

export default Hero