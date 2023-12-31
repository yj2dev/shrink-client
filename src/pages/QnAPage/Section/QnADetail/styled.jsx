import styled from "styled-components";

export const Container = styled.div`

    max-width: 80%;

    article{
      width: 70%;
      max-width: 800px;
      min-width: 360px;
      border: 1px solid #d5d5d5;
      border-radius: 10px;
      margin: 50px auto;
      padding: 40px;
      margin-left: 230px;
    }

    .readPosting{
      text-align: center;
    }
    .readPosting div h5{
     margin: 20px 0 30px;
      color: #999;
      font-weight: 400;
    }
    
    .dates{
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      border-top: 2px solid #d5d5d5;
      border-bottom: 1px solid #d5d5d5;
      margin: 20px 0;
      font-size: .8rem;
      color: #999;
    }
    
    .dates div{
      display: flex;
    }
    .dates div p{
      padding: 3px;
    }
    .dates div p b{
      color: #222;
      padding: 5px;
    }
    .contents {
    border-bottom: 2px solid #d5d5d5;
    padding: 20px 0;
    margin-bottom: 20px;
    }
    .contents img{
      width: 100%;
      margin-bottom:10px;
    }
    
    .contents p{
      margin: 20px 0;
      white-space: pre-line;
    }
    .contents<div{
      padding: 0 280px;
      display: flex;
    }
    // .contents div button{
    //   width: 60px;
    //   height: 60px;
    //   border-radius: 50%;
    //   background-color: #999;
    //   font-size: 0;
    // }
    // .contents div button:hover{
    //   background-color: #0F62FE;
    // }
    // .contents div button img{
    //   max-width: 50%;
    //   height: 50%;
    // }
    
    // .btns {
    //   display: flex;
    //   justify-content: space-around;
    // }
    // .btns < button{
    //   padding:20px;
    // }
    
    .commentsz {
      text-align: start;
      margin-bottom: 20px;
    }
    .commentsz section{
      display: flex;
      font-size: .8rem;
      margin: 15px 0;
    }
    
    .readPost {
      display: flex;
      justify-content: space-between;
    }
    .readPost span{
      padding-left: 10px;
      height: 80px;
      overflow: hidden;
      text-overflow:clip;
    }
    .readPost div{
      display: flex;
      padding: 10px;
      width: 95%;
    }
    .readPost div img{
      padding-left: 0;
    }
    
    .commentsz textarea{
      height: 80px;
      width: 760px;
      background-color: #f0f0f0;
      font-family: 'Noto Sans KR', sans-serif;
      border-radius: 5px;
      padding: 10px;
    }
    .commentsz div{
      display: flex;
      // justify-content: space-between;
    }
    .commentsz div label{
      line-height: 3rem;
    }
    // .commentsz div button{
    //   width: 30%;
    //   max-width: 150px;
    // }

    .btn-container {
        display: flex;
        justify-content: space-between;
        padding-top: 15px;
    }
    
    .left-btn {
        margin-right: auto; 
        width: 10%;
    }
          
    .right-btns {
        display: flex;
    }
          
    .right-btns button {
      //margin-right: 10px;
      margin-left: 15px;
      white-space: nowrap;
      width:100%;
    }
    
    button:hover,
    button:focus {
      background: #0F62FE; 
      border: none;
      color: #fff;
    }

    button {
      // width: 50%;
      padding: 10px;
      cursor: pointer;
      background: #99CCFF; 
      color: #fff;
      border-radius:5px;
      border-color: #99CCFF;
    }

    .active-btn {
      text-align: right;
    }
    
    .commentsz img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        border: 2px solid #ccc;
        transition: 0.2s;
        box-sizing: border-box;
        padding: 2px;
    }
   
`;