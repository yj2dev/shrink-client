import styled from "styled-components";
export const Container = styled.section`
  //border: 2px dashed blue;
  height: calc(100vh - 82px);
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

  @media (max-width: 768px) {
    // .wrapper {
    //   flex-direction: column;
    // }

    .content-header {
      font-size: 30px;
    }
    .content-text {
      font-size: 20px;
    }
  }

  @keyframes Fade-In {
    from {
      opacity : 0;
    } to {
      opacity : 1;
    }
  }

`;
