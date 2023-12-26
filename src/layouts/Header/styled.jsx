import styled from "styled-components";

export const ContainerSpace = styled.header`
  height: 78px;
`;
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 220;
  width: 100%;
  padding: 16px 30px;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;

  .logo-section {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .logo-img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 768px) {
    order: -1;
    flex-grow: 1;
    justify-content: center;
  }
`;

export const RightSection = styled.div`
  .profile-img {
    cursor: pointer;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #ccc;
  }

  .user-menu {
    border: 1px solid #ccc;
    padding: 10px 20px;

    position: absolute;
    top: 64px;
    right: 0;
  }

  .login-button {
    padding: 10px 27px;
    font-color: white;
    border: none;
    background-color: #0f62fe;
    cursor: pointer;
  }
  .loginTitle {
    color: white;
    font-weight: 700;
    cursor: pointer;
  }
`;
