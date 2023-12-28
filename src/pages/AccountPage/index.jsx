import { Container } from "./styled";
import { useRecoilState } from "recoil";
import { userState } from "../../state/selectors/userSelectors";
import { useState } from "react";
import axios from "axios";

const AccountPage = () => {
  const [user, setUser] = useRecoilState(userState);
  const [nickname, setNickname] = useState(user.nickname || null);
  const [editNickname, setEditNickname] = useState(false);

  const onChangeNickname = (e) => {
    if (2 <= e.target.value.length && e.target.value.length <= 12) {
      setNickname(e.target.value);
    }
  };

  const onSubmitNicknameUpdate = () => {
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

  const onSubmitPasswordUpdate = () => {};

  const onSubmitAccountDelete = () => {};

  return (
    <Container>
      <article>
        <h1>내 계정정보</h1>
        <hr />
        <img src={user && user.profile_url} />

        <section>
          <h3>닉네임</h3>
          <hr />
          <div className="nickname-section">
            <input
              type="text"
              disabled={!editNickname}
              onChange={onChangeNickname}
              value={nickname}
            />

            {editNickname ? (
              <button
                className="nickname-update-btn"
                onClick={onSubmitNicknameUpdate}
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

            <h3>비밀번호 변경</h3>
            <hr />

            <input type="password" />
            <input type="password" />
            <input type="password" />
          </div>

          <button
            className="password-update-btn"
            onClick={onSubmitPasswordUpdate}
          >
            비밀번호 변경
          </button>

          <h3>회원탈퇴</h3>
          <hr />
          <button
            className="account-delete-btn"
            onClick={onSubmitAccountDelete}
          >
            회원탈퇴
          </button>
        </section>
      </article>
    </Container>
  );
};

export default AccountPage;
