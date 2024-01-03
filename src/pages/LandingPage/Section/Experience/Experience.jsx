import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "./styles";
import { experiences } from "./constants";
import { SectionWrapper } from "./hoc";
import { textVariant } from "./utils/motion";
import './Experience.css'


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#FEFEFE",
        color: "#000",
        boxShadow: '0 8px 0 #B1C4D6',
        borderRadius: '25px'
      }}
      contentArrowStyle={{ borderRight: "10px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
    >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.answer}
            <img className="card" src={experience.img} alt="제목 없음" style={{ maxWidth: '100%', height: 'auto', borderRadius: '25px'}} />
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
  return (
    <>
    <div style={{ backgroundColor: '#F0F0F0' }}>
      <motion.div variants={textVariant()}>
        <div className="text">
          <div className="team-text">슈링크플레이션 </div>
          <div className="team-heading"> 설문 조사 확인하기📝</div>
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
