import styled from "styled-components";

export const IamgeSliderContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  .left-arrow {
    left: 8px;
  }

  .right-arrow {
    right: 8px;
  }

  &:hover button {
    display: flex;
  }

  button {
    display: none;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
    font-size: 2em;
    width: 1em;
    height: 1em;
    outline: none;
    border: none;
    border-radius: 50%;
    color: #fff;
    position: absolute;
    top: 2em;
    //top: 50%;
    //transform: translateY(-50%);
    z-index: 1;
  }
`;
export const Container = styled.div`
  //border: 2px dashed #00b5ff;

  display: flex;
  flex-direction: column;
  gap: 24px;

  .item {
    display: flex;

    background-color: #fff;
    border-radius: 8px;

    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    padding: 16px;
    height: 180px;
    position: relative;
    transition: 0.2s;

    &.active {
      height: 400px;

      @media (max-width: 768px) {
        height: 340px;
      }
    }

    .report-content-wrapper {
      width: 100%;
      padding: 0;
      margin: 0;
      position: absolute;
      top: 180px;
      left: 0;

      @media (max-width: 768px) {
        top: 120px;
      }

      border-top: 4px dashed #ddd;

      .report-content {
        white-space: pre-wrap;
        background-color: rgba(0, 0, 0, 0.04);
        padding: 16px;
        margin: 16px;
        font-size: 1.2em;
        height: 150px;
        overflow: scroll;
        //border: 1px solid red;
        border-radius: 8px;
      }

      .report-content-none {
        background-color: rgba(0, 0, 0, 0.04);
        padding: 16px;
        margin: 16px;
        font-size: 1.2em;
        font-weight: 800;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 150px;
        overflow: scroll;
        //border: 1px solid red;
        border-radius: 8px;
      }
    }

    @media (max-width: 768px) {
      height: 120px;
    }

    img {
      //box-shadow: 4px 0 4px -8px rgba(0, 0, 0, 0.2);
      //border: 2px dashed #ddd;
      border: 2px solid #ddd;
      border-radius: 8px;
      box-sizing: border-box;
      height: 148px;
      width: 148px;
      object-fit: cover;

      @media (max-width: 768px) {
        height: 90px;
        width: 90px;
      }
    }

    article {
      font-family: "GmarketSans";
    }
  }
`;
export const LeftArticle = styled.article`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  height: 100%;

  .undefined-image {
    border: 2px dashed #ddd;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.04);
    //border-radius: 8px 0 0 8px;
    width: 148px;
    height: 148px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 72px;
    color: rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      height: 90px;
      width: 90px;
    }
  }
`;
export const MiddleArticle = styled.article`
  width: 100%;
  padding: 0 16px;

  @media (max-width: 768px) {
    padding: 0 8px;
  }

  //border: 1px dashed red;

  position: relative;

  button.show-content-btn {
    cursor: pointer;
    position: absolute;
    left: 16px;
    top: 84px;
    font-size: 2em;
    background-color: transparent;
    border: none;
    outline: none;
    color: rgba(0, 0, 0, 0.2);
    //border: 1px solid red;
    //border: 1px solid red;
    width: 2em;
    height: 2em;
    transition: 0.2s;
    border-radius: 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      color: rgba(0, 0, 0, 0.8);
    }

    &.active {
      background-color: rgba(0, 0, 0, 0.05);
      color: rgba(0, 0, 0, 0.8);
      transform: rotate(180deg);
    }

    @media (max-width: 768px) {
      font-size: 14px;
      left: 24px;
      top: 64px;
    }
  }

  .name {
    border-bottom: 2px solid #ddd;
    padding: 8px 0;

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 4px 0;
    }
  }
  .price {
    font-size: 54px;
    font-weight: 400;
    position: absolute;
    top: 86px;
    right: 16px;

    @media (max-width: 768px) {
      top: 60px;
      font-size: 28px;
      right: 8px;
    }
  }

  .weight {
    position: absolute;
    right: 16px;
    top: 50px;

    @media (max-width: 768px) {
      font-size: 14px;
      top: 30px;
      right: 8px;
    }
  }
  .content {
  }
  .time-ago {
    position: absolute;
    top: 50px;
    left: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
      left: 8px;
      top: 30px;
    }
  }
`;

export const RightArticle = styled.article`
  flex-shrink: 0;
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 148px;

  color: #fff;
  font-size: 24px;
  border-radius: 0 8px 8px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    width: 58px;
    height: 90px;
  }

  background-color: ${(props) => {
    const status = props.type;

    switch (status) {
      case "등록":
        // return "#009432";
        return "#59dc85";
      case "저위험":
        return "#FF9C08";
      case "중위험":
        return "#fd6202";
      case "고위험":
        return "#ff5058";
      default:
        // return "#009432";
        return "#59dc85";
    }
  }};

  @keyframes pop {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  .like-article {
    user-select: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 2em;
    .like-count {
      font-size: 0.5em;
    }
  }

  .like-article svg {
    transition: color 0.2s ease;
  }

  .like-article svg:hover {
  }

  .like-article.active svg {
    color: red;
    animation: pop 0.4s ease;
  }
`;
