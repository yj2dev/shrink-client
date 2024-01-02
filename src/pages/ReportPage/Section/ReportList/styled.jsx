import styled from "styled-components";
export const Container = styled.div`
  //border: 2px dashed #00b5ff;

  display: flex;
  flex-direction: column;
  gap: 24px;

  .item {
    //border: 2px dashed orangered;

    display: flex;
    padding: 16px;
    //gap: 16px;
    //background-color: #e7e7e7;
    //border: 4px solid #ddd;
    background-color: #fff;
    border-radius: 8px;

    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    height: 180px;
    position: relative;

    img {
      //height: 100%;
      height: 148px;
      width: 148px;
    }

    article {
      font-family: "GmarketSans";
    }
  }
`;
export const LeftArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  //width: 120px;
  height: 100%;

  .undefined-image {
    background-color: rgba(0, 0, 0, 0.1);
    //border-radius: 8px 0 0 8px;
    border-radius: 8px;
    width: 148px;
    height: 148px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 72px;
    color: #bcbcbc;
  }
`;
export const MiddleArticle = styled.article`
  width: 100%;
  padding: 0 16px;

  //border: 1px dashed red;

  position: relative;

  .name {
    border-bottom: 2px solid #ddd;
    padding: 8px 0;
  }
  .price {
    font-size: 54px;
    font-weight: 400;
    position: absolute;
    bottom: 0;
    right: 16px;
  }

  .weight {
    position: absolute;
    right: 16px;
    top: 50px;
  }
  .content {
  }
  .time-ago {
    position: absolute;
    top: 50px;
    left: 16px;
  }
`;

export const RightArticle = styled.article`
  flex-shrink: 0;
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 24px;
  border-radius: 0 8px 8px 0;

  background-color: ${(props) => {
    const status = props.type;

    switch (status) {
      case "접수":
        return "#FF9C08";
      case "처리중":
        return "#fd6202";
      case "완료":
        return "#009432";
      default:
        return "#009432";
    }
  }};
`;
