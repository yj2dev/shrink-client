import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  border: 2px dashed blue;
  height: calc(100vh - 82px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  perspective: 1000px;
`;

export const Card = styled.div`
  width: 150px;
  height: 200px;
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
    width: 150px;
    height: 200px;
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

  a {
    color: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 12px;
  }
`;
