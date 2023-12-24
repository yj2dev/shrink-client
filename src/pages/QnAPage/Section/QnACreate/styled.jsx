import styled from "styled-components";

export const Container = styled.div`
    .QnACreate {
        // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        // border: 1px solid #ddd;
        text-align: center;
        padding : 20px;
        margin-left: 265px;
    }

    .QnACreate input,
    textarea {
        margin-bottom: 20px;
        width: 500px;
        pdding: 10px;
        height: 30px;
        // box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        // border:5px outset;
    }

    .QnACreate textarea {
        height: 200px;
    }

    .QnACreate button {
        width: 25%;
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

    .QnACreate button:hover,
    .QnACreate button:focus {
        background: #0000FF; 
        border-color: #0000FF; 
        color: #fff;
    }

    .QnACreate div p {
        margin: 0;
        // margin-left: 0;
        text-align: left;
      }
`;