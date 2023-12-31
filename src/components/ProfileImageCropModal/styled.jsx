import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 44px;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      transition: 0.2s;
      background-color: #f6f8fa;
      border: 2px solid #eeeeee;

      &:hover {
        opacity: 0.8;
      }
    }
    button.submit {
      color: #009432;
      transition: 0.4s;
      overflow: hidden;
      width: 0;
      display: none;
      margin-top: 0;

      &:not(:disabled) {
        margin-top: 16px;
        display: block;
        width: 100%;
      }
    }

    button.cancel {
      color: #ff5058;
    }
    button.submit:hover {
      background-color: #009432;
      border: 2px solid #009432;
      color: #ffffff;
    }
    button.cancel:hover {
      background-color: #ff5058;
      border: 2px solid #ff5058;
      color: #ffffff;
    }
  }
`;

export const InputHidden = styled.input`
  display: none;
`;

export const InputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 120px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 800;
  margin-bottom: 20px;
  //border: none;
  //background-color: #ff5058;
  //color: #ffffff;

  border: 2px solid rgba(63, 93, 254, 0.5);
  color: rgba(63, 93, 254, 0.5);
  transition: 0.2s;

  &.active {
    background-color: #aab4fe;
    border: 2px solid #aab4fe;
    color: #ffffff;
    height: 50px;
  }

  &.drag {
    background-color: #aab4fe;
    border: 2px solid #aab4fe;
    color: #ffffff;
  }

  &:not(.active):hover {
    border: 2px solid rgba(63, 93, 254, 1);
    color: rgba(63, 93, 254, 1);
  }
`;
