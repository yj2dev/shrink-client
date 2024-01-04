import styled from "styled-components";

export const Container = styled.div`

*{
    margin: 0;
    padding: 0;
}

.products {
  width: 80%;
  margin-left: 10.5rem;
  margin-top: 1rem;
  padding: 10px;

  display: grid;
  grid-gap: 2 * 10px;

  font-family: 'Noto Sans KR', sans-serif;
  grid-template-columns: repeat(4, 1fr);

  .product {
    width:230px;
    margin: 20px;
    position: relative;
    max-height: 340px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);

    display: grid;
    grid-gap: 10px;

    &_img {
      max-height: 200px;
      border-radius: 10px;
      overflow: hidden;
    }

    &_details {
      position: relative;
      top: -36px;
      width: 90%;
      padding: 10px;
      margin: 0 auto;
      background: rgb(255, 255, 255);
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(3, 6, 31, 0.15);

      display: grid;
      grid-gap: 5px;
      
      h3 {
        font-size: 22px;
        font-weight: 400;
      }

      .address {
        color: #777777;
        font-size: 12px;
      }

      .price {
        display: grid;

        .price_l {
          width: 100%;
          text-align: right;
          
        }
        .price_label {
            font-weight: 600;
            text-align: right;
          }

      }

    .credit-img {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 10px;
      font-size: 10px;
      text-align: right;
    }
  }
}


`;
