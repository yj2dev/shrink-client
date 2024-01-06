import { Container, Message, NotDelCheckContainer } from "./styled";
import { useRecoilState } from "recoil";
import { userState } from "../../state/userState";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import ProfileImageCropModal from "../../components/ProfileImageCropModal";
import AlertModal from "../../components/AlertModal";

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

  const [showImageCropModal, setShowImageCropModal] = useState(false);

  const [showResetProfileModal, setShowResetProfileModal] = useState(false);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);

  const [checkDeleteAccount, setCheckDeleteAccount] = useState(false);

  const [deleteAccountNickname, setDeleteAccountNickname] = useState("");
  const [deleteAccountPhone, setDeleteAccountPhone] = useState("");
  const [deleteAccountState, setDeleteAccountState] = useState(null);

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
        // 프로필 이미지 URL에 캐시 방지용 쿼리 문자열 추가 (with GPT4)
        if (data.user && data.user.profile_url) {
          data.user.profile_url += `?timestamp=${new Date().getTime()}`;
        }
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log("data.user >> ", data.user);
        setUser(data.user);
        setNickname(data.user.nickname);
        return data.user;
      } catch (err) {
        console.log("err >> ", err);
      }
    }
    return null;
  };

  // const initUserInfo = async () => {
  //   if (localStorage.getItem("token")) {
  //     try {
  //       const { data } = await axios.get("/api/auth/user/info");
  //       localStorage.setItem("user", JSON.stringify(data.user));
  //
  //       console.log("data.user >> ", data.user);
  //
  //       setUser(data.user);
  //       setNickname(data.user.nickname);
  //
  //       return data.user;
  //     } catch (err) {
  //       console.log("err >> ", err);
  //     }
  //   }
  //   return null;
  // };

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

  const onClickDeleteAccount = () => {
    const payload = {
      phone: deleteAccountPhone,
      nickname: deleteAccountNickname,
    };

    axios
      .delete("/api/auth/user/delete", {
        data: payload,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("res >> ", res);
        setDeleteAccountState(true);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        navigate("/");
      })
      .catch((err) => {
        if (err.response.data.status === "fail") {
          setDeleteAccountState(false);
        }
        console.log("err >> ", err);
      });
  };

  const onClickResetProfileImg = (e) => {
    setShowEditMenu(false);

    const fd = new FormData();
    fd.append("image", null);

    axios
      .patch("/api/auth/user/profile-image", fd)
      .then((res) => {
        console.log("res img >> ", res);
        if (res.data.status === "success") {
          initUserInfo();
        }
      })
      .catch((err) => {});
  };

  const onClickUpdateProfileImg = () => {
    setShowImageCropModal(true);
  };

  return (
    <>
      <ProfileImageCropModal
        show={showImageCropModal}
        close={() => setShowImageCropModal(false)}
        initUserInfo={initUserInfo}
      ></ProfileImageCropModal>

      <AlertModal
        show={showResetProfileModal}
        close={() => setShowResetProfileModal(false)}
        confirm={onClickResetProfileImg}
        hidden={{ close: true }}
        type={1}
      >
        <span style={{ fontWeight: 800 }}>
          프로필 이미지를 정말로 초기화 하시겠습니까?
        </span>
        <span style={{ fontSize: "16px", marginTop: "18px" }}>
          회원가입시 생성된 프로필로 변경됩니다.
        </span>
      </AlertModal>

      <AlertModal
        show={showDeleteAccountModal}
        close={() => {
          setShowDeleteAccountModal(false);
          setCheckDeleteAccount(false);
          setDeleteAccountPhone("");
          setDeleteAccountNickname("");
          setDeleteAccountState(null);
        }}
        closeOutside={false}
        confirm={onClickDeleteAccount}
        hidden={{ close: true, confirm: !checkDeleteAccount }}
        type={4}
        customText={{ confirm: "계정 삭제", cancel: "취소" }}
      >
        <span style={{ fontWeight: 800 }}>계정을 정말로 삭제하시겠습니까?</span>
        <span style={{ fontSize: "16px", marginTop: "18px" }}>
          계정을 삭제하면 게시글, 댓글, 분석 기록등 모든 정보가 <br />
          영구적으로 삭제되며,&nbsp;
          <span style={{ color: "#009432", fontWeight: 800 }}>
            복구할 수 없습니다.
            <br />
            <br />
          </span>
          <NotDelCheckContainer>
            <div className="check-delete-account-wrapper">
              <input
                type="checkbox"
                id="check-delete-account"
                checked={checkDeleteAccount}
                onClick={() => setCheckDeleteAccount(!checkDeleteAccount)}
              />
              <label htmlFor="check-delete-account">복구할 수 없습니다</label>
            </div>

            <br />

            <div
              className={`delete-account-input ${
                checkDeleteAccount && "active"
              }`}
            >
              <div>
                계정을 삭제하시려면&nbsp;
                <b>
                  휴대번호와 닉네임(
                  <u style={{ color: "#009432" }}>{nickname}</u>)
                </b>
                을
                <br />
                입력해주세요.
              </div>

              <label>휴대번호</label>
              <input
                type="text"
                value={deleteAccountPhone}
                onChange={(e) => setDeleteAccountPhone(e.target.value)}
              />
              <label>닉네임</label>
              <input
                type="text"
                value={deleteAccountNickname}
                onChange={(e) => setDeleteAccountNickname(e.target.value)}
              />
            </div>

            {deleteAccountState === false && (
              <div
                style={{
                  fontWeight: 800,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#a40e26",
                }}
              >
                유저 정보가 일치하지 않습니다.
              </div>
            )}
          </NotDelCheckContainer>
        </span>
      </AlertModal>

      <Container>
        <article>
          <h1>내 계정정보</h1>
          <hr />
          <section className="profile-img-setting">
            <img src={user ? user.profile_url : ""} />
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
                <li onClick={() => setShowResetProfileModal(true)}>
                  프로필 이미지 초기화
                </li>
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
            {statusNickname &&
              !statusNickname.success &&
              statusNickname.void && (
                <Message style={{ color: "#e74c3c" }}>
                  닉네임이 입력되지 않았습니다.
                </Message>
              )}
            {statusNickname &&
              !statusNickname.success &&
              statusNickname.trim && (
                <Message style={{ color: "#e74c3c" }}>
                  닉네임에 공백이 포함되어 있습니다. <br />
                  공백을 제거 후 다시 시도하세요
                </Message>
              )}
            {statusNickname &&
              !statusNickname.success &&
              statusNickname.leng && (
                <Message style={{ color: "#e74c3c" }}>
                  닉네임이 입력 최대범위를 초과했습니다 <br />
                  12글자 이하로 입력해주세요
                </Message>
              )}
            {statusNickname &&
              !statusNickname.success &&
              statusNickname.special && (
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
                  {showCurrentPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
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
                  {showNewPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
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
                  {showNewPasswordCheck ? (
                    <IoEyeOutline />
                  ) : (
                    <IoEyeOffOutline />
                  )}
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
            <button
              className="account-delete-btn"
              onClick={() => setShowDeleteAccountModal(true)}
            >
              회원탈퇴
            </button>
          </section>
        </article>
      </Container>
    </>
  );
};

export default AccountPage;
