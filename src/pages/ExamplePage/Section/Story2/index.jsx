import { useRef, useEffect } from "react";
import { Container } from "./styled";
import { useState } from "react";
import snack from "../../img/snack.png";
import arrow from "../../img/arrow-down.png";

const Story2Section = () => {
  const imgRef = useRef(null);
  const downRef = useRef(null);
  const [isPressed, setPressed] = useState(false);

  const handleScroll = () => {
    const value = window.scrollY;
    if (window.scrollY > 950) {
      setPressed(true);
    } else {
      setPressed(false);
    }
    console.log("scroll",value);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const imgObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'pressAnimation 3s forwards';
          } else {
            entry.target.style.animation = 'none';
          }
        });
      },
      { threshold: 0.5 } 
    );

    const DownObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'slide 3s forwards';
          } else {
            entry.target.style.animation = 'none';
          }
        });
      },
      { threshold: 0.5 } 
    );

    imgObserver.observe(imgRef.current);
    DownObserver.observe(downRef.current);

    return () => {
      imgObserver.disconnect();
      DownObserver.disconnect();
    };
  }, []);

  return (
    <Container id="story2">
      <div className="wrapper">
      
          <div className={`img-wrapper ${isPressed ? 'pressed' : ''}`}>
          <div className={`down-wrapper ${isPressed ? 'pressed' : ''}`} >
            <img src={arrow} id="down-img" alt="down-img" ref={downRef}/>
          </div>
            <img 
              src={snack} 
              className='shrink-img'
              alt="shrink-img"
              ref={imgRef}
              />
          </div>
         
          <div className="content">
            <div className="content-header"> <span>슈링크 플레이션</span>이란</div>
              <div className="content-text"> 
                  제품의 양은 <span>줄어들거나</span> <br />
                  질이 <span>낮아지면서</span> <br />
                  가격은 그대로거나 <br />
                  증가하는 것을 말해요
              </div>
            </div>
          </div>
    </Container>
  );
};

export default Story2Section;
