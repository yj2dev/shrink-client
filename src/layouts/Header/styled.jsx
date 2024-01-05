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
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 220;
  width: 100%;
  padding: 1em 1.5em;
  box-sizing: border-box;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  .active {
  }

  background-color: rgba(255, 255, 255, 0.7);

  color: #000;

  text-align: center;
  transition: background-color 0.5s;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  //border: 4px solid orangered;

  a {
    color: #000;
  }

  .flex-item {
    //width: 100%;
    display: flex;
    position: relative;
    //flex-direction: row;
    //align-items: center;
    //justify-content: space-between;
    //border: 1px solid red;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .left {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    //top: 0;
    //left: 0;
  }

  .search-section {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    .camera-btn {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      color: #3a85fc;
      font-size: 1.4em;
      transition: 0.2s;
      height: 32px;
      width: 44px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 8px;
      }
    }

    button[type="submit"] {
      background-color: transparent;
      color: #9aa0a6;
      cursor: pointer;
      position: absolute;
      left: 8px;
      font-size: 1.2em;
      border: none;
      outline: none;
      top: 50%;
      transform: translateY(-50%);
    }

    button[type="submit"]:disabled {
      cursor: default;
    }

    .clean-btn {
    }
    input {
      border: 3px solid #dfe1e5;
      background-color: #fff;
      outline: none;
      border-radius: 8px;
      //height: 56px;
      width: 300px;

      @media (max-width: 768px) {
        width: 100px;
      }
      padding: 8px 36px 8px 36px;

      transition: 0.2s;

      &:hover {
      }
      &:focus {
        box-shadow:
          0 2px 4px rgba(0, 0, 0, 0.1),
          2px 0 4px rgba(0, 0, 0, 0.1),
          -2px 0 4px rgba(0, 0, 0, 0.1),
          0 -2px 4px rgba(0, 0, 0, 0.1);
      }

      button[type="submit"] {
        background-color: transparent;
        cursor: pointer;
        outline: none;
        border: 2px dashed red;
      }
    }
  }

  //  ========================================
  //                Right Section
  //  ========================================

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
    justify-content: flex-end;

    box-shadow: 4px 4px 8px 1px rgba(0, 0, 0, 0.2);
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.2s;
    background-color: #0f62fe;
    color: #fff;

    //padding: 10px 28px;
    padding: 0.5em 1em;
    border-radius: 8px;
    font-size: 1em;
    font-weight: 500;
  }

  .login-button:hover {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
    position: relative;
    top: 2px;
    color: #fff;
    background-color: #2245fd;
  }
`;

export const RightSection = styled.div`
  display: flex;
  border: 1px solid green;

  //justify-content: center;
  //align-items: center;
  //width: 100%;

  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5em;
    padding: 0.5em 1em;
    border: 1px solid red;
    border-radius: 8px;
    //text-align: center;
    //width: 100%;
    //background-color: #0f62fe;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
