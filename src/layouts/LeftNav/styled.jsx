import styled from "styled-components";
export const Container = styled.nav`
  background-color: #fff;
  width: 200px;
  height: 100vh;
  //box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  box-shadow: 4px 0 4px -4px rgba(0, 0, 0, 0.2);

  padding-top: 24px;
  @media (max-width: 768px) {
    position: fixed;
    width: 200px;
    left: 0;
    top: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};

    padding-top: 84px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    padding: 8px 0;
    color: #425691;
  }

  li:not(:first-child) {
    //border-top: 1px solid #eaeaea;
  }

  a {
    display: flex;
    align-items: center;
    color: #333;
    text-decoration: none;
    font-size: 18px;
    flex-grow: 1;
    width: 100%;
    padding: 14px 0 14px 30px;
    transition:
      background-color 0.3s ease,
      color 0.3s ease,
      padding-left 0.3s ease;
  }

  a:hover {
    background-color: #e8eeff;
  }

  .active,
  .active:hover {
    color: #0a2671;
    background-color: #e8eeff;
    font-weight: 800;
    padding-left: 44px;
    border-left: 6px solid #3f5dfe;
    box-shadow: inset 0 0 10px rgba(232, 238, 255, 0.2);
    transition:
      background-color 0.3s ease,
      color 0.3s ease,
      padding-left 0.3s ease,
      border-left 0.3s ease;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 1000;
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 24px;
  }
`;
