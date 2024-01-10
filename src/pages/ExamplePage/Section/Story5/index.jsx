import { useRef } from "react";
import { Container } from "./styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Story5Section = () => {

  const contentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const contentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'Fade-In 3s forwards';
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
    <Container id="story5">
          <div className="wrapper">
            <div className="content" ref={contentRef}>
              <div className="content-header"> 
                줄었슈링크가 <br/>
                여러분이 원하는 용량 정보를 <br/>
                알려드릴께요 
              </div>
                <div className="content-text"> 
                    줄었슈링크와 함께 <br />
                    속 시원한 소비생활을 시작해보세요 <br />
                </div>
                <button onClick={() => navigate('/analysis')}>
                  슈링크플레이션 제품 확인하기
                </button>
            </div>
          </div>
    </Container>
  );
};

export default Story5Section;
