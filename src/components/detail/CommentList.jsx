import React from "react";
import CommentCard from "./CommentCard";
import styled from "styled-components";

const CommentList = ({commentsList}) => {
    console.log("commentsList : ", commentsList);
    return (
        <CommentListWrap>
            {commentsList.responseDto && commentsList.responseDto.map((comment) => (
                <CommentCard key={comment.commentId} comment={comment} />
            ))}
        </CommentListWrap>
    )
};

export default CommentList;

const CommentListWrap = styled.div`
    margin: 10px;
`