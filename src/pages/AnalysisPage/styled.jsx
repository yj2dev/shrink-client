import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WebcamContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  video {
    width: 100%;
    height: auto;
    object-fit: cover;
    transform: scaleX(-1);
  }

  button {
    transition: 0.2s;
    height: 84px;
    font-size: 1.5em;
    border: none;
    background-color: #3f5dfe;
    color: #fff;
    cursor: pointer;
    outline: none;
    bottom: 0;
    //position: relative;
    //position: fixed;
    width: 100%;
  }

  button:hover {
    background-color: #2245fd;
  }
`;
