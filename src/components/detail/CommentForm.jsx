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
    console.log(postId)
    const [commentTextArea, setCommentTextArea] = useState('');
    const Token = getCookie('Access_Token')


// 댓글 입력값
const onChangeComment = (event) => {
    setCommentTextArea(event.target.value);
}

// 댓글 등록
const onClickAddComment = () => {
    let obj = {
        comment:{
            comment:commentTextArea
        },
        id:postId
    }
    console.log(obj)
    

    dispatch(__createComment(
        obj
    ));
    window.location.reload() 

    setCommentTextArea('');
}

return (
    <CommentFormWrap>
        {
            Token !== null && 
            <>
            <textarea 
            placeholder="댓글을 작성하세요"
            onChange = {onChangeComment}
            value = {commentTextArea} ></textarea>
            {/* <div className="commentAddBtn"> */}
                <button className="commentAddBtn"
                onClick={onClickAddComment}>
                    댓글 작성
                </button>
            {/* </div> */}

            </>
        }

    </CommentFormWrap>
)
}


export default CommentForm;

const CommentFormWrap = styled.div`
    width: 100%;
    margin-bottom: 50px;

    textarea {
        width: 100%;
        height: 70px;
        /* padding: 20px; */
        border-radius: 4px;
        color: #212529;
        outline: none;
        font-size: 1rem;
        line-height: 1.75;
        border: 1px solid #F1F3F5;
        margin-bottom: 20px;

    }

    button {
        float:right;
        /* display: flex;
        justify-content: flex-end; */
        height: 30px;
        line-height:30px;
        padding: 0 18px;
        font-size: 16px;
        font-weight: 700;
        background-color: #12b886;
        border-radius:4px;
        color: #fff; 
        cursor: pointer;
        outline: none;
        border: none;
        margin-bottom: 20px;
        
       

        /* button {
            height: 40px;
        padding: 0 18px;
        font-size: 16px;
        font-weight: 700;
        background-color: #12b886;
        border-radius:4px;
        color: #fff; 
        cursor: pointer;
        outline: none;
        border: none;
        } */
    }
`;



