import styled from "styled-components";
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

    section {
      //border: 1px solid red;
    }

    h1 {
      margin: 0;
      padding-bottom: 24px;
    }

    h3 {
      //float: left;
      //width: 90%;
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

    .nickname-section {
      width: 90%;
      float: left;
      margin-bottom: 32px;

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
      width: 120px;
    }

    .nickname-update-btn:hover {
      background-color: #1f883d;
      color: #fff;
    }

    .password-update-btn {
      margin-bottom: 16px;
      color: #1f883d;
      width: 256px;
    }

    .password-update-btn:hover {
      background-color: #1f883d;
      color: #fff;
    }

    .account-delete-btn {
      margin-bottom: 16px;
      color: #a40e26;
      width: 256px;
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
