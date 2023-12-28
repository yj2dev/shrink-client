import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../../state/selectors/userSelectors";
import Modal from "../Modal";
import "./index.css";

const LoginModal = ({ show, onClose, onShowRegister }) => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // 버튼눌러서 형식 검사하기 전에는 올바른 상태로 인식
  const [phoneValid, setPhoneValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  // const [notAllow, setNotAllow] = useState(true);
  const [phoneExist, setPhoneExist] = useState(true);
  const [passwordExist, setPasswordExist] = useState(true);

  const setUser = useSetRecoilState(userState);

  const handlePhone = (e) => {
    setPhone(e.target.value);
    setPhoneExist(true);
    setPhoneValid(true);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setPasswordExist(true);
    setPasswordValid(true);
  };
  const onClickLogin = (e) => {
    // 정규표현식 만족하는지 확인
    const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    if (phoneRegex.test(phone)) {
      setPhoneValid(true);
    } else if (phone.length === 0) {
      setPhoneExist(false);
    } else {
      setPhoneValid(false);
    }

    if (passwordRegex.test(password)) {
      setPasswordValid(true);
    } else if (password.length === 0) {
      setPasswordExist(false);
    } else {
      setPasswordValid(false);
    }

    if (phoneValid && passwordValid) {
      const payload = {
        phone,
        password,
      };
      // console.log(payload)
      axios
        .post("/api/auth/login", payload)
        .then(({ data }) => {
          console.log("data >> ", data);
          if (data.status === "success") {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            // setUser(JSON.stringify(data.user));
            setUser(data.user);
            // alert("로그인 성공");
          }
          onClose();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Modal show={show} onClose={onClose}>
      <div className="titleWrap">
        <h2>로그인</h2>
      </div>

      <div className="contentWrap">
        <div className="inputTitle">전화번호</div>
        <div className="inputWrap">
          <input
            className="input"
            type="text"
            value={phone}
            // onChange={onChangePhone}
            onChange={handlePhone}
            placeholder="010-0000-0000"
          />
        </div>
        <div className="errorMessageWrap">
          {!phoneValid && <div>올바른 전화번호를 입력해주세요.</div>}
        </div>

        <div style={{ marginTop: "20px" }} className="inputTitle">
          비밀번호
        </div>
        <div className="inputWrap">
          <input
            className="input"
            type="password"
            value={password}
            onChange={onChangePassword}
            placeholder="영문, 숫자, 특수문자 포함 8자리 이상"
          />
        </div>
        <div className="errorMessageWrap">
          {!passwordValid && password.length > 0 && (
            <div>영문, 숫자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>
      </div>

      <div className="bottomWrap">
        <div className="existErrorMessage">
          <div>
            {!phoneExist && (
              <div className="phoneExistErrorMessage">
                전화번호를 입력해주세요.
              </div>
            )}
          </div>
          <div>
            {phoneExist && !passwordExist && (
              <div className="passwordExistErrorMessage">
                비밀번호를 입력해주세요.
              </div>
            )}
          </div>
        </div>
        <button
          style={{ marginTop: "40px" }}
          className="bottomButton"
          onClick={onClickLogin}
        >
          확인
        </button>

        <div className="registerLine">
          회원이 아니신가요?{" "}
          <button className="registerButton" onClick={onShowRegister}>
            회원가입
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
