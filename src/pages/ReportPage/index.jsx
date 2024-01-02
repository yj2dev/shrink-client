import { Container, ReportListSection, ReportWriteSection } from "./styled";
import axios from "axios";
import { useEffect, useState } from "react";
import ReportList from "./Section/ReportList";

const ReportPage = () => {
  const [reportList, setReportList] = useState([]);
  const [showWrite, setShowWrite] = useState(false);

  useEffect(() => {
    getReportList();
  }, []);

  const getReportList = () => {
    axios
      .get("/api/report/selectall")
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

    fd.append("data", payload);

    axios
      .post("/api/report/create", fd)
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
      <h1>ReportPage</h1>
      <button onClick={() => setShowWrite(!showWrite)}>신고 작성</button>

      <ReportWriteSection>
        {showWrite && (
          <>
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
    </Container>
  );
};

export default ReportPage;
