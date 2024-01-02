import { Container, ReportListSection, ReportWriteSection } from "./styled";
import axios from "axios";
import { useEffect, useState } from "react";
import ReportList from "./Section/ReportList";

const ReportPage = () => {
  const [contentCnt, setContentCnt] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [reportList, setReportList] = useState([]);
  const [showWrite, setShowWrite] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const getMoreReports = () => {
    console.log("contentCnt >> ", contentCnt);

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
  }, [contentCnt]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const MAX_FILES = 12;
    const MAX_SIZE_MB = 10;

    if (files.length > MAX_FILES) {
      alert(`최대 ${MAX_FILES}개의 이미지만 업로드할 수 있습니다.`);
      return;
    }

    const isFileSizeValid = files.every(
      (file) => file.size <= MAX_SIZE_MB * 1024 * 1024,
    );
    if (!isFileSizeValid) {
      alert(`각 이미지의 최대 크기는 ${MAX_SIZE_MB}MB 입니다.`);
      return;
    }

    setSelectedFiles(files);
  };

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

          setReportList(data.response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmitReport = () => {
    const fd = new FormData();

    const payload = JSON.stringify({
      product: productName,
      weight: productWeight,
      price: productPrice,
      content: productContent,
    });

    console.log("selectedFiles >> ", selectedFiles);

    // fd.append("image", selectedFiles);

    // FormData는 Key를 중복으로 넣을 수 있다.
    selectedFiles.forEach((file) => {
      console.log("file >> ", file);

      fd.append("image", file);
    });

    fd.append("data", payload);

    axios
      .post("/api/report/create", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        getReportList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [productName, setProductName] = useState("");
  const [productWeight, setProductWeight] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [productContent, setProductContent] = useState("");

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

  return (
    <Container>
      <div className="report-wrapper">
        <h1>슈링크플레이션으로 의심가는 제품을 신고해주세요!!</h1>
        <button onClick={() => setShowWrite(!showWrite)}>신고 작성</button>
        <ReportWriteSection>
          {showWrite && (
            <>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                accept="image/*"
              />

              <input
                type="text"
                onChange={onChangeProductName}
                value={productName}
                placeholder="상품명"
              />
              <input
                type="text"
                onChange={onChangeProductWeight}
                value={productWeight}
                placeholder="중량"
              />
              <input
                type="text"
                onChange={onChangeProductPrice}
                value={productPrice}
                placeholder="가격"
              />
              <input
                type="text"
                onChange={onChangeProductContent}
                value={productContent}
                placeholder="내용"
              />
              <button onClick={onSubmitReport}>신고하기</button>
            </>
          )}
        </ReportWriteSection>

        <ReportList reports={reportList} />
      </div>
    </Container>
  );
};

export default ReportPage;
