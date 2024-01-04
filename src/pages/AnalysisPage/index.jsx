import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import {
  AlertContainer,
  AlertContainerHidden,
  AnalysisResultMenu,
  CameraSelectCotainer,
  Container,
  WebcamContainer,
} from "./styled";
import { Link } from "react-router-dom";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import { IoIosArrowBack } from "react-icons/io";
import {
  IoCameraReverseOutline,
  IoCloseOutline,
  IoMenu,
} from "react-icons/io5";

import defaultCameraImg1 from "./img/default-camera.jpg";
import defaultCameraImg2 from "./img/default-camera.gif";
import { timeAgo, toKst } from "../../utils/time";

const AnalysisPage = () => {
  const webcamRef = useRef(null);

  const [cameras, setCameras] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [alertStatus, setAlertStatus] = useState("");

  const [showResultMenu, setShowResultMenu] = useState(false);
  const [resultItems, setResultItems] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});

  const [showCameraList, setShowCameraList] = useState(false);

  const cameraMenuRef = useRef(null);

  const [randomCameraImg, setRandomCameraImg] = useState(null);

  const getResultItems = () => {
    axios
      .post("/api/product/select/analysis_list", {
        is_reading: false,
      })
      .then((res) => {
        console.log("res >> ", res);
        if (res.data.status === "success") {
          setResultItems(res.data.response);
        }
      })
      .catch((err) => {
        console.log("err >> ", err);
      });
  };

  useEffect(() => {
    getResultItems();
  }, []);

  useEffect(() => {
    const images = [defaultCameraImg1, defaultCameraImg2];
    const selectedImage = images[Math.floor(Math.random() * images.length)];
    setRandomCameraImg(selectedImage);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cameraMenuRef.current &&
        !cameraMenuRef.current.contains(event.target)
      ) {
        setShowCameraList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          console.log("res >> ", res);

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

  const onRotateCamera = () => {
    const currentIndex = cameras.findIndex(
      (camera) => camera.deviceId === selectedCamera,
    );
    const nextIndex = (currentIndex + 1) % cameras.length;
    setSelectedCamera(cameras[nextIndex].deviceId);
  };

  return (
    <>
      <Container>
        <AlertContainerHidden />
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
            {resultItems.map((result, index) => {
              return (
                <li
                  key={index}
                  onClick={() => handleItemClick(result.name)}
                  className={expandedItems[result.name] ? "expanded" : ""}
                >
                  <img
                    src={`${process.env.REACT_APP_API_BASE_URL}/api/product/detect/${result.image_url}`}
                  />
                  <div>{result.is_reading ? "읽음" : "읽지 않음"}</div>
                  <div>{timeAgo(result.create_at)}</div>
                  <div>{toKst(result.create_at)}</div>
                  <div>
                    {result.result.length > 0 &&
                      result.result.map((item, index) => {
                        return (
                          <div key={index}>
                            <div>{item.product_id}</div>
                            <div>{item.result}</div>
                            <div>{item.weight}</div>
                          </div>
                        );
                      })}
                  </div>
                </li>
              );
            })}

            {/*{["바나나킥", "콘초", "동원 참치", "분석 실패"].map(*/}
            {/*  (item, index) => (*/}
            {/*    <li*/}
            {/*      key={index}*/}
            {/*      onClick={() => handleItemClick(item)}*/}
            {/*      className={expandedItems[item] ? "expanded" : ""}*/}
            {/*    >*/}
            {/*      {item} <span>1분전</span>*/}
            {/*      {expandedItems[item] && (정보: {item}</div>*/}
            {/*      )}*/}
            {/*    </li>*/}
            {/*  <div className="item-details">상세*/}
            {/*  ),*/}
            {/*)}*/}
          </ul>
        </AnalysisResultMenu>

        <WebcamContainer>
          <div className="camera-select-container">
            <button
              className={`camera-btn ${showCameraList ? "active" : ""}`}
              onClick={() => {
                setShowCameraList(!showCameraList);
              }}
            >
              <div
                className={`camera-menu ${showCameraList ? "active" : ""}`}
                ref={cameraMenuRef}
              >
                <ul>
                  {cameras &&
                    cameras.map((camera, index) => (
                      <li
                        key={camera.deviceId}
                        className={
                          selectedCamera === camera.deviceId ? "active" : ""
                        }
                        onClick={() => {
                          setSelectedCamera(camera.deviceId);
                          setShowCameraList(false);
                        }}
                      >
                        {camera.label || `Camera ${index + 1}`}
                      </li>
                    ))}
                </ul>
              </div>
              {showCameraList ? (
                <>
                  <IoCloseOutline />
                </>
              ) : (
                <>
                  <IoMenu />
                </>
              )}
            </button>

            <button className="camera-btn" onClick={onRotateCamera}>
              <IoCameraReverseOutline />
            </button>
          </div>
          <img src={randomCameraImg} />
          <Webcam
            ref={webcamRef}
            videoConstraints={{
              deviceId: selectedCamera ? { exact: selectedCamera } : undefined,
            }}
          />

          <div className="product-analyse-btn-wrapper">
            <button
              className="product-analyse-btn"
              disabled={isLoading}
              onClick={onSubmit}
            >
              {!isLoading ? "상품 분석" : <ScaleLoader color="#fff" />}
            </button>
          </div>
        </WebcamContainer>
      </Container>
    </>
  );
};

export default AnalysisPage;
