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
  IoSettingsOutline,
} from "react-icons/io5";

import defaultCameraImg1 from "./img/default-camera.jpg";
import defaultCameraImg2 from "./img/default-camera.gif";
import { timeAgo, toKst } from "../../utils/time";
import { useSetRecoilState } from "recoil";
import { searchKeywordState } from "../../state/searchKeywordState";

const AnalysisPage = () => {
  const navigate = useNavigate();

  const [alertTimer, setAlertTimer] = useState(null);

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

  const [isRead, setIsRead] = useState(false);
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  const onClickReading = (imageId, isReading) => {
    if (isReading) return;

    axios
      .patch("/api/product/update/analysis", {
        image_url: imageId,
      })
      .then((res) => {
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
        // false 전체
        // true 읽지 않은 항목만

        is_reading: isRead,
      })
      .then((res) => {
        console.log("res items >> ", res);

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

  const getToggleResultItems = () => {
    axios
      .post("/api/product/select/analysis_list", {
        // false 전체
        // true 읽지 않은 항목만

        is_reading: !isRead,
      })
      .then((res) => {
        if (res.data.status === "success") {
          setIsRead(!isRead);
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
        setSelectedCamera(videoDevices[videoDevices.length - 1].deviceId);
      }
    });
  }, []);

  const showAlert = (status) => {
    setAlertStatus(status);

    if (alertTimer) {
      clearTimeout(alertTimer);
    }

    const newTimer = setTimeout(() => {
      setAlertStatus("");
    }, 4000);

    setAlertTimer(newTimer);
  };

  useEffect(() => {
    return () => {
      if (alertTimer) {
        clearTimeout(alertTimer);
      }
    };
  }, [alertTimer]);

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
          if (res.data.status === "fail") {
            showAlert("noProductDetected");
            return;
            // 데이터 응답 성공
          } else if (res.data.status === "success") {
            if (res.data.is_shrink) {
              showAlert("shrinkOccurred");
            } else {
              if (res.data.is_doubt > 0) {
                showAlert("shrinkDoubt");
                return;
              }
              showAlert("noShrink");
            }
          }
        })
        .catch((err) => {
          console.log("err >> ", err);
          showAlert("checkInternet");
        })
        .finally(() => {
          setIsLoading(false);
          getResultItems();
        });
    }
  };

  const onRotateCamera = () => {
    const currentIndex = cameras.findIndex(
      (camera) => camera.deviceId === selectedCamera,
    );
    const nextIndex = (currentIndex + 1) % cameras.length;
    setSelectedCamera(cameras[nextIndex].deviceId);
  };

  const onClickDelete = (imageId) => {
    axios
      .delete("/api/product/delete/analysis_list", {
        data: {
          id: imageId,
        },
      })
      .then((res) => {
        if (res.data.status === "success") {
          getResultItems();
        }
      })
      .catch((err) => {
        console.log("err >> ", err);
      });
  };

  return (
    <>
      <Container className={showResultMenu ? "active" : ""}>
        <AlertContainerHidden />
        <AlertContainer className={alertStatus}>
          {alertStatus === "noProductDetected" && "인식된 제품이 없습니다."}
          {alertStatus === "shrinkDoubt" &&
            "슈링크로 신고건수가 많은 제품입니다."}
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
          className={`result-btn ${showResultMenu ? "active" : ""} ${
            notReadingCnt > 0 && "alert"
          }`}
          onClick={() => setShowResultMenu(!showResultMenu)}
        >
          {notReadingCnt > 0 && <span>{notReadingCnt}</span>}
          <IoIosArrowBack />
        </AnalaysisResultButton>

        <AnalysisResultMenu className={showResultMenu ? "active" : ""}>
          <section className="toggle-read">
            <div className="flex-left">
              <div
                className={`toggle-button-wrapper ${isRead ? "active" : ""}`}
                onClick={() => {
                  getToggleResultItems();
                }}
              >
                <div className={`toggle-handle ${isRead ? "right" : "left"}`} />
              </div>

              {isRead ? "모든 항목" : "읽지 않은 항목만"}
            </div>
            <button
              className={`show-delete-btn ${showDeleteBtn && "active"}`}
              onClick={() => {
                setShowDeleteBtn(!showDeleteBtn);
              }}
            >
              <IoSettingsOutline />
            </button>
            <span className="show-delete-btn-tip">검색 기록 편집</span>
          </section>

          <ul>
            {resultItems.length === 0 && (
              <li className="no-show-content">검색 기록이 없습니다.</li>
            )}
            {resultItems.length > 0 &&
              resultItems.map((result, index) => {
                return (
                  <li
                    key={index}
                    className={!result.is_reading ? "not-reading" : ""}
                    onClick={() => onClickReading(result.id, result.is_reading)}
                  >
                    {!result.is_reading && (
                      <span className="not-read-content"></span>
                    )}
                    <div className="img-wrapper">
                      <img src={result.image_url} />

                      {showDeleteBtn && (
                        <button
                          className={`delete-btn ${
                            showDeleteBtn ? "active" : ""
                          }`}
                          onClick={() => {
                            onClickDelete(result.id);
                          }}
                        >
                          삭제
                        </button>
                      )}
                      {result.is_shrink ? (
                        <span className="image-is-shrink shrink">
                          <span className="text">
                            슈링크플레이션이 발생했던 제품입니다. 구매에
                            주의해주세요.
                          </span>
                        </span>
                      ) : result.is_doubt > 0 ? (
                        <span className="image-is-shrink shrink-doubt">
                          <span className="text">
                            슈링크로 신고건수가 많은 제품입니다. 구매에 주의해
                            주세요.
                          </span>
                        </span>
                      ) : (
                        <span className="image-is-shrink none-shrink">
                          <span className="text">
                            최근 슈링크 발생 내역이 없는 상품입니다. 안심하고
                            구매하세요!
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="result-item-wrapper">
                      <div className="time-ago">
                        {timeAgo(result.create_at)}
                      </div>
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

                                      // 헤더 검색창 검색어 반영 코드
                                      // setSearchKeyword(keyword);

                                      navigate("/product/search", {
                                        state: { keyword: keyword },
                                      });
                                    }}
                                  >
                                    {item.result}
                                  </button>
                                  {item.is_shrink ? (
                                    <span className="shrink">슈링크</span>
                                  ) : item.is_doubt > 0 ? (
                                    <span className="shrink-doubt">의심</span>
                                  ) : (
                                    <span className="none-shrink">
                                      비슈링크
                                    </span>
                                  )}
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

          <div
            className={`product-analyse-btn-wrapper ${
              showResultMenu ? "active" : ""
            }`}
          >
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
