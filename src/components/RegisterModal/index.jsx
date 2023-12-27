import axios from "axios";
import { useState } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import "./index.css";

const RegisterModal = ({ show, onClose, onShowLogin, onShowUserPassword }) => {
  
  // const user = useSelector((state) => state.user);
  
  const navigate = useNavigate();
  
  const [phone, setPhone] = useState(""); //(user.phone);
  const [code, setCode] = useState("");
  const [nickname, setNickname] = useState();
  const [authnumber, setAuthnumber] = useState("");
  const [codeValid, setCodeValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);

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
      .post("/api/auth/code", {phone, withCredentials: true,})
      .then((res) => {
        console.log("res >> ", res);
        if (res.data.data.statusName === "success") {
          setPhoneValid(true);
          alert("인증번호가 전송되었습니다.")
        } else {
          setPhoneValid(false);
        }
      })
      .catch((err) => {
        console.log("err >> ", err);
        //
        setPhoneValid(false);
        //
      });
  };

  const onClickCode = (e) => {
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
          // onShowUserPassword(phone);
        }
      })
      .catch((err) => {
        console.log("err >> ", err);
        //
        setCodeValid(false);
        //
      });
  };

  const onClickRegister = (e) => {
    const payload = {
        phone,
        password,
        withCredentials: true,
    };
    axios
    .post("/api/auth/register", payload)
    .then(({ data }) => {
        if (data.status === "success") {
            console.log("data successed >> ", data);
            localStorage.setItem("token", JSON.stringify(data.token));
            localStorage.setItem("user", JSON.stringify(data.user));
            alert("회원가입이 완료되었습니다.")
        } else {
            console.log("data unsuccessed >> ", data)
        }
        onClose();
    })
    .catch(({err}) => {
        console.log("err >> ", err);
        alert('회원가입 할 수 없습니다.');
    })
    
};

const onChangePassword = (e) => {
    setPassword(e.target.value);
};

  return (
    <Modal show={show} onClose={onClose}>
      <div className="phoneWrap">
        {!codeValid && (
          <div>
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
                placeholder="01012345678"
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
                인증번호 {phoneValid}
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
                  onClick={onClickCode}
                >
                  인증번호 확인
                </button>

                <div className="loginLine">
                                계정이 있으신가요? <button className="loginButton" onClick={onShowLogin}>로그인</button>
                </div>
              </div>
              </div>
            )}
          </div>
        </div>)}
      </div>


      <div className="passwordWrap">
        {codeValid && (
          <div>
            <div className="titleWrap">
              <h2>회원가입</h2>
            </div>
            <div className="contentWrap">
              <div className="inputTitle">전화번호</div>
              <div className="phoneTitle">{phone}</div>

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
                onClick={() => {
                  onClickRegister();
                }}
              >
                회원가입 완료
              </button>

              <div className="registerLine">
                계정이 있으신가요? <button className="registerButton" onClick={onShowLogin}>로그인</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default RegisterModal;
