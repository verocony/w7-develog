import React from "react"
import PostList from "../components/features/PostList"
import Header from "../components/Layout/Header"
import { __getList } from "../redux/modules/listSlice"
import { getSearch } from "../redux/modules/searchSlice"

const homeList = () => {
  __getList()
}
const Home = () => {
  return (
    <div>
      <Header />
      Home
      <PostList />
    </div>
  )
}

export default Home
