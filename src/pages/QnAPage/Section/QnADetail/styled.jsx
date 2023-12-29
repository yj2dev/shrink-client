import styled from "styled-components";

export const Container = styled.div`

    max-width: 80%;
    button {
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
        margin-left: 10px;
        white-space: nowrap;
        width:42%;
    }

    button:hover,
    button:focus {
        background: #0F62FE; 
        border: none;
        color: #fff;
    }

    // table {
    //     border-collapse: collapse;
    //     border-spacing: 0;
    // }
     section.notice {
        padding: 50px 0;
        margin-left: 100px;
    }
    .page-title {
        margin-bottom: 40px;
    }
     .page-title h3 {
        font-size: 28px;
        color: #333333;
        font-weight: 400;
        text-align: center;
    }
  
    #board-detail .detail-window {
        padding: 15px 0;
        background-color: #f9f7f9;
    }
    
  
    .board-content {
        font-size: 13px;
        width: 100%;
        height: 300px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    tr {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

  
  /* reset */
  
    * {
        list-style: none;
        text-decoration: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .clearfix:after {
        content: '';
        display: block;
        clear: both;
    }
    .container {
        width: 1100px;
        margin: 0 auto;
    }
    .blind {
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        margin: -1px;
        width: 1px;
        height: 1px;
    }

    .pagination {
        display: flex;
        justify-content: center;
        margin-top: 15px;
      }
      
      ul {
        list-style: none;
        padding: 0;
      }
      
      ul.pagination li {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid #e2e2e2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
      }
    
      ul.pagination li:first-child{
        border-radius: 5px 0 0 5px;
      }
    
      ul.pagination li:last-child{
        border-radius: 0 5px 5px 0;
      }
      
      ul.pagination li a {
        text-decoration: none;
        color: #337ab7;
        font-size: 1rem;
      }
      
      ul.pagination li.active a {
        color: white;
      }
    
      ul.pagination li.active {
        background-color: #337ab7;
      }
      
      ul.pagination li a:hover,
      ul.pagination li a.active {
        color: blue;
      }
      
      .page-selection {
        width: 48px;
        height: 30px;
        color: #337ab7;
      }

    .detail-title p {
        text-align: center;
        font-size: 20px;
    }

    .detail-content p {
        text-align: center;
        font-size: 16px;
        line-height: 150px; 
    }

    .detail-plus pre {
        text-align: center;
        font-size: 13px;
        padding-top: 5px;
    }

    .detail-content {
        height: 270px;
    }
   
`;