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
    position: relative;
  }

  img {
    width: 500px;
    height: 450px;
    padding: 15px;
    position: relative;
    right: 200px;
    border-radius: 30px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    right: 300px;
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

  @keyframes slide-right {
    from {
      right: 0px;
      opacity: 0;
    }
    to {
      right: 280px;
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      flex-direction: column;
    }

    .content {
      bottom: -80px;
      right: 120px;
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

    @keyframes slide-left {
      from {
        left: -200px;
        opacity: 0;
      }
      to {
        left: 0px;
        opacity: 1;
      }
    }
  }

  @media (max-width: 1200px) {
    @keyframes slide-right {
      from {
        right: 0px;
        opacity: 0;
      }
      to {
        right: 0px;
        opacity: 1;
      }
    }

    @keyframes slide-left {
      from {
        left: -200px;
        opacity: 0;
      }
      to {
        left: 0px;
        opacity: 1;
      }
    }
  }

  @media (max-width: 600px) {

    .content {
      bottom: 40px;
    }
    @keyframes slide-right {
      from {
        right: 0px;
        opacity: 0;
      }
      to {
        right: 60px;
        opacity: 1;
      }
    }
  }

  @media (max-width: 1200px) {
    .content {
      bottom: -0px;
    }
  }

  @media (max-width: 1500px) {
    .content {
      bottom: -100px;
    }
  }

  @media (max-width: 576px) {
    .wrapper {
      //margin-top: 100px;
    }

    .content {
      bottom: -60px;
    }
  }
 

  @media (min-width: 1600px) {
    img {
      right: 250px;
      top: 120px;
    }

    .content {
      bottom: 20px;
    }

    @keyframes slide-right {
      from {
        right: 0px;
        opacity: 0;
      }
      to {
        right: 420px;
        opacity: 1;
      }
    }
  }
`;
