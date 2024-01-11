import styled from "styled-components";
export const Container = styled.section`
  scroll-snap-align: start;

  //height: calc(100vh - 82px);
  height: 100vh;

  background: #fff;

  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 600px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .content-header {
    font-weight: 700;
    font-size: 40px;
    color: #4c4c4c;
    max-width: 700px;
    text-align: center;
  }

  .content-text {
    font-size: 25px;
    font-weight: 500;
    max-width: 600px;
    color: #6a6a6a;
    margin-top: 50px;
    text-align: center;
  }

  button {
    // background-color: #1B8EF2;
    background-color: #3f5dfe;
    border: 2px solid black;
    width: 70%;
    margin: 25px 0 0 0;
    font-weight: 700;
    padding: 10px 0;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    color: #fff;
  }

  button:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    .content-header {
      font-size: 30px;
    }
    .content-text {
      font-size: 20px;
    }
  }

  @media (max-width: 576px) {
    .wrapper {
      //margin-top: 100px;
    }
  }

  @media (min-width: 1600px) {
    .wrapper {
      height: 90%;
    }
  }

  @keyframes Fade-In {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
