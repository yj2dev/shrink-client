import { Arrow, Container } from "./styled";
import mockupImg from "./img/mockup.png";
import { IoIosArrowDown } from "react-icons/io";

const IntroduceSection = () => {
  const onClickTeam = () => {
    document.getElementById("team").scrollIntoView({ behavior: "smooth" });
  };

  const onClickStory1 = () => {
    document.getElementById("story1").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container onClick={onClickStory1}>
      <div className="left">
        <div className="title">
          <h2>같은 과자도 다시 보자</h2>
          <h1>슈링크플레이션</h1>
        </div>
        <button className="move-story1">
          <Arrow>
            <IoIosArrowDown />
          </Arrow>
          <Arrow className="delay">
            <IoIosArrowDown />
          </Arrow>
        </button>
      </div>
      <div className="right">
        <img className="mokup" src={mockupImg} alt="목업 이미지" />
      </div>
    </Container>
  );
};

export default IntroduceSection;
