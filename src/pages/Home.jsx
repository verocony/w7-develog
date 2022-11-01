import React from "react"
import PostList from "../components/features/PostList"
import { __getList } from "../redux/modules/listSlice"
import { getSearch } from "../redux/modules/searchSlice"

const homeList = () => {
  __getList()
}
const Home = () => {
  return (
    <div>
      Home
      <PostList />
    </div>
  )
}

export default Home
