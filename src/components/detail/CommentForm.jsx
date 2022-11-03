import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { __createComment } from "../../redux/modules/cmtSlice";
import { useDispatch } from "react-redux";
import { getCookie } from "../../shared/Cookie";
import styled from "styled-components";
import Button from "../elements/Button"

const CommentForm = () => {
    const dispatch = useDispatch();
    const postId = useParams().postId;
    const [commentTextArea, setCommentTextArea] = useState('');
    const Token = getCookie('Access_Token')


// 댓글 입력값 확인
const onChangeComment = (event) => {
    setCommentTextArea(event.target.value);
}

// 댓글 등록
const onClickAddComment = () => {
    dispatch(__createComment({
        comment:commentTextArea,
        postId: postId
    }));
    setCommentTextArea('');
}

return (
    <CommentFormWrap>
        {
            Token !== null && 
            <>
            <textarea 
            placeholder="'댓글을 작성하세요."
            onChange = {onChangeComment}
            value = {commentTextArea} ></textarea>
            <div className="commentAddBtn">
                <Button
                onClick={onClickAddComment}>
                    댓글 작성
                </Button>
            </div>

            </>
        }

    </CommentFormWrap>
)
}


export default CommentForm;

const CommentFormWrap = styled.div`
    width: 100%;
    background-color: #ddd;

    textarea {
        width: 100%;
        height: 70px;
        padding: 10px;
        border: 1px solid black;
        border-radius: 4px;
        color: black;
        background-color: #ccc;

    }
`;



