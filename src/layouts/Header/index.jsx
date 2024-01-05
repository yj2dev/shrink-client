import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import LoginModal from "../../components/LoginModal";
import RegisterModal from "../../components/RegisterModal";
import { userState } from "../../state/userState";
import {
  Container,
  ContainerBlur,
  ContainerSpace,
  RightSection,
  Section,
} from "./styled";
import { FaSearch } from "react-icons/fa";
import {
  IoCameraOutline,
  IoClose,
  IoMenu,
  IoSearchOutline,
} from "react-icons/io5";
import LogoContainer from "./Section/LogoCotainer";

const Header = () => {
  const [user, setUser] = useRecoilState(userState);

  const [showMenu, setShowMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [searchKeyword, setSearchKeyword] = useState("");

  const [extendLogoutSubmit, setExtendLogoutSubmit] = useState(false);

  const navigate = useNavigate();
  const menuRef = useRef();
  const triggerRef = useRef();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [isScroll, setIsScroll] = useState(false);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768,
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) setIsScroll(true);
      else setIsScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const onSubmitSearch = (e) => {
    e.preventDefault();

    if (searchKeyword.length < 1) return;

    navigate("/product/search", { state: { keyword: searchKeyword } });
  };

  const [showClean, setShowClean] = useState(false);

  const onChangeKeyword = (e) => {
    if (e.target.value.length > 0) setShowClean(true);
    else setShowClean(false);

    setSearchKeyword(e.target.value);
  };
  return (
    <>
      <ContainerSpace />
      <ContainerBlur />
      <Container className={isScroll ? "active" : ""}>
        <Section>
          <div className="flex-item">
            <LogoContainer />
            <div className="search-section">
              <form onSubmit={onSubmitSearch}>
                <input
                  type="text"
                  value={searchKeyword}
                  maxLength={20}
                  onChange={onChangeKeyword}
                />
                <button type="submit" disabled={false}>
                  <IoSearchOutline />
                </button>
              </form>
              <Link to="/analysis" className="camera-btn">
                <IoCameraOutline />
              </Link>
              {showClean && (
                <div
                  className="clean-btn"
                  onClick={() => {
                    setSearchKeyword("");
                    setShowClean(false);
                  }}
                >
                  &times;
                </div>
              )}
            </div>
            {isMobile &&
              (user ? (
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
              ))}

            {isMobile && (
              <button onClick={() => setShowMobileMenu((p) => !p)}>
                {showMobileMenu ? <IoClose /> : <IoMenu />}
              </button>
            )}
          </div>

          <RightSection>
            {(!isMobile || showMobileMenu) && (
              <div className="flex-item">
                <div className="nav-link">
                  <Link to="/report">신고</Link>
                </div>
                <div className="nav-link">
                  <Link to="/question">질문</Link>
                </div>
              </div>
            )}
            {!isMobile &&
              (user ? (
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
              ))}
          </RightSection>
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
        </Section>
      </Container>
    </>
  );
};

export default Header;
