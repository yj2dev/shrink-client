import { Container } from "./styled";

const Story2Section = () => {
  return (
    <Container id="story2">
      <div className="wrapper">
          <div className="img-wrapper">
            <img src="https://cdn.betterlifenews.co.kr/news/photo/202211/894_2556_445.jpg" className='shrink-img' alt="shrink-img" />
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
