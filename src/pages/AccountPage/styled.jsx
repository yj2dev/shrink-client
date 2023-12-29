import styled from "styled-components";

export const Message = styled.div`
  font-size: 14px;
  margin-top: 16px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  article {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 32px 42px;
    margin: 28px;
    border-radius: 12px;
    width: 600px;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0 8px 28px 0;

    section.etc-setting {
      width: 520px;
    }

    .profile-img-setting {
      position: relative;
    }

    .profile-edit-btn {
      position: absolute;
      bottom: 44px;
      left: 10px;
      width: 74px;
      height: 36px;
      display: flex;
      border-radius: 4px;
      border: 2px solid #eeeeee;
      background-color: #fff;
      justify-content: center;
      align-items: center;
      font-weight: 400;
    }

    .profile-menu {
      position: absolute;
      top: 264px;
      left: 10px;
      box-shadow: 4px 0 16px -4px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      overflow: hidden;
      transition: 0.2s;
      height: 0;
      background-color: transparent;
      border: 2px solid transparent;
      z-index: 10;

      &.active {
        background-color: #fff;
        border: 2px solid #eeeeee;
        height: 84px;
      }

      ul {
        padding: 6px 0;
        margin: 0;
      }

      li {
        list-style: none;
        padding: 6px 16px;
        margin: 0;
        cursor: pointer;
        user-select: none;
      }

      li:hover {
        background-color: #3f5dfe;
        color: #fff;
      }
    }

    h1 {
      margin: 0;
      padding-bottom: 24px;
    }

    h3 {
      margin: 42px 0 4px 0;
    }

    hr {
      margin-bottom: 16px;
      width: 100%;
      border: 1px solid #eeeeee;
    }

    img {
      width: 256px;
      height: 256px;
      border-radius: 50%;
      border: 4px solid #eeeeee;
      margin-bottom: 16px;
      margin-top: 16px;
    }

    input {
      margin-right: 12px;
      background-color: #fff;
      font-size: 16px;
      padding: 10px 16px 10px 16px;
      border-radius: 12px;
      outline: none;
      box-sizing: border-box;
      border: 2px solid #fff;
      font-weight: 600;
      width: 200px;

      &:not(:disabled) {
        border: 2px solid #eeeeee;
        box-sizing: border-box;
      }

      &:focus {
        border: 2px solid #dddddd;
      }
    }

    section.password-update {
      display: flex;
      flex-direction: column;

      .password-input {
        display: flex;
        align-items: center;
        position: relative;
      }

      label {
        margin: 8px 0 4px 0;
        font-size: 14px;
        font-weight: 600;
      }

      //input[type="password"] {
      input {
        width: 400px;
        font: small-caption;
        padding-right: 48px;
        margin: 4px 8px 16px 0;
      }

      .toggle-password {
        background: none;
        border: none;
        cursor: pointer;
        position: absolute;
        right: 140px;
        top: 2px;
        font-size: 18px;
        color: #6a6a6a;
      }
    }

    button {
      font-size: 16px;
      background-color: #f6f8fa;
      border: 2px solid #eeeeee;
      font-weight: 800;
      padding: 10px 0;
      cursor: pointer;
      border-radius: 12px;
      //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: 0.2s;
    }

    .nickname-update-btn {
      color: #1f883d;
      width: 144px;
    }

    .nickname-update-btn:hover {
      background-color: #1f883d;
      color: #fff;
    }

    .password-update-btn {
      margin-top: 24px;
      margin-bottom: 16px;
      color: #1f883d;
      width: 144px;
    }

    .password-update-btn:hover {
      background-color: #1f883d;
      color: #fff;
    }

    .account-delete-btn {
      margin-bottom: 16px;
      color: #a40e26;
      width: 144px;
    }

    .account-delete-btn:hover {
      background-color: #a40e26;
      color: #fff;
    }
    @media (max-width: 768px) {
      width: 100%;
      margin: 0;
      border-radius: 0;
    }
  }
`;
