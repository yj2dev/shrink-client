import { Container } from "./styled";
import vote from "../../img/vote-shadow.png";

const Story3Section = () => {
  return (
    <Container id="story3">
      <div className="wrapper">
          <div className="content">
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
