import {
  Container,
  IamgeSliderContainer,
  LeftArticle,
  MiddleArticle,
  RightArticle,
} from "./styled";
import { timeAgo } from "../../../../utils/time";
import { useEffect, useState } from "react";
import { intOfKr } from "../../../../utils/format";
import { MdOutlineHideImage } from "react-icons/md";
import { getLikeType } from "../../../../utils/type";
import { FaAnglesDown } from "react-icons/fa6";
import Modal from "../../../../components/Modal";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useRecoilState } from "recoil";
import { loginModalState } from "../../../../state/modalState";

const ImageSlider = ({ images, onImageClick, inModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const buttonStyle = inModal
    ? {
        fontSize: "3em",
        width: "1.5em",
        height: "1.5em",
        top: "40%",
      }
    : {
        fontSize: "2em",
        width: "1em",
        height: "1em",
        top: "1.8em",
      };

  let imageStyle;
  if (inModal) {
    imageStyle = {
      cursor: "pointer",
      width: "30em",
      height: "30em",
      objectFit: "cover",
    };
  } else {
    const mobileWidth = window.innerWidth <= 768 ? "90px" : "148px";
    const mobileHeight = window.innerWidth <= 768 ? "90px" : "148px";

    imageStyle = {
      cursor: "pointer",
      width: mobileWidth,
      height: mobileHeight,
      objectFit: "cover",
    };
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <IamgeSliderContainer>
      <button style={buttonStyle} className="left-arrow" onClick={prevImage}>
        <IoIosArrowBack />
      </button>
      <img
        style={imageStyle}
        // src={`${process.env.REACT_APP_API_BASE_URL}/api/report/select/image/${images[currentImageIndex]}`}
        src={images[currentImageIndex]}
        alt="신고상품 이미지"
        onClick={() => onImageClick && onImageClick(currentImageIndex)}
      />
      <button style={buttonStyle} className="right-arrow" onClick={nextImage}>
        <IoIosArrowForward />
      </button>
    </IamgeSliderContainer>
  );
};

const ReportItem = ({ report, likeList, onRequireLogin }) => {
  const [timeText, setTimeText] = useState(timeAgo(report.created_at));
  const [like, setLike] = useState(report.like);
  const [likeType, setLikeType] = useState(getLikeType(like));
  const [isLike, setIsLike] = useState(likeList.includes(report.id));
  const [showContent, setShowContent] = useState(false);

  const [showExtendModal, setShowExtendModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [hoverRightArticle, setHoverRightArticle] = useState(false);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowExtendModal(true);
  };

  useEffect(() => {
    setTimeText(timeAgo(report.created_at));

    const intervalTime = setInterval(() => {
      setTimeText(timeAgo(report.created_at));
    }, 1000);

    return () => {
      clearInterval(intervalTime);
    };
  }, [report.created_at]);

  const onClickLike = () => {
    if (!localStorage.getItem("token")) {
      onRequireLogin();
      console.log("not user");

      // return;
    }
    axios
      .post(`https://api.dietshrink.kro.kr/api/report/like/${report.id}`)
      .then((res) => {
        if (res.data.status === "success") {
          setLike((prevLike) => {
            const newLike = isLike ? prevLike - 1 : prevLike + 1;
            setLikeType(getLikeType(newLike));
            setIsLike(!isLike);
            return newLike;
          });
        }
      })
      .catch((err) => {
        console.log("err >> ", err);
      });

    const likeIcon = document.querySelector(".like-article svg");
    likeIcon.classList.add("active");
    setTimeout(() => {
      likeIcon.classList.remove("active");
    }, 400); // 애니메이션 시간과 동일하게 설정
  };

  return (
    <div className={`item ${showContent ? "active" : ""}`}>
      <LeftArticle>
        {report.images.length > 0 ? (
          <ImageSlider
            images={report.images.map((img) => img.id)}
            onImageClick={handleImageClick}
            inModal={false}
          />
        ) : (
          <div className="undefined-image">
            <MdOutlineHideImage />
          </div>
        )}

        <Modal
          show={showExtendModal}
          onClose={() => setShowExtendModal(false)}
          showCloseBtn={false}
        >
          <ImageSlider
            images={report.images.map((img) => img.id)}
            initialIndex={selectedImageIndex}
            inModal={true}
          />
        </Modal>
      </LeftArticle>

      <MiddleArticle>
        <div className="name">{report.product_name}</div>
        <div className="time-ago">{timeText}</div>
        <div className="weight">
          {report.weight}
          {report?.unit || "g"}
        </div>
        <div className="price">
          {intOfKr(report.price)}
          <span style={{ fontSize: "0.5em" }}>원</span>
        </div>

        <button
          className={`show-content-btn ${showContent && "active"}`}
          onClick={() => setShowContent(!showContent)}
        >
          <FaAnglesDown />
        </button>
      </MiddleArticle>

      <RightArticle
        onMouseEnter={() => setHoverRightArticle(true)}
        onMouseLeave={() => setHoverRightArticle(false)}
        type={likeType}
      >
        {hoverRightArticle ? (
          <div
            className={`like-article ${isLike ? "active" : ""}`}
            onClick={onClickLike}
          >
            {isLike ? <GoHeartFill /> : <GoHeart />}
            <div className="like-count">{like}</div>
          </div>
        ) : (
          <>{likeType}</>
        )}
      </RightArticle>

      {showContent && (
        <div className="report-content-wrapper">
          {report.content ? (
            <div className="report-content">{report.content}</div>
          ) : (
            <div className="report-content-none">신고 내용 없음</div>
          )}
        </div>
      )}
    </div>
  );
};

const ReportList = ({ reports }) => {
  // const reversedReports = [...reports].reverse();
  const [likeList, setLikeList] = useState([]);
  const [showLoginModal, setShowLoginModal] = useRecoilState(loginModalState);

  useEffect(() => {
    getLikeList();
  }, []);

  const getLikeList = () => {
    // 비회원 요청 안가게 처리 필요
    axios
      .get("https://api.dietshrink.kro.kr/api/report/likeall")
      .then((res) => {
        if (res.data.status === "success") {
          setLikeList(res.data.like_list);
        }
      })
      .catch((err) => {
        console.log("err >> ", err);
      });
  };

  return (
    <Container>
      {reports.map((report, index) => (
        <ReportItem
          key={index}
          report={report}
          likeList={likeList}
          onRequireLogin={() => setShowLoginModal(true)}
        />
      ))}
    </Container>
  );
};

export default ReportList;
