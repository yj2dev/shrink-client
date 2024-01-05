
import "./index.css";

import Hero from "./Section/Hero/Hero";
import ServiceInfo from "./Section/ServiceInfo/ServiceInfo";
import StartService from "./Section/StartService/StartService";
import Team_info from "./Section/Team_info/Team_info";
const LandingPage = () => {
  return (
    <>
    <div className="LandingPage">
      <Hero />
      <ServiceInfo />
      <StartService />
      <Team_info />
      </div>
    
      {/* <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Footer /> */}
    </>

  );
};

export default LandingPage;
