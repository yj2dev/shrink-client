import React from 'react'
import './index.css'
import Cards from './Section/Cards/Cards'
import Table from './Section/Table/Table'
import RightSide from './Section/RightSide/RightSide'
import ServiceInfo from './Section/ServiceInfo/ServiceInfo'
import Team_info from './Section/Team_info/Team_info'

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="main">
        <div className="LeftSide">
          <span><span>슈링크플레이션</span> 발생 제품 한눈에 보기</span> 
          <div className='explain'>최근 1년간 가격대신 부피가 줄어든 상품이에요.</div>
          <Cards/>
          <Table/>
        </div>
        <div className="RightSide">
          <RightSide/>
        </div>
      </div>
      <div className="ServiceInfo">
        <ServiceInfo/>
      </div>
      <Team_info/>
    </div>
  )
}

export default LandingPage
