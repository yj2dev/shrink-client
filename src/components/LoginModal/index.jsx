import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import "./index.css";

const LoginModal = ({ show, onClose, onShowRegister }) => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // 전화번호 유효성 검사 정규표현식 이용
  const [phoneValid, setPhoneValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  // const [notAllow, setNotAllow] = useState(true);

  const handlePhone = (e) => {
    setPhone(e.target.value);
    const regex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (regex.test(phone)) {
      setPhoneValid(true);
    } else {
      setPhoneValid(false);
    }
    // 정규표현식 만족하면 setPhoneValid == true 이외에는 false
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onClickLogin = (e) => {
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
          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("user", JSON.stringify(data.user));
          alert("로그인 성공");
        }
        onClose();
      })
      .catch((err) => {

        console.log(err)
      });
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
            placeholder="01012345678"
          />
        </div>
        <div className="errorMessageWrap">
          {!phoneValid && phone.length !== 11 && phone.length > 0 && (
            <div>올바른 전화번호를 입력해주세요.</div>
          )}
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
        <button
          style={{ marginTop: "40px" }}
          className="bottomButton"
          onClick={onClickLogin}
        >
          확인
        </button>
      
        <div className="registerLine">
                        회원이 아니신가요? <button className="registerButton" onClick={onShowRegister}>회원가입</button>
                      </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
