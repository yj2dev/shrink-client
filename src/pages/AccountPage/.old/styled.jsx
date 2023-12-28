import styled from "styled-components";
export const Container = styled.div`

width: 80%;
.account-wrap {
  display: flex;
  justify-content: center;
  min-height: 100vh; 
  align-items: center;
  margin: 0px;
}

@media (min-width: 650px) {
    .account-info {
        width:640px;
    }
}

@media (max-width: 650px) {
    .account-info {
        width:90vw;
    }
}

.account-info {
    background-color: white;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    min-height: 100vh;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;
    border-radius: 15px;

}

img {
    width: 80%;
}


.account-total {
    width: 100%;
    height: 100%;
    // margin-bottom: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  

}

.account-first {
    width: 80%;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // text-align: center;
    border-bottom: 1px solid #ccc;
}

.profile-img-wrapper {
    // border-top: 1px solid #ccc;
    padding-top: 20px;
    position: relative;
    max-width: 250px;
    width: 250px;
}


.profile-img-wrapper input {
    display: none;
}

img {
    border-radius:50%;
}

.menu-btn {
    position:absolute;
    right: 15px;
    bottom: 10px;
    background-color:white;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
}

.menu {
    width:170px;
    position:absolute;  
    right: -153px;
    bottom: -40px;

    flex-shrink: 1;
    height: 115px;
    //width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 5%;
    
}
.menu::before {
    content: "";
    top: 50%;
    left: 1em;
    border: 1em solid transparent;
    border-right: 1em solid #F2F2F2;
    z-index: 0;
  }


.menu-msg {
    display: flex;
    position: relative;
    width: 100%;
    height: 60%;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;
    border-radius: 15px;
    // padding-left: 1.8em;
    // padding-right: 1.8em;
    flex-direction: column;
    font-size:13px;
  }

  .name-descript {
    background-color: #F2F2F2;
    border-radius:5px;
    height: 40px;
    width: 250px;
    margin-left: 20px;
    border: none;
    padding-left: 20px;
  }

  p {
    //text-align: left;
    //margin-left: 20px;
    font-size: 15px;
    margin-bottom: 15px;
  }

  .profile-descript {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .img-edit, .img-reset {
    border: none;
    backgroud: rgba(245,243,245, 0.9);
    cursor: pointer; 
  }

  .pencil {
    font-size: 12px;
  }

  .mod-btn {
    border: none;
    margin-top: 30px;
    font-size: 15px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;

    background-color: #99CCFF;
    color: white;

    cursor: pointer;
  
  }

`;
