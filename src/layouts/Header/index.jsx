import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import LoginModal from "../../components/LoginModal";
import RegisterModal from "../../components/RegisterModal";
import { userState } from "../../state/userState";
import logoImg from "./img/logo.png";
import {
  Container,
  ContainerBlur,
  ContainerSpace,
  LeftSection,
  RightSection,
} from "./styled";

const Header = () => {
  const [isLogoHover, setIsLogoHover] = useState(false);

  const handleLogoEnter = () => {
    setIsLogoHover(true);
  };

  const handleLogoLeave = () => {
    setIsLogoHover(false);
  };

  const [user, setUser] = useRecoilState(userState);

  const [showMenu, setShowMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
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
  };

  const onCloseModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
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
          <div
            onClick={onClickLogo}
            className="logo-section"
            onMouseEnter={handleLogoEnter}
            onMouseLeave={handleLogoLeave}
          >
            <img src={logoImg} alt="logo" className="logo-img" />
            <div className="content">
              <h1 className={isLogoHover ? "active" : ""}>줄었슈링크</h1>
              <h3 className={isLogoHover ? "active" : ""}>
                가격 변동 없는 상품도 다시 보자
              </h3>
            </div>
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
              로그인
            </button>
          )}

          <LoginModal
            show={showLoginModal}
            onClose={onCloseModal}
            onShowRegister={onShowRegisterModal}
            onCloseOutside={false}
          />
          <RegisterModal
            show={showRegisterModal}
            onClose={onCloseModal}
            onShowLogin={onShowLoginModal}
          />
        </RightSection>
      </Container>
    </>
  );
};

export default Header;
