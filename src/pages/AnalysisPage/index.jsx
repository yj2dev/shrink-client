import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { Container, WebcamContainer } from "./styled";
import { Link } from "react-router-dom";

const AnalysisPage = () => {
  const webcamRef = useRef(null);

  return (
    <Container>
      {/*<Link to="/">홈페이지</Link>*/}
      <WebcamContainer>
        <Webcam ref={webcamRef} />
        <button>상품 분석</button>
      </WebcamContainer>
    </Container>
  );
};

export default AnalysisPage;
