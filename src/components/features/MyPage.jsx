// 마이페이지 (GET, PUT-프사+상메)

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyPageHeader from "../Layout/MyPageHeader";
import {
  __updateImg,
  __updateIntro,
  __getMyPage,
} from "../../redux/modules/mypageSlice";
import { getCookie } from "../../shared/Cookie";
import styled from "styled-components";
import "./MyPage.css"
import Content from "./Content";
import Footer from "../Layout/Footer"

const MyPage = () => {
  const dispatch = useDispatch();
  const id= getCookie("userId");
  console.log("cookie", id);

  const [edit, setEdit] = useState(false);
  const [updateProfile, setUpdateProfile] = useState("");
  const [updateIntro, setUpdateIntro] = useState("");
  const posts = useSelector((store) => store.mylist.mylist);
  console.log("mylist", posts);
  console.log("mylist.data", posts.data);
  const mypost = posts.data;
  console.log("mypost", mypost);

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
    dispatch(__getMyPage(id))
    console.log("id", id)
  }, [dispatch, id]);

  return (
    <Layout>
      <div className="mypage-header">
        <MyPageHeader />
      </div>

      <UserInfo className="profile">
        <div>
          {edit ? (
            <div>
              <UserImg src={getCookie("userImg")} alt="userImg" />
              <input
                type="file"
                name="userImg"
                value={updateProfile}
                onChange={(event) => {
                  setUpdateProfile(event.target.value);
                }}
              />
            </div>
          ) : (
            <UserImg src={getCookie("userImg")} alt="userImg" />
          )}
          {edit ? (
            <ImgEditBtn className="edit-btn" onClick={onSaveImg}>
              완료
            </ImgEditBtn>
          ) : (
            <ImgEditBtn
              className="edit-btn"
              onClick={() => {
                setEdit(true);
              }}
            >
              수정
            </ImgEditBtn>
          )}
        </div>

        <UserIntro>
          <h2>{getCookie("userId")}</h2>
          <Edit>
            {edit ? (
              <div>
                <span>{getCookie("intro")}</span>
                <input
                  type="text"
                  name="intro"
                  value={updateIntro}
                  onChange={(event) => {
                    setUpdateIntro(event.target.value);
                  }}
                />
              </div>
            ) : (
              <div>{`${getCookie("intro")}`}</div>
            )}
            {edit ? (
              <IntroEditBtn onClick={onSaveIntro} className="edit-btn">
                완료
              </IntroEditBtn>
            ) : (
              <IntroEditBtn
                className="edit-btn"
                onClick={() => {
                  setEdit(true);
                }}
              >
                수정
              </IntroEditBtn>
            )}
            <div></div>
          </Edit>
        </UserIntro>
      </UserInfo>

      <div>
        <MyPosts>
          <MyMenu>My Posts</MyMenu>
          <ContentCard>
            {mypost && mypost.map((item) => {
              if(item.length !== 0)
              return <Content key={item.postId} post={item}/>
            })
            }
          </ContentCard>
          
        </MyPosts>
      </div>
      <Footer />
    </Layout>
  );
};

{/* <Content key={post.postId} post={post} />; */}

export default MyPage;

const Layout = styled.div`
  background-color: #f8f9fa;
`;

const UserInfo = styled.div`
  width: 500px;

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
  width: 400px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: left;
  margin-left: 20px;
  padding-left: 50px;
`

const Edit = styled.div`
  /* background-color: green; */
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  /* justify-content: left; */
`;

const IntroEditBtn = styled.div`
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

const ImgEditBtn = styled.div`
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

  margin-left: 30px;
  margin-top: 10px
`;

const MyPosts = styled.div`
  margin-top: 100px;
  min-height: 500px;
`

const MyMenu = styled.div`
  /* background-color: aqua; */
  width: 400px;
  height: 45px;
  font-family: "Fira Mono", monospace;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin: 0 auto 70px;

  border: none;
  border-bottom: 5px solid #12B886;
`;

const Fixing = styled.img`
  width: 320px;
  height: 268px;
`
const Msg = styled.span`
  font-size: 2rem;
  color: #D5D5D5;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const Alert = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 300px;
`
const ContentCard = styled.div`
  /* background-color: red; */
  width: 90%;
  max-width: 1300px;
  margin: auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
`;