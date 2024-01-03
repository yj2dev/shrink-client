import React, { useState } from 'react'
import './Card.css'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Chart from 'react-apexcharts'
import {UilTimes} from '@iconscout/react-unicons'

const Card = (props) => {

const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
        {
            expanded? (
                <ExpandedCard param={props} setExpanded={()=>setExpanded(false)} />
                    ) : (
            <CompactCard param = {props} setExpanded={()=>setExpanded(true)}/>
        )}
    </AnimateSharedLayout>
  )
}


function CompactCard ({param, setExpanded }){
    const Png = param.png;
    return (
        <motion.div className="CompactCard"
        style={{
            background: "rgb(255, 255, 255)",
            boxShadow: param.color.boxShadow,
        }}
        layoutId="expandableCard"
        onClick={setExpanded} // 카드 클릭 시 
        >
        
            <div className="radialBar">
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue}%`}
                />
            </div>
            <div className="detail">    
                <Png/>
                <span>{param.title}</span>
                <span>${param.value}</span>
                <span>100g 당 가격 00$</span>
            </div>
        </motion.div>
    )
}

// ExpandedCard
function ExpandedCard({param, setExpanded}){

    const data = {
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
    
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
          },
    
          fill: {
            colors: ["#fff"],
            type: "gradient",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            colors: ["white"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: true,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
          },
        },
      };
    return (
        <motion.div
        className='ExpandedCard'
        style={{
            background: "rgb(255, 255, 255)",
            boxShadow: param.color.boxShadow,
        }}
        layoutId="expandableCard"
        > 
            <div className='xbtn' style={{ alignSelf: "flex-end", cursor: "pointer", color: "black" }}>  
                <UilTimes onClick={setExpanded} />
            </div>
            <span>{param.title}</span>
            <div className="chartContainer">
                <Chart series={param.series} type='area' options={data.options} />
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    )
}


export default Card
