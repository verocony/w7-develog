import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { __deleteComment } from "../../redux/modules/cmtSlice"
import { getCookie } from "../../shared/Cookie"
import Grid from "../Layout/Grid"

const CommentCard = ({ comment }) => {
  const dispatch = useDispatch()
  // const [formToggle, setFormToggle] = useState(false);

  //  댓글 삭제

  const onClickDeleteComment = (id) => {
    console.log("아이디나와라 ===>", id)
    dispatch(__deleteComment(id))
    window.alert("정말로 삭제하시겠습니까?")
    window.location.reload()
  }

  console.log("코멘트   ::::: ", comment)

  const userId = getCookie("userId")
  const userImg = getCookie("userImg")
  const userName = getCookie("userName")

  return (
    // <Grid>
    <CommentBox key={comment.commentId}>
      <div className="comment">
        <div className="commentInfo">
          <div className="userProfileImage">
            <img src={userImg} alt={comment.comment} />
          </div>
          <dl>
            <dt>{userName}</dt>
          </dl>
        </div>
        <CommentBtn>
          {/* <span>수정</span> */}
          <span onClick={() => onClickDeleteComment(comment.commentId)}>
            삭제
          </span>
        </CommentBtn>
      </div>
    </CommentBox>
    // </Grid>
  )
}
export default CommentCard

const CommentBox = styled.div`
  margin: 10px;
  padding: 20px;
  border-top: 1px solid #ddd;

  .comment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    height: 50px;
  }

  .commentInfo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .userProfileImage {
    width: 60px;
    height: 60px;
    margin-right: 20px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #f8f9fa;
    border: 1px solid #f1f3f5;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    dl {
    }
    dt {
      font-weight: 700;
      color: #212529;
    }
    dd {
      margin-top: 10px;
      color: #495057;
      font-size: 14px;
    }

    p {
      font-size: 18px;
      color: #212529;
      transition: color 0.125s ease-in 0s;
      /* line-height: 1.7; */
      letter-spacing: -0.004em;
      word-break: keep-all;
      overflow-wrap: break-word;
    }
  }
`

const CommentBtn = styled.span`
  display: flex;
  gap: 20px;

  span {
    float: right;
    cursor: pointer;
    /* margin-right: 20px; */
    color: #495057;
  }
  span:hover {
    color: #212529;
    font-weight: 700;
  }
`
