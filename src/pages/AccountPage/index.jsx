import { Container } from "./styled";
import { useRecoilState } from "recoil";
import { userState } from "../../state/selectors/userSelectors";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { MdOutlineEdit } from "react-icons/md";

const AccountPage = () => {
  const [user, setUser] = useRecoilState(userState);
  const [nickname, setNickname] = useState(user.nickname || null);
  const [editNickname, setEditNickname] = useState(false);

  const [showEditMenu, setShowEditMenu] = useState(false);

  const editMenuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (editMenuRef.current && !editMenuRef.current.contains(event.target)) {
        setShowEditMenu(false);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, []);

  const onClickResetProfileImg = (e) => {};

  const onClickUpdateProfileImg = (e) => {};
  const onChangeNickname = (e) => {
    if (2 <= e.target.value.length && e.target.value.length <= 12) {
      setNickname(e.target.value);
    }
  };

  const onClickNicknameUpdate = () => {
    if (nickname === user.nickname) {
      setEditNickname(false);
      return;
    }

    axios
      .patch("/api/auth/user/nickname", { new_nickname: nickname })
      .then((res) => {
        console.log("res >> ", res);
      })
      .catch((err) => {
        console.log("err >> ", err);
      })
      .finally(() => {
        setEditNickname(false);
      });
  };

  const onClickPasswordUpdate = () => {};

  const onClickAccountDelete = () => {};

  return (
    <Container>
      <article>
        <h1>내 계정정보</h1>
        <hr />
        <section className="profile-img-setting">
          <img src={user && user.profile_url} />
          <button
            disabled={showEditMenu}
            className="profile-edit-btn"
            onClick={(e) => {
              e.stopPropagation();
              setShowEditMenu((prevShowEditMenu) => !prevShowEditMenu);
            }}
          >
            <MdOutlineEdit />
            &nbsp;변경
          </button>
          <div
            className={`profile-menu ${showEditMenu && "active"}`}
            ref={editMenuRef}
          >
            <ul>
              <li onClick={onClickResetProfileImg}>프로필 이미지 초기화</li>
              <li onClick={onClickUpdateProfileImg}>프로필 이미지 변경</li>
            </ul>
          </div>
        </section>

        <section className="etc-setting">
          <h3>닉네임</h3>
          <hr />

          <input
            type="text"
            disabled={!editNickname}
            onChange={onChangeNickname}
            value={nickname}
          />

          {editNickname ? (
            <button
              className="nickname-update-btn"
              onClick={onClickNicknameUpdate}
            >
              변경 완료
            </button>
          ) : (
            <button
              className="nickname-update-btn"
              onClick={() => {
                setEditNickname(true);
              }}
            >
              닉네임 변경
            </button>
          )}

          <section className="password-update">
            <h3>비밀번호 변경</h3>
            <hr />

            <label htmlFor="current-password">현재 비밀번호</label>
            <input type="password" id="current-password" />

            <label htmlFor="new-password">새로운 비밀번호</label>
            <input type="password" id="new-password" />

            <label htmlFor="new-password-check">새로운 비밀번호 확인</label>
            <input type="password" id="new-password-check" />
          </section>

          <button
            className="password-update-btn"
            onClick={onClickPasswordUpdate}
          >
            비밀번호 변경
          </button>

          <h3>회원탈퇴</h3>
          <hr />
          <button className="account-delete-btn" onClick={onClickAccountDelete}>
            회원탈퇴
          </button>
        </section>
      </article>
    </Container>
  );
};

export default AccountPage;
