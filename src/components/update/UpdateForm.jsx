import React from "react"
import { __getPostDetail, __updatePost } from "../../redux/modules/postSlice"
import UpdateContent from "./UpdateContent"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Apis from "../../shared/Apis"
import styled from "styled-components"
import { getCookie } from "../../shared/Cookie"
import Button from "../elements/Button"

const UpdateForm = () => {
  const dispatch = useDispatch()
  const postId = useParams().postId
  console.log("postId", postId)
  const postDetail = useSelector((state) => state.post.post)

  useEffect(() => {
    dispatch(__getPostDetail(postId))
  }, [dispatch])

  console.log("postDetail : ", postDetail)

  // 뒤로가기
  const navigate = useNavigate()
  const goBack = () => {
    // window.history.go(-1);
    navigate(-1)
  }

  const [postInput, setPostInput] = useState({
    postContent: "",
  })

  const onClickUpdatePost = async (event) => {
    event.preventDefault()
    if (postInput.postContent === "") {
      postInput.postContent === "" && console.log("content 입력")
    } else {
      const obj = { id: postId, content: postInput, tag: postDetail.tag }
      dispatch(__updatePost(obj))
      console.log("서버로 데이터 전송!", postInput, postId)
      window.alert("게시글이 수정되었습니다.")
      navigate(`/post/${postId}`)
      //  const navigate = useNavigate();
      //  navigate(`/post/${response.data.id}`, {replace: true})

      // 초기화

      setPostInput({
        // postTitle:'',
        postContent: "",
      })
    }
  }

  return (
    <UpdateFormWrap>
      <UpdateLeft>
        <h3>포스트 수정하기</h3>
        <UpdateImageWrap>
          <PreviewImage src={postDetail.postImg} alt="preview" />
        </UpdateImageWrap>

        <UpdateContent
          postInput={postInput}
          setPostInput={setPostInput}
          postDetail={postDetail}
        />
        {/* <UpdateTagWrap>
          <div>{postDetail.tag}</div>

          <UpdateTags>
            <div>
              {" "}
              {
                postDetail.tag
                // postDetail.tag && postDetail.tag.map((tag,index) => {
                //     <span key={tag+index} id={tag} >{tag}</span>
                // })
              }
            </div>
          </UpdateTags>
        </UpdateTagWrap> */}
      </UpdateLeft>
      {/* update_left */}
      <UpdateRight>
        <h3>공개 설정</h3>
        <PrivateBtns>
          <button>전체 공개</button>
          <button style={{ color: "#12b886", border: "1px solid #12b886" }}>
            비공개
          </button>
        </PrivateBtns>
        <h3>URL 설정</h3>
        <UpdateInput> /@team01/develog</UpdateInput>
        <h3>시리즈 설정</h3>
        <UpdateInput style={{ color: "#12b886", height: "48px" }}>
          <p> 시리즈에 추가하기</p>
        </UpdateInput>
        <UpdateBtns>
          <button
            onClick={goBack}
            style={{ background: "transparent", color: "#12B886" }}
          >
            취소
          </button>
          <button onClick={onClickUpdatePost}>수정하기</button>
        </UpdateBtns>
      </UpdateRight>
      {/* update_right */}
    </UpdateFormWrap>
  )
}

export default UpdateForm

const UpdateFormWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 768px;
  height: 437px;
  padding: 10px 0;
  margin: 0 auto;
  overflow: hidden;
  transform: translateY(50%);
`

const UpdateLeft = styled.div`
  flex: 1;
  margin-right: 10px;
  padding-right: 20px;
  border-right: 1px solid #ddd;
`
const UpdateRight = styled.div`
  flex: 1;
  margin-left: 10px;
  padding-left: 10px;
  position: relative;
  height: 448px;
`

const UpdateBtns = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  position: absolute;
  bottom: 0;
  right: 0;

  button {
    height: 40px;
    padding: 0 18px;
    font-size: 16px;
    font-weight: 700;
    background-color: #12b886;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    outline: none;
    border: none;
  }
`

const UpdateImageWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 351px;
  margin-right: 10px;
  text-align: center;
`

const PreviewImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const UpdateTagWrap = styled.div`
  input {
    width: 100%;
    margin: 10px;
    padding: 20px;
    border: 1px solid red;
    background-color: blanchedalmond;
  }
`

const UpdateTags = styled.div`
  width: 100%;
  margin: 10px;
  word-wrap: break-all;

  span {
    display: inline-block;
    height: 20px;
    color: aquamarine;
    padding: 10px;
    margin: 10px;
  }
`

const PrivateBtns = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  button {
    flex: 1;
    height: 48px;
    padding: 0 18px;
    font-size: 16px;
    font-weight: 700;
    color: #868e96;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.03);
    border: none;
  }
`
const UpdateInput = styled.div`
  width: 100%;
  height: 40px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.03);
  line-height: 40px;
  border-radius: 4px;
  padding: 0 5px;

  p {
    line-height: 48px;
    font-weight: 700;
    color: #20c997;
    text-align: center;
  }
`
