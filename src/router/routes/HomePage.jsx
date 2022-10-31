import React, { useState } from "react";
import PostList from "../../components/features/PostList";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <PostList />
      <Footer />
    </div>
  );
};

export default HomePage;
