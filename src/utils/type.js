export const getLikeType = (like) => {
  if (like >= 5) {
    return "고위험";
  } else if (like >= 3) {
    return "중위험";
  } else if (like >= 1) {
    return "저위험";
  } else {
    return "등록";
  }
};
