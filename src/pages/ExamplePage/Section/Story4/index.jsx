import { Container } from "./styled";
import cute from "../../img/cute_26.jpg"

const Story4Section = () => {
  return (
    <Container id="story4">
     <div className="wrapper">
          <div className="img-wrapper">
            <img src={cute} className='cute-img' alt="cute-img" />
          </div>
          <div className="content">
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
