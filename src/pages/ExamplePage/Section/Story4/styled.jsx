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

  img {
    width: 500px;
    height: 450px;
    padding: 15px;
    position: relative;
    right: 80px;
    //border-radius: 40%;
  }

  .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      top:20px
  }

  .content-header {
    font-weight: 700;
    font-size: 30px;
    color: #4c4c4c;
    max-width: 700px;
  }

  .content-header span {
      font-size: 45px;
      color: #3f5dfe;
  }

  .content-text {
    font-size: 25px;
    font-weight: 500;
    max-width: 600px;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    .wrapper {
      flex-direction: column;
    }

    .content-header span {
      font-size: 35px;
    }

    .content-header {
      font-size: 25px;
    }
    .content-text {
      font-size: 20px;
    }

    img {
      width: 80%;
      right: 0px;
    }
  }
`;
