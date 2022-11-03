import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { __getLikeList } from "../../redux/modules/listSlice"
import Content from "./Content"
import Header from "../Layout/Header"
import "./List.css"

const LikeList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const posts = useSelector((store) => store.list.list)

  useEffect(() => {
    dispatch(__getLikeList())
  }, [dispatch])

  return (
    <Layout>
      <Header />
      <PostNav className="post-nav">
        <TrendBtn
          className="trending"
          onClick={() => {
            navigate("/recent")
          }}
        >
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
          <span>&nbsp;&nbsp;트렌딩</span>
        </TrendBtn>
        <LatestBtn
          className="latest"
          onClick={() => {
            navigate("/recent")
          }}
        >
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
          <span>&nbsp;&nbsp;최신</span>
        </LatestBtn>
      </PostNav>
      <Container>
        <Box className="post-container">
          {posts.map((post) => {
            if (post.length !== 0)
              return <Content key={post.postId} post={post} />
          })}
        </Box>
      </Container>
    </Layout>
  )
}

export default LikeList

const Layout = styled.div`
  background-color: #f8f9fa;
`

const TrendBtn = styled.button`
  /* background-color: aqua; */
  width: 130px;
  height: 48px;

  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: normal;
  letter-spacing: normal;

  color: #212529;
  background-color: #f8f9fa;
  border: none;
  border-bottom: 2px solid #212529;
  margin-right: 15px;

  &:hover {
    cursor: pointer;
  }
`

const LatestBtn = styled.button`
  /* background-color: limegreen; */
  width: 130px;
  height: 48px;

  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: normal;
  letter-spacing: normal;

  color: #868e96;
  background-color: #f8f9fa;
  border: none;
  border-bottom: 2px solid #868e96;

  &:hover {
    cursor: pointer;
  }
`

const PostNav = styled.div`
  /* background-color: yellowgreen; */
  width: 90%;
  max-width: 1300px;
  margin: auto;
  padding-left: 60px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: left;
`

const Box = styled.div`
  /* background-color: red; */
  width: 90%;
  max-width: 1250px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;

  margin: 20px auto 0;
`

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 10px 20px;
  align-items: stretch;
`
