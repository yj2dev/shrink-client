import styled from "styled-components";

export const Container = styled.div`
    width:300px;
    padding-left: 5px;
    padding-right: 5px;

    .titleWrap {
        font-size: 20px;
        font-weight: 700;
        color:#262626;
    }

    .contentWrap {
        margin-top: 26px;
        flex: 1;
    }

    .inputTitle {
        font-size: 14px;
        font-weight: 600;
        color: #262626;
        margin-left: 5px;
        text-align: left;
    }

    .inputWrap {
        display : flex;
        border-radius: 8px;
        padding:16px;
        margin-top: 8px;
        background-color: white;
        border: 1px solid #e2e0e0
    }

    .inputWrap:focus-within {
        border : 1px solid #0F62FE;
    }

    .input {
        width: 100%;
        outline: none;
        border: none;
        height: 17px;
        font-size: 14px;
        font-weight: 400;
    }

    .input::placeholder {
        color: #dadada;
    }

    .errorMessageWrap {
        text-align: left;
        margin-top: 8px;
        color: #ef0000;
        font-size: 13px;
    }
    .timeCountingWrap {
        color : #1555cb;
        font-weight: 400;
    }

    .phone-Button {
        width: 100%;
        height: 48px;
        border: none;
        font-weight: 700;
        background-color: #ebeeef;
        border: 2px solid #eeeeee;
        border-radius: 8px;
        color: #0f62fe;

        cursor: pointer;
        margin-bottom: 3%;
        // margin-top: 8%;
        transition: 0.2s;
    }
    .phone-Button:hover {
        color: #fff;
        background-color: #0f62fe;
    }

    .code-Button {
        width: 100%;
        height: 48px;
        border: none;
        font-weight: 700;
        background-color: #ebeeef;
        border: 2px solid #eeeeee;
        border-radius: 8px;
        color: #0f62fe;

        cursor: pointer;
        margin-bottom: 3%;
        // margin-top: 8%;
        transition: 0.2s;
    }
    .code-Button:hover {
        color: #fff;
        background-color: #0f62fe;
    }

    .phoneTitle {
        text-align: left;
        margin-left: 5%;
        font-weight: 400;
        margin-top: 3%;
        color: #303030;
    }

    .bottomWrap {
        margin-top: 8%;
    }

    .CheckTerm {
        text-align: left;
        font-size: 14px;
        .contentButton {
            border: none;
            color: black;
            background-color: white;
            text-decoration: underline;
            cursor: pointer;
        }
    }

    .register-Button {
        width: 100%;
        height: 48px;
        border: none;
        font-weight: 700;
        background-color: #ebeeef;
        border: 2px solid #eeeeee;
        border-radius: 8px;
        color: #0f62fe;

        cursor: pointer;
        margin-bottom: 3%;
        // margin-top: 3%;
        transition: 0.2s;
    }
    .register-Button:hover {
        color: #fff;
        background-color: #0f62fe;
    }

    .loginLine {
        text-align: center;
        color: #bcbcbc;
        font-size: 13px;
        margin-bottom: 10px;
        .loginButton {
            border: none;
            color: black;
            background-color: white;
            text-decoration: underline;
            cursor: pointer;
        }
    }
`