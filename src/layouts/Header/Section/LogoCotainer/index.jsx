import { Container } from "./styled";
import logoImg1 from "../../img/logo1.png";
import logoImg2 from "../../img/logo2.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LogoContainer = () => {
  const navigate = useNavigate();

  const [isLogoHover, setIsLogoHover] = useState(false);

  const handleLogoEnter = () => {
    setIsLogoHover(true);
  };

  const handleLogoLeave = () => {
    setIsLogoHover(false);
  };

  const onClickLogo = () => {
    navigate("/");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <div
        onClick={onClickLogo}
        className="logo-section"
        onMouseEnter={handleLogoEnter}
        onMouseLeave={handleLogoLeave}
      >
        <img src={logoImg2} alt="logo" className="logo-img" />
        <div className="content">
          <h1 className={isLogoHover ? "active" : ""}>줄었슈링크</h1>
          <h3 className={isLogoHover ? "active" : ""}>같은 과자도 다시 보자</h3>
        </div>
      </div>
    </Container>
  );
};

export default LogoContainer;
