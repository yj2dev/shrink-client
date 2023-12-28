import { useState } from "react";
import { Container } from "./styled";
import ProfileImgModal from "../../components/ProfileImgModal";
import { GoPencil } from "react-icons/go";
import axios from "axios";
import ImageCropModal from "../../components/ProfileImgCropModal";
import ProfileImgCropModal from "../../components/ProfileImgCropModal";

const AccountPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [nickname, setNickname] = useState("");
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
  };

  const onShowProfileImgModal = () => {
    setShowProfileImgModal(true);
  };

  const onCloseModal = () => {
    setShowProfileImgModal(false);
  };

  const handleNameInputChange = (e) => {
    setNickname(e.target.value);
  };

  const onClickResetProfileImg = () => {
    const fd = new For();

    axios
      .patch("/api/auth/user/profile-image")
      .then((res) => {})

      .catch((err) => {});
  };

  return (
    <Container>
      {/*<ProfileImgCropModal*/}
      {/*  show={true}*/}
      {/*  close={() => setShowProfileImgModal(false)}*/}
      {/*/>*/}

      <button
        onClick={() => {
          const payload = {
            title: "오늘도 야근인가",
            content:
              "아까 먹다 남은 치킨을 버렸는데.. 인간의 존엄을 포기할지 고민이다",
          };
          axios
            .post("/api/query/create", payload)
            .then((res) => {
              console.log("res >> ", res);
            })
            .catch((err) => {
              console.log("err >> ", err);
            });
        }}
      >
        글 쓰기 test
      </button>

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
                  style={{ maxWidth: "100%", marginTop: "20px" }}
                />
              ) : (
                <img
                  src="https://picpac.kr/common/img/default_profile.png"
                  alt="basic-img"
                />
              )}

              <button class="menu-btn" onClick={() => setShowMenu(!showMenu)}>
                <GoPencil className="pencil" />
                편집
              </button>
              {showMenu && (
                <div class="menu">
                  <div class="menu-msg">
                    <button
                      className="img-edit"
                      onClick={onShowProfileImgModal}
                    >
                      프로필 이미지 변경
                    </button>
                    <button
                      className="img-reset"
                      onClick={() => {
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
            <input className="name-descript" value="01012345678" readOnly />

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
