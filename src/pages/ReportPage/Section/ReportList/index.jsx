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
      objectFit: "contain",
    };
  } else {
    const mobileWidth = window.innerWidth <= 768 ? "90px" : "148px";
    const mobileHeight = window.innerWidth <= 768 ? "90px" : "148px";

    imageStyle = {
      cursor: "pointer",
      width: mobileWidth,
      height: mobileHeight,
      objectFit: "contain",
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
        src={`${process.env.REACT_APP_API_BASE_URL}/api/report/select/image/${images[currentImageIndex]}`}
        alt="신고상품 이미지"
        onClick={() => onImageClick(currentImageIndex)}
      />
      <button style={buttonStyle} className="right-arrow" onClick={nextImage}>
        <IoIosArrowForward />
      </button>
    </IamgeSliderContainer>
  );
};

const ReportItem = ({ report }) => {
  const [timeText, setTimeText] = useState(timeAgo(report.created_at));
  const [likeType, setLikeType] = useState(getLikeType(report.like));
  const [showContent, setShowContent] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
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
          show={modalOpen}
          onClose={() => setModalOpen(false)}
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

      <RightArticle type={likeType}>{likeType}</RightArticle>

      {showContent && (
        <div className="report-content-wrapper">
          <div className="report-content">{report.content}</div>
        </div>
      )}
    </div>
  );
};

const ReportList = ({ reports }) => {
  // const reversedReports = [...reports].reverse();

  return (
    <Container>
      {reports.map((report, index) => (
        <ReportItem key={index} report={report} />
      ))}
    </Container>
  );
};

export default ReportList;
