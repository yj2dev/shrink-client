import { Container } from "./styled";
import IntroduceSection from "./Section/Introduce";
import Story1Section from "./Section/Story1";
import Story2Section from "./Section/Story2";
import Story3Section from "./Section/Story3";
import Story4Section from "./Section/Story4";
import Story5Section from "./Section/Story5";
import TeamSection from "./Section/Team";
import Footer from "../../layouts/Footer";
import { useEffect } from "react";

const ExamplePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log("scrollY", window.scrollY);
      if (window.scrollY > 100) {
        // setShowDownArrow(false);
      } else {
        // setShowDownArrow(true);
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <IntroduceSection />
      <Story1Section />
      <Story2Section />
      <Story3Section />
      <Story4Section />
      <Story5Section />
      <TeamSection />
      <Footer />
    </Container>
  );
};

export default ExamplePage;
