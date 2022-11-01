// 첫 화면에 나오는 포스트 카드 리스트
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getList } from "../../redux/modules/listSlice";
import styled from "styled-components";
import PostItem from "./PostItem";

const PostList = () => {
  const dispatch = useDispatch();
  // 배열 안에 객체
  const posts = useSelector((store) => store.list.list);
  // const posts = useSelector((state) => state.list.list);
  console.log("store.list", posts);

  const onChangeDate = (event) => {
    const value = event.target;
    document.getElementById("time").innerText = value;
  };
  // 선택한 기간(오늘, 이번주, 이번달, 올해)의 게시글이 좋아요가 많은 순서대로 붙이기

  useEffect(() => {
    dispatch(__getList());
  }, [dispatch]);

  return (
    <>
      <div>
        <ListMenu>
          <div className="trending">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path>
            </svg>
            <span>트렌딩</span>
          </div>
          <div className="latest">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
            </svg>
            <span>최신</span>
          </div>
          {/* 이 부분에서 select option에 따라서 포스팅 카드 새로 나오게 설정해야 함 */}
          <div className="time-line" onChange={onChangeDate}>
            <div className="sc-cCcXHH hjWsOz">
              이번 주
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </div>
            <div className="sc-ezbkAF cHDryB">
              <div>
                <div
                  className="sc-bYoBSM cBBspN"
                  // style="opacity: 1; transform: scale(1);"
                >
                  <ul>
                    <li value="오늘" className="">
                      오늘
                    </li>
                    <li value="이번 주" className="active">
                      이번 주
                    </li>
                    <li value="이번 달" className="">
                      이번 달
                    </li>
                    <li value="올해" className="">
                      올해
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="time"></div>
        </ListMenu>
        <div className="post-container">
          {posts.map((post) => {
            if (post.length !== 0)
              return <PostItem key={post.postId} post={post} />;
          })}
        </div>
      </div>
    </>
  );
};

export default PostList;

const ListMenu = styled.div`
  width: 95%;
  max-width: 1376px;
  height: 48px;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  text-align: start;
  line-height: normal;
  letter-spacing: normal;

  color: #212529;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  padding-left: 30px;
  gap: 12px;
`;
