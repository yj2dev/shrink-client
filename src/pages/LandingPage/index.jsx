import React from 'react'
import './index.css'
import Cards from './Cards/Cards'
const LandingPage = () => {
  return (
    <div className="LandingPage">
        <span>
        <span>슈링크플레이션</span> 발생 제품</span> 
        <span>한눈에 보기</span>
        <div className='explain'>최근 1년간 가격대신 부피가 줄어든 상품이에요.</div>
        <Cards/>
    </div>
  )
}

export default LandingPage
