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

  img {
    width: 350px;
    height: 300px;
    padding: 15px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    top: 40px;
  }

  .content-header {
    position: absolute;
    bottom: 80px;
    font-weight: 700;
    font-size: 38px;
    color: #4c4c4c;
    max-width: 700px;
    //margin-top: 150px;
  }

  .content-text {
    font-size: 25px;
    font-weight: 500;
    max-width: 600px;
    color: #6a6a6a;
    margin-top: 40px;
  }

  .content-text span {
    color: #6a6a6a;
    font-size: 15px;
    margin-left: 20px;
  }

  @media (min-width: 1600px){
    .wrapper {
      height: 100%;
    }

    .content-header {
      font-size:45px;
      width: 600px;
    }

    img {
      margin-left: 50px;
    }
  }

  @media (max-width: 576px) {
    .wrapper {
      //margin-top: 200px;
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      flex-direction: column;
    }

    .content {
      right: 0px;
      top: 0px;
    }

    .content-header {
      font-size: 22px;
      margin-top: 0px;
    }

    .content-text {
      font-size: 18px;
    }

    .content-text span {
      font-size: 10px;
    }

    img {
      width: 90%;
    }

    @keyframes slide-left {
      from {
        left: 100px;
        opacity: 0;
      }
      to {
        left: 50px;
        opacity: 1;
      }
    }
  }

  @media (max-width: 1200px) {
    @keyframes slide-left {
      from {
        left: 100px;
        opacity: 0;
      }
      to {
        left: 0px;
        opacity: 1;
      }
    }
  }

  @keyframes slide-left {
    from {
      left: -400px;
      opacity: 0;
    }
    to {
      left: 0px;
      opacity: 1;
    }
  }
`;
