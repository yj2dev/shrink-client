import { Container } from "./styled";
import IntroduceSection from "./Section/Introduce";
import Story1Section from "./Section/Story1";
import Story2Section from "./Section/Story2";
import Story3Section from "./Section/Story3";
import Story4Section from "./Section/Story4";
import Story5Section from "./Section/Story5";
import TeamSection from "./Section/Team";
import Footer from "../../layouts/Footer";

const ExamplePage = () => {
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
