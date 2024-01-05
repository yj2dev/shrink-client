import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  // 기존 코드: default: JSON.parse(localStorage.getItem("user")) || null,
  default: (() => {
    try {
      const user = localStorage.getItem("user");

      console.log("유저 갱신 데이터 결과");
      console.log("user: ", user);

      return user ? JSON.parse(user) : null;
    } catch (e) {
      console.error("JSON 파싱 에러 발생: ", e);
      return null;
    }
  })(),
});
