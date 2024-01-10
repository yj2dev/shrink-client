import styled from "styled-components";
export const Container = styled.footer`
  scroll-snap-align: start;

  background-color: #fff;
  .nav-link {
    bottom: 0;
    .contentButton {
      margin-left: 12%;
      margin-top: 1%;
      margin-bottom: 1%;
      margin-right: 5%;
      font-size: 15px;
      border: none;
      font-weight: 650;
      color: black;
      background-color: white;
      // text-decoration: underline;
      cursor: pointer;
    }
    .rights-text {
      font-size: 14px;
    }
  }
`;
