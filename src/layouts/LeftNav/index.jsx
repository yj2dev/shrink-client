import { Container } from "./styled";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  const getClassName = ({ isActive }) => (isActive ? "active" : "");

  return (
    <Container>
      <ul>
        <li>
          <NavLink to="/" className={getClassName}>
            메인화면
          </NavLink>
        </li>
        <li>
          <NavLink to="/account" className={getClassName}>
            계정정보
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorite" className={getClassName}>
            관심상품
          </NavLink>
        </li>
        <li>
          <NavLink to="/report" className={getClassName}>
            신고하기
          </NavLink>
        </li>
        <li>
          <NavLink to="/question" className={getClassName}>
            질문하기
          </NavLink>
        </li>
      </ul>
    </Container>
  );
};

export default LeftNav;
