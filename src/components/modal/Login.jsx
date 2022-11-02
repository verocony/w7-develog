import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import useInput from "../../hooks/useInput"
import {
  userSignin,
  userSignup,
  userCheck,
} from "../../redux/modules/userSlice"

import { VelInput } from "../elements/Input"
import { Text, H1, H2, H4, Span, Body, Link } from "../elements/Text"
import { Button, VelButton } from "../elements/Button"

const Login = (props) => {
  const dispatch = useDispatch()

  //커스텀훅 회원가입 인풋
  const [join, setJoin, joinHandle] = useInput({
    userName: "",
    userId: "",
    pw: "",
    pwCheck: "",
    intro: "",
    userImg: "",
  })

  //커스텀훅 로그인 인풋
  const [login, setLogin, loginHandle] = useInput({
    userId: "",
    pw: "",
  })

  //로그인 핸들
  const onLoginHandle = () => {
    const loginInfo = {
      userId: login.userId,
      pw: login.pw,
    }

    dispatch(userSignin(loginInfo))
    handleModal()
  }

  //아이디 중복 체크
  const userCheckHandle = () => {
    const obj = {
      userId: join.userId,
    }

    dispatch(userCheck(obj))
  }
  //아이디 형식검사
  const userIdHandle = (event) => {
    const userIdValidate = /([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

    return userIdValidate.test(event)
  }
  //비밀번호 형식검사
  const pwCheckHandle = (event) => {
    const pwValidate =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    return pwValidate.test(event)
  }

  // // 최종 유효성 검사
  // const userIdHandle =
  //   /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  // // const useremailCheck = /^[a-z]+[a-z0-9]{5,13}$/g;
  // const pwCheckHandle =
  //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/

  //회원가입 핸들
  const onSignUpHandle = () => {
    // if (!userIdHandle.test(join.userId)) {
    //   return alert("아이디 양식에 맞춰주세요")
    // }
    // if (!pwCheckHandle.test(join.pw)) {
    //   return alert("비밀번호 양식에 맞춰주세요")
    // }
    // if (join.pw !== join.pwCheck) {
    //   return alert("비밀번호를 다시 확인해주세요")
    // }
    // if (
    //   join.pw === "" ||
    //   join.pwCheck === "" ||
    //   join.pw === undefined ||
    //   join.accountPwConfirm === undefined
    // ) {
    //   return alert("빈칸을 입력해주세요.")
    // }
    // if (join.userId === "" || join.userId === undefined) {
    //   return alert("빈칸을 입력해주세요.")
    // }

    // if (join.userName === "" || join.userName === undefined) {
    //   return alert("빈칸을 입력해주세요.")
    // }
    const signupInfo = {
      userName: join.userName,
      userId: join.userId,
      pw: join.pw,
      pwCheck: join.pwCheck,
      intro: join.intro,
    }
    dispatch(userSignup(signupInfo))
    toggleBtnHandle()
  }
  // const formData = new FormData()
  // if (imgFile === "") {
  //   formData.append("file", null)
  // } else {
  //   formData.append("file", imgFile)
  // }

  // let obj = {
  //   userName: join.userName,
  //   userId: join.userId,
  //   pw: join.pw,
  //   pwCheck: join.pwCheck,
  //   intro: join.intro,
  // }
  // //console.log(JSON.stringify(obj))
  // formData.append("data", JSON.stringify(obj))
  // dispatch(userSignup(formData))

  // // img
  // const [imageUrl, setImageUrl] = useState(null)
  // const [imgFile, setImgFile] = useState("")
  // const imgRef = useRef()

  // const onChangeImage = () => {
  //   const reader = new FileReader()

  //   const userImg = imgRef.current.files[0]
  //   reader.readAsDataURL(userImg)
  //   reader.onloadend = () => {
  //     setImageUrl(reader.result)
  //     setImgFile(userImg)
  //   }
  // }

  // 토글
  const [toggle, setToggle] = useState(true)

  // 토글 핸들러
  const toggleBtnHandle = () => {
    setToggle(!toggle)
  }

  const handleModal = () => {
    props.setModalOn(false)
  }

  return (
    <>
      <Flex>
        <Left>
          <img
            src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
            alt="welcome"
          />
          <H1>환영합니다!</H1>
        </Left>
        <Right>
          <ExitWrap>
            <button onClick={handleModal}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                tabindex="1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
          </ExitWrap>
          <LoginWrap toggle={toggle}>
            <H2>로그인</H2>
            <H4>아이디로 로그인</H4>
            <VelInput
              name="userId"
              onChange={loginHandle}
              value={login.userId}
              type="text"
              placeholder="아이디를 입력해주세요."
            ></VelInput>
            <br />
            <VelInput
              name="pw"
              onChange={loginHandle}
              value={login.pw}
              type="password"
              placeholder="비밀번호를 입력해주세요."
            ></VelInput>
            <br />
            <VelButton style={{ marginTop: "20px" }} onClick={onLoginHandle}>
              로그인
            </VelButton>
          </LoginWrap>
          <SignupWrap toggle={toggle}>
            <H2>회원가입</H2>
            <H4>아이디로 회원가입</H4>
            <Flex>
              <VelInput
                size="large"
                onChange={joinHandle}
                name="userId"
                value={join.userId || ""}
                type="text"
                placeholder="아이디를 입력해주세요."
              />
              {/* 중복확인 버튼 */}
              <Button
                bg="#12b886"
                margin="5px 0 0 0"
                height="46px"
                width="220px"
                _onClick={userCheckHandle}
              >
                중복확인
              </Button>
            </Flex>
            <Valitext textColor={"#f96854"}>
              {!userIdHandle(join.userId) && join.userId !== ""
                ? "아이디 형식이 올바르지 않습니다."
                : ""}
            </Valitext>
            <VelInput
              size="large"
              onChange={joinHandle}
              style={{ marginTop: "20px" }}
              name="userName"
              value={join.userName || ""}
              type="text"
              placeholder="이름을 입력해주세요."
            />
            <VelInput
              size="large"
              onChange={joinHandle}
              style={{ marginTop: "20px" }}
              name="pw"
              value={join.pw || ""}
              type="password"
              placeholder="비밀번호는 영문 숫자 특수문자 조합으로 8자 이상으로 입력해주세요."
            />
            <Valitext textColor={"#f96854"}>
              {!pwCheckHandle(join.pw) && join.pw !== ""
                ? "비밀번호 형식이 일치하지 않습니다."
                : ""}
            </Valitext>
            <VelInput
              size="large"
              style={{ marginTop: "20px" }}
              onChange={joinHandle}
              name="pwCheck"
              value={join.pwCheck || ""}
              type="password"
              placeholder="비밀번호를 다시 한 번 입력해주세요."
            />
            <Valitext textColor={"#f96854"}>
              {join.pw !== join.pwCheck ? "비밀번호가 일치하지 않습니다." : ""}
            </Valitext>
            {/* <Valitext textColor={"#22B14C"}>
              {/* {join.accountPw !== "" && join.accountPwConfirm !== "" && join.accountPw !== join.accountPwConfirm ? "" : "비밀번호가 일치합니다."} */}
            {/* {join.accountPw === "" && join.accountPwConfirm === "" ?
              "비밀번호를 입력하여 주십시오" : ""} */}
            {/* </Valitext> */}
            <VelInput
              size="large"
              onChange={joinHandle}
              style={{ marginTop: "20px" }}
              name="intro"
              value={join.intro || ""}
              type="text"
              placeholder="한 줄 소개를 입력해주세요"
            />
            {/* <ImgBox>
              <input
                accept="image/*"
                id="imgFile"
                name="imgFile"
                type="file"
                multiple
                onChange={onChangeImage}
                ref={imgRef}
                alt="이미지 선택"
              ></input>
            </ImgBox> */}
            <VelButton style={{ marginTop: "20px" }} onClick={onSignUpHandle}>
              회원가입
            </VelButton>
          </SignupWrap>
          <Div>
            <Span>
              {toggle ? "아직 회원이 아니신가요?" : "이미 가입하셨나요?"}
            </Span>
            <Link onClick={toggleBtnHandle}>
              {toggle ? "회원가입" : "로그인"}
            </Link>
          </Div>
        </Right>
      </Flex>
    </>
  )
}

export default Login

const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const Left = styled.div`
  width: 216px;
  height: 475px;
  padding: 20px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 163px;
    height: 108.36px;
  }
`

const Right = styled.div`
  width: 350px;
  height: 475px;
  padding: 20px;
  background-color: white;
  overflow-x: hidden;
  overflow-y: auto;
`

const ExitWrap = styled.div`
  position: relative;
  left: 280px;
  button {
    width: 30px;
    height: 30px;
    border: 0;
    background-color: transparent;
  }
`

const LoginWrap = styled.div`
  display: ${(props) => (props.toggle ? "block" : "none")};
`
const SignupWrap = styled.div`
  display: ${(props) => (props.toggle ? "none" : "block")};
`

const Valitext = styled.div`
  color: red;
  font-size: 0.8rem;
`

const ImgBox = styled.div`
  width: 200px;
  height: 120px;
  border: 1px solid #eee;
`

const Div = styled.div`
  position: absolute;
  top: 450px;
  left: 10px;
  width: 215px;
  text-align: center;
  margin-right: 45px;
`
