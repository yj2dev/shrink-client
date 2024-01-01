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
      background-color: white;
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
    padding: 10px 0;
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
      //border: 1px solid white;
      border: 1px solid #d5d5d5;
      padding: 0px;
      border-radius: 4px;
      width:50px; 
      left: 15px;
      overflow: hidden;
      box-shadow: 4px 0 16px -4px rgba(0, 0, 0, 0.2);
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
        background-color: white;
        font-family: 'Noto Sans KR', sans-serif;
        border-radius: 5px;
        padding: 10px;
    }
    #edit-area {
      background-color: white;
      font-family: 'Noto Sans KR', sans-serif;
      border-radius: 5px;
      padding: 10px;
      height: auto;
      width:600px;
    }

    .threedot {
      cursor: pointer;
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
        padding-top: 10px;
    }
    
    .left-btn {
        margin-right: auto; 
        width: 10%;
        white-space: nowrap;
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
      //padding: 5px;
      cursor: pointer;
      background: #99CCFF; 
      color: #fff;
      border-radius:5px;
      border-color: #99CCFF;
      height: 30px;
      margin-top:10px;
    }

    .active-btn {
      text-align: right;
    }

    .active-btn button {
      margin-top: -10px;
      margin-right: -10px;
    }
    
    .commentsz img,
    .dates img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        border: 2px solid #ccc;
        transition: 0.2s;
        box-sizing: border-box;
        padding: 2px;
    }

    #postuser {
      margin-right:70px;
      margin-top: 0px;
      margin-bottom: 0px;
      align-items: center;
      justify-content: center;
      display: flex;
    }

    #commentlike-container {
      height:30px;
      margin-top: 70px;
    }

    .like-container {
      padding: 5px 5px;
      display: flex;
      justify-content: right;
    }

  .wrapper {
    display: inline-flex;
    background: #f2f2f2;
    width: content;
    border-radius: 20px;
    overflow: hidden;
  .separator {
    width: 1px;
    background: #262626;
    margin: 8px 0;
  }

  .action {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    color: #262626;
    font-family: Lato;
    padding: 8px 12px;
  
  .count {
    margin-left: 5px;
    font-size: 14px;
    font-weight: bold;
  }

  &:first-child {
    padding-left: 14px;
  }

  &:last-child {
    padding-right: 14px;
  }

  &:hover {
    background: #e5e5e5;
  }
  }
}
   
`;