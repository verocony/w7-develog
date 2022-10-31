import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "../components/modal/Login"
import Editor from "../pages/Editor"
// import Write from "../pages/Write"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/edit" element={<Editor />} />
      {/* <Route path='/post/' element={<PostingPage />} />
        <Route path='/post/:postId' element={<DetailPage />} />
        <Route path='/recent' element={<MainRecentPage />} />


        <Route path='/update/:postId' element={<PostUpdatePage />} /> */}
    </Routes>
  )
}

export default Routers
