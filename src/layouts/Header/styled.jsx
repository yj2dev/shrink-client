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
  display: flex;
  justify-content: center;
  align-items: center;

  .profile-img {
    cursor: pointer;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 2px solid #ccc;
    transition: 0.2s;
    box-sizing: border-box;
    padding: 2px;
  }

  .profile-img:hover {
    padding: 0;
  }

  .profile-img.active {
    padding: 0;
  }

  .user-menu {
    //border: 1px solid #ccc;
    padding: 32px 36px;
    z-index: 100;
    background-color: #ffffff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 68px;
    right: 28px;

    box-shadow:
      // 아래쪽
      0 4px 8px rgba(0, 0, 0, 0.1),
      // 오른쪽
      4px 0 8px rgba(0, 0, 0, 0.1),
      // 왼쪽
      -4px 0 8px rgba(0, 0, 0, 0.1),
      // 위쪽
      0 -4px 8px rgba(0, 0, 0, 0.1);

    .user-menu-profile-img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      border: 1px solid #ccc;
      margin-bottom: 12px;
    }

    .user-nickname {
      font-weight: 500;
      margin-bottom: 12px;
      font-size: 24px;
    }

    button {
      margin: 12px 0 0 0;
      font-weight: 800;
      border: none;
      width: 90%;
      padding: 10px 0;
      cursor: pointer;
      border-radius: 25px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: 0.2s;
    }

    button:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    button:active {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .move-account-btn {
    }

    .logout-btn {
    }

    .logout-btn:hover {
      background-color: rgba(255, 0, 0, 0.5);
      color: #fff;
    }
  }

  .login-button {
    padding: 10px 27px;
    color: white;
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
