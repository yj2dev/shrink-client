import { useState } from "react";
import { Container } from "./styled";
import ProfileImgModal from "../../components/ProfileImgModal";
import { GoPencil } from "react-icons/go";

const AccountPage = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [nickname, setNickname] = useState("가리비공주");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showProfileImgModal, setShowProfileImgModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileUpload = () => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setPreviewImage(event.target.result);
    };
    reader.readAsDataURL(selectedFile);

    setShowProfileImgModal(false);
  }

  const onShowProfileImgModal = () => {
    setShowProfileImgModal(true);
  }

  const onCloseModal = () => {
    setShowProfileImgModal(false);
  };

  const handleNameInputChange = (e) => {
    setNickname(e.target.value);
  };

  return (
    <Container>
      <div className="account-wrap">
        <div className="account-info">
        <section className="account-total">
          <section className="account-first">
        <h2>내 계정정보</h2>
        </section>
        <div className="profile-img-wrapper">
          <p>프로필 이미지</p>
        {previewImage ? (
          <img
            src={previewImage}
            alt="미리 보기"
            style={{ maxWidth: '100%', marginTop: '20px' }}
        />
      ) : (
          <img src="https://picpac.kr/common/img/default_profile.png" alt="basic-img"/>
      )}
          
          
          <button class='menu-btn' onClick={() => setShowMenu(!showMenu)}><GoPencil className="pencil"/>편집</button>  
            {showMenu && (
              <div class='menu'>  
              <div class='menu-msg'>
              
              <button 
              className="img-edit"
              onClick={onShowProfileImgModal}
              >
                프로필 이미지 변경
                </button>
              <button className="img-reset"
              onClick={()=> {
                setPreviewImage(null);
              }}
              >
                프로필 초기화
                </button>
                </div>
              </div>
            )}
            
         
        </div>
        </section>
        <div className="profile-descript">
            <p>닉네임</p>
            <input 
            className="name-descript" 
            value={nickname}
            onChange={handleNameInputChange}
            />
            <p>휴대폰번호</p>
            <input 
            className="name-descript" 
            value="01012345678" 
            readOnly/> 

            <button className="mod-btn">수정하기</button>
          </div>
        
        </div>
        
      </div>

      <ProfileImgModal 
      onHandleFile={handleFileSelect}
      onUploadFile={handleFileUpload}
      show={showProfileImgModal}
      onClose={onCloseModal}
      />
      
    </Container>
  );
};

export default AccountPage;
