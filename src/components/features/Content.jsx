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

  useEffect(() => {
    dispatch(__getLikeList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(__getTimeList());
  }, [dispatch]);

  return (
    <PostWrap key={post.postId}>
      <div>
        <PostImg src={post.postImg} alt="postImg" />
      </div>

      <PostContent onClick={() => onClickPost()}>
        <h4>{post.postTitle}</h4>
        <p>{post.postContent}</p>
      </PostContent>

      <div>
        {/* 태그 하나마다 버튼을 달아야?? map돌려서?? */}
        <button>{post.tag}</button>
      </div>

      <PostCnt>
        <span>{post.countTime}</span>
        <span>{post.modifyPost}</span>
        <span>{post.countComment}</span>
      </PostCnt>

      <PostInfo>
        <div>
          <UserImg src={post.userImg} alt="userImg" />
          <span>{post.userName}</span>
        </div>

        <div>
          {/* 좋아요 갯수 표시 */}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" />
          </svg>
          <span>{post.countLike}</span>
        </div>
      </PostInfo>
      
    </PostWrap>
  );
};

export default Content;

const PostImg = styled.img`
  width: 320px;
  height: 167px;
`;

const PostWrap= styled.div`
  width: 320px;
  height: 370px;
  font-size: 16px;
  text-align: start;
  line-height: 24px;
  letter-spacing: normal;

  color: #212529;
  background-color: #fff;
  box-shadow: 0 0 0 0.05px;

  margin-bottom: 50px;
`;

const PostContent = styled.div`
  /* background-color: pink; */
  padding-left: 20px;
  gap: -10px
`

const UserImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 100%;
`

const PostInfo = styled.div`
  /* background-color: yellowgreen; */
  width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const PostCnt = styled.div`
  /* background-color: aqua; */
  color: #868e96;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`;