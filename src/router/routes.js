import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import MyPage from "../components/features/MyPage"
import TimeList from "../components/features/TimeList"
import Editor from "../pages/Editor"
import Home from "../pages/Home"
import Search from "../pages/Search"
// import DetailPage from "../pages/DetailPage"
// import UpdatePage from "../pages/UpdatePage"

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recent" element={<TimeList />} />
        <Route path="/edit" element={<Editor />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage" element={<MyPage />} />
        {/* <Route path="/post/" element={<PostingPage />} />
        <Route path="/post/:postId" element={<DetailPage />} />

        <Route path="/update/:postId" element={<UpdatePage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
