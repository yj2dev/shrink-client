import styled from "styled-components";

export const Container = styled.div`
    .QnADetail {
        // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        // border: 1px solid #ddd;
        text-align: center;
        padding : 20px;
        margin-left: 265px;
        
    }

    .detail {
        margin-bottom: 20px;
        width: 500px;
        pdding: 10px;
        height: 30px;
    }

    .QnADetail textarea {
        height: 200px;
    }

    .QnADetail button {
        width: 20%;
        padding: 10px;
        cursor: pointer;
        background: #99CCFF; 
        color: #fff;
        border-radius:5px;
        border-color: #99CCFF;
    }

    .btn-container {
        display: flex;
        justify-content: space-between;
    }

    .left-btn {
        margin-right: auto; 
    }
      
    .right-btns {
        display: flex;
    }
      
    .right-btns button {
        margin-left: 10px;
        white-space: nowrap;
        width:42%;
    }

    .QnADetail button:hover,
    .QnADetail button:focus {
        background: #0F62FE; 
        border: none;
        color: #fff;
    }

    .QnADetail div p {
        margin: 0;
        // margin-left: 0;
        text-align: left;
      }
`;