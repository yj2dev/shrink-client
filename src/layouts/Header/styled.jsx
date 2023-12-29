import styled from "styled-components";

export const ContainerSpace = styled.header`
  height: 78px;
`;

export const ContainerBlur = styled.header`
  position: fixed;
  backdrop-filter: blur(8px);
  height: 78px;
  z-index: 210;
  width: 100%;
  top: 0;
  left: 0;
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //background-color: #fff;
  //background-color: rgba(255, 255, 255, 0.99);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 220;
  width: 100%;
  padding: 16px 30px;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.7);
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

  .show-menu-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
  }

  .profile-img {
    cursor: pointer;
    width: 42px;
    height: 42px;
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
    padding: 32px 36px;
    min-width: 240px;
    z-index: 100;
    background-color: #ffffff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 68px;
    right: 28px;

    box-shadow: // 아래쪽
      0 4px 8px rgba(0, 0, 0, 0.1),
      // 오른쪽
      4px 0 8px rgba(0, 0, 0, 0.1),
      // 왼쪽
      -4px 0 8px rgba(0, 0, 0, 0.1),
      // 위쪽
      0 -4px 8px rgba(0, 0, 0, 0.1);

    .user-menu-profile-img {
      width: 84px;
      height: 84px;
      border-radius: 50%;
      border: 1px solid #ccc;
      margin-bottom: 12px;
    }

    .user-nickname {
      padding: 0 4px;
      font-weight: 500;
      margin-bottom: 12px;
      font-size: 20px;
      white-space: nowrap;
    }

    button {
      background-color: #f6f8fa;
      border: 1px solid #dee0e1;
      width: 100%;
      margin: 12px 0 0 0;
      font-weight: 800;
      padding: 10px 0;
      cursor: pointer;
      border-radius: 12px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: 0.2s;
      font-size: 16px;
    }

    button:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    button:active {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .move-account-btn {
    }

    .move-account-btn:hover {
      background-color: #eaecee;
    }

    .logout-btn {
      color: #a40e26;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: 0.2s;
    }

    .logout-btn.active {
      padding: 18px 0 10px 0;
      color: #000;
    }

    .logout-btn.active:hover {
      background-color: #f6f8fa;
      color: #000;
      cursor: default;
    }

    .logout-submit-btn {
      overflow: hidden;
      color: #a40e26;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 0;
      width: 90%;
      height: 0;
      line-height: 0;
      padding: 0;
      margin: 0;
      border: none;
    }

    .logout-submit-btn.active {
      padding: 18px 0;
      margin: 16px 0 0 0;
      font-weight: 800;
      font-size: 16px;
      line-height: 0;
      border: 1px solid #dee0e1;
    }

    .logout-submit-btn:hover {
      width: 90%;
      background-color: rgba(164, 14, 38, 0.8);
      color: #fff;
    }

    .logout-btn:hover {
      background-color: rgba(164, 14, 38, 0.8);
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
