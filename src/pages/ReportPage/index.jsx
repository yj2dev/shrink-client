import { Container } from "./styled";
import axios from "axios";
import { useEffect } from "react";

const ReportPage = () => {
  useEffect(() => {
    getReportList();
  }, []);

  const getReportList = () => {
    axios
      .get("/api/report/selectall")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickCreateReport = () => {
    const fd = new FormData();

    let payload = {
      product: "1004",
      weight: "900",
      price: "1500",
      content: "배고프다",
    };

    payload = `{
        "product":"2221004",
        "weight":"900",
        "price": 2000,
        "content":"파인애플맛 뺴뺴로 누드빼빼로"
    }`;

    fd.append("data", payload);

    axios
      .post("/api/report/create", fd)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <button onClick={onClickCreateReport}>글쓰기</button>
      <h1>ReportPage</h1>
    </Container>
  );
};

export default ReportPage;
