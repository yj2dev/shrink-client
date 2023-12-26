import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const WebcamContainer = styled.div`
  //width: 500px;
  //height: 350px;
  //border: 2px dashed mediumvioletred;

  width: 50%;

  display: flex;
  flex-direction: column;

  video {
    //padding: 8px;
    //border: 2px dashed darkgoldenrod;
    //max-width: 80%;
    //max-height: 80%;
    object-fit: cover;
    transform: scaleX(-1);
    border-radius: 25px 25px 0 0;
  }

  button {
    transition: 0.2s;
    margin: 12px 0 0 0;
    height: 84px;
    font-size: 1.5em;
    border: none;
    background-color: #3f5dfe;
    color: #fff;
    cursor: pointer;
    outline: none;
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  button:hover {
    background-color: #2245fd;
  }
`;
