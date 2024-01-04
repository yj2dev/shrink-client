import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../../state/userState";
import Modal from "../Modal";
import "./index.css";

const LoginModal = ({ show, onClose, onShowRegister }) => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [wrongLogin, setWrongLogin] = useState("");

  // 버튼눌러서 형식 검사하기 전에는 올바른 상태로 인식
  const [phoneValid, setPhoneValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  // const [notAllow, setNotAllow] = useState(true);
  const [phoneExist, setPhoneExist] = useState(true);
  const [passwordExist, setPasswordExist] = useState(true);

  const setUser = useSetRecoilState(userState);
  const [isHovered, setIsHovered] = useState(false);

  // 버튼 hover이벤트
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const buttonStyle = {
    backgroundColor: isHovered ? '#115ae1' : '#0F62FE', // 호버시 진한색
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
  };

  useEffect(() => {
    if (!show) {
      setPhone("");
      setPassword("")
      setWrongLogin("");

      setPhoneValid(true);
      setPasswordValid(true);

      setPhoneExist(true);
      setPasswordExist(true);
    }
  }, [show]);

  const handlePhone = (e) => {
    setPhone(e.target.value);
    // setPhoneExist(true);
    // setPhoneValid(true);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    // setPasswordExist(true);
    // setPasswordValid(true);
  };
  const handleOnKeyPress = (e) => {
    if(e.key === "Enter") {
      console.log("enter");
      onClickLogin();
    };
  };
  const onClickLogin = (e) => {
    setWrongLogin("");
    // 정규표현식 만족하는지 확인
    const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    if (phoneRegex.test(phone)) {
      setPhoneValid(true);
      setPhoneExist(true);
      console.log("phone Valid true", {phoneValid});
    } else if (phone.length === 0) {
      setPhoneExist(false);
      setPhoneValid(false);
      console.log("no phone num", {phoneExist}, {phoneValid}, {phone});
      return;
    } else {
      setPhoneValid(false);
      setPhoneExist(true);
      console.log("phone Valid false", {phoneValid});
      return;
    };

    if (passwordRegex.test(password)) {
      setPasswordValid(true);
      setPasswordExist(true);
    } else if (password.length === 0) {
      setPasswordExist(false);
      setPasswordValid(false);
      return;
    } else {
      setPasswordValid(false);
      setPasswordExist(true);
      return;
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
          console.log("err >> ", err);
          if (err.response.data.message === "사용자가 존재하지 않습니다.") {
            setWrongLogin("phonePB");
            setPhone("");
            setPassword("");
          } else if (err.response.data.message === "비밀번호가 일치하지 않습니다.") {
            setWrongLogin("passwordPB");
            setPassword("");
          } else {
            setWrongLogin("");
          }
        });
    }
    console.log("phoneValid >> ", phoneValid
              , "  passwordValid >> ", passwordValid
              , "  wrongLogin >> ", wrongLogin);
  };

  return (
    <Modal show={show} onClose={onClose} onCloseOutside={false}>
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
            onKeyDown={(e) => handleOnKeyPress(e)}
          />
        </div>
        <div className="errorMessageWrap">
          {!phoneValid && phoneExist && passwordExist && (<div>올바른 전화번호를 입력해주세요.</div>)}
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
            onKeyDown={(e) => handleOnKeyPress(e)}
          />
        </div>
        <div className="errorMessageWrap">
          {!passwordValid && phoneValid && passwordExist && (
            <div>영문, 숫자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>
      </div>

      <div className="bottomWrap">
        <div className="existErrorMessage">
          <div>
            {!phoneExist && (
              <div className="phoneExistErrorMessage">전화번호를 입력해주세요.</div>
            )}
          </div>
          <div>
            {phoneExist && !passwordExist && (
              <div className="passwordExistErrorMessage">비밀번호를 입력해주세요.</div>
            )}
          </div>
          <div>
            {wrongLogin === "phonePB" && (
              <div className="loginPBMessage">전화번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.</div>
            )}
          </div>
          <div>
            {wrongLogin === "passwordPB" && (
              <div className="loginPBMessage">비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.</div>
            )}
          </div>
        </div>
        <button
          // style={{ marginTop: "40px" }}
          style = {buttonStyle}
          className="bottomButton"
          onClick={onClickLogin}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
