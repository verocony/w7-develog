import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __deleteComment } from "../../redux/modules/cmtSlice";


const CommentCard = ({comment}) => {
    const dispatch = useDispatch();
    // const [formToggle, setFormToggle] = useState(false);


//  댓글 삭제

const onClickDeleteComment = (commentId) => {
    dispatch(__deleteComment(commentId));
}

// 날짜 변환 필요  ** 다시
const chageDateFormat = (date) => {
    const dateArrayToString = String(date);
    const year = dateArrayToString.substring(0, 4);
    const month = dateArrayToString.substring(5, 6);
    const day = dateArrayToString.substring(7, 9);

    return (`${year}년 ${month}월 ${day}일`);

  };


return (
    <CommentBox key={comment.commentId}>
    <div className='rowComment'>
      <div className='commentInfo'>
        <div className='commentProfileImage'>
          <img src={comment.profileimage} alt={comment.comment} />
        </div>
        <dl>
          <dt>{comment.username}</dt>
          <dd>{chageDateFormat(comment.createdAt)}</dd>
        </dl>
      </div>
      <CommentBtn>
        <span>수정</span>
        <span onClick={() => onClickDeleteComment(comment.commentId)}>삭제</span>
      </CommentBtn>
    </div>
  </CommentBox>
);

}
export default CommentCard;

const CommentBox = styled.div`
    padding: 10px;
    border-top: 1px solid black;
`;

const CommentBtn = styled.p`
    
`