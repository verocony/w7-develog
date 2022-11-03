// 메인 리스트에 작은 카드 1개 내용

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getLikeList, __getTimeList } from "../../redux/modules/listSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Content = ({ post }) => {
  const posts = useSelector((store) => store.list.list);
  console.log("store.list", posts);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickPost = () => {
    navigate(`/getPost/${posts.postId}`);
  };

  // console.log("post", post.postId)

  useEffect(() => {
    dispatch(__getLikeList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(__getTimeList());
  }, [dispatch]);

  return (
    <PostWrap key={post.postId}>
      {/* <ImgBox>
        <PostImg src={post.postImg} alt="postImg" />
      </ImgBox> */}

      <ImgBox>
        <PostImg src={post.postImg} alt="postImg" />
      </ImgBox>

      <div>
        <PostContent onClick={() => onClickPost()}>
          <PostTitle>{post.postTitle}</PostTitle>
          <PostText>{post.postContent}</PostText>
        </PostContent>

        <InfoText>
          <Tag>
            {/* 태그 하나마다 버튼을 달아야?? map돌려서?? */}
            <TagBtn>{post.tag}</TagBtn>
          </Tag>

          <PostCnt>
            <span>{post.countTime}</span>
            <span>{post.modifyPost}</span>
            <span>{post.countComment}</span>
          </PostCnt>

          <Line />

          <PostInfo>
            <UserInfo>
              <UserImg src={post.userImg} alt="userImg" />
              {/* <UserImg
                src={post.userImg}
                onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFviA8Qeta_VOg3SpvXpS-xBwGLuLem-kVYpznAT18CVnMDN2-MI7bWn-bXvZWbyIoRUg&usqp=CAU';"/> */}
              <Name>
                <By>by </By>
                {post.userName}
              </Name>
            </UserInfo>

            <PostLike>
              {/* 좋아요 갯수 표시 */}
              <Heart width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
                ></path>
              </Heart>
              <span>{post.countLike}</span>
            </PostLike>
          </PostInfo>
        </InfoText>
      </div>
    </PostWrap>
  );
};

export default Content;

const ImgBox = styled.div`
  width: 300px;
  min-height: 167px;
  max-height: 167px;
`;

const PostImg = styled.img`
  width: auto;
  min-height: 167px;
  max-height: 167px;

  position: center;
  background-position: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: auto;
`;

const PostWrap = styled.div`
  width: 300px;
  height: 370px;
  font-size: 16px;
  text-align: start;
  line-height: 24px;
  letter-spacing: normal;

  color: #212529;
  background-color: #fff;
  opacity: 90%;
  /* background-color: lightseagreen; */
  box-shadow: 0 0 0 0.05px;

  margin: 0 10px 30px;
`;

const PostContent = styled.div`
  height: 82px;
  /* background-color: pink; */
  padding-left: 20px;
  margin-top: 5px;
`

const InfoText = styled.div`
  margin-bottom: 10px;
`

const PostTitle = styled.h4`
  font-size: 1rem;
  margin: 0px 0px 0.25rem;
  line-height: 1.5;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--text1);
`;
const PostText = styled.p`
  margin: 0px 0px 1.5rem;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5;
  height: 3.9375rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text2);
`;

const UserImg = styled.img`
  width: 24px;
  height: 24px;
  /* border-radius: 100%; */
  object-fit: cover;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: block;
  margin-right: 0.5rem;
`;

const PostInfo = styled.div`
  /* background-color: yellowgreen; */
  color: var(--text3);
  width: 250px;
  display: flex;
  flex-direction: row;
  /* text-align: center; */
  align-items: center;
  justify-content: space-between;
  margin: 10px auto 0;
`;

const PostLike = styled.div`
  /* background-color: yellowgreen; */
  color: var(--text3);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-size: 13px;
`;

const Heart = styled.svg`
  width: 12px;
  height: 11px;
`

const UserInfo = styled.div`
  /* background-color: lightgoldenrodyellow; */
  display: flex;
  flex-direction: row;
  align-items: center;
`

const PostCnt = styled.div`
  /* background-color: aqua; */
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--text3);
  /* color: #868e96; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  margin-left: 15px;
`;

const Line = styled.hr`
  background-color: #E2E2E2;
  width: 280px;
  border: 0;
  height: 1px;
`;

const Tag = styled.div`
  /* background-color: lightcoral; */
  margin-top: 8px;
`;

const TagBtn = styled.button`
  width: 50px;
  height: 25px;
  border: none;
  border-radius: 10px;

  background-color: #CFFAED;
  color:#12b886;
  margin: 0 10px;
`;

const By = styled.span`
  font-size: 12px;
  color: #868e96;
`
const Name = styled.span`
  color: #212529;
  font-size: 12px;
  font-weight: 600;
`