import styled, { keyframes } from "styled-components";

const moveAndFade = keyframes`
  0% { transform: translateY(0) rotate(45deg); opacity: 0; }
  50% { transform: translateY(10px) rotate(45deg); opacity: 1; }
  100% { transform: translateY(0) rotate(45deg); opacity: 0; }
`;

export const Arrow = styled.div`
  width: 32px;
  height: 32px;
  border-bottom: 6px solid #fff; //rgba(63, 93, 254, 1);
  border-right: 6px solid #fff; //rgba(63, 93, 254, 1);
  transform: rotate(45deg);
  animation: ${moveAndFade} 1s ease-in-out infinite;

  &.delay {
    animation-delay: 0.25s;
  }
`;
export const Container = styled.section`
  background: linear-gradient(
    0deg,
    rgba(63, 93, 254, 1) 0%,
    rgba(186, 197, 255, 1) 44%,
    rgba(255, 255, 255, 1) 100%
  );
  height: 100vh;

  //border-bottom: 2px dashed greenyellow;

  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;

  .left {
    flex-shrink: 0;
    width: 50%;

    .title {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      h2 {
        padding: 0 0 0 4px;
        margin: 0;
        font-size: 4vw;
      }
      h1 {
        padding: 0;
        margin: 0;
        font-size: 7vw;
        color: #0f62fe;

        font-weight: bold;
        text-shadow:
          1px 1px 0 #ccc,
          2px 2px 0 #c9c9c9,
          3px 3px 0 #bbb,
          4px 4px 0 #b9b9b9;
      }
    }

    button.move-story1 {
      position: absolute;
      left: 50%;
      bottom: 10%;
      transform: translateX(-50%);
      background-color: transparent;
      border: none;
      outline: none;
    }
  }

  .right {
    width: 50%;
    flex-shrink: 0;
  }

  img.mokup {
    width: 50%;
  }
`;
