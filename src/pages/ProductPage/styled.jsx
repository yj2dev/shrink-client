import styled from "styled-components";

export const Container = styled.div`

*{
    margin: 0;
    padding: 0;
}

.nosearch-wrap {
  text-align: center;
  position: relative;
  left: 260px;
  top: 200px
}
.nosearch {
  width: 100%;
  font-size: 100px;
  color: #ff5058;
  margin-bottom: 5px;
}

margin-left: 18rem;

button {
  margin-top: 20px;
  cursor: pointer;
  width: 70%;
  padding: 15px;
  border: 1px solid #dee0e1;
  border-radius: 12px;
  background: #f6f8fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #dee0e1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}

.products {
  margin-top: 1rem;
  padding: 10px;

  display: grid;
  grid-gap: 20px;

  font-family: 'Noto Sans KR', sans-serif;

  .product {
    margin: 20px 0px 20px 0px;
    position: relative;
    max-height: 340px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.4);

    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
    //grid-template-columns: repeat(4, 1fr);

    img {
      width: 200px;
    }

    &_img {
      max-height: 200px;
      border-radius: 10px;
      overflow: hidden;
    }

    &_details {
      position: relative;
      //top: -36px;
      width: 90%;
      padding: 10px;
      margin: 0 auto;
      background: rgb(255, 255, 255);
      border-radius: 10px;
      //box-shadow: 0 4px 8px 0 rgba(3, 6, 31, 0.15);

      display: grid;
      grid-gap: 5px;
      
      h3 {
        font-size: 22px;
        font-weight: 400;
      }

      .detail {
        color: #777777;
        font-size: 12px;
      }

      .price {
        display: grid;
        //grid-template-columns: 1fr 1fr;

        .price_l {
          width: 100%;
          text-align: right;
          
        }
        .weight_label {
          font-weight: 600;
          text-align: right;
        }
      }
    }
  }
}

@media (max-width: 347px) {
  .products {
    .product {
      &_details {
        .price {  
          align-items: baseline;
          .price_l {
            font-size: 12px;
          }
        }
      }

    }
  }
}

@media (max-width: 1200px) {
  margin-left: 6.5rem;
}


@media (min-width: 768px) and (max-width: 1024px) {
  margin-left:0px;
  .products {
    .product {
      grid-template-columns: 1fr 1fr;
      margin-right: 20px;
      &_details {
        top: 0;
        align-items: flex-start;
        align-content: center;

        grid-gap: 10px;

        .price {  
          grid-template-columns: auto 1fr;
          font-size: 15px;
        }

        .detail {
          margin-top: -7px;
        }
      }
    }
  }
}

@media (min-width: 481px) and (max-width: 767px)  {
  margin-left:0px;
    .products {
      .product {
        grid-template-columns: 1fr 1fr;

        &_details {
          top: 0;
          align-items: flex-start;
          align-content: center;

          grid-gap: 10px;

          .price {  
            grid-template-columns: auto 1fr;
            font-size: 15px;
          }

          .detail {
            margin-top: -7px;
          }
        }
      }
    }

}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
  .products {
    grid-template-columns: 1fr 1fr;
  }
  
}

@media (min-width: 1025px)  {
  
  .wrapper {
    width: 960px;
    margin: auto;
    //box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

    .products{
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 30px;

      .product {
        &_details {
          h3 {
            font-size: 18px;
          }
        }
      }
    }
  }
  
}

`;
