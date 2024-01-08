import styled from "styled-components";

export const Container = styled.div`
  width:300px;
  padding-left: 5px;
  padding-right: 5px;

  .titleWrap {
    font-size: 20px;
    font-weight: 700;
    color: #262626;
  }

  .contentWrap {
    margin-top: 26px;
    // flex: 1;
  }

  .inputTitle {
    font-size: 14px;
    font-weight: 600;
    color: #262626;
    margin-left: 5px;
    text-align : left;
  }

  .inputWrap {
    display: flex;
    border-radius: 8px;
    padding: 16px;
    margin-top: 8px;
    background-color: white;
    border: 1px solid #e2e0e0;
  }

  .inputWrap:focus-within {
    border: 1px solid #0f62fe;
  }

  .input {
    width: 100%;
    outline: none;
    border: none;
    height: 17px;
    font-size: 14px;
    font-weight: 400;
  }

  .input::placeholder {
    color: #dadada;
  }

  .errorMessageWrap {
    margin-top: 8px;
    color: #ef0000;
    font-size: 14px;
  }

  .bottomButton {
    width: 100%;
    height: 48px;
    border: none;
    font-weight: 700;
    background-color: #ebeeef;
    border: 2px solid #eeeeee;
    border-radius: 8px;
    color: #0f62fe;

    transition: 0.2s;
    margin-top: 10%;
    margin-bottom: 3%;
    cursor: pointer;
  }

  .bottomButton:hover {
    color: #fff;
    background-color: #0f62fe;
  }

  .existErrorMessage{
      color: #ef0000;
      font-size : 14px;
  }

  .registerLine {
      text-align: center;
      color: #bcbcbc;
      font-size: 13px;
      margin-bottom: 10px;
      // margin-top: 8px;
      .registerButton {
          border: none;
          color: black;
          background-color: white;
          text-decoration: underline;
          cursor: pointer;
      }
  }
`;
