import React from 'react'
import './index.css'
import Cards from './Cards/Cards'
import Table from './Table/Table'
import RightSide from './RightSide/RightSide'

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="main">
      <span>
        <span>슈링크플레이션</span> 발생 제품 한눈에 보기</span> 
        <div className='explain'>최근 1년간 가격대신 부피가 줄어든 상품이에요.</div>
        <Cards/>
        <Table/>
      </div>
      <div className="RightSide">
        <RightSide/>
      </div>

    </div>
  )
}

export default LandingPage
