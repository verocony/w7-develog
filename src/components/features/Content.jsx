// 메인 리스트에 작은 카드 1개 내용

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getLikeList, __getTimeList } from "../../redux/modules/listSlice";
import { useNavigate } from "react-router-dom";

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
    <div key={post.postId}>
      <div>
        <img src={post.postImg} alt="postImg" />
      </div>

      <div onClick={() => onClickPost()}>
        <h4>{post.postTitle}</h4>
        <p>{post.postContent}</p>
      </div>

      <div>
        {/* 태그 하나마다 버튼을 달아야?? map돌려서?? */}
        <button>{post.tag}</button>
      </div>

      <div>
        <span>{post.countTime}</span>
        <span>{post.modifyPost}</span>
        <span>{post.countComment}</span>
      </div>

      <div>
        <img src={post.userImg} alt="userImg" />
        <span>{post.userName}</span>
      </div>

      <div>
        {/* 좋아요 갯수 표시 */}
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" />
        </svg>
        <span>{post.countLike}</span>
      </div>
    </div>
  );
};

export default Content;
