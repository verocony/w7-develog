import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import UpdatePage from "../pages/UpdatePage";


const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/post/:postId' element={<DetailPage />} />
        <Route path='/update/:postId' element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;