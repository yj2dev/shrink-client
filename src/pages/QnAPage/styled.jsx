import styled from "styled-components";

export const Container = styled.div`

    width: 90%;

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
     section.notice {
        padding: 50px 0;
        margin-left: 155px;
        
    }
    .page-title {
        margin-bottom: 40px;
    }
     .page-title h3 {
        font-size: 30px;
        text-align: center;
    }
  
    #board-search .search-window {
        padding: 15px 0;
    }
    #board-search .search-window .search-wrap {
        position: relative;
        margin: 0 auto;
        width: 80%;
        max-width: 564px;
    }
    #board-search .search-window .search-wrap input {
        height: 40px;
        width: 100%;
        font-size: 14px;
        padding: 7px 14px;
        border: 1px solid #ccc;
        border-radius: 10px;
    }
    #board-search .search-window .search-wrap input:focus {
        border-color: #333;
        outline: 0;
        border-width: 1px;
    }
    #board-search .search-window .search-wrap .btn {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 108px;
        padding: 0;
        font-size: 16px;
    }
  
    .board-table {
        font-size: 13px;
        width: 100%;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        
    }
  
    .board-table a {
        color: #333;
        display: inline-block;
        line-height: 1.4;
        word-break: break-all;
        vertical-align: middle;
    }
    .board-table a:hover {
        text-decoration: underline;
    }
  
    .board-table .th-num {
        width: 100px;
        text-align: center;
    }
  
    .board-table .th-date {
        width: 200px;
    }
  
    .board-table th, .board-table td {
        padding: 14px 0;
    }
  
    .board-table tbody td {
        border-top: 1px solid #e7e7e7;
        text-align: center;
    }
  
    .board-table tbody th {
        padding-left: 28px;
        padding-right: 14px;
        border-top: 1px solid #e7e7e7;
        text-align: left;
    }
  
    .board-table tbody th p{
        display: none;
    }
  
    .btn {
        display: inline-block;
        padding: 0 20px;
        font-size: 15px;
        font-weight: 400;
        background: transparent;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        text-transform: uppercase;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
    }

    .search-btn {
        background: rgb(15, 98, 254); 
        color: #fff;
        transition: background 0.3s, color 0.3s; 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    
    .search-btn:hover,
    .search-btn:focus {
        background: #0F62FE; 
        color: #fff;
    }

    .write-btn {
        background: #f6f8fa; 
        color: #3f5dfe;
        transition: background 0.3s, color 0.3s;
        margin-left:auto;
        margin-bottom: 10px;
        border-radius:5px;
        box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);
        font-weight: 600;
    }

    .write-wrap {
        display: flex;
        justify-content: space-between;
        align-items: end;
    }

    .write-btn:hover,
    .write-btn:focus {
        background: #0F62FE; 
        color: #fff;
    }
    
  .search-icon {
    margin-left: 5px;
  }
  
  
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
        width: 100%;
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
        margin-left:50px;
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
        color: black;
        font-size: 1rem;
      }
      
      ul.pagination li.active a {
        color: white;
      }
    
      ul.pagination li.active {
        background-color: rgb(15, 98, 254);
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

      .write-wrap p {
        font-size: 13px;
      }

      .write-wrap span {
        color: #0F62FE;
        font-weight: bold;
      }


      @media (max-width: 1200px) {

        .QnaPost {
            margin-left: 170px;
        }

        .container {
            width:100%
        }
        section.notice {
            margin-left: 0px;
        }

        .board-table th,
        .board-table td {
          padding: 7px; 
        }
        .page-title h3 {
            font-size: 24px;
        }
        section th,td,tr {
            font-size: 15px;
        }
      }

      @media (max-width: 1000px) {
        .QnaPost {
            margin-left: 120px;
        }
      }

      @media (max-width: 768px) {
        .QnaPost {
            width: 600px;
            margin-left: 80px;
        }

        .board-table th,
        .board-table td {
          padding: 5px; 
        }
        section.notice {
            margin-left: 0px;
        }
        .page-title h3 {
            font-size: 22px;
        }
        section th,td,tr {
            font-size: 15px;
        }
        .pagination {
            margin-left:30px;
        }
      }

      @media (max-width: 576px) {
        .QnaPost {
            width: 490px;
            margin-left: 0px;
        }

        section th,td,tr {
            font-size: 13px;
        }

      }


`;