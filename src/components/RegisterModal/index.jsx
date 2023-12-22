import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import "./index.css";

const RegisterModal = ({ show, onClose, onShowLogin }) => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [nickname, setNickname] = useState();
  const [password, setPassword] = useState("");

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onClickRegister = (e) => {
    const payload = {
      phone,
      password,
    };

    axios
      .post("/api/auth/register", payload)
      .catch((res) => {
        console.log("res >> ", res);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <Modal show={show} onClose={onClose}>
      <div className="titleWrap">
        <h2>회원가입</h2>
      </div>

      <div className="contentWrap">
        <div className="inputTitle">전화번호</div>
        <div className="inputWrap">
          <input
            className="input"
            type="text"
            value={phone}
            onChange={onChangePhone}
            placeholder="phone"
          />
        </div>
        <div className="errorMessageWrap">
          {phone.length !== 11 && phone.length > 0 && (
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
          {password.length > 0 && (
            <div>영문, 숫자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>
      </div>
      <div className="bottomWrap">
        <button
          className="bottomButton"
          onClick={onClickRegister}
        >
          회원가입 완료
        </button>

        <div className="loginLine">
                        계정이 있으신가요? <button className="loginButton" onClick={onShowLogin}>로그인</button>
                      </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;
