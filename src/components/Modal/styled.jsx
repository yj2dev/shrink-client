import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .content {
    position: relative;
    background: white;
    width: 300px;
    height: 400px;
    padding: 20px;
    border-radius: 30px;
  }
  .close-btn {
    position: absolute;
    right: 8px;
    top: 8px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
