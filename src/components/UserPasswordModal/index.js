import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";

const UserPasswordModal = ({show, onClose, onShowLogin, phone}) => {
    const navigate = useNavigate();

    // const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    // 전화번호 유효성 검사 정규표현식 이용
    const [phoneValid, setPhoneValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const onClickLogin = (e) => {
        const payload = {
            phone,
            password,
        };

        axios
        .post("/api/auth/login", payload)
        .then(({ data }) => {
            console.log("data >> ", data);
            if (data.status === "success") {
                localStorage.setItem("token", JSON.stringify(data.token));
                localStorage.setItem("user", JSON.stringify(data.user));
            }
            onClose();
        })
        .catch((err) => console.log(err));
    };
    
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <Modal show={show} onClose={onClose}>
            <div className="titleWrap">
                <h2>회원가입</h2>
            </div>

            <div className="contentWrap">
                <div className="inputTitle">전화번호</div>
                <div className="inputWrap">
                {/* <input
                    className="input"
                    type="text"
                    value={phone}
                    // onChange={onChangePhone}
                    // onChange={handlePhone}
                    placeholder="01012345678"
                /> */}
                <div className="phoneNumber">{phone}</div>
                </div>
                {/* <div className="errorMessageWrap">
                    {!phoneValid && phone.length !== 11 && phone.length > 0 && (
                    <div>올바른 전화번호를 입력해주세요.</div>
                    )}
                </div> */}

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
                disabled={notAllow}
                style={{ marginTop: "40px" }}
                className="bottomButton"
                onClick={onClickLogin}
                >
                    확인
                </button>

                <div className="registerLine">
                            계정이 있으신가요? <button className="registerButton" onClick={onShowLogin}>로그인</button>
                                </div>
            </div>
        </Modal>
    );
};

export default UserPasswordModal;