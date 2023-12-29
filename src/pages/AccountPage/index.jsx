import { Container, Message } from "./styled";
import { useRecoilState } from "recoil";
import { userState } from "../../state/selectors/userSelectors";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const AccountPage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useRecoilState(userState);

  const [nickname, setNickname] = useState(null);
  const [editNickname, setEditNickname] = useState(false);
  const [statusNickname, setStatusNickname] = useState({
    validation: false,
    void: false,
    trim: false,
    length: false,
    special: false,
    success: false,
    changeless: false,
  });

  const [statusPassword, setStatusPassword] = useState({
    validation: false,
    success: false,
    message: "",
  });

  const [showEditMenu, setShowEditMenu] = useState(false);

  const editMenuRef = useRef();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPasswordCheck, setShowNewPasswordCheck] = useState(false);

  const [logoutCountdown, setLogoutCountdown] = useState(null);

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleNewPasswordCheckVisibility = () => {
    setShowNewPasswordCheck(!showNewPasswordCheck);
  };

  const initUserInfo = async () => {
    if (localStorage.getItem("token")) {
      try {
        const { data } = await axios.get("/api/auth/user/info");
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);

        setNickname(data.user.nickname);

        return data.user;
      } catch (err) {}
    }
    return null;
  };

  useEffect(() => {
    const setUserInfo = async () => {
      const userInfo = await initUserInfo();
      if (!userInfo) navigate("/");
    };

    setUserInfo();

    const handleClickOutside = (event) => {
      if (editMenuRef.current && !editMenuRef.current.contains(event.target)) {
        setShowEditMenu(false);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, []);

  const nicknameValidation = () => {
    if (nickname === "" || nickname === undefined || nickname === null) {
      setStatusNickname({
        ...statusNickname,
        validation: true,
        void: true,
      });
      setTimeout(() => {
        setStatusNickname({ ...statusNickname, void: false });
      }, 5000);
      return true;
    }

    if (nickname.search(/\s/) > -1) {
      setStatusNickname({
        ...statusNickname,
        validation: true,
        trim: true,
      });
      setTimeout(() => {
        setStatusNickname({ ...statusNickname, trim: false });
      }, 5000);
      return true;
    }

    if (nickname.length >= 12 || nickname.length < 2) {
      setStatusNickname({
        ...statusNickname,
        validation: true,
        length: true,
      });
      setTimeout(() => {
        setStatusNickname({ ...statusNickname, length: false });
      }, 5000);
      return true;
    }

    const regExp = /^[가-힣a-zA-Z0-9]+$/;
    if (!regExp.test(nickname)) {
      setStatusNickname({
        ...statusNickname,
        validation: true,
        special: true,
      });
      setTimeout(() => {
        setStatusNickname({ ...statusNickname, special: false });
      }, 5000);
      return true;
    }
  };

  const onClickResetProfileImg = (e) => {};

  const onClickUpdateProfileImg = (e) => {};
  const onChangeNickname = (e) => {
    if (e.target.value.length <= 12) {
      setNickname(e.target.value);
    }
  };

  const onClickNicknameUpdate = () => {
    if (nickname === user.nickname) {
      setEditNickname(false);

      setStatusNickname({
        ...statusNickname,
        validation: true,
        changeless: true,
      });

      setTimeout(() => {
        setStatusNickname({ ...statusNickname, changeless: false });
      }, 5000);

      return;
    }

    if (nicknameValidation()) {
      return;
    }

    axios
      .patch("/api/auth/user/nickname", { new_nickname: nickname })
      .then((res) => {
        initUserInfo();

        setStatusNickname({
          ...statusNickname,
          validation: true,
          success: true,
        });

        setTimeout(() => {
          setStatusNickname({ ...statusNickname, success: false });
        }, 5000);
      })
      .catch((err) => {})
      .finally(() => {
        setEditNickname(false);
      });
  };

  const passwordValidation = () => {
    const minLength = newPassword.length >= 8;
    const containsChar = /[A-Za-z]/.test(newPassword);
    const containsNum = /\d/.test(newPassword);
    const containsSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
    const noSpaces = !/\s/.test(newPassword);

    if (
      minLength &&
      containsChar &&
      containsNum &&
      containsSpecial &&
      noSpaces
    ) {
      setStatusPassword({
        validation: true,
        success: false,
        message: "",
      });
      return true;
    } else {
      let errorMessage =
        "비밀번호는 최소 8자리 이상이며, 문자, 숫자, 특수문자를 각각 하나 이상 포함해야 하며, 공백을 포함할 수 없습니다.";
      setStatusPassword({
        validation: false,
        success: false,
        message: errorMessage,
      });
      return false;
    }
  };

  const onClickPasswordUpdate = () => {
    if (!passwordValidation()) {
      return;
    }

    if (newPassword !== newPasswordCheck) {
      setStatusPassword({
        validation: false,
        success: false,
        message: "새 비밀번호와 비밀번호 확인이 일치하지 않습니다.",
      });
      return;
    }

    axios
      .patch("/api/auth/user/password", {
        current_password: currentPassword,
        new_password: newPassword,
      })
      .then((res) => {
        setStatusPassword({
          validation: true,
          success: true,
          message: "비밀번호가 성공적으로 변경되었습니다.",
        });

        setLogoutCountdown(5);
        let countdownInterval = setInterval(() => {
          setLogoutCountdown((prevCount) => {
            if (prevCount <= 1) {
              clearInterval(countdownInterval);
              localStorage.removeItem("user");
              localStorage.removeItem("token");
              setUser(null);
              navigate("/");
              return null;
            }
            return prevCount - 1;
          });
        }, 1000);
      })
      .catch((err) => {
        if (err.response.data.status === "fail") {
          let errorMessage = err.response.data.message;
          setStatusPassword({
            validation: false,
            success: false,
            message: errorMessage,
          });
        }
      });
  };

  const onClickAccountDelete = () => {};

  return (
    <Container>
      <article>
        <h1>내 계정정보</h1>
        <hr />
        <section className="profile-img-setting">
          <img src={user && user.profile_url} />
          <button
            disabled={showEditMenu}
            className="profile-edit-btn"
            onClick={(e) => {
              e.stopPropagation();
              setShowEditMenu((prevShowEditMenu) => !prevShowEditMenu);
            }}
          >
            <MdOutlineEdit />
            &nbsp;변경
          </button>
          <div
            className={`profile-menu ${showEditMenu && "active"}`}
            ref={editMenuRef}
          >
            <ul>
              <li onClick={onClickResetProfileImg}>프로필 이미지 초기화</li>
              <li onClick={onClickUpdateProfileImg}>프로필 이미지 변경</li>
            </ul>
          </div>
        </section>

        <section className="etc-setting">
          <h3>닉네임</h3>
          <hr />

          <input
            type="text"
            disabled={!editNickname}
            onChange={onChangeNickname}
            value={nickname}
          />

          {editNickname ? (
            <button
              className="nickname-update-btn"
              onClick={onClickNicknameUpdate}
            >
              변경 완료
            </button>
          ) : (
            <button
              className="nickname-update-btn"
              onClick={() => {
                setEditNickname(true);
              }}
            >
              닉네임 변경
            </button>
          )}

          <Message>
            닉네임은 12글자 이하로 입력가능하며 공백은 허용하지 않습니다.
          </Message>
          {statusNickname && statusNickname.changeless && (
            <Message style={{ color: "#009432" }}>
              닉네임 변동사항이 없습니다.
            </Message>
          )}
          {statusNickname && statusNickname.void && (
            <Message style={{ color: "#e74c3c" }}>
              닉네임이 입력되지 않았습니다.
            </Message>
          )}
          {statusNickname && statusNickname.trim && (
            <Message style={{ color: "#e74c3c" }}>
              닉네임에 공백이 포함되어 있습니다. <br />
              공백을 제거 후 다시 시도하세요
            </Message>
          )}
          {statusNickname && statusNickname.leng && (
            <Message style={{ color: "#e74c3c" }}>
              닉네임이 입력 최대범위를 초과했습니다 <br />
              12글자 이하로 입력해주세요
            </Message>
          )}
          {statusNickname && statusNickname.special && (
            <Message style={{ color: "#e74c3c" }}>
              특수문자가 포함되어 있습니다 <br />
              제거 후 다시 시도하세요.
            </Message>
          )}
          {statusNickname && statusNickname.success && (
            <Message style={{ color: "#009432" }}>
              닉네임이 성공적으로 변경되었습니다.
            </Message>
          )}

          <section className="password-update">
            <h3>비밀번호 변경</h3>
            <hr />

            <label htmlFor="current-password">현재 비밀번호</label>
            <div className="password-input">
              <input
                type={showCurrentPassword ? "text" : "password"}
                id="current-password"
                value={currentPassword}
                onChange={(e) => {
                  setCurrentPassword(e.target.value);
                }}
              />
              <button
                className="toggle-password"
                onClick={toggleCurrentPasswordVisibility}
              >
                {showCurrentPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>

            <label htmlFor="new-password">새로운 비밀번호</label>
            <div className="password-input">
              <input
                type={showNewPassword ? "text" : "password"}
                id="new-password"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
              <button
                className="toggle-password"
                onClick={toggleNewPasswordVisibility}
              >
                {showNewPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>

            <label htmlFor="new-password-check">새로운 비밀번호 확인</label>
            <div className="password-input">
              <input
                type={showNewPasswordCheck ? "text" : "password"}
                id="new-password-check"
                value={newPasswordCheck}
                onChange={(e) => {
                  setNewPasswordCheck(e.target.value);
                }}
              />
              <button
                className="toggle-password"
                onClick={toggleNewPasswordCheckVisibility}
              >
                {showNewPasswordCheck ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>

            {!statusPassword.success && !statusPassword.valid && (
              <Message style={{ color: "#e74c3c" }}>
                {statusPassword.message}
              </Message>
            )}

            {statusPassword.success && (
              <Message style={{ color: "#009432" }}>
                비밀번호가 성공적으로 변경되었습니다.
                <strong style={{ fontSize: "16px" }}>
                  {logoutCountdown}초
                </strong>
                &nbsp;후에 로그아웃되어 메인 페이지로 이동합니다. 재로그인
                해주세요.
              </Message>
            )}

            <button
              className="password-update-btn"
              onClick={onClickPasswordUpdate}
            >
              비밀번호 변경
            </button>
          </section>

          <h3>회원탈퇴</h3>
          <hr />
          <button className="account-delete-btn" onClick={onClickAccountDelete}>
            회원탈퇴
          </button>
        </section>
      </article>
    </Container>
  );
};

export default AccountPage;
