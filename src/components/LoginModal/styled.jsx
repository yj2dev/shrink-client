import styled from "styled-components";

export const Container = styled.div`
  .titleWrap {
    font-size: 20px;
    font-weight: 700;
    color: #262626;
  }

  .contentWrap {
    margin-top: 26px;
    flex: 1;
  }

  .inputTitle {
    font-size: 12px;
    font-weight: 600;
    color: #262626;
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
    font-size: 12px;
  }

  .bottomButton {
    width: 100%;
    height: 48px;
    border: none;
    font-weight: 700;
    background-color: #0f62fe;
    border-radius: 64px;
    color: white;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;
