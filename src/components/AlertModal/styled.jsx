import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1000;
`;

export const Badge = styled.div`
  color: ${(props) => {
    switch (props.type) {
      case 0:
        return "#009432";
      case 1:
        return "#FF9C08";
      case 4:
        return "#ff5058";
      default:
        return "#009432";
    }
  }};

  &::before {
    content: "";
    background-color: #fff; // 주석 처리된 코드 제거
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: -1;
    left: 50%;

    height: 30px;

    ${(props) => {
      switch (props.type) {
        case 0:
          return `
            bottom: 15px;
            width: 10px;
          `;
        case 1:
          return `
            bottom: 15px;
            width: 10px;
          `;
        case 4:
          return `
            bottom: 10px;
            width: 30px;
            border-radius: 50% 50% 0 0;
          `;
        default:
          return `
            bottom: 15px;
            width: 10px;
          `;
      }
    }}
  }

  font-size: 58px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

export const Section = styled.section`
  position: relative;
  border-radius: 12px;
  background: white;
  padding: 40px 20px 20px 20px;
  line-height: 1.8;

  max-width: 650px;
  min-width: 300px;

  article.content {
    margin-bottom: 20px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  width: 36px;
  height: 36px;
  padding: 4px;
  border-radius: 50%;
  background-color: transparent;

  &:hover {
    background-color: #eee;
  }
`;

export const ButtonSection = styled.section`
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
`;
