import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import LikeList from "../components/features/LikeList";
import styled from "styled-components";

const Home = () => {
  return (
    <Layout>
      <LikeList/>
      <Footer />
    </Layout>
  );
};

export default Home;

const Layout = styled.div`
  background-color: #f8f9fa;
`;