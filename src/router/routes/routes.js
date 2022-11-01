import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../../components/modal/Login"
import Editor from "../../pages/Editor"
import Search from "../../pages/Search"
import Home from "../../pages/Home"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit" element={<Editor />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
