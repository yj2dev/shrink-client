export const timeAgo = (dateString) => {
  const clientUTCTime = Date.now();
  const serverUTCTime = new Date(dateString).getTime();
  const secondsAgo = Math.round((clientUTCTime - serverUTCTime) / 1000);

  let interval = Math.floor(secondsAgo / 31536000);

  if (secondsAgo < 1) {
    return "방금 전";
  }

  if (interval >= 1) {
    return `${interval}년 전`;
  }
  interval = Math.floor(secondsAgo / 2592000);
  if (interval >= 1) {
    return `${interval}개월 전`;
  }
  interval = Math.floor(secondsAgo / 86400);
  if (interval >= 1) {
    return `${interval}일 전`;
  }
  interval = Math.floor(secondsAgo / 3600);
  if (interval >= 1) {
    return `${interval}시간 전`;
  }
  interval = Math.floor(secondsAgo / 60);
  if (interval >= 1) {
    return `${interval}분 전`;
  }
  return `${Math.floor(secondsAgo)}초 전`;
  // 서버랑 시간차 문제 해결 후 위 코드로 변경 (해결)
  // 서버 Local Asia/Seoul 시간 반환 => UTC 시간으로 변경 필요
  // return `방금 전`;
};

export const toKst = (utcDateString) => {
  // 입력 예시 =>  toKst("2024-01-02T02:46:29.760Z")
  // 출력 예시 => "2024. 1. 2. 오후 12:51:56"

  const date = new Date(utcDateString);

  return date.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
};
