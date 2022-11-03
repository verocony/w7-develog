import React from "react";
import styled from "styled-components";
import { __getPostDetail } from "../../redux/modules/postSlice";
import {H4} from "../elements/Text"


const UpdateContent = ({postInput, setPostInput, postDetail}) => {

    // 컨텐츠 입력값 저장
    const onChangePostContent = (event) => {
        const {value, name} = event.target;
        setPostInput({
            ...postInput,
            [name]:value
        });
    }
    
    return (
        <UpdateContentWrap>
            {/* <input 
                name="postTitle"
                value={postInput.postTitle}
                onChange={onChangePostContent}
                placeholder={postDetail.postTitle}
            /> */}
            <div>
            <p>{postDetail.postTitle}</p></div>
            <textarea
                name="postContent"
                value={postInput.postContent}
                onChange={onChangePostContent}
                placeholder={postDetail.postContent}
                ></textarea>
                <div>{postDetail.tag}</div>
        </UpdateContentWrap>

    )
}

export default UpdateContent;

const UpdateContentWrap = styled.div`
    width: 351px;
    height: 150px;

    /* div { 
    
    } */
    
    p {
    font-size: 18px;
    font-weight: 500;
    height: 40px;
    width: 100%;
    box-shadow: rgba(0,0,0,0.03);
    border: 1px solid rgba(0,0,0,0.03);
    background-color: #fff;
    }
   
    
    textarea {
        width: 100%;
        height: 120px;
        color: #212529;
    background-color: #fff;
    box-shadow: rgba(0,0,0,0.03);
    font-size: 18px;
    outline: none;
    border: none;

    }
`

// const UpdateTitle = styled.div`
//     height: 48px;
//     font-size: 18px;
//     line-height: 20px;
//     font-weight: 20px;
// `
    
