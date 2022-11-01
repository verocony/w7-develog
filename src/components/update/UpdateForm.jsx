import React from "react";
import { __getPostDetail } from "../../redux/modules/postSlice";
import UpdateContent from "./UpdateContent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import instance from "../../shared/Apis";
import styled from "styled-components";
import { getCookie } from "../../shared/Cookie";
import Button from "../elements/Button";

const UpdateForm = () => {

    const dispatch = useDispatch();
    const postId = useParams().postId;
    const postDetail = useSelector((state) => state.postSlice.postDetail);

    useEffect(() => {
        dispatch(__getPostDetail(postId));
    }, [dispatch]);

    console.log("postDetail : " , postDetail);

    // 뒤로가기
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    // 이미지 업로드 상태관리
    const [postInput, setPostInput] = useState({
        title:"",
        content:"",
        // postContent:"",
    });

    const [tagList, setTagList] = useState(postDetail.tags);

    const onClickUpdatePost = async(event) => {
        event.preventDefault();
        if (
            postInput.title === '' || postInput.content === ''
        ) {
            postInput.title === '' && console.log("title 입력");
      postInput.content === '' && console.log("content 입력");
        } else {
            console.log('서버로 데이터 전송!');

            try {
                const UpdateResponse = await instance
                .put(`/team/01/post/${postId}`, {
                    "title":String(postInput.title),
                    "content":String(postInput.content),
                    "tags":tagList,
                },{
                headers: {
                    // Access_Token: `Bearer ${getCookie("token")}`
                    Access_Token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhMTIzIiwiZXhwIjoxNjY3MzA2OTUxLCJpYXQiOjE2NjczMDUxNTF9.zACVr8rx3qMCCfagzc_paxgDFEACsxhGpzxVoUOmrCU',
                  }
}
                );
                navigate(`/post/${UpdateResponse.data.data.id}
                `, {replace: true});
            } catch(error) {
                console.log(error);
            }
// const onClickUpdatePost = async(event) => {
//     const formData = new FormData()
//     event.preventDerault();
//     if (imgFile === "") {
//         FormData.append("file", null)
//     } else {
//         FormData.append("file", imgFile)
//     }

   


// }
            //게시글 UPDATE
// const modifyPostDB = (postId = null, post = {}) => {
//     const Token = getCookie('Access_Token');
  
//     const _post = {
//       ...initialPost,
//       contents: post.contents,
//       imageUrl: post.file,
//     };
  
//     return async function (dispatch, getState, { history }) {
//       const form = new FormData();
//       form.append("file", post.file);
//       form.append(
//         "requestDto",
//         new Blob([JSON.stringify({ contents: post.contents })], {
//           type: "application/json",
//         })
//       );
  
//       await axios({
//         method: "put",
//         url: `http://13.124.136.171/api/posts/modify/${postId}`,
//         data: form,
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `${token}`,
//         },
//       })
//         .then((response) => {
//           console.log(response, "게시글 수정 성공");
//           dispatch(editPost(_post));
//           history.replace("/postList");
//         })
//         .catch((err) => {
//           console.log(err, "수정 실패");
//         });
//     };
//   };

            // 초기화
            setTagList([]);
            setPostInput({
                title:'',
                content:'',
            });
        }
    }
   

    return (
        <UpdateFormWrap>
            <div>
                <h3>포스트 수정하기</h3>
                <UpdateImageWrap>
                <PreviewImage src={__getPostDetail.imgUrl} alt='preview' />
                </UpdateImageWrap>

                <UpdateContent 
                    postInput = {postInput}
                    setPostInput = {setPostInput}
                    postDetail = {postDetail}
                    />
                <UpdateTagWrap>
                    <input  
                        type="text"
                        placeholder="태그 수정"
                        />
                <UpdateTags>
                    {
                        tagList && tagList.map((tag,index) => {
                            <span key={tag+index} id={tag} >{tag}</span>
                        })
                    }

                </UpdateTags>
                </UpdateTagWrap>
                <UpdateBtns>
                    <Button  onClick={goBack} >취소</Button>
                    <Button  onClick={onClickUpdatePost} >수정하기</Button>

                </UpdateBtns>
                
            </div>
        </UpdateFormWrap>
    );

    
};

export default UpdateForm;

const UpdateFormWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 400px;
    padding: 20px;
    margin: 0 auto;
    background-color: moccasin;
`;

const UpdateBtns = styled.div`
    display: flex;
    justify-content: end;
`;

const UpdateImageWrap = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    background-color: palegreen;
    text-align: center;
    `;

const PreviewImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const UpdateTagWrap = styled.div`
    input {
        width: 100%;
        margin: 10px;
        padding: 20px;
        border: 1px solid red;
        background-color: blanchedalmond;
    }
`;

const UpdateTags = styled.div`
    width: 100%;
    margin: 10px;
    word-wrap: break-all;

    span {
        display: inline-block;
        height: 20px;
        color: aquamarine;
        background-color: thistle;
        padding: 10px;
        margin:10px;

    }
`
