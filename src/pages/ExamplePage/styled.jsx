import styled from "styled-components";
export const Container = styled.div`
  background-color: rgba(63, 93, 254, 1);

  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height: 100vh;

  section {
    //border: 2px solid red;
    padding: 0;
    margin: 0;
  }
`;
