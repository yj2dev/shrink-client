import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../../components/LoginModal";
import RegisterModal from "../../components/RegisterModal";
import UserPasswordModal from "../../components/UserPasswordModal";
import logoImg from "./img/logo.png";
import { Container, ContainerSpace, LeftSection, RightSection } from "./styled";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../../state/selectors/userSelectors";

const Header = () => {
  // const [user, setUser] = useState(localStorage.getItem("user") !== null);

  const [user, setUser] = useRecoilState(userState);

  const [showMenu, setShowMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showUserPasswordModal, setShowUserPasswordModal] = useState(false);

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
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onClickLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);

    setShowMenu(false);
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

              <button className="logout-btn" onClick={onClickLogout}>
                로그아웃
              </button>
            </nav>
          )}

          {user ? (
            <img
              src={user.profile_url}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              className={`profile-img ${showMenu ? "active" : ""}`}
              ref={triggerRef}
            />
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
