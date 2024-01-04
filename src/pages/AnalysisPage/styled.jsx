import styled from "styled-components";

export const AnalaysisResultButton = styled.button`
  z-index: 49;
  width: 64px;
  height: 64px;
  background-color: rgb(250, 250, 250);
  border: none;
  color: #333;
  font-size: 24px;
  border-radius: 32px 0 0 32px;
  display: flex;
  align-items: center;
  padding: 10px;
  opacity: 0.5;
  cursor: pointer;

  top: 50%;
  transform: translate(0, -50%);
  transition: 0.2s;

  right: -15px;
  border-left: 3px dashed #4f68ea;
  border-top: 3px dashed #4f68ea;
  border-bottom: 3px dashed #4f68ea;

  position: fixed;

  &:hover {
    transform: translate(0, -50%) scale(1.1);
    opacity: 1;
  }

  & > svg {
    transition: transform 0.3s ease;
  }

  &.active {
    border: none;
    right: 305px;
    opacity: 1;

    transform: translate(0, -50%) scale(1.1);
    box-shadow: 10px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }

  &.active > svg {
    transform: rotate(180deg);
  }
  .alert {
    transform: translate(0, -50%) scale(1.1);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const AnalysisResultMenu = styled.div`
  position: fixed;
  width: 320px;
  right: -320px;
  height: 100%;
  top: 78px;
  background-color: rgb(250, 250, 250);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: 0.2s ease all;
  z-index: 50;
  overflow-y: scroll;

  img {
    //width: 6em;
    //height: 6em;
    width: 100%;
  }

  &.active {
    right: 0;
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
  top: 0;
  color: #fff;
  display: flex;
  font-size: 1.4em;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 78px;
  z-index: 20;
  transition: 0.2s;

  &.noShrink {
    background-color: rgba(0, 100, 0, 1);
    top: 78px;
  }

  &.shrinkOccurred {
    background-color: rgb(255, 146, 76);
    top: 78px;
  }

  &.checkInternet {
    background-color: rgb(255, 89, 89);
    top: 78px;
  }
`;

export const Container = styled.div`
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
    position: absolute;
    border-radius: 12px 12px 0 0;
    width: 100%;
    height: auto;
    min-height: 500px;
    object-fit: cover;
    transform: scaleX(-1);
  }
  .product-analyse-btn-wrapper {
    @media (max-width: 768px) {
      //margin: 0 32px;
      margin: 0;
    }

    left: 0;
    right: 0;

    position: fixed;
    bottom: 0;

    //margin: 0 32px 0 232px;
    margin: 0 0 0 200px;
    z-index: 3;

    height: 128px;

    background-color: #f0f0f0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product-analyse-btn {
    border-radius: 0 0 12px 12px;
    transition: 0.4s ease;
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
        //background-color: greenyellow;
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
