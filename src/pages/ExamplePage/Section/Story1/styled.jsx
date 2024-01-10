import styled from "styled-components";
export const Container = styled.section`
  scroll-snap-align: start;

  //height: calc(100vh - 82px);
  //border: 2px dashed #fff;
  height: 100vh;
  background-color: rgba(63, 93, 254, 1);

  @media (max-width: 768px) {
    font-size: 14px;
  }

  .space {
    height: 84px;
  }

  article {
    padding: 0;
    margin: 0;
    //border: 1px solid red;
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: 4vw;
      padding: 0;
    }

    h2 {
      font-size: 2.5vw;
      font-weight: 400;
      color: #fff;
      padding: 0;
      margin: 0;
    }
  }
`;
