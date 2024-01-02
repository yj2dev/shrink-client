import { Container, LeftArticle, MiddleArticle, RightArticle } from "./styled";
import { timeAgo, toKst } from "../../../../utils/time";
import { useEffect, useState } from "react";
import { intOfKr } from "../../../../utils/format";
import { MdOutlineHideImage } from "react-icons/md";

const ReportItem = ({ report }) => {
  const [timeText, setTimeText] = useState(timeAgo(report.created_at));

  useEffect(() => {
    // 신고가 추가될 때마다 즉시 시간 텍스트를 업데이트
    setTimeText(timeAgo(report.created_at));

    const intervalTime = setInterval(() => {
      setTimeText(timeAgo(report.created_at));
    }, 1000);

    return () => {
      clearInterval(intervalTime);
    };
  }, [report.created_at]); // report.created_at이 변경될 때마다 useEffect 실행

  return (
    <div className="item">
      <LeftArticle>
        {/*<img src="http://placehold.it/148x148" alt="신고상품 이미지" />*/}
        {report.thumbnail ? (
          <img
            src={`${process.env.REACT_APP_API_BASE_URL}/api/report/select/image/${report.thumbnail}`}
            alt="신고상품 이미지"
          />
        ) : (
          // <>이미지가 등록되지 않았습니다.</>
          <div className="undefined-image">
            <MdOutlineHideImage />
          </div>
        )}
      </LeftArticle>
      <MiddleArticle>
        <div className="name">{report.product_name}</div>
        <div className="time-ago">{timeText}</div>
        <div className="weight">
          {report.weight}
          {report?.unit || "g"}
        </div>
        <div className="price">{intOfKr(report.price)}</div>
        {/*<div className="content">{report.content}</div>*/}
      </MiddleArticle>
      <RightArticle type={report.status}>{report.status}</RightArticle>
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
