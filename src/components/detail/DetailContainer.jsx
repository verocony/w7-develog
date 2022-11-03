import React from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { __getPostDetail, __deletePost } from "../../redux/modules/postSlice"
import { getCookie } from "../../shared/Cookie"

const DetailContainer = ({ postDetail, userDetail }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const postId = useParams().postId

  console.log(postDetail)

  // 게시글 삭제
  const onClickDeletePost = () => {
    dispatch(__deletePost(postId))
    window.alert("정말로 삭제하시겠습니까?")
    navigate("/")
  }

  return (
    <DetailContainerWrap>
      <DetailHeaderWrap>
        <h1>{postDetail.postTitle}</h1>

        <DetailBox>
          <p className="postInfo">
            {/* <strong>{userDetail.username}</strong>  */}
            <strong>team01 &nbsp;&nbsp;</strong>
            <b>&#183;</b>
            {/* <span>{dateFormat}</span> */}
            <span>&nbsp; 1분 전 &nbsp;&nbsp;</span>
            <DetailPrivate> 비공개 </DetailPrivate>
          </p>
          <div className="postButton">
            {/* <button onClick={navigate = () => {('/update/${postId}')}}
                state={{
                  postId: postId,
                  postDetail: postDetail
                }}
              > */}
            {String(getCookie("userId")) === String(postDetail.userId) ? (
              <div>
                {" "}
                <Link
                  to={`/update/${postId}`}
                  state={{
                    postId: postId,
                    postDetail: postDetail,
                  }}
                >
                  <span>수정</span>
                </Link>
                {/* </button> */}
                <span onClick={onClickDeletePost}>삭제</span>
              </div>
            ) : (
              // postButton
              <></>
            )}{" "}
          </div>
          {/* postInfo */}
        </DetailBox>
        {/* DetailBox */}

        <DetailTagBox>
          {postDetail.tags &&
            postDetail.tags.map((tag, index) => (
              <li key={tag + index}>{tag}</li>
            ))}
        </DetailTagBox>
        {/* DetailTagBox */}
      </DetailHeaderWrap>
      {/* DetailheaderWrap */}

      {postDetail.postImg !== undefined && (
        <DetailImageBox
          display={postDetail.postImg.length === 0 ? "none" : "block"}
        >
          <img src={postDetail.postImg} alt={postDetail.postTitle} />
        </DetailImageBox>
      )}
      {/* DetailImageBox */}

      <DetailContentBox>{postDetail.postContent}</DetailContentBox>
      {/* DetailContentBox */}
    </DetailContainerWrap>
    // DetailContainerWrap
  )
}

export default DetailContainer

const DetailContainerWrap = styled.div`
  position: relative;
  width: 768px;
  margin: 88px auto;
`

const DetailHeaderWrap = styled.div`
  width: 100%;
  padding: 0 20px;

  h1 {
    font-size: 36px;
    font-weight: 700;
    line-height: 1.5;
    color: #495057;
    margin-bottom: 2rem;
    word-break: keep-all;
    transition: color 0.125s ease-in 0s;
  }
`

const DetailBox = styled.div`
  float: left;
  width: 100%;
  padding: 20px;

  .postButton {
    span {
      float: right;
      cursor: pointer;
      margin-right: 20px;
      color: #495057;
    }
    span:hover {
      color: #212529;
      font-weight: 700;
    }
  }
`

const DetailPrivate = styled.span`
  border-radius: 4px;
  color: #fff;
  font-weight: 700;
  background-color: #212529;
  padding: 5px 10px 5px 5px;
  font-size: 14px;
`

const DetailTagBox = styled.ul`
  display: flex;
  width: 100%;
  margin: 20px;

  li {
    display: inline-flex;
    align-items: center;
    height: 2rem;
    line-height: 2rem;
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: 700;
    border-radius: 1rem;
    margin: 10px;
    padding: 0 1.2rem;
    background-color: #f8f9fa;
  }
`

const DetailImageBox = styled.div`
  width: 100%;
  img {
    max-height: 100vh;
    max-width: 100%;
    width: auto;
    margin: 20px auto 0px;
    height: auto;
    object-fit: contain;
    display: block;
  }
`

const DetailContentBox = styled.div`
  width: 100%;
  font-size: 20px;
  line-height: 1.7;
  /* border-left: 4px solid #12B886; */
  /* background-color: #F8F9FA; */
  margin: 30px 0;
  padding: 16px 16px 16px 20px;
  border-radius: 4px;
`
