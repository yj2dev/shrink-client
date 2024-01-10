import styled, { keyframes } from "styled-components";

const moveAndFade = keyframes`
  0% { transform: translateY(0); opacity: 0; }
  50% { transform: translateY(10px); opacity: 1; }
  100% { transform: translateY(0); opacity: 0; }
`;

export const Arrow = styled.div`
  color: rgba(255, 255, 255, 0.35);
  width: 32px;
  height: 32px;
  font-size: 5vw;
  animation: ${moveAndFade} 1s ease-in-out infinite;

  &.delay {
    animation-delay: 0.25s;
  }
`;
export const Container = styled.section`
  scroll-snap-align: start;

  background: linear-gradient(
    0deg,
    rgba(63, 93, 254, 1) 0%,
    rgba(186, 197, 255, 1) 44%,
    rgba(255, 255, 255, 1) 100%
  );

  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .left {
    padding-bottom: 20em;

    @media (max-width: 768px) {
      padding-bottom: 0;
    }

    flex: 1;
    flex-shrink: 0;

    //border: 4px dashed orange;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    order: 1;

    .title {
      font-family: "SOYOMapleBoldTTF";
      //font-family: "GmarketSans";

      h2 {
        padding: 0 0 0 4px;
        margin: 0 0 12px 0;
        font-size: 3.5vw;
        font-weight: 400;
      }

      h1 {
        font-weight: 400;

        padding: 0;
        margin: 0;
        font-size: 6vw;
        color: #0f62fe;

        text-shadow:;
        //1px 1px 0 #fff,
        //2px 2px 0 #fff,
        //3px 3px 0 #fff,
        //4px 4px 0 #fff;
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
      cursor: pointer;
    }
  }

  .right {
    padding-bottom: 4em;

    @media (max-width: 768px) {
      padding-bottom: 12em;
      justify-content: center;
      flex: 1;
    }

    flex: 1;
    flex-shrink: 0;

    order: 2;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    //border: 4px dashed red;

    img.mokup {
      width: 100%;

      @media (max-width: 768px) {
        width: 75%;
        padding-left: 0;
        justify-content: center;
      }
    }
  }
`;
