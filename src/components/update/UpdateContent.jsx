import React from "react";
import styled from "styled-components";
import { __getPostDetail } from "../../redux/modules/postSlice";


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
            <input 
                name="title"
                value={postInput.title}
                onChange={onChangePostContent}
                placeholder={postDetail.title}
            />
            <textarea
                name="content"
                value={postInput.content}
                onChange={onChangePostContent}
                placeholder={postDetail.content}
                ></textarea>
        </UpdateContentWrap>

    )
}

export default UpdateContent;

const UpdateContentWrap = styled.div`
    padding: 20px;

    input, textarea {
        width: 100%;
        border: 1px solid black;
        background-color: antiquewhite;
    }
    textarea {
        height: 50px;
        border: 2px solid red;
    }
`