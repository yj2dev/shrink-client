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
        <div className="content">
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
  return (
    <>
    <div style={{ backgroundColor: '#F0F0F0' }}>

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
