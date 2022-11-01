import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../components/modal/Login"
import Editor from "../pages/Editor"
import Search from "../pages/Search"
import DetailPage from "../pages/DetailPage"
import UpdatePage from "../pages/UpdatePage"


// import Write from "../pages/Write"

const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/edit" element={<Editor />} />

      <Route path="/search" element={<Search />} />
      {/* <Route path="/post/" element={<PostingPage />} /> */}
      <Route path="/post/:postId" element={<DetailPage />} />

      <Route path="/update/:postId" element={<UpdatePage />} />

      {/* <Route path='/post/' element={<PostingPage />} />
        <Route path='/post/:postId' element={<DetailPage />} />
        <Route path='/recent' element={<MainRecentPage />} />


        <Route path='/update/:postId' element={<PostUpdatePage />} /> */}
    </Routes>
    </BrowserRouter>
  )
}

export default Routers
