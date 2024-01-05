// import Main_back from "../../image/Main_backimg.png";
import Main_img from "../../image/iPhone_mockup.png";
import Main_back from '../../image/Main_back_img.png';
import './Hero.css' 


const Hero = () => {
  return (

    <section id="heroSection" className="hero--section">
    
      <div className="hero--section--content--box">
      <div className="main-back">
        <img src={Main_back} className="background-image" />
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
    </section>
  )
}

export default Hero