import styled, { keyframes } from "styled-components";

// 펄스 애니메이션
const pulseAnimation2 = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// 반짝임 애니메이션
const blinkAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

// 부드러운 회전 애니메이션
const smoothRotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// 점프 애니메이션
const jumpAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// 팽창 및 수축 애니메이션
const expandShrinkAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

// 빛나는 애니메이션
const shiningAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px #fff;
  }
  50% {
    box-shadow: 0 0 15px #fff;
  }
  100% {
    box-shadow: 0 0 5px #fff;
  }
`;

const shiningAnimation2 = keyframes`
  0% {
    box-shadow: 0 0 5px #fff;
  }
  50% {
    box-shadow: 10px 5px 15px #fff;
  }
  100% {
    box-shadow: 0 0 5px #fff;
  }
`;

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(253, 98, 2, 1);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

const marquee = keyframes`
  0% { transform: translateX(128%); }
  100% { transform: translateX(-128%); }
`;

export const AnalaysisResultButton = styled.button`
  z-index: 49;
  width: 64px;
  height: 64px;
  border: none;
  color: #333;
  font-size: 24px;
  border-radius: 32px 0 0 32px;
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: -10px 0 10px -5px rgba(0, 0, 0, 0.2);

  top: 50%;
  transform: translate(0, -50%);
  transition: 0.2s;

  right: -15px;

  position: fixed;

  &.alert {
    background-color: rgb(253, 98, 2, 0.5);
    color: #fff;
  }
  span {
    animation: ${pulseAnimation} 2s infinite;
    z-index: 1;
    position: absolute;
    top: -2px;
    left: -2px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(253, 98, 2, 0.9);
    color: #fff;
    font-size: 12px;
    padding: 3px 8px;
    border-radius: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  //&:not(.alert):hover {
  &:hover {
    box-shadow: -5px 0 5px -3px rgba(0, 0, 0, 0.3);
    //background-color: rgba(255, 255, 255, 1);
    transform: translate(0, -50%) scale(1.1);
  }

  & > svg {
    transition: transform 0.3s ease;
  }

  &.active {
    background-color: rgba(255, 255, 255, 1);
    border: none;
    right: 305px;
    color: #000;
    opacity: 1;

    transform: translate(0, -50%) scale(1.1);
  }

  &.active > svg {
    transform: rotate(180deg);
  }

  .alert {
    transform: translate(0, -50%) scale(1.1);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const AnalysisResultMenu = styled.div`
  position: fixed;
  width: 320px;
  right: -320px;
  height: 100%;
  top: 82px;
  background-color: rgb(250, 250, 250);
  box-shadow: -10px 0 10px -5px rgba(0, 0, 0, 0.2);

  transition: 0.2s ease all;
  z-index: 50;
  overflow-y: scroll;

  .img-wrapper {
    position: relative;
  }

  span.show-delete-btn-tip {
    display: none;
    z-index: 201;
    position: absolute;
    top: 58px;
    right: 28px;
    font-size: 12px;
    font-weight: 400;
    padding: 4px 8px 6px 8px;
    transition: 0.2s;
    border-radius: 2px;
    background-color: #2d2d2d;
    color: #fff;
    white-space: nowrap;

    &::before {
      content: " ";
      position: absolute;
      top: -6px;
      right: 8px;
      z-index: 200;

      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 8px solid #2d2d2d;
    }
  }

  button.show-delete-btn:hover + span.show-delete-btn-tip {
    display: block;
  }

  button.show-delete-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: #3f5dfe;
      transform: rotate(45deg);
    }

    &.active {
      transform: rotate(45deg);
      color: #3f5dfe;
    }
  }

  .delete-btn {
    position: absolute;
    cursor: pointer;
    top: 32px;
    right: 0;
    color: #fff;
    font-size: 1.5em;
    width: 84px;
    height: calc(100% - 5px - 32px);
    border-radius: 0 0 8px 0;
    border: none;
    background: rgba(255, 0, 0, 0.63);
    transition: 0.1s;
    &:hover {
      background: rgba(255, 0, 0, 1);
    }
  }

  section.toggle-read {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 24px 0 24px;

    .flex-left {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .show-delete-btn {
      background: transparent;

      border: none;
      outline: none;
      font-size: 1.5em;
      //position: absolute;
      //top: 12px;
      //right: 24px;
    }

    .toggle-button-wrapper {
      margin-right: 14px;
      display: inline-block;
      width: 60px;
      height: 30px;
      border-radius: 32px;
      transition: 0.2s;
      background-color: lightgray;
      cursor: pointer;
      position: relative;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

      &.active {
        background-color: #3f5dfe;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
      }

      .toggle-handle {
        background-color: white;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        transition: 0.2s;
        position: absolute;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);

        &.left {
          top: 2px;
          left: 2px;
        }

        &.right {
          top: 2px;
          left: 32px;
        }
      }
    }
  }

  .result-item-wrapper {
    position: relative;
    margin-top: 12px;

    display: flex;
    flex-direction: column;

    table {
      border-collapse: collapse;
      padding: 0;

      font-size: 16px;
      margin-bottom: 8px;

      tr {
        td:nth-child(2) {
          vertical-align: top;
          text-align: left;

          span {
            margin-left: 4px;
            font-size: 0.8em;
            padding: 2px 4px;
            border-radius: 4px;
            display: inline-block;
            color: #fff;
          }

          span.shrink {
            background-color: rgb(255, 89, 89);
          }

          span.none-shrink {
            background-color: rgba(0, 100, 0, 1);
          }

          span.doubt {
            background-color: rgb(255, 146, 76);
          }
        }

        td:first-child {
          width: 54px;
          text-align: left;
        }
      }
    }

    span {
      color: #888;
      cursor: default;
    }

    .weight {
      cursor: default;
    }

    .link-search-btn {
      cursor: pointer;
      background-color: transparent;

      border: none;
      outline: none;
      font-size: 1em;
      margin: 0;
      padding: 0;

      &:hover {
        color: #4156ff;
      }
    }
  }

  img {
    user-select: none;
    width: 100%;
    border-radius: 8px;
    transform: scaleX(-1);

    @media (max-width: 768px) {
      transform: scaleX(1);
    }
  }

  &.active {
    right: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li.no-show-content {
    font-size: 20px;
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    box-shadow: none;
    display: flex;
    border: none;
    justify-content: center;
    align-content: center;
  }

  li {
    &.not-reading {
      cursor: pointer;
    }

    position: relative;
    padding: 24px 24px;
    color: #333;
    transition: background-color 0.1s;
    box-shadow: 0 8px 15px -4px rgba(0, 0, 0, 0.1);

    span.image-is-shrink {
      box-shadow: 0 8px 15px -4px rgba(0, 0, 0, 0.1);

      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      font-size: 1em;
      border-radius: 8px 8px 0 0;
      padding: 4px 0;
      //width: calc(100% - 48px);
      width: 100%;
      white-space: nowrap;
      overflow: hidden;

      &.shrink {
        background-color: rgb(255, 89, 89, 0.67);
      }

      &.none-shrink {
        background-color: rgba(0, 100, 0, 0.67);
      }

      span.text {
        animation: ${marquee} 10s linear infinite;

        &:hover {
          animation-play-state: paused;
        }
      }
    }

    span.not-read-content {
      position: absolute;
      top: 16px;
      left: 16px;
      z-index: 1;
      width: 20px;
      height: 20px;
      background-color: rgb(253, 98, 2, 0.9);
      border-radius: 50%;
      // animation: ${pulseAnimation2} 2s infinite;
      //animation: ${blinkAnimation} 1.5s infinite;
      //animation: ${smoothRotateAnimation} 3s linear infinite;
      //animation: ${jumpAnimation} 1s infinite;
      // animation: ${expandShrinkAnimation} 2s infinite;
      animation: ${shiningAnimation2} 2s infinite;
    }

    &.not-reading {
    }

    .time-ago {
      cursor: default;
      color: #888;
      position: absolute;
      bottom: 0;
      right: 0;
    }

    &:hover {
      //background-color: rgba(0, 0, 0, 0.1);
    }
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
`;

export const AlertContainerHidden = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  background-color: #f0f0f0;
  top: 0;
  z-index: 25;
  height: 78px;
`;

export const AlertContainer = styled.div`
  position: fixed;
  //top: -64px;
  top: -10px;
  color: #fff;
  display: flex;
  font-size: 1.8em;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 78px;
  z-index: 20;
  transition: 0.2s;

  @media (max-width: 900px) {
    font-size: 1.4em;
  }

  @media (max-width: 768px) {
    font-size: 1.4em;
  }

  &.noProductDetected {
    background-color: #3f5dfe;
    top: 78px;
  }

  &.noShrink {
    background-color: rgba(0, 100, 0, 1);
    top: 78px;
  }

  &.shrinkDoubt {
    background-color: rgb(255, 146, 76);
    top: 78px;
  }

  &.shrinkOccurred {
    background-color: rgb(255, 89, 89);
    top: 78px;
  }

  &.checkInternet {
    background-color: rgb(0, 0, 0);
    top: 78px;
  }
`;

export const Container = styled.div`
  max-width: 1000px;

  @media (min-width: 768px) {
    &.active {
      width: calc(100% - 386px);
    }
  }
  transition: 0.2s;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 32px;
`;

export const WebcamContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  video,
  img {
    user-select: none;
    position: absolute;
    border-radius: 12px;
    width: 100%;
    height: auto;
    min-height: 500px;
    object-fit: cover;
    transform: scaleX(-1);

    @media (max-width: 768px) {
      transform: scaleX(1);
    }
  }
  .product-analyse-btn-wrapper {
    max-width: 1064px;

    @media (min-width: 768px) {
      &.active {
        width: calc(100% - 322px);
      }
    }
    width: 100%;
    transition: 0.2s;
    left: 0;
    right: 0;

    position: fixed;
    bottom: 0;

    z-index: 3;

    height: 128px;

    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product-analyse-btn {
    border-radius: 12px;
    transition: 0.2s;

    width: 100%;
    margin: 0 32px;
    height: 84px;
    font-size: 1.5em;
    border: none;
    color: #fff;
    cursor: pointer;
    outline: none;
    background-color: #3f5dfe;
    background-image: linear-gradient(to top, #3f5dfe 50%, #2245fd 50%);
    background-size: 100% 200%;
    background-position: bottom;

    &:disabled {
      background-color: #aab4fe;
      color: #ddd;
      cursor: default;
      border-radius: 0 0 0 0;
    }

    &:not(:disabled):hover {
      transition: 0.4s ease;
      border-radius: 0 0 0 0;
      background-position: top;
    }
  }

  // ===============================================
  //             Camera Select Container
  // ===============================================
  .camera-select-container {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    width: 100%;
    padding: 24px 24px 0 24px;
    box-sizing: border-box;

    .camera-menu {
      position: absolute;
      top: 100px;
      left: 24px;
      background-color: #fff;
      border-radius: 8px;
      transform-origin: top;
      transform: scaleY(0);
      transition: transform 0.2s ease-out;
      overflow: hidden;

      &.active {
        transform: scaleY(1);
      }

      ul {
        width: 240px;
        padding: 0;
        margin: 0;
      }

      li {
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        padding: 12px 18px;
        line-height: 24px;
        margin: 8px;
        color: #3f5dfe;
        font-size: 15px;
        font-weight: 600;
        transition: 0.2s;
      }

      li:hover {
        filter: brightness(90%);
      }

      li:not(.active):hover {
        background-color: rgba(0, 0, 0, 0.1);
      }

      li.active {
        background-color: #3f5dfe;
        color: #fff;
      }
    }

    .camera-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      border: none;
      font-size: 32px;
      padding: 0;
      margin: 0;
      cursor: pointer;
      border-radius: 50%;
      width: 64px;
      height: 64px;
      transition: 0.2s;
      box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
      background-color: #3f5dfe;
      background-image: linear-gradient(to top, #3f5dfe 50%, #2245fd 50%);
      background-size: 100% 200%;
      background-position: bottom;

      &.active {
        background-position: top;
      }

      &:not(:disabled):hover {
        transition: 0.4s ease;
        background-position: top;
      }
    }
  }
`;
