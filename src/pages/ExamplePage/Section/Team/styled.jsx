import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  scroll-snap-align: start;

  //border: 2px dashed blue;
  //height: calc(100vh - 82px);
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 3vw;
    span {
      font-family: "SOYOMapleBoldTTF";
      font-size: 4vw;
    }
    margin-bottom: 1em;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  perspective: 1000px;
  max-width: 1000px;
`;

export const Card = styled.div`
  width: 210px;
  height: 280px;
  @media (max-width: 768px) {
    width: 135px;
    height: 180px;
  }

  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
  transform: ${(props) => (props.flipped ? "rotateY(180deg)" : "none")};

  &:hover {
    transform: ${(props) =>
      props.flipped ? "rotateY(180deg)" : "rotateY(180deg)"};
  }
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  border-radius: 10px;

  img {
    @media (max-width: 768px) {
      width: 135px;
      padding: 6px;
      height: 180px;
    }

    width: 210px;
    height: 280px;
    object-fit: cover;
    border-radius: 16px;
    padding: 10px;
    box-sizing: border-box;
  }
`;

export const CardFront = styled(CardFace)`
  background-color: #fff;
`;

export const CardBack = styled(CardFace)`
  position: relative;
  background-color: #007bff;
  color: #fff;
  transform: rotateY(180deg);

  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  article {
    @media (max-width: 768px) {
      padding: 14px 14px 54px 14px;
    }

    padding: 20px 20px 54px 20px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-between;

    div.title {
      font-size: 1.2em;

      span {
        color: rgba(255, 255, 255, 0.65);
        margin-top: 4px;
        display: block;
        font-weight: 300;
        font-size: 0.8em;
      }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 4px 0;
        margin: 0;
        font-size: 0.7em;
      }
    }

    a {
      color: #fff;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 12px;
    }
  }
`;
