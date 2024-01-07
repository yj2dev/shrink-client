import styled from "styled-components";

export const Container = styled.div`

    article{
        width: 100%;
        width: 800px;
        max-width: 600px;
        min-width: 360px;
        border: 1px solid #d5d5d5;
        border-radius: 10px;
        margin: 50px auto;
        padding: 40px;
        margin-left: 440px;
        background-color: white;

        .warn-length {
            font-size: 12px;
            color: red;
        }

        @media (max-width: 1200px) {
           margin-left: 180px;
        }

        @media (max-width: 900px) {
            width:80%;
            margin-left: 100px;
          }

        @media (max-width: 768px) {
            margin-left: 40px;
         }

         @media (max-width: 576px) {
            margin-left: 0px;
         }
    }

    .quill {
        display: flex;
        flex-direction: column;
        max-width: 600px;
        margin-bottom:0px;
    }

    .ql-editor {
        max-width: 600px;
        flex-direction: column;
    }

    .ql-toolbar {
        margin-bottom: 0px;
    }

    .ql-container {
        word-wrap: break-word; 
        overflow-wrap: break-word;
        cursor: text;
        height: 300px;
        margin-bottom: 0px;
    }

    .ql-container:focus{
        border: black;
    }

    .ql-editor.ql-blank::before {
        font-family: 'Noto Sans KR', sans-serif;
        font-style: normal !important;
        width: 630px;
    }



    input[type=text]{
        width: 95%;
        height: 40px;
        
        padding: 10px;
        margin-bottom: 0px;
        background-color: #f0f0f0;
        border: none;
        border-bottom: 1px solid #d5d5d5;
        background-color: white;
    }
    
    div{
        display: flex;
        margin-bottom: 20px;
    }

    .btn-container button {
        width: 25%;
        padding: 10px;
        cursor: pointer;
        background: #f6f8fa; 
        color: #3f5dfe;
        border-radius:5px;
        border: none;
        box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);
        font-weight: 600;
    }

    .btn-container {
        display: flex;
        justify-content: space-between;
    }

    .btn-container button:hover,
    .btn-container button:focus {
        background: #0F62FE; 
        border:none;
        color: #fff;
    }
`;