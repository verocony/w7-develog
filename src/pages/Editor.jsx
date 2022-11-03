import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPost } from "../redux/modules/postSlice2"

import useInput from "../hooks/useInput"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import Header from "../components/Layout/Header"
import { Link } from "../components/elements/Text"

const Editor = () => {
  //커스텀 훅 사용
  const [postInput, setPostInput, postInputHandle] = useInput({
    postTitle: "",
    postTag: [""],
    postContent: "",
  })

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
      postTag: [postInput.tag],
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
      {" "}
      <Header />
      <Container>
        <ContWrap>
          <TitBox>
            <TitInput
              type="text"
              maxLength="20"
              value={postInput.title || ""}
              name="title"
              onChange={postInputHandle}
              placeholder="제목을 입력하세요"
            />
            <Hr />
          </TitBox>
          <TagBox>
            <TagInput
              type="text"
              maxLength="20"
              value={postInput.tag || ""}
              name="tag"
              onChange={postInputHandle}
              placeholder="태그를 입력하세요"
            />
          </TagBox>
          <ImgBox>
            <div>
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
              <label for="imgFile">
                <img
                  src={
                    imageUrl
                      ? imageUrl
                      : "http://localhost:3000" + "/img/noImg.jpg"
                  }
                  className="card-img-top"
                  alt="image"
                />
              </label>
            </div>
          </ImgBox>
          <ContBox>
            <ContInput
              value={postInput.contents || ""}
              name="contents"
              onChange={postInputHandle}
              placeholder="내용을 입력하세요"
            />
          </ContBox>
          <Btn>
            <Link onClick={goback} size="medium">
              취소하기
            </Link>
            <Link onClick={onPost} color="reverse" size="medium">
              등록하기
            </Link>
          </Btn>
        </ContWrap>
      </Container>
    </>
  )
}

export default Editor

const ImgBox = styled.div`
  display: flex;
  text-align: center;
  width: 900px;
  margin: 0 auto;
  img {
    margin: 0 20px;
    border-radius: 5px;
    width: 100%;
    max-width: 600px;
    height: 200px;
    object-fit: cover;
  }
`
const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  background-color: #eee;
`
const ContWrap = styled.div`
  width: 1000px;
  margin: 0 auto;
  background-color: white;
`
const TitBox = styled.div`
  width: 900px;
  padding: 20px 20px 0 20px;
  margin: 0 auto;
`

const TagBox = styled.div`
  width: 900px;
  padding: 10px 20px 20px 20px;
  margin: 0 auto;
`
const ContBox = styled.div`
  width: 900px;
  padding: 10px 20px 20px 20px;
  margin: 0 auto;
`

const TitInput = styled.input`
  display: flex;
  border: 0;
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.125s ease-in 0s;
  font-size: 2.5rem;
  font-weight: 600;
  padding: 1.3rem;
  outline-color: white;
  :focus {
    border-color: white;
  }
`

const TagInput = styled.input`
  display: flex;
  border: 0;
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.125s ease-in 0s;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 1.5rem;
  outline-color: white;
  :focus {
    border-color: white;
  }
`

const ContInput = styled.textarea`
  width: 900px;
  height: 41vh;
  display: flex;
  border: 0;
  -webkit-box-align: start;
  align-items: flex-start;
  transition: all 0.125s ease-in 0s;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 1.5rem;
  outline-color: white;
  :focus {
    border-color: white;
  }
`

const Hr = styled.hr`
  border: solid 3px #4a5158;
  margin-left: 20px;
  width: 60px;
`
const Btn = styled.div`
  width: 900px;
  margin: 0 auto;
  padding: 5px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  box-shadow: 0px -3px 5px #fcfcfc;
`
