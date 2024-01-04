import styled from "styled-components";

export const Container = styled.div`
  .logo-section {
    display: flex;
    align-items: center;
    cursor: pointer;

    //@media (max-width: 768px) {
    //  position: fixed;
    //  height: 78px;
    //  left: 50%;
    //  transform: translate(-50%, 0);
    //  //top: 0;
    //}
  }

  .logo-img {
    height: 78px; /** logo1.png 사용시 주석 제거 */

    height: 44px; /** logo2.png 사용시 주석 제거 */
    width: 44px; /** logo2.png 사용시 주석 제거 */
    margin-top: 8px; /** logo2.png 사용시 주석 제거 */

    @media (max-width: 768px) {
      display: none;
    }

    margin-right: 10px;
  }

  .content {
    overflow: hidden;

    h1 {
      white-space: nowrap;
      //border: 1px solid red;
      width: 185px;
      font-weight: bold;
      //font-size: 2rem;
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
`;
