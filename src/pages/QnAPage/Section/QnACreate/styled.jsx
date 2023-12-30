import styled from "styled-components";

export const Container = styled.div`

    article{
        width: 70%;
        max-width: 800px;
        min-width: 360px;
        border: 1px solid #d5d5d5;
        border-radius: 10px;
        margin: 50px auto;
        padding: 40px;
        margin-left: 300px;
    }

    input[type=text]{
        width: 100%;
        height: 40px;
        
        padding: 10px;
        margin-bottom: 20px;
        background-color: #f0f0f0;
        border: none;
        border-bottom: 1px solid #d5d5d5;
    }
    
    textarea{
        width: 100%;
        height: 300px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 20px;
        background-color: #f0f0f0;
        font-family: 'Noto Sans KR', sans-serif;
    }

    textarea:focus{
        border: #252525
    }

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