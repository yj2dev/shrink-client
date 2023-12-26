import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { AlertContainer, Container, WebcamContainer } from "./styled";
import { Link } from "react-router-dom";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
const AnalysisPage = () => {
  const webcamRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [alertStatus, setAlertStatus] = useState("");
  const onSubmit = () => {
    if (webcamRef.current) {
      setIsLoading(true);

      const imageSrc = webcamRef.current.getScreenshot();

      fetch(imageSrc)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "webcam-image.png", {
            type: "image/png",
          });
          const fd = new FormData();
          fd.append("image", file);

          return axios.post("/api/product/analysis", fd, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        })
        .then((res) => {
          if (res.data.isShrink) {
            setAlertStatus("shrinkOccurred");
          } else {
            setAlertStatus("noShrink");
            setTimeout(() => {
              setAlertStatus("");
            }, 3000);
          }
        })
        .catch((err) => {
          console.error(err);
          setAlertStatus("checkInternet");
          setTimeout(() => {
            setAlertStatus("");
          }, 3000);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  return (
    <>
      <Container>
        <AlertContainer className={alertStatus}>
          {alertStatus === "noShrink" &&
            "최근 슈링크 발생 내역이 없는 상품입니다."}
          {alertStatus === "shrinkOccurred" && "슈링크가 발생했습니다."}
          {alertStatus === "checkInternet" &&
            "서버와 통신이 원활하지 않습니다."}
        </AlertContainer>

        <WebcamContainer>
          <Webcam ref={webcamRef} />
          <button disabled={isLoading} onClick={onSubmit}>
            {!isLoading ? "상품 분석" : <ScaleLoader color="#fff" />}
          </button>
        </WebcamContainer>
      </Container>
    </>
  );
};

export default AnalysisPage;
