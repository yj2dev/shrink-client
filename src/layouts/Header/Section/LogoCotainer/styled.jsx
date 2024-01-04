import styled from "styled-components";

export const Container = styled.div`
  .logo-section {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    cursor: pointer;

    .logo-img {
      //height: 78px; /** logo1.png 사용시 주석 제거 */

      height: 44px; /** logo2.png 사용시 주석 제거 */
      width: 44px; /** logo2.png 사용시 주석 제거 */

      //margin-right: 10px;
    }

    .content {
      @media (max-width: 768px) {
        display: none;
      }

      overflow: hidden;

      h1 {
        white-space: nowrap;
        //width: 185px;
        font-weight: bold;
        padding: 0;
        margin: 0;
        transition: 0.4s ease all;
      }

      h1.active {
        font-size: 1.52rem;
        letter-spacing: 12px;
      }

      h3 {
        margin: 0;
        padding: 0;
        font-size: 0.75rem;
        height: 0;
        transition: 0.4s ease all;
      }

      h3.active {
        margin: 0;
        padding: 0;
        font-size: 0.75rem;
        height: 16px;
      }
    }
  }
`;
