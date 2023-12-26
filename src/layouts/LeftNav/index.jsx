import { Container, HamburgerMenu } from "./styled";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  MdOutlineAccountBox,
  MdOutlineHome,
  MdOutlineReport,
  MdQuestionMark,
} from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import {IoCameraOutline} from "react-icons/io5";

const LeftNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getClassName = ({ isActive }) => (isActive ? "active" : "");

  const closeMenu = (event) => {
    event.stopPropagation();
    setIsOpen(false);
  };
  return (
    <>
      {!isOpen && (
        <HamburgerMenu onClick={() => setIsOpen(true)}>&#9776;</HamburgerMenu>
      )}

      <Container isOpen={isOpen} ref={navRef}>
        <ul>
          <li onClick={closeMenu}>
            <NavLink to="/" className={getClassName}>
              <MdOutlineHome />
              &nbsp;&nbsp;메인화면
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/analysis" className={getClassName}>
              <IoCameraOutline />
              &nbsp;&nbsp;제품분석
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/account" className={getClassName}>
              <MdOutlineAccountBox />
              &nbsp;&nbsp;계정정보
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/favorite" className={getClassName}>
              <FaRegHeart />
              &nbsp;&nbsp;관심상품
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/report" className={getClassName}>
              <MdOutlineReport />
              &nbsp;&nbsp;신고하기
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/question" className={getClassName}>
              <MdQuestionMark />
              &nbsp;&nbsp;질문하기
            </NavLink>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default LeftNav;
