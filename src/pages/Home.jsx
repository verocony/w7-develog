import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import LikeList from "../components/features/LikeList";

const Home = () => {
  return (
    <div>
      <Header />
      <LikeList/>
      <Footer />
    </div>
  );
};

export default Home;
