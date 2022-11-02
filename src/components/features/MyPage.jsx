// 마이페이지 (GET, PUT-프사+상메)

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MyPageHeader from "../Layout/MyPageHeader";
import {
  clearUser,
  __updateImg,
  __updateIntro,
  __getMyPage,
} from "../../redux/modules/mypageSlice";
import { getCookie } from "../../shared/Cookie";
import styled from "styled-components";
import "./MyPage.css"

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
    dispatch(__getMyPage(id));
    console.log("id", id)
    return () => dispatch(clearUser());
  }, [dispatch, id]);

  return (
    <Layout>
      <div className="mypage-header">
        <MyPageHeader />
      </div>

      <UserInfo className="profile">
        <div>
          <UserImg src={getCookie("userImg")} alt="userImg" />
          {edit ? (
            <input
              type="file"
              name="userImg"
              value={updateProfile}
              onChange={(event) => {
                setUpdateProfile(event.target.value);
              }}
            />
          ) : (
            <div>{`${getCookie("userImg")}`}</div>
          )}
          {edit ? (
            <EditBtn className="edit-btn" onClick={onSaveImg}>
              완료
            </EditBtn>
          ) : (
            <EditBtn
              className="edit-btn"
              onClick={() => {
                setEdit(true);
              }}
            >
              수정
            </EditBtn>
          )}
        </div>

        <UserIntro>
          <h2>{getCookie("userId")}</h2>
          <Edit>
            <span>{getCookie("intro")}</span>
            {edit ? (
              <input
                type="text"
                name="intro"
                value={updateIntro}
                onChange={(event) => {
                  setUpdateIntro(event.target.value);
                }}
              />
            ) : (
              <div>{`${getCookie("intro")}`}</div>
            )}
            {edit ? (
              <EditBtn onClick={onSaveIntro} className="edit-btn">
                완료
              </EditBtn>
            ) : (
              <EditBtn
                className="edit-btn"
                onClick={() => {
                  setEdit(true);
                }}
              >
                수정
              </EditBtn>
            )}
            <div></div>
          </Edit>
        </UserIntro>
      </UserInfo>

      <div>
        <MyPosts>
          <MyMenu>My Posts</MyMenu>
          <div></div>
        </MyPosts>
      </div>
    </Layout>
  );
};

export default MyPage;

const Layout = styled.div`
  background-color: #f8f9fa;
`;

const UserInfo = styled.div`
  width: 700px;

  /* background-color: aqua; */
  display: flex;
  flex-direction: row;
  margin: 200px auto 0px;
`;

const UserImg = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 100%;
`
const UserIntro = styled.div`
  width: 700px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: left;
  margin-right: 200px;
`

const Edit = styled.div`
  /* background-color: green; */
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  /* justify-content: left; */
`;

const EditBtn = styled.div`
  width: 70px;
  height: 30px;
  background-color: #12b886;
  color: #fff;
  border-radius: 16px;

  font-size: 14px;
  font-weight: 500;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  margin-left: 10px;
`;

const MyPosts = styled.div`
  margin-top: 100px;
  min-height: 500px;
`

const MyMenu = styled.div`
  font-family: "Fira Mono", monospace;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
`;