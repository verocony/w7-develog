import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { __getPostDetail, __deletePost } from '../../redux/modules/postSlice';
import { getCookie } from '../../shared/Cookie';


const DetailContainer = ({ postDetail, userDetail}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const postId = useParams().postId;

// 날짜 변환 필요  ** 다시


// 게시글 삭제
const onClickDeletePost = () => {
    dispatch(__deletePost(postId));
    navigate(`/`);
  }


  return (
    <DetailContainerWrap>
      <DetailHeaderWrap>
        <h1>{postDetail.title}</h1>

          <DetailBox>
            <p className='postInfo'>
              <strong>{userDetail.username}</strong> 
              <b>&#183;</b>
              {/* <span>{dateFormat}</span> */}
            </p>
            <div className='postButton'>
              <span>통계</span>
              <Link 
                to={`/update/${postId}`} 
                state={{
                  postId: postId,
                  postDetail: postDetail
                }}
              >
                <span>수정</span>
              </Link>
              <span onClick={onClickDeletePost}>삭제</span>
            </div>
          </DetailBox>
        <DetailTagBox>
          {postDetail.tags && postDetail.tags.map((tag, index) => (
            <li key={tag+index}>{tag}</li>
          ))}
        </DetailTagBox>
        <DetailImageBox>
          <img src={postDetail.imgUrl} alt={postDetail.title} />
        </DetailImageBox>
        <DetailContentBox>
          {postDetail.content}
        </DetailContentBox>
      </DetailHeaderWrap>
    </DetailContainerWrap>
  );
};

export default DetailContainer;

const DetailContainerWrap = styled.div`
  position: relative;
  width: 768px;
  margin: 18px auto;
  background-color: peru;
`;

const DetailHeaderWrap = styled.div`
  width: 100%;
  padding: 0 20px;

  /* h1 {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.5;
    color:var(--title-color);
    margin-bottom: 2rem;
    word-break: keep-all;
    transition: color 0.125s ease-in 0s;
  } */
`;

const DetailBox = styled.div`
    width: 100%;
    padding: 20px;
`;

const DetailTagBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const DetailImageBox = styled.div`

  width: 100%;
  background-color: beige;


`;

const DetailContentBox = styled.div`
  width: 100%;
  font-size: 20px;
  border: 2px solid green;
  padding: 5px;
`;