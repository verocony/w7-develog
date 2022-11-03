// 첫 화면에 나오는 포스트 카드 리스트
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { getSearch } from "../../redux/modules/searchSlice"
import Content from "./Content"
import Header from "../Layout/Header"

const SearchList = () => {
  const dispatch = useDispatch()
  // 배열 안에 객체
  const searchs = useSelector((store) => store.search.search)
  console.log("store.search", searchs)

  useEffect(() => {
    dispatch(getSearch())
  }, [dispatch])

  return (
    <Container>
      <Box className="post-container">
        {searchs.map((post) => {
          if (post.length !== 0)
            return <Content key={post.postId} post={post} />
        })}
      </Box>
    </Container>
  )
}

export default SearchList

const Layout = styled.div`
  /* background-color: #f8f9fa; */
`

const Box = styled.div`
  /* background-color: red; */
  width: 90%;
  max-width: 1280px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;

  margin: 20px auto 0;
`

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 10px 20px;
  align-items: stretch;
`
