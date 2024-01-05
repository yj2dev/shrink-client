import styled from "styled-components";

export const ContainerSpace = styled.header`
  height: 82px;
`;

export const ContainerBlur = styled.header`
  position: fixed;
  backdrop-filter: blur(8px);
  height: 82px;
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
  transition: 0.2s;

  &.active {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  }

  background-color: rgba(255, 255, 255, 0.7);

  color: #000;

  text-align: center;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  //border: 4px solid orangered;

  .mobile {
    //border: 1px solid red;
    display: flex;
    justify-content: space-between;
  }

  .mobile-logo-wrapper {
    display: flex;
    justify-content: center;
  }

  .mobile-menu-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-item {
    display: flex;
    position: relative;

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
  }

  .search-section {
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

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

      &:hover::before {
        display: block;
      }

      &::before {
        display: none;
        font-size: 12px;
        font-weight: 400;
        padding: 4px 8px 6px 8px;
        transition: 0.2s;
        content: "웹캠으로 검색";
        position: absolute;
        top: 40px;
        border-radius: 2px;
        left: -18px;
        background-color: #2d2d2d;
        color: #fff;
        white-space: nowrap;
        z-index: 2;
      }

      &:hover::after {
        display: block;
      }

      &::after {
        display: none;
        z-index: 5;
        content: "";
        position: absolute;
        top: 34px;
        left: 18px;

        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 8px solid #2d2d2d;
      }
    } //camera-btn end

    button[type="submit"] {
      background-color: transparent;
      color: #9aa0a6;
      cursor: pointer;
      position: absolute;
      left: 8px;
      font-size: 1.2em;
      border: none;
      outline: none;
      top: 53%;
      transform: translateY(-50%);
    }

    button[type="submit"]:disabled {
      cursor: default;
    }

    .clean-btn {
      position: absolute;
      right: 52px;
      font-weight: 800;
      font-size: 1.2em;
      cursor: pointer;
      padding-right: 8px;
      margin-right: 8px;
      border-right: 3px solid #dfe1e5;

      &:hover::before {
        display: block;
      }

      &::before {
        display: none;
        font-size: 12px;
        font-weight: 400;
        padding: 4px 8px 6px 8px;
        transition: 0.2s;
        content: "지우기";
        position: absolute;
        top: 38px;
        border-radius: 2px;
        left: -16px;
        background-color: #2d2d2d;
        color: #fff;
        white-space: nowrap;
        z-index: 2;
      }

      &:hover::after {
        display: block;
      }

      &::after {
        display: none;
        z-index: 5;
        content: "";
        position: absolute;
        top: 32px;
        left: 4px;

        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 8px solid #2d2d2d;
      }
    }
    input {
      border: 3px solid #dfe1e5;
      background-color: #fff;
      outline: none;
      border-radius: 8px;
      //height: 56px;
      //width: 50%;
      width: 250px;
      font-size: 1em;

      @media (max-width: 1024px) {
        width: 150px;
      }

      @media (max-width: 768px) {
        width: 74px;
      }
      padding: 10px 90px 10px 44px;

      transition: 0.1s;
      &:hover {
        box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.08);
      }
      &:focus {
        box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.08);
      }
    }
  }

  //  ========================================
  //                Right Section
  //  ========================================

  .mobile-menu-wrapper {
    //display: flex;
    //justify-content: center;
    //align-items: center;

    margin-left: 12px;

    input[id="mobile-menu"] {
      display: none;
    }

    input[id="mobile-menu"] + label {
      display: block;
      width: 30px;
      height: 20px;
      position: relative;
      cursor: pointer;
    }

    input[id="mobile-menu"] + label > span {
      transform-origin: center;

      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      //height: 4px; // x가 대칭이 맞지 않는 문제(미해결)
      border-radius: 30px;
      background-color: #000;
      transition: 0.2s;
    }

    input[id="mobile-menu"] + label > span:nth-child(1) {
      top: 0;
    }

    input[id="mobile-menu"] + label > span:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }

    input[id="mobile-menu"] + label > span:nth-child(3) {
      bottom: 0;
    }

    input[id="mobile-menu"]:checked + label > span:nth-child(1) {
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }

    input[id="mobile-menu"]:checked + label > span:nth-child(2) {
      opacity: 0;
    }

    input[id="mobile-menu"]:checked + label > span:nth-child(3) {
      bottom: 50%;
      transform: translateY(-50%) rotate(-45deg);
    }
  }
  .show-menu-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    background-color: transparent;
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
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;

  @media (max-width: 768px) {
    width: 100%;
  }

  .flex-item {
    margin-right: 1em;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;

    //border: 1px solid green;

    @media (max-width: 768px) {
      margin-right: 0;
      margin-top: 1em;
      flex-direction: column;
      width: 100%;
    }
  }
  .nav-link {
    width: 100%;
    padding: 4px 8px;
    box-sizing: border-box;
  }
  .nav-link a {
    @media (max-width: 768px) {
      width: 100%;
      display: block;
      padding: 8px 0;
      border-radius: 8px 8px 0 0;
      margin: 0;
      transition: 0.2s;

      &:hover {
        background-color: #2245fd;
        color: #fff;
      }
    }
    text-decoration: none;
    color: #000;

    position: relative;

    font-size: 1em;
    font-weight: 500;

    margin: 0 8px;
    padding: 2px 8px;

    &::after {
      content: "";
      position: absolute;
      height: 4px;
      bottom: -6px;
      left: 0;
      background-color: #2245fd;
      width: 0;
      transition: 0.2s ease-out width;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
