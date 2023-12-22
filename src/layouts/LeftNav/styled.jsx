import styled from "styled-components";
export const Container = styled.nav`
  background-color: #fff;
  width: 200px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }

  li:not(:first-child) {
    border-top: 1px solid #eaeaea;
  }

  a {
    color: #333;
    text-decoration: none;
    font-size: 14px;
    flex-grow: 1;
    display: block;
    width: 100%;
    padding: 10px 15px;
  }

  a:hover {
    background-color: #eee;
  }

  .active,
  .active:hover {
    background-color: #ddd;
  }
`;
