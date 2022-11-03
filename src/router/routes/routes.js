import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import LikeList from "../../components/features/LikeList"
import MyPage from "../../components/features/MyPage"
import TimeList from "../../components/features/TimeList"
import Login from "../../components/modal/Login"
import Editor from "../../pages/Editor"
import Home from "../../pages/Home"
// import Write from "../pages/Write"

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit" element={<Editor />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/recent" element={<TimeList/>}/>
      </Routes>
    </BrowserRouter>
    
    
  )
}

export default Routers
