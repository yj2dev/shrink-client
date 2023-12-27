import axios from "axios";
import { useState } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";

const UserPasswordModal = ({phone, show, onClose, onShowLogin}) => {
    const navigate = useNavigate();

    // const user = useSelector((state) => state.user);
    // const [phone, setPhone] = useState(""); //(user.phone);
    const [password, setPassword] = useState("");

    // 전화번호 유효성 검사 정규표현식 이용
    const [phoneValid, setPhoneValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    const onClickRegister = (e) => {
        console.log("clicked");
        // console.log("user phone >> ", user.phone, typeof user.phone)
        console.log("just phone >> ", phone, typeof phone)
        const payload = {
            phone,
            password,
            withCredentials: true,
        };

        axios
        .post("/api/auth/register", payload)
        .then(({ data }) => {
            console.log("data >> ", data);
            if (data.status === "success") {
                console.log("data success >> ", data);
                console.log("phone check >> ", phone);
                localStorage.setItem("token", JSON.stringify(data.token));
                localStorage.setItem("user", JSON.stringify(data.user));
            } else {
                console.log("data unsuccessed >> ", data)
            }
            onClose();
        })
        .catch(({err}) => {
            console.log("err >> ", err);
            console.log("phone check >> ", phone);
            alert('회원가입 할 수 없습니다.');
        })
        
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
                {/* <div className="inputTitle">전화번호</div>
                <div>{phone}{1+1}</div> */}

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
                        console.log("====clicked pw ====>> ", password);
                        onClickRegister();
                    }}
                    >
                        확인!!
                </button>

                <div className="registerLine">
                            계정이 있으신가요? <button className="registerButton" onClick={onShowLogin}>로그인</button>
                                </div>
            </div>
        </Modal>
    );
};

export default UserPasswordModal;