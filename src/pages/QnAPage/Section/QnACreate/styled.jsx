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
        margin-left: 300px;
        //margin-left: 230px;
        background-color: white;


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
            margin-left: 10px;
         }
    }

    .quill {
        display: flex;
        flex-direction: column;
        max-width: 600px;
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
    }

    .ql-container:focus{
        border: #252525
    }

    .ql-editor.ql-blank::before {
        font-family: 'Noto Sans KR', sans-serif;
        font-style: normal !important;
    }



    input[type=text]{
        width: 95%;
        height: 40px;
        
        padding: 10px;
        margin-bottom: 20px;
        background-color: #f0f0f0;
        border: none;
        border-bottom: 1px solid #d5d5d5;
        background-color: white;
    }
    
    // textarea{
    //     width: 100%;
    //     height: 300px;
    //     border: 1px solid #d5d5d5;
    //     border-radius: 5px;
    //     padding: 10px;
    //     margin-bottom: 20px;
    //     background-color: #f0f0f0;
    //     font-family: 'Noto Sans KR', sans-serif;
    //     background-color: white;
    // }

    // textarea:focus{
    //     border: #252525
    // }

    div{
        display: flex;
        margin-bottom: 20px;
    }

    button {
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

    button:hover,
    button:focus {
        background: #0F62FE; 
        border:none;
        color: #fff;
    }
`;