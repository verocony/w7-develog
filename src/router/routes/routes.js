import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import LikeList from "../../components/features/LikeList"
import MyPage from "../../components/features/MyPage"
import TimeList from "../../components/features/TimeList"
import Editor from "../../pages/Editor"
import Home from "../../pages/Home"
import Editor from "../../pages/Editor"
import Search from "../../pages/Search"
import Home from "../../pages/Home"
// import Write from "../pages/Write"

const Routers = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recent" element={<TimeList/>} />
        <Route path="/edit" element={<Editor />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
    
    
  )
}

export default Routers
