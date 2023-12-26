import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../../components/LoginModal";
import RegisterModal from "../../components/RegisterModal";
import UserPasswordModal from "../../components/UserPasswordModal";
import logoImg from "./img/logo.png";
import { Container, ContainerSpace, LeftSection, RightSection } from "./styled";

const Header = () => {
  /*
   * 설명: 유저가 들어가면 토큰에서 유저 데이터를 가져오지만 없을시 null로 초기화했습니다.
   * 개발시 true, null로 바꿔가면서 사용하시면 될 것 같습니다.
   * 서버와 연동시 주석 처리된 부분 해제하고 사용하시면 됩니다.
   * - 주석 지워도 됩니다.
   * 작성일: 23.12.22
   * 작성자: 이유진(a045058)
   * */
  // 서버 연결시
  // const [user, setUser] = useState(localStorage.getItem("user") !== null);

  //   개별시 사용
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState({
  //   profile_url: "https://api.dicebear.com/7.x/pixel-art/svg?seed=$01097457550",
  //   nickname: "가리비공주",
  // });

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
  }

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
              <button onClick={onClickLogout}>로그아웃</button>
            </nav>
          )}
          {user ? (
            <img
              src={user.profile_url}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              className="profile-img"
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
