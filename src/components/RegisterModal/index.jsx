import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import "./index.css";

function useInterval(callback, delay) {
  const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.

  useEffect(() => {
    savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
    }
    if (delay !== null) {
      // 만약 delay가 null이 아니라면
      let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
      return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
    }
  }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
}

const RegisterModal = ({ show, onClose, onShowLogin, onShowUserPassword }) => {
  // const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  const [phone, setPhone] = useState(""); //(user.phone);
  const [code, setCode] = useState("");
  const [nickname, setNickname] = useState();
  const [countdown, setCountdown] = useState(false);
  const [codeValid, setCodeValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);

  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [phoneExist, setPhoneExist] = useState(true);
  const [passwordExist, setPasswordExist] = useState(true);
  const [codeExist, setCodeExist] = useState(true);
  const [codeCheckValid, setCodeCheckValid] = useState(false);

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
  };
  
  const onChangePhone = (e) => {
    setPhone(e.target.value);
    // setPhoneExist(true);
  };

  const onChangeCode = (e) => {
    setCode(e.target.value);
    // setCodeExist(true);
  };

  const handleOnKeyPress = (e, btn) => {
    if(e.key === "Enter") {
      console.log("enter");
      if (btn === 'onClickPhone') {
        onClickPhone();
      } else if (btn === 'onClickCode') {
        onClickCode();
      } else if (btn === 'onClickRegister') {
        onClickRegister();
      }
    };
  };

  useEffect(() => {
    if (!show) {
      setPhone("");
      setCode("");
      setPassword("")
      setCountdown(false);

      setPhoneValid(true);
      setCodeValid(true);
      setPasswordValid(true);

      setPhoneExist(true);
      setCodeExist(true);
      setPasswordExist(true);
      setCodeCheckValid(false);
    }
  }, [show]);

  let [count, setCount] = useState(180);

  useEffect(() => {
    if (!show) {
      setPhone("");
    }
  }, [show]);

  useInterval(() => {
    if (count <= 0) {
      setCountdown(false);
    } else if (countdown === true) {
      setCount(count - 1);
    }
  }, 1000);

  const timeFormat = (value) => {
    // 초를 분, 초 포맷으로 변경
    let min = parseInt(value / 60);
    min = min < 10 ? `0${min}` : `${min}`;
    let sec = value % 60;
    sec = sec < 10 ? `0${sec}` : `${sec}`;
    return `${min}:${sec}`;
  };

  const onClickPhone = (e) => {
    const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (phoneRegex.test(phone)) {
      setPhoneValid(true);
      setPhoneExist(true);
    } else if (phone.length === 0) {
      setPhoneExist(false);
      setPhoneValid(false);
    } else {
      setPhoneValid(false);
      setPhoneExist(true);
    }

    if (phoneValid) {
      axios
        .post("/api/auth/code", { phone }) //, withCredentials: true })
        .then((res) => {
          console.log("res >> ", res);
          if (res.data.data.statusName === "success") {
            setPhoneValid(true);
            alert("인증번호가 전송되었습니다.");
            setCountdown(true);
            setCount(180);
          } else {
            setPhoneValid(false);
          }
        })
        .catch((err) => {
          console.log("err >> ", err);
          //
          if (err.response.data.message === "이미 가입한 사용자입니다.") {
            alert(err.response.data.message);
          }
          setPhoneValid(false);
          //
        });
    }
  };

  const onClickCode = (e) => {
    if (code.length > 0) {
      setCodeExist(true);
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
            setCodeCheckValid(true);
            // onShowUserPassword(phone);
          }
        })
        .catch((err) => {
          console.log("err >> ", err);
          //
          setCodeValid(false);
          //
        });
    } else {
      setCodeExist(false);
    }
  };

  const onClickRegister = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    if (passwordRegex.test(password)) {
      setPasswordValid(true);
      setPasswordExist(true);
    } else if (password.length === 0) {
      setPasswordExist(false);
      setPasswordValid(false);
    } else {
      setPasswordValid(false);
      setPasswordExist(true);
    }

    if (passwordValid) {
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
            alert("회원가입이 완료되었습니다.");
          } else {
            console.log("data unsuccessed >> ", data);
          }
          onClose();
        })
        .catch(({ err }) => {
          console.log("err >> ", err);
          alert("회원가입 할 수 없습니다.");
        });
    }
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setPasswordExist(true);
  };

  return (
    <Modal show={show} onClose={onClose} onCloseOutside={false}>
      <div className="phoneWrap">
        {!codeCheckValid && (
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
                  onKeyDown={(e) => handleOnKeyPress(e, 'onClickPhone')}
                  disabled={countdown}
                />
              </div>
              <div className="errorMessageWrap">
                {!phoneValid && phoneExist && (
                  <div>올바른 전화번호를 입력해주세요.</div>
                )}
                {!phoneExist && <div>전화번호를 입력해주세요</div>}
              </div>

              <div className="bottomWrap">
                <button
                  className="bottomButton"
                  onClick={onClickPhone}
                  style = {buttonStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  인증번호 전송
                </button>
                {/* <button className="resendButton" onClick={onClickPhone}>
                  인증번호 재전송
                </button> */}
              </div>
            </div>

            <div className="validcodeWrap">
              {countdown && (
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
                      onKeyDown={(e) => handleOnKeyPress(e, 'onClickCode')}
                    />
                    <span className="timeCountingWrap">
                      {timeFormat(count)}
                    </span>
                  </div>
                  <div className="errorMessageWrap">
                    {!codeValid && codeExist && (
                      <div>잘못된 인증번호입니다.</div>
                    )}
                    {!codeExist && <div>인증번호를 입력해주세요.</div>}
                  </div>
                  <div className="bottomWrap">
                    <button
                      className="bottomButton"
                      onClick={onClickCode}
                      style = {buttonStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      인증번호 확인
                    </button>
                  </div>
                </div>
              )}
              <div className="loginLine">
                계정이 있으신가요?{" "}
                <button className="loginButton" onClick={onShowLogin}>
                  로그인
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="passwordWrap">
        {codeCheckValid && (
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
                  onKeyDown={(e) => handleOnKeyPress(e, 'onClickRegister')}
                />
              </div>
              <div className="errorMessageWrap">
                <div>
                  {!passwordExist && <div>비밀번호를 입력해주세요.</div>}
                </div>
                <div>
                  {!passwordValid && passwordExist && (
                    <div>영문, 숫자 포함 8자 이상 입력해주세요.</div>
                  )}
                </div>
              </div>
            </div>

            <div className="bottomWrap">
              <button
                // style={{ marginTop: "40px" }}
                className="bottomButton"
                style = {buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                  onClickRegister();
                }}
              >
                회원가입 완료
              </button>

              <div className="registerLine">
                계정이 있으신가요?{" "}
                <button className="registerButton" onClick={onShowLogin}>
                  로그인
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default RegisterModal;
