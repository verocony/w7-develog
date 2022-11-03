import React from "react"
import CommentForm from "./CommentForm"
import CommentList from "./CommentList"
import styled from "styled-components"

const CommentContainer = ({ commentsList }) => {
  console.log("commentContainer :", commentsList)
  return (
    <CommentContainerWrap>
      <h3>
        {/* {commentsList.commentcount}개의  */}
        댓글
      </h3>
      {/* <h3>댓글</h3> */}
      <CommentForm />
      <CommentList commentsList={commentsList} />
    </CommentContainerWrap>
  )
}

export default CommentContainer

const CommentContainerWrap = styled.div`
  width: 768px;
  margin: 0 auto;
`
