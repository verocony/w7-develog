// 메인 리스트 페이지에서 트렌딩 또는 최신으로 선택해서 보여주기

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTimeList } from "../../redux/modules/listSlice";
import Content from "./Content";

const TimeList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.list.list)

  useEffect(() => {
    dispatch(__getTimeList());
  }, [dispatch]);

  return (
    <div>
      <div></div>
      <div className="post-container">
        {posts.map((post) => {
          if (post.length !== 0)
            return <Content key={post.postId} post={post} />;
        })}
      </div>
    </div>
  );
};

export default TimeList;