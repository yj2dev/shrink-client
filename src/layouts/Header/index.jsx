import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { IoCameraOutline, IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import ContentModal from "../../components/ContentModal";
import LoginModal from "../../components/LoginModal";
import RegisterModal from "../../components/RegisterModal";
import { searchKeywordState } from "../../state/searchKeywordState";
import { userState } from "../../state/userState";
import LogoContainer from "./Section/LogoCotainer";
import {
  Container,
  ContainerBlur,
  ContainerSpace,
  RightSection,
  Section,
} from "./styled";

const Header = () => {
  const [user, setUser] = useRecoilState(userState);

  const [showMenu, setShowMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showContentModal, setShowContentModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);

  const [extendLogoutSubmit, setExtendLogoutSubmit] = useState(false);

  const navigate = useNavigate();
  const menuRef = useRef();
  const triggerRef = useRef();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [isScroll, setIsScroll] = useState(false);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768,
  );

  const mobileMenuRef = useRef();

  // 작성자: 이유진
  // 작성일: 2024.01.05
  // 내용: 모바일 메뉴 활성화 상태에서 외부 클릭시 닫히는 로직인데 이를 사용하면 원래 버튼이 동작하지 않습니다.
  // 따라서 외부클릭을 포기하고 주석처리 하였습니다. (다른 외부클릭 로직들도 이런형태)
  // useEffect(() => {
  //   const onClickOutside = (e) => {
  //     if (
  //       showMobileMenu &&
  //       mobileMenuRef.current &&
  //       !mobileMenuRef.current.contains(e.target)
  //     ) {
  //       setShowMobileMenu(false);
  //     }
  //   };
  //
  //   document.addEventListener("mousedown", onClickOutside);
  //
  //   return () => {
  //     document.removeEventListener("mousedown", onClickOutside);
  //   };
  // }, [showMobileMenu]);

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
      setShowMobileMenu(false);
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
    // navigate("/");

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

  const onShowContentModal = () => {
    setShowContentModal(true);
  };

  const onCloseModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  const onCloseContentModal = () => {
    setShowContentModal(false);
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
      {!showMobileMenu && <ContainerBlur />}
      <Container className={isScroll ? "active" : ""}>
        <Section>
          <div className="flex-item mobile">
            <div className="mobile-logo-wrapper">
              <LogoContainer closeMobileMenu={() => setShowMobileMenu(false)} />
              <div className="search-section">
                <form onSubmit={onSubmitSearch}>
                  <input
                    type="text"
                    value={searchKeyword}
                    maxLength={20}
                    onChange={onChangeKeyword}
                  />
                  {/*아이콘 용도로 사용 필요시 disable 상태 변경 후 검색 버튼으로 사용 가능 */}
                  <button type="submit">
                    <IoSearchOutline />
                  </button>
                </form>
                <Link
                  to="/analysis"
                  className="camera-btn"
                  onClick={() => {
                    setShowMobileMenu(false);
                  }}
                >
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
            </div>
            <div className="mobile-menu-wrapper">
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
                    {/*{isMobile ? <IoLogInOutline /> : "로그인"}*/}
                  </button>
                ))}

              {isMobile && (
                <div className="mobile-menu-wrapper">
                  <input
                    type="checkbox"
                    id="mobile-menu"
                    checked={showMobileMenu}
                    onClick={() => setShowMobileMenu((p) => !p)}
                  />
                  <label htmlFor="mobile-menu">
                    <span />
                    <span />
                    <span />
                  </label>
                </div>
              )}

              {/*{isMobile && (*/}
              {/*  <button*/}
              {/*    className="mobile-menu"*/}
              {/*    onClick={() => setShowMobileMenu((p) => !p)}*/}
              {/*  >*/}
              {/*    {showMobileMenu ? <IoClose /> : <IoMenu />}*/}
              {/*  </button>*/}
              {/*)}*/}
            </div>
          </div>

          <RightSection>
            {(!isMobile || showMobileMenu) && (
              <div className="flex-item" ref={mobileMenuRef}>
                <div
                  className="nav-link"
                  onClick={() => {
                    setShowMobileMenu(false);
                  }}
                >
                  <Link to="/report">신고</Link>
                </div>
                <div
                  className="nav-link"
                  onClick={() => {
                    setShowMobileMenu(false);
                  }}
                >
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
            onShowContent={onShowContentModal}
          />
          <ContentModal show={showContentModal} onClose={onCloseContentModal} />
        </Section>
      </Container>
    </>
  );
};

export default Header;
