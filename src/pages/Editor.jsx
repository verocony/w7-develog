import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPost } from "../redux/modules/postSlice2"

import useInput from "../hooks/useInput"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const Editor = () => {
  //커스텀 훅 사용
  const [postInput, setPostInput, postInputHandle] = useInput({
    postTitle: "",
    postTag: [""],
    postContent: "",
  })
  // 셀렉트박스
  // const selectList = ["일상", "질문", "공유", "공지"]
  // const [tagSelect, setTagSelect] = useState("")
  // const handleSelect = (e) => {
  //   setTagSelect(e.target.value)
  // }
  // const [enItem, setEnItem] = useState("")
  // switch (setEnItem) {
  //   case tagSelect === "일상":
  //     setEnItem("daily")
  //     break
  //   case tagSelect === "질문":
  //     setEnItem("question")
  //     break
  //   case tagSelect === "공유":
  //     setEnItem("shared")
  //     break
  //   case tagSelect === "공지":
  //     setEnItem("notice")
  //     break
  // }

  // 셀렉트박스 2트
  const [tag, setTag] = useState("")

  const { isSuccess, error } = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //뒤로가기
  const goback = () => {
    window.history.back()
  }

  // img
  const [imageUrl, setImageUrl] = useState(null)
  const [imgFile, setImgFile] = useState("")
  const imgRef = useRef()

  const onChangeImage = () => {
    const reader = new FileReader()

    const postImg = imgRef.current.files[0]
    reader.readAsDataURL(postImg)
    reader.onloadend = () => {
      setImageUrl(reader.result)
      setImgFile(postImg)
    }
  }

  // //validation
  // const validateForm = () => {
  //   let validated = true
  //   if (
  //     postinput.title === "" ||
  //     postinput.contents === "" ||
  //     postinput.tag === ""
  //   ) {
  //     validated = false
  //   }
  //   return validated
  // }

  const onPost = (e) => {
    e.preventDefault()
    const formData = new FormData()
    if (imgFile === "") {
      formData.append("file", null)
    } else {
      formData.append("file", imgFile)
    }
    //formData.append("content", JSON.stringify(JSON.stringify(content)));
    //잘들어옴
    let obj = {
      postTitle: postInput.title,
      postContent: postInput.contents,
      tag: ["tag"],
    }
    //console.log(JSON.stringify(obj))

    formData.append("contents", JSON.stringify(obj))
    dispatch(addPost(formData))
  }

  useEffect(() => {
    if (isSuccess) {
      navigate("/")
    } else {
      if (error !== undefined) console.log(error)
    }
  }, [isSuccess, error, navigate])

  return (
    <>
      <Container>
        <TitleBox>
          <h1>작성하기</h1>
        </TitleBox>

        <AllTextBox>
          <Labelinput>
            <label>제목</label>
            <input
              type="text"
              maxLength="10"
              value={postInput.title || ""}
              name="title"
              onChange={postInputHandle}
              color="line"
              size="full"
            />
          </Labelinput>

          <FileBox>
            <label htmlFor="imgFile">
              <ImgBox>
                <div>
                  <img
                    src={
                      imageUrl
                        ? imageUrl
                        : "http://localhost:3000" + "/img/noImg.jpg"
                    }
                    className="card-img-top"
                    alt="game image"
                  />
                  <input
                    style={{ display: "none" }}
                    accept="image/*"
                    id="imgFile"
                    name="imgFile"
                    type="file"
                    multiple
                    onChange={onChangeImage}
                    ref={imgRef}
                  />
                  {/* <button type="button" htmlFor="inputImg">
                    이미지 업로드
                  </button> */}
                </div>
              </ImgBox>
            </label>
          </FileBox>

          {/* <select onChange={handleSelect} value={tagSelect} name="tag"> */}
          {/* {selectList.map((item) => ( */}
          <select
            name="tag"
            onChange={(e) => {
              setTag(e.target.value)
            }}
          >
            <option value={"tag"}> --태그 선택--</option>
            <option value={"일상"}>일상</option>
            <option value={"질문"}>질문</option>
            <option value={"공유"}>공유</option>
            <option value={"공지"}>공지</option>
            {/* ))} */}
          </select>

          <label>내용</label>
          <TextBox
            value={postInput.contents || ""}
            name="contents"
            onChange={postInputHandle}
          />
        </AllTextBox>

        <Btn>
          <button onClick={goback} size="medium">
            취소하기
          </button>
          <button onClick={onPost} color="reverse" size="medium">
            등록하기
          </button>
        </Btn>
      </Container>
    </>
  )
}

export default Editor

const ImgBox = styled.div`
  display: flex;
  text-align: center;
  width: 600px;
  margin: 20px auto;
  img {
    width: 100%;
    max-width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
    margin: 10px auto;
  }
`

//전체
const Container = styled.div`
  margin: 0 auto;
  position: absolute;
  left: 30%;
  top: 10%;
`
//제목
const TitleBox = styled.div`
  padding-left: 50%;
`
//작성하기 박스
const AllTextBox = styled.div`
  width: 700px;
  height: 700px;
  padding: 10%;
  margin: 30px 50% 0 0;
  border: 0;

  border-radius: 10px;
  box-shadow: 0px 2px 10px #e1cccd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  select {
    height: 50px !important;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #fd5c63;
    box-shadow: 0px 2px 10px #e1cccd;
    margin: 20px 0;
  }
`
//제목 입력창
const Labelinput = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`
//파일 업로드 박스
const FileLabel = styled.label`
  padding: 6px 25px;
  background-color: #fd5c63;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`
//파일 업로드
const FileBox = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`
//태그 -> 라디오 박스
const RadioBox = styled.div`
  display: flex;
  border: none;
  align-items: center;
  gap: 30px;
`
//태그 -> 라벨들
const LabelBox = styled.label`
  display: inline-block;
  padding: 10px 5px;
  border: 1px solid #fd5c63;
  background-color: white;
  /* text-align: center; */
`
//태그 -> 라디오
const Radio = styled.input`
  display: none;
  &:checked + label {
    background-color: #fd5c63;
    color: #ffffff;
  }
`
// 내용 입력창
const TextBox = styled.textarea`
  width: 100%;
  height: 50%;
  border: 1px solid #fd5c63;
  border-radius: 10px;
  box-shadow: 0px 2px 10px #e1cccd;
  padding: 12px;
  font-size: 14px;
  line-height: 1.5;
  font-size: 18px;
`
//취소 & 등록 버튼
const Btn = styled.div`
  margin-top: 20px;
  width: 100%;
  padding-left: 30%;
`
