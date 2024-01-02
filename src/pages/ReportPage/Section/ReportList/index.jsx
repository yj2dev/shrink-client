import { Container } from "./styled";
import { timeAgo, toKst } from "../../../../utils/time";
import { useEffect, useState } from "react";

const ReportItem = ({ report }) => {
  const [timeText, setTimeText] = useState(timeAgo(report.created_at));

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setTimeText(timeAgo(report.created_at));
    }, 1000);

    return () => {
      clearInterval(intervalTime);
    };
  }, []);

  return (
    <div className="item">
      <div>{report.product_name}</div>
      <div>{report.price}</div>
      <div>{report.weight}</div>
      <div>{report.content}</div>
      <div>{timeText}</div>
      <div>{report.created_at}</div>
      <div>{toKst(report.created_at)}</div>
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
