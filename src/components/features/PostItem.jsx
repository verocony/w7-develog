// 첫 화면에 나오는 카드 1개
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PostItem = ({ post }) => {
  // const post = useSelector((state) => state.list.list);
  // const post = useSelector((store) => store.list.list);
  console.log(post);
  const navigate = useNavigate();
  const onClickPost = () => {
    navigate(`/getPost/${post.postId}`);
  };

  return (
    // 객체 안에 배열로 게시글 1개의 정보를 담아 온다
    // "data": {[post: 1], [post: 2], ...}
    <div>
      <div key={post.postId}>
        <div className="card-img">
          <img src={post.postImg} alt="card-img" />
        </div>

        <div className="card-content" onClick={() => onClickPost()}>
          <h4>{post.postTitle}</h4>
          <p>{post.postContent}</p>
        </div>

        <div className="card=timeline">
          {/* 5일전 | 오늘 수정됨 | 12개의 댓글 */}
          <span>{post.countTime}</span>
          <span>{post.modifyPost}</span>
          <span>{post.countComment}</span>
        </div>

        <div className="card-profile">
          <img src={post.userImg} alt="user thumbnail of @userId" />
          <span>
            "by "<b>{post.userName}</b>
          </span>
        </div>

        <div className="card-likes">
          {/* 좋아요 하트모양 svg 소스 */}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
            />
          </svg>
          {post.countLike}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
