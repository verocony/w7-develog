import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    __getPostDetail, __getUserDetail
} from "../redux/modules/postSlice";
import { getCookie } from '../shared/Cookie';
import DetailContainer from '../components/detail/DetailContainer';
import styled from 'styled-components';
import CommentContainer from '../components/detail/CommentContainer';
import commentsList from '../components/detail/CommentContainer'
import CommentList from '../components/detail/CommentList';
// import Header from "../components/Layout/Header";




const DetailPage = () => {

    const [isLogin, setIsLogIn] = useState();
    const [isToggle, setIsToggle] = useState(false);
  
    const dispatch = useDispatch();
    const postDetail = useSelector((state) => state.post.post);
    const commentsList =  postDetail.comments

    // const userDetail = useSelector((state) => state.postSlice.userDetail);
    const Token = getCookie('Access_Token')  
    ? getCookie('Access_Token')
    : null;
    // const userInfo = useSelector(state => state.userSlice.userInfo);
    const postId = useParams().postId;
  
    
    useEffect(() => {
      dispatch(__getPostDetail(postId));
    }, [dispatch, postId]);
  
    console.log(postId);
    console.log("postDetail : ", postDetail);
    console.log("Token : ", Token);
    console.log(commentsList)

    return (
      <DetailPageWrap>
        {/* user id header에 보내야함 */}
        <Header
          // userDetail={userDetail}
          Token={Token}
          isLogin={isLogin}
          setIsLogIn={setIsLogIn}
          isToggle={isToggle}
          setIsToggle={setIsToggle}
        />
        <Layout>
          <DetailContainer 
            postDetail={postDetail} 
            // userDetail={userDetail}
          />
          {/* <UserContainer userDetail={userDetail} /> */}
          
          <CommentContainer commentsList={commentsList} />
          
        </Layout>
      </DetailPageWrap>
    );
  };
  
  export default DetailPage;
  
  const DetailPageWrap = styled.div`
  `;

  const Layout = styled.div`
  width: 1760px;
  margin: 0 auto;    
  `;

  const Header = styled.div`
    
  `

  const UserContainer = styled.div`
    
  `;