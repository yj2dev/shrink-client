import React, { useState, useEffect } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "./constants";
import { SectionWrapper } from "./hoc";
import './Experience.css'
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion";
import { textVariant } from "./utils/motion";

import shrink from "./constants/shrink.png";
import shrink_graph from "./constants/img2(인지여부)_graph.png";

const ExperienceCard = ({ experience }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <VerticalTimelineElement
      contentStyle={{
        width: isMobile ? '85%' : '45%',
        background: "#FEFEFE",
        color: "#000",
        boxShadow: '0 8px 0 #B1C4D6',
        borderRadius: '25px',
      }}

      contentArrowStyle={{ borderRight: "10px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      
    >
        <div className="shrink_content">
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.answer}
            <img className="card" src={experience.img} alt="제목 없음" style={{ maxWidth: '80%', height: 'auto', borderRadius: '25px'}} />
          </p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else{
        entry.target.classList.remove('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  return (
    <>
    <div style={{ backgroundColor: '#F0F0F0' }} >
      <div className="shrink_info_back ">
      <div className='hidden'>
        <div className="Shrink">
          <div className="ShrinkInfo hidden">
            <img src={shrink} className='shrink_img' alt="" />
          </div>
          <div className="shrink_content">
            <div className="shrink-heading"> 슈링크플레이션이란</div>
            <div className="shrink-text"> 
                제품의 양은 줄어들거나 <br />
                질이 낮아지면서 <br />
                가격은 그대로거나 <br />
                증가하는 것을 말해요
            </div>
          </div>
        </div>
      </div>
      
      </div>
      <div className='hidden'>
        <div className="Shrink">
          <div className="shrink_content">
            <div className="shrink-heading"> 대부분의 소비자들은 <br />변화를 잘 눈치채지 못해요</div>
            <div className="shrink-text"> 
            슈링크 플레이션(Shrink Flation)상품에 대해 알고 있었습니까?
              <br /> * 306명 응답
            </div>
          </div>
          <div className="ShrinkInfo">
            <img src={shrink_graph} className='shrink_img' alt="" />
          </div>
        </div>
      </div>

      <motion.div variants={textVariant()}>
        <div className="text">
          <div className="shrink-heading"> 
            줄었슈링크는 
            </div>
            <div className="shrink-text">제품의 양에 의문을<br />
            갖는 소비자들을 위해 만들어졌어요 </div>
        </div>
      </motion.div>
      
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
