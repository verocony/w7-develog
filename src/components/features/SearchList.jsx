// 첫 화면에 나오는 포스트 카드 리스트
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { getSearch } from "../../redux/modules/searchSlice"
import PostItem from "./PostItem"

const SearchList = () => {
  const dispatch = useDispatch()
  // 배열 안에 객체
  const searchs = useSelector((store) => store.search)
  console.log("store.search", searchs)

  useEffect(() => {
    dispatch(getSearch())
  }, [dispatch])

  return (
    <>
      <div>
        <div className="post-container">
          {searchs.map((post) => {
            if (post.length !== 0)
              return <PostItem key={post.postId} post={post} />
          })}
        </div>
      </div>
    </>
  )
}

export default SearchList

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
`
