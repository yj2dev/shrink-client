import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 16px 30px;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;

  .logo-img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 400;
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
    background-color: #0F62FE;
  }
  .loginTitle {
    color: white;
    font-weight: 700;
  }
`;
