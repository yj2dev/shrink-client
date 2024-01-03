import {
  Container,
  ReportWriteSection,
  InputHidden,
  InputLabel,
} from "./styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReportList from "./Section/ReportList";
import { IoImageOutline } from "react-icons/io5";

const ReportPage = () => {
  const [contentPrevCnt, setContentPrevCnt] = useState(0);
  const [contentCnt, setContentCnt] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [reportList, setReportList] = useState([]);
  const [showWrite, setShowWrite] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [productName, setProductName] = useState("");
  const [productWeight, setProductWeight] = useState(100);
  const [productPrice, setProductPrice] = useState(1000);
  const [productContent, setProductContent] = useState("");
  const [unit, setUnit] = useState("g");
  const [customUnit, setCustomUnit] = useState("");

  const [isDrag, setIsDrag] = useState(false);

  function onSelectFile(e) {
    const MAX_FILES = 12;
    const MAX_SIZE_MB = 10;

    const files =
      e.target.files || (e.dataTransfer ? e.dataTransfer.files : null);
    if (!files) return;

    if (files.length + selectedFiles.length > MAX_FILES) {
      alert(`최대 ${MAX_FILES}개의 이미지만 업로드할 수 있습니다.`);
      return;
    }

    const newSelectedFiles = Array.from(files)
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

    setSelectedFiles((prevFiles) => [...prevFiles, ...newSelectedFiles]);

    const isFileSizeValid = newSelectedFiles.every(
      (file) => file.file.size <= MAX_SIZE_MB * 1024 * 1024,
    );
    if (!isFileSizeValid) {
      alert(`각 이미지의 최대 크기는 ${MAX_SIZE_MB}MB 입니다.`);
      return;
    }

    console.log("newSelectedFiles >> ", newSelectedFiles);
  }

  const handleRemoveFile = (fileName) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((file) => file.file.name !== fileName),
    );
  };

  const ImagePreview = ({ src, alt, name, onRemove }) => (
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "8em",
          height: "8em",
          borderRadius: "8px",
          border: "1px solid #eee",
        }}
      />
      <button
        onClick={() => onRemove(name)}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "40px",
          height: "40px",
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        &times;
      </button>
    </div>
  );

  const ImagePreviews = ({ files, onRemove }) => (
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        width: "32em",
      }}
    >
      {files.map((file, index) => (
        <div style={{ display: "inline-block", marginRight: "10px" }}>
          <ImagePreview
            key={file.file.name}
            src={file.preview}
            alt={`미리보기 ${index + 1}`}
            name={file.file.name}
            onRemove={onRemove}
          />
        </div>
      ))}
    </div>
  );
  const handleUnitChange = (e) => {
    const selectedUnit = e.target.value;
    setUnit(selectedUnit);
  };

  const renderCustomUnitInput = () => {
    if (unit === "custom") {
      return (
        <>
          <label>
            사용자 단위 입력<span className="require-label">*</span>
          </label>
          <input
            minLength={1}
            maxLength={12}
            type="text"
            placeholder="단위 입력"
            value={customUnit}
            onChange={(e) => setCustomUnit(e.target.value)}
          />
        </>
      );
    }
    return null;
  };

  const handleSubmit = (e) => {
    onSubmitReport();
    e.preventDefault();
  };

  const getMoreReports = () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    axios
      .get("/api/report/selectall", {
        params: {
          per_page: contentCnt + 10,
        },
      })
      .then(({ data }) => {
        if (data.status === "success") {
          // setReportList((prev) => [...prev, ...data.response]);
          setReportList([...data.response]);

          setContentCnt((prev) => prev + 10);
          if (data.response.length === 0) {
            setHasMore(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getReportList();
  }, []);

  const handleScroll = () => {
    const scrollPosition =
      window.innerHeight + document.documentElement.scrollTop;
    const bottomPosition = document.documentElement.offsetHeight * 0.8;

    if (scrollPosition >= bottomPosition && !isLoading && hasMore) {
      getMoreReports();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [contentCnt, isLoading, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;

      getMoreReports();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getReportList = () => {
    axios
      .get("/api/report/selectall", {
        params: {
          per_page: 10,
        },
      })
      .then(({ data }) => {
        if (data.status === "success") {
          console.log(data.response);

          setReportList([...data.response]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const writeFormInit = () => {
    setShowWrite(false);
    setProductName("");
    setProductWeight(100);
    setProductPrice(1000);
    setProductContent("");
    setUnit("g");
    setCustomUnit("");
    setSelectedFiles([]);
  };

  const onSubmitReport = () => {
    const fd = new FormData();

    const payload = JSON.stringify({
      product: productName,
      weight: productWeight,
      price: productPrice,
      content: productContent,
      unit,
    });

    console.log("payload >> ", payload);

    selectedFiles.forEach((file) => {
      fd.append("image", file.file);
    });

    fd.append("data", payload);

    axios
      .post("/api/report/create", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        getReportList();
        writeFormInit();
      })
      .catch((err) => {});
  };

  const onChangeProductName = (e) => {
    setProductName(e.target.value);
  };

  const onChangeProductWeight = (e) => {
    setProductWeight(e.target.value);
  };
  const onChangeProductPrice = (e) => {
    setProductPrice(e.target.value);
  };
  const onChangeProductContent = (e) => {
    setProductContent(e.target.value);
  };

  const onDragEnter = (e) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDrag(false);
    onSelectFile(e);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <div className="report-wrapper">
        <h1>
          가격 변동 없는 <br />
          상품도 다시 보자
        </h1>

        <button
          className={`report-write-btn ${showWrite && "active"}`}
          onClick={() => setShowWrite(!showWrite)}
        >
          슈링크 제품 신고하기
        </button>

        <ReportWriteSection
          className={`${showWrite && "active"} ${
            selectedFiles.length > 0 ? "active-file" : ""
          }`}
        >
          <form onSubmit={handleSubmit}>
            <label>
              상품명<span className="require-label">*</span>
            </label>
            <input
              type="text"
              maxLength="32"
              value={productName}
              onChange={onChangeProductName}
              placeholder="상품명"
              required
            />

            <div className="weight-wrapper">
              <div className="weight-item">
                <label>
                  중량<span className="require-label">*</span>
                </label>
                <input
                  type="number"
                  value={productWeight}
                  onChange={onChangeProductWeight}
                  min={0}
                  placeholder="중량"
                  required
                />
              </div>

              <div className="weight-item">
                <label>
                  단위<span className="require-label">*</span>
                </label>
                <select value={unit} onChange={handleUnitChange} required>
                  <option value="g">g</option>
                  <option value="kg">kg</option>
                  <option value="ml">ml</option>
                  <option value="개">개</option>
                  <option value="custom">사용자 입력</option>
                </select>
              </div>
              <div className="weight-item">{renderCustomUnitInput()}</div>
            </div>

            <label>
              가격<span className="require-label">*</span>
            </label>
            <input
              className="price-input"
              type="number"
              value={productPrice}
              min={100}
              max={99999999}
              onChange={onChangeProductPrice}
              placeholder="가격"
              required
            />

            <label>신고 내용</label>
            <textarea
              maxLength="1000"
              value={productContent}
              onChange={onChangeProductContent}
              placeholder="내용"
            />

            <label>사진</label>

            <InputLabel
              htmlFor="select-image"
              onDragOver={onDragOver}
              onDragEnter={onDragEnter}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              className={`${isDrag ? "drag" : ""} ${
                selectedFiles.length > 0 ? "active" : ""
              }`}
            >
              <IoImageOutline
                style={{ fontSize: "24px", marginBottom: "8px" }}
              />
              이미지 선택 또는 드래그
            </InputLabel>

            <InputHidden
              type="file"
              accept="image/*"
              id="select-image"
              onChange={onSelectFile}
              multiple={true}
            />
            {selectedFiles.length > 0 && (
              <ImagePreviews
                files={selectedFiles}
                onRemove={handleRemoveFile}
              />
            )}
            <button type="submit">신고하기</button>
          </form>
        </ReportWriteSection>

        <ReportList reports={reportList} />
      </div>
    </Container>
  );
};

export default ReportPage;
