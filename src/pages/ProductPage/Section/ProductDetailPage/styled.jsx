import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    section {
        height: 100vh;
        display: flex;
        width: 100%;
    }

    .product-body {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    [data-product-detail] {
        width: 950px;
        height: 400px;
        margin: 0;
        position: relative;
        top: 200px;
        background: white;
        box-shadow: 2px 2px 7px rgba(0,0,0,0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px
    }

    [data-product-detail] .img-card {
        width: 300px;
        height: 90%;
        border: 1px solid lightgrey;
        border-radius: 5px;
    }

    .img-card .img {
        height: 80%;
        display: flex;
        flex-direction: column;
    }
    .img-card .img img {
        width: 80%;
        height: 200px;
        position: relative;
        left: 30px;
        top: 40px;
    }

    .img-card .img-options {
        border-top: 1px solid lightgrey;
    }

    [data-product-detail] .product-details {
        height: 80%;
        width: 50%;
        padding-left: 20px;
    }

    .product-details h2 {
        margin: 0;
        font-size: 35px;
    }

    .product-details p:first-of-type {
        margin: 0;
    }

    .product-details p:nth-of-type(2) {
        width: 200px;
        height: 25px;
        padding-left: 5px;
    }

    .product-details p:nth-of-type(2) span {
        font-size: 12px;
        position: relative;
        bottom: 1px;
    }

    .product-details p:nth-of-type(3) {
        color: grey;
        margin-bottom: 0;
        margin-top: 80px;
    }

    .product-details p:nth-of-type(4) {
        margin-top: 0;
    }

    .product-details p:nth-of-type(4) span:first-of-type {
        font-weight: 800;
        font-size: 25px;
        margin-right: 10px;
    }

    .product-details p:nth-of-type(4) span:nth-of-type(2) {
        text-decoration: line-through;
    }

    .product-details p:nth-of-type(4) span:nth-of-type(3) {
        color: teal;
        font-size: 17px;
        margin-left: 10px;
    }

    .img-options {
        display: flex;
        padding-left: 10px;
    }
    .img-options div {
        border: 1px solid lightgrey;
        margin: 10px 5px;
        width: 60px;
        height: 50px;
    }

    .img-options div img {
        width: 80%;
        margin: 0px 4px;
    }

    .img-options div:nth-of-type(2) img {
        transform: rotate(90deg);
    }

    .img-options div:nth-of-type(3) img {
        transform: rotate(-45deg);
        width: 65%;
        margin: 6px 10px;
    }

    .img-options div:nth-of-type(4) img {
        transform: rotate(45deg);
        width: 65%;
        margin: 6px 10px;
    }

    @media (max-width: 1200px) {
        [data-product-detail] {
            width: 800px;
        }
    }

    @media (max-width: 1000px) {
        [data-product-detail] {
            width: 700px;
        }
    }

    @media (max-width: 768px) {
        [data-product-detail] {
            width: 600px;
        }

        [data-product-detail] .img-card {
            width: 200px;
            height: 60%;
        }

        .img-card .img img {
            width: 70%;
            height: 150px;
            left: 40px;
            top: 20px;
        }

        .img-card .img-options {
            display: none;
        }

        .product-details h2 {
            font-size: 30px;
        }
    }

    @media (max-width: 576px) {
        [data-product-detail] {
            width: 510px;
        }

        [data-product-detail] .img-card {
            width: 150px;
            height: 50%;
        }

        .img-card .img img {
            height: 130px;
            left: 25px;
            top: 30px;
        }

        .product-details h2 {
            font-size: 25px;
        }
    }

`;

export const ProductDetailHeader = styled.div`

    background-color: ${(props) => {
        switch (props.type) {
        case null:
            return "#FF9C08";
        case true:
            return "#ff5058";
        case false:
            return "#009432";
        default:
            return "#009432";
        }
    }};
    height: 50%;
    position: absolute;
    width: 100%;
    z-index: -99;

    h1 {
        font-size:2.5em;
        color: white;
        margin-left:1em;
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2em;
        }
    }
`;