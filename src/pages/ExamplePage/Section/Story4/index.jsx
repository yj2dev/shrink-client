import { Container } from "./styled";
import cute from "../../img/cute.png"
import { useRef } from "react";
import { useEffect } from "react";

const Story4Section = () => {

  const contentRef = useRef(null);

  useEffect(() => {
    const contentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'slide-right 2s forwards';
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
    <Container id="story4">
     <div className="wrapper">
          <div className="img-wrapper">
            <img src={cute} className='cute-img' alt="cute-img" />
          </div>
          <div className="content" ref={contentRef}>
            <div className="content-header"> <span>줄었슈링크</span>는</div>
              <div className="content-text"> 
                  제품의 양에 의문을 <br />
                  갖는 소비자들을 위해 만들어졌어요 <br />
              </div>
            </div>
          </div>
    </Container>
  );
};

export default Story4Section;
