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
      height: auto;
      overflow: hidden;
      text-overflow:clip;
    }
    .readPost div{
      display: flex;
      // padding: 10px;
      //width: 95%;
    }
    .readdiv {
      padding: 10px;
    }
    .readPost div img{
      padding-left: 0;
    }

    .right-wrap {
      position: absolute;
      margin-left: 400px;
    }
    .editmenu-wrap {
      position:relative;
      margin-left:320px;
      padding: 0px;
      border-radius: 5px;
    }

   .editmenu {
      position:absolute;
      right: 40px;
      display: flex;
      flex-direction: column;
      border: 1px solid white;
      padding: 0px;
      border-radius: 5px;
      width:50px; 
      left: 15px;
      overflow: hidden;
   }

   .editmenu button {
      border: none;
      background-color: white;
      cursor: pointer;
   }

   .editmenu button:hover {
    text-decoration: underline;
  }

  .right-wrap {
    display: flex;
    justify-content: flex-end;
  }

    #comment-area {
        height: 80px;
        width: 760px;
        background-color: #f0f0f0;
        font-family: 'Noto Sans KR', sans-serif;
        border-radius: 5px;
        padding: 10px;
    }
    #edit-area {
      background-color: #f0f0f0;
      font-family: 'Noto Sans KR', sans-serif;
      border-radius: 5px;
      padding: 10px;
      height: auto;
      width:600px;
    }
    .commentsz div{
      display: flex;
      // justify-content: space-between;
    }
    .commentsz div label{
      line-height: 3rem;
    }

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

    .btn-container button:hover,
    .active-btn button:hover,
    .active-btn button:focus,
    .btn-container button:focus {
      background: #0F62FE; 
      border: none;
      color: #fff;
    }

    .btn-container button,
    .active-btn button {
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

    .active-btn button {
      margin-top: -10px;
      margin-right: -10px;
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