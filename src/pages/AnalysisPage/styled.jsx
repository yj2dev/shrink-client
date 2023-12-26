import styled from "styled-components";

export const AlertContainer = styled.div`
  position: absolute;
  top: -100px;
  color: #fff;
  display: flex;
  font-size: 1.2em;
  justify-content: center;
  align-items: center;
  //background-color: rgba(0, 100, 0, 1);
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 55px;
  z-index: 10;

  transition: 0.2s;

  &.noShrink {
    background-color: rgba(0, 100, 0, 1);
    top: 0;
  }

  &.shrinkOccurred {
    background-color: rgb(255, 146, 76);
    top: 0;
  }

  &.checkInternet {
    background-color: rgb(255, 89, 89);
    top: 0;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 32px;
`;

export const WebcamContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  video {
    border-radius: 32px 32px 0 0;

    width: 100%;
    height: auto;
    //height: 450px;

    object-fit: cover;
    transform: scaleX(-1);
  }

  button {
    border-radius: 0 0 32px 32px;
    transition: 0.2s;
    height: 84px;
    font-size: 1.5em;
    border: none;
    background-color: #3f5dfe;
    color: #fff;
    cursor: pointer;
    outline: none;
    bottom: 0;
    //position: relative;
    //position: fixed;
    width: 100%;

    &:disabled {
      background-color: #aab4fe; // 비활성화 상태의 배경색 변경
      color: #ddd; // 비활성화 상태의 글씨색 변경
      cursor: default; // 마우스 커서를 기본 상태로 변경
    }
    &:not(:disabled):hover {
      background-color: #2245fd;
      border-radius: 0 0 0 0;
    }
  }
`;
