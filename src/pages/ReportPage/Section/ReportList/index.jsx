import { Container, LeftArticle, MiddleArticle, RightArticle } from "./styled";
import { timeAgo } from "../../../../utils/time";
import { useEffect, useState } from "react";
import { intOfKr } from "../../../../utils/format";
import { MdOutlineHideImage } from "react-icons/md";
import { getLikeType } from "../../../../utils/type";

const ReportItem = ({ report }) => {
  const [timeText, setTimeText] = useState(timeAgo(report.created_at));
  const [likeType, setLikeType] = useState(getLikeType(report.like));

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
    <div className="item">
      <LeftArticle>
        {report.thumbnail ? (
          <img
            src={`${process.env.REACT_APP_API_BASE_URL}/api/report/select/image/${report.thumbnail}`}
            alt="신고상품 이미지"
          />
        ) : (
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
        <div className="price">
          {intOfKr(report.price)}
          <span style={{ fontSize: "0.5em" }}>원</span>
        </div>
      </MiddleArticle>

      <RightArticle type={likeType}>{likeType}</RightArticle>
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
