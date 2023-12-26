import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import "./index.css";

const RegisterModal = ({ show, onClose, onShowLogin, onShowUserPassword }) => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [nickname, setNickname] = useState();
  const [authnumber, setAuthnumber] = useState("");
  const [codeValid, setCodeValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(false);

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  const onClickPhone = (e) => {
    
    axios
      .post("/api/auth/code", {phone})
      .then((res) => {
        console.log("res >> ", res);
        if (res.data.data.statusName === "success") {
          setPhoneValid(true);

        } else {
          setPhoneValid(false);
        }
      })
      .catch((err) => {
        console.log("err >> ", err);
        if (err.response.data.status === "fail") {
          setPhoneValid(false);
        } else {
          setPhoneValid(true);
        }
      });
  };

  const onClickRegister = (e) => {
    const payload = {
      phone,
      code,
    };

    axios
      .post("/api/auth/code/check", payload)
      .then((res) => {
        // setLoding()
        console.log("res >> ", res);
        if (res.data.status !== "success") {
          setCodeValid(false);
        } else {
          setCodeValid(true);
          console.log("phone >> ", {phone});
          console.log("phone >> ", phone.phone);
          onShowUserPassword({phone});
        }
      })
      .catch((err) => {
        console.log("err >> ", err);
        if (err.response.data.statusName !== "success") {
          setCodeValid(false);
        } else {
          setCodeValid(true);
        }
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

        <div className="bottomWrap">
          <button
            className="bottomButton"
            onClick={onClickPhone}
          >
            인증번호 전송
          </button>

          <div className="loginLine">
                        <button className="loginButton" onClick={onClickPhone}>인증번호 재전송</button>
                      </div>
        </div>
      </div>
      
      {/* <div className="errorMessageWrap">
        {phone.length !== 11 && phone.length > 0 && (
          <div>올바른 전화번호를 입력해주세요.</div>
        )}
      </div> */}
      
      <div className="validcodeWrap">
        {phoneValid && (
          <div>
          <div style={{ marginTop: "20px" }} className="inputTitle">
            인증번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="text"
              value={code}
              onChange={onChangeCode}
              placeholder="인증번호를 입력해주세요"
            />
          </div>
          <div className="errorMessageWrap">
            {!codeValid && (
              <div>잘못된 인증번호입니다.</div>
            )}
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
          </div>
        )}
      </div>
      
    </Modal>
  );
};

export default RegisterModal;
