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

  .img-wrapper {
    display: flex;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
  }
  
  .img-wrapper.pressed img {
    animation: pressAnimation 3s;
  }

  .img-wrapper img {
    width: 100%;
    height: 400px;
    padding: 15px;
    position: relative;
    right: 80px;
    top: 40px;
  }

  #down-img {
    right: -200px;
    width: 100px;
    height: 100px;
  }

  .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      bottom: 50px;
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

    .img-wrapper img {
      width: 90%;
      right: 70px;
      top: 10px;
      bottom: 50px;
    }

    #down-img {
      width: 80px;
      height: 80px;
    }
  }


  @keyframes pressAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.4);
    }
    100% {
      transform: scale(0.4);
    }
  }

  @keyframes slide {
      from {
        top: -40px;
        opacity: 0;   
      }
      to {
        top: 50px;
        opacity: 1;
      }
    }

`;
