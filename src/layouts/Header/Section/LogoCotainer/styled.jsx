import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 768px) {
    margin-right: 12px;
  }

  .logo-section {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    //width: 220px;
    height: 44px;
    cursor: pointer;

    .logo-img {
      //height: 78px; /** logo1.png 사용시 주석 제거 */

      height: 44px; /** logo2.png 사용시 주석 제거 */
      width: 44px; /** logo2.png 사용시 주석 제거 */
      margin-top: 8px; /** logo2.png 사용시 주석 제거 */

      @media (max-width: 768px) {
        height: 38px;
        width: 38px;
        margin-top: 2px;
      }
    }

    .content {
      margin-left: 0.5em;
      margin-right: 1em;

      @media (max-width: 768px) {
        display: none;
      }

      overflow: hidden;

      h1,
      h3 {
        margin: 0;
        padding: 0;
        transition: 0.3s ease all;
      }

      h1 {
        white-space: nowrap;
        font-weight: bold;
        letter-spacing: 2px;
      }

      h1.active {
        letter-spacing: 4px;
      }

      h3 {
        height: 0;
        font-size: 0.75rem;
      }

      h3.active {
        height: 16px;
        letter-spacing: 1.4px;
      }
    }
  }
`;
