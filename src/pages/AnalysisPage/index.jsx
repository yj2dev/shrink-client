import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import {
  AlertContainer,
  AlertContainerHidden,
  AnalaysisResultButton,
  AnalysisResultMenu,
  Container,
  WebcamContainer,
} from "./styled";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import { IoIosArrowBack, IoIosWarning } from "react-icons/io";
import {
  IoCameraReverseOutline,
  IoCloseOutline,
  IoMenu,
} from "react-icons/io5";

import defaultCameraImg1 from "./img/default-camera.jpg";
import defaultCameraImg2 from "./img/default-camera.gif";
import { timeAgo, toKst } from "../../utils/time";
import { useSetRecoilState } from "recoil";
import { searchKeywordState } from "../../state/searchKeywordState";

const AnalysisPage = () => {
  const navigate = useNavigate();

  const setSearchKeyword = useSetRecoilState(searchKeywordState);
  const [notReadingCnt, setNotReadingCnt] = useState(0);

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

  const onClickReading = (imageId) => {
    axios
      .patch("/api/product/update/analysis", {
        image_url: imageId,
      })
      .then((res) => {
        console.log("res >> ", res);
        if (res.data.status === "success") {
          getResultItems();
        }
      })
      .catch((err) => {
        console.log("err >> ", err);
      });
  };

  const getResultItems = () => {
    axios
      .post("/api/product/select/analysis_list", {
        is_reading: false,
      })
      .then((res) => {
        console.log("res >> ", res);
        if (res.data.status === "success") {
          setResultItems(res.data.response);

          setNotReadingCnt(
            res.data.response.reduce((acc, cur) => {
              return !cur?.is_reading ? acc + 1 : acc;
            }, 0) || 0,
          );
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
          console.log("res is shrink >> ", res);
          if (res.data.status === "fail") {
            setAlertStatus("noProductDetected");

            setTimeout(() => {
              setAlertStatus("");
            }, 4000);

            return;
          }

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
          setAlertStatus("checkInternet");
          setTimeout(() => {
            setAlertStatus("");
          }, 4000);
        })
        .finally(() => {
          setIsLoading(false);
          getResultItems();
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
          {alertStatus === "noProductDetected" && "인식된 제품이 없습니다."}
          {alertStatus === "noShrink" &&
            "최근 슈링크 발생 내역이 없는 상품입니다."}
          {alertStatus === "shrinkOccurred" && (
            <>
              <IoIosWarning
                style={{ marginRight: "12px", fontSize: "1.6em" }}
              />
              슈링크플레이션이 발생했던 제품입니다.
            </>
          )}
          {alertStatus === "checkInternet" &&
            "서버와 통신이 원활하지 않습니다."}
        </AlertContainer>

        <AnalaysisResultButton
          className={`result-btn ${showResultMenu ? "active" : ""}`}
          onClick={() => setShowResultMenu(!showResultMenu)}
        >
          {notReadingCnt > 0 && <span>{notReadingCnt}</span>}
          <IoIosArrowBack />
        </AnalaysisResultButton>

        <AnalysisResultMenu className={showResultMenu ? "active" : ""}>
          <ul>
            {resultItems.length === 0 && (
              <li className="no-show-content">검색 기록이 없습니다.</li>
            )}
            {resultItems.map((result, index) => {
              return (
                <li
                  key={index}
                  className={!result.is_reading ? "not-reading" : ""}
                  onClick={() => onClickReading(result.id)}
                >
                  {!result.is_reading && (
                    <span className="not-read-content"></span>
                  )}
                  <img src={result.image_url} />

                  <div className="result-item-wrapper">
                    <div className="time-ago">{timeAgo(result.create_at)}</div>
                    {result.result.length > 0 &&
                      result.result.map((item, index) => {
                        return (
                          <table key={index}>
                            <tr>
                              <td>
                                <span>제품명</span>
                              </td>
                              <td>
                                <button
                                  className="link-search-btn"
                                  value={item.result}
                                  onClick={(e) => {
                                    const keyword = e.target.value;

                                    setSearchKeyword(keyword);

                                    navigate("/product/search", {
                                      state: { keyword: keyword },
                                    });
                                  }}
                                >
                                  {item.result}
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span>중량</span>
                              </td>
                              <td className="weight">{item.weight}</td>
                            </tr>
                          </table>
                        );
                      })}
                  </div>
                </li>
              );
            })}
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
