import styled from "styled-components";

export const AnalysisResultMenu = styled.div`
  position: fixed;
  width: 300px;
  height: 100%;
  z-index: 10;
  right: -300px;
  top: 78px;
  background-color: rgb(250, 250, 250);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: 0.4s ease;

  &.active {
    right: 0px;
  }
  .item-details {
    background-color: #f8f8f8;
    padding: 10px;
    margin-top: 5px;
    border-top: 1px solid #ddd;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition:
      max-height 0.3s ease,
      opacity 0.3s ease;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 12px 24px;
    border-bottom: 1px solid #ddd;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    &.expanded .item-details {
      max-height: 200px;
      opacity: 1;
    }

    span {
      float: right;
      color: #888;
    }
  }

  .result-btn {
    width: 64px;
    height: 64px;
    position: absolute;
    top: calc(50% - 64px);
    left: -36px;
    transform: translate(0, -50%);
    background-color: rgb(250, 250, 250);
    border: none;
    color: #333;
    font-size: 24px;
    border-radius: 32px 0 0 32px;
    display: flex;
    align-items: center;
    padding: 10px;
    //justify-content: center;
    opacity: 0.5;
    cursor: pointer;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;

    &:hover {
      transform: translate(0, -50%) scale(1.1);
      opacity: 1;
    }

    & > svg {
      transition: transform 0.3s ease;
    }

    &.active > svg {
      transform: rotate(180deg);
    }
  }
`;

export const AlertContainer = styled.div`
  position: absolute;
  top: -100px;
  color: #fff;
  display: flex;
  font-size: 1.2em;
  justify-content: center;
  align-items: center;
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
    min-height: 500px;

    object-fit: cover;
    transform: scaleX(-1);
  }

  button {
    border-radius: 0 0 32px 32px;
    transition: 0.4s ease;

    height: 84px;
    font-size: 1.5em;
    border: none;
    color: #fff;
    cursor: pointer;
    outline: none;
    width: 100%;

    background-color: #3f5dfe;
    background-image: linear-gradient(to top, #3f5dfe 50%, #2245fd 50%);
    background-size: 100% 200%;
    background-position: bottom;

    &:disabled {
      background-color: #aab4fe;
      color: #ddd;
      cursor: default;
    }

    &:not(:disabled):hover {
      transition: 0.4s ease;
      border-radius: 0 0 0 0;
      background-position: top;
    }
  }
`;
