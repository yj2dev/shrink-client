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
    width: 400px;
    height: 250px;
    padding: 15px;
    position: relative;
    right: 80px;
  }

  .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      bottom: 80px;
  }

  .content-header {
    font-weight: 700;
    font-size: 30px;
    color: #4c4c4c;
    max-width: 700px;
  }

  .content-header span {
      font-size: 45px;
  }

  .content-text {
    font-size: 25px;
    font-weight: 500;
    max-width: 600px;
    color: #6a6a6a;
    margin-top: 40px;
  }

  .content-text span {
    color: #BDBDBD;
  }

  @media (max-width: 768px) {
    .wrapper {
      flex-direction: column;
    }

    .content {
      bottom: 20px;
    }

    .content-header {
      font-size: 22px;
    }

    .content-header span {
      font-size: 30px;
    }
    .content-text {
      font-size: 20px;
    }

    img {
      width: 90%;
      right: 0px;
      bottom: 50px;
    }
  }

`;
