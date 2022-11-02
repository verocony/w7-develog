// 마이페이지 (GET, PUT-프사+상메)

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MyPageHeader from "../Layout/MyPageHeader";
import {
  __getMyPost,
  clearUser,
  __updateImg,
  __updateIntro,
} from "../../redux/modules/mypageSlice";
import { getCookie } from "../../shared/Cookie";

const MyPage = () => {
  const dispatch = useDispatch();
  const id= getCookie("userId");
  console.log("cookie", id);

  const [edit, setEdit] = useState(false);
  const [updateProfile, setUpdateProfile] = useState("");
  const [updateIntro, setUpdateIntro] = useState("");

  const onSaveImg = () => {
    if (updateProfile === "") {
      return alert("이미지를 선택해 주세요");
    }
    dispatch(
      __updateImg(
        setUpdateProfile('')
      )
    );
    setEdit(false);
  };

  const onSaveIntro = () => {
    if (updateIntro === "") {
      return alert("이미지를 선택해 주세요");
    }
    dispatch(
      __updateIntro(
        setUpdateIntro('')
      )
    );
    setEdit(false);
  };

  useEffect(() => {
    dispatch(__getMyPost(id));
    console.log("id", id)
    return () => dispatch(clearUser());
  }, [dispatch, id]);

  return (
    <div>
      <div className="mypage-header">
        <MyPageHeader />
      </div>

      <div className="profile">
        <div>
          <span>`${getCookie("userImg")}`</span>
          {edit ? (
            <input
              type="file"
              name="userImg"
              value={updateProfile}
              onChange={(event) => {
                setUpdateProfile(event.target.value)
              }}
            />
          ) : (
            <div>{`${getCookie("userImg")}`}</div>
          )}
          {edit ? (
            <button onClick={onSaveImg}>완료</button>
          ) : (
            <button
              onClick={() => {
                setEdit(true);
              }}
            >
              수정
            </button>
          )}
        </div>
        <h2>`${getCookie("userId")}`</h2>

        <div>
          <span>`${getCookie("intro")}`</span>
          
          {edit ? (
            <input
              type="text"
              name="intro"
              value={updateIntro}
              onChange={(event) => {
                setUpdateIntro(event.target.value)
              }}
            />
          ) : (
            <div>{`${getCookie("intro")}`}</div>
          )}
          {edit ? (
            <button onClick={onSaveIntro}>완료</button>
          ) : (
            <button
              onClick={() => {
                setEdit(true);
              }}
            >
              수정
            </button>
          )}
        </div>
      </div>

      <div>
        <div>
          <span>글</span>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
