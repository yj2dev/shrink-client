import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import {
  AlertContainer,
  AnalysisResultMenu,
  Container,
  WebcamContainer,
} from "./styled";
import { Link } from "react-router-dom";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import { IoIosArrowBack } from "react-icons/io";
const AnalysisPage = () => {
  const webcamRef = useRef(null);

  const [cameras, setCameras] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [alertStatus, setAlertStatus] = useState("");

  const [showResultMenu, setShowResultMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const videoDevices = devices.filter(
        (device) => device.kind === "videoinput",
      );
      setCameras(videoDevices);
      if (videoDevices.length > 0) {
        setSelectedCamera(videoDevices[0].deviceId);
      }
    });
  }, []);

  const onChangeCamera = (e) => {
    setSelectedCamera(e.target.value);
  };

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
            }, 4000);
          }
        })
        .catch((err) => {
          console.error(err);
          setAlertStatus("checkInternet");
          setTimeout(() => {
            setAlertStatus("");
          }, 4000);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleItemClick = (item) => {
    setExpandedItems((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }));
  };

  return (
    <>
      <Container>
        <button
          onClick={() => {
            console.log("click to cors test btn");

            axios
              .get("/query")
              .then((res) => {
                console.log("query res >> ", res);
              })
              .catch((err) => {
                console.log("query err >> ", err);
              });
          }}
        >
          cors test
        </button>
        <AlertContainer className={alertStatus}>
          {alertStatus === "noShrink" &&
            "최근 슈링크 발생 내역이 없는 상품입니다."}
          {alertStatus === "shrinkOccurred" && "슈링크가 발생했습니다."}
          {alertStatus === "checkInternet" &&
            "서버와 통신이 원활하지 않습니다."}
        </AlertContainer>

        <AnalysisResultMenu className={showResultMenu ? "active" : ""}>
          <button
            className={`result-btn ${showResultMenu ? "active" : ""}`}
            onClick={() => setShowResultMenu(!showResultMenu)}
          >
            <IoIosArrowBack />
          </button>
          <ul>
            {["바나나킥", "콘초", "동원 참치", "분석 실패"].map(
              (item, index) => (
                <li
                  key={index}
                  onClick={() => handleItemClick(item)}
                  className={expandedItems[item] ? "expanded" : ""}
                >
                  {item} <span>1분전</span>
                  {expandedItems[item] && (
                    <div className="item-details">상세 정보: {item}</div>
                  )}
                </li>
              ),
            )}
          </ul>
        </AnalysisResultMenu>

        <select onChange={onChangeCamera} value={selectedCamera}>
          {cameras.map((camera, index) => (
            <option key={camera.deviceId} value={camera.deviceId}>
              Camera {index + 1}
            </option>
          ))}
        </select>

        <WebcamContainer>
          <Webcam
            ref={webcamRef}
            videoConstraints={{
              deviceId: selectedCamera ? { exact: selectedCamera } : undefined,
            }}
          />
          <button disabled={isLoading} onClick={onSubmit}>
            {!isLoading ? "상품 분석" : <ScaleLoader color="#fff" />}
          </button>
        </WebcamContainer>
      </Container>
    </>
  );
};

export default AnalysisPage;
