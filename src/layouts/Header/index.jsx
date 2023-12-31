import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../../components/LoginModal";
import RegisterModal from "../../components/RegisterModal";
import UserPasswordModal from "../../components/UserPasswordModal";
import logoImg from "./img/logo.png";
import {
  Container,
  ContainerBlur,
  ContainerSpace,
  LeftSection,
  RightSection,
} from "./styled";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../../state/selectors/userSelectors";
import Modal from "../../components/Modal";

const Header = () => {
  // const [user, setUser] = useState(localStorage.getItem("user") !== null);

  const [user, setUser] = useRecoilState(userState);

  const [showMenu, setShowMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showUserPasswordModal, setShowUserPasswordModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [extendLogoutSubmit, setExtendLogoutSubmit] = useState(false);

  const navigate = useNavigate();
  const menuRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !triggerRef.current.contains(e.target)
      ) {
        setShowMenu(false);
        setExtendLogoutSubmit(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios.get("/api/auth/user/info").then(({ data }) => {
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
      });
    }
  }, []);

  const onClickLogout = () => {
    navigate("/");

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setShowMenu(false);
    setUser(null);
  };

  const onShowLoginModal = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false);
  };

  const onShowRegisterModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
    setShowUserPasswordModal(false);
  };

  const onShowUserPasswordModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
    setShowUserPasswordModal(true);
  };

  const onCloseModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
    setShowUserPasswordModal(false);
  };

  const onClickLogo = () => {
    navigate("/");
  };

  return (
    <>
      <ContainerSpace />
      <ContainerBlur />
      <Container>
        <LeftSection>
          <div className="logo-section" onClick={onClickLogo}>
            <img src={logoImg} alt="logo" className="logo-img" />
            <h1>줄었슈링크</h1>
          </div>
        </LeftSection>
        <RightSection>
          {showMenu && (
            <nav className="user-menu" ref={menuRef}>
              {user && (
                <img
                  src={user.profile_url}
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                  className="user-menu-profile-img"
                  ref={triggerRef}
                />
              )}
              {user && (
                <div className="user-nickname">
                  안녕하세요, {user.nickname}님
                </div>
              )}

              <button
                className="move-account-btn"
                onClick={() => {
                  navigate("/account");
                  setShowMenu(false);
                }}
              >
                계정관리
              </button>

              <button
                className={`logout-btn ${extendLogoutSubmit ? "active" : ""}`}
                onClick={() => {
                  // setShowMenu(false);
                  setExtendLogoutSubmit(!extendLogoutSubmit);
                  // setShowLogoutModal(true);
                }}
              >
                {extendLogoutSubmit ? "로그아웃 하시겠습니까?" : "로그아웃"}
                <button
                  className={`logout-submit-btn ${
                    extendLogoutSubmit ? "active" : ""
                  }`}
                  onClick={onClickLogout}
                >
                  로그아웃
                </button>
              </button>
            </nav>
          )}

          {user ? (
            <button
              disabled={showMenu}
              className="show-menu-btn"
              onClick={() => {
                setShowMenu(true);
              }}
            >
              <img
                src={user.profile_url}
                className={`profile-img ${showMenu ? "active" : ""}`}
                ref={triggerRef}
              />
            </button>
          ) : (
            <button
              onClick={() => {
                setShowLoginModal(!showLoginModal);
              }}
              className="login-button"
            >
              <div className="loginTitle">로그인</div>
            </button>
          )}

          <LoginModal
            show={showLoginModal}
            onClose={onCloseModal}
            onShowRegister={onShowRegisterModal}
            onShowUserPassword={onShowUserPasswordModal}
            onCloseOutside={false}
          />
          <RegisterModal
            show={showRegisterModal}
            onClose={onCloseModal}
            onShowLogin={onShowLoginModal}
            onShowUserPassword={onShowUserPasswordModal}
          />
          <UserPasswordModal
            show={showUserPasswordModal}
            onClose={onCloseModal}
            onShowLogin={onShowLoginModal}
            onShowRegister={onShowRegisterModal}
          />
        </RightSection>
      </Container>
    </>
  );
};

export default Header;
