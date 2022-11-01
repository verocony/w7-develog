import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import useInput from "../../hooks/useInput"
import {
  userSignin,
  userSignup,
  userCheck,
} from "../../redux/modules/userSlice"

const Login = () => {
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
  }

  //아이디 중복 체크
  const userCheckHandle = () => {
    const obj = {
      // idCheckDto: {
      userId: join.userId,
      // },
    }
    // dispatch(__loginCheck({ accountName: join.email }, { url: `/auth/idCheck` }))
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

  return (
    <>
      <Flex>
        <Left></Left>
        <Right>
          <LoginWrap toggle={toggle}>
            <h1>로그인</h1>
            <h3>아이디로 로그인</h3>
            <input
              name="userId"
              onChange={loginHandle}
              value={login.userId}
              type="text"
              placeholder="아이디를 입력해주세요."
            ></input>
            <br />
            <input
              name="pw"
              onChange={loginHandle}
              value={login.pw}
              type="password"
              placeholder="비밀번호를 입력해주세요."
            ></input>
            <br />
            <button style={{ marginTop: "20px" }} onClick={onLoginHandle}>
              로그인
            </button>
          </LoginWrap>
          <SignupWrap toggle={toggle}>
            <h1>회원가입</h1>
            <h3>아이디로 회원가입</h3>
            <input
              size="large"
              onChange={joinHandle}
              name="userId"
              value={join.userId || ""}
              type="text"
              placeholder="아이디를 입력해주세요."
            />
            {/* 중복확인 버튼 */}
            <button onClick={userCheckHandle}>중복확인</button>
            <Valitext textColor={"#f96854"}>
              {!userIdHandle(join.userId) && join.userId !== ""
                ? "아이디 형식이 올바르지 않습니다."
                : ""}
            </Valitext>
            <input
              size="large"
              onChange={joinHandle}
              style={{ marginTop: "20px" }}
              name="userName"
              value={join.userName || ""}
              type="text"
              placeholder="이름을 입력해주세요."
            />
            <input
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
            <input
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
            <input
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
            <button
              style={{ marginTop: "20px", borderRadius: "50px" }}
              onClick={onSignUpHandle}
            >
              회원가입
            </button>
          </SignupWrap>
          <button
            style={{
              marginTop: "10px",
              borderRadius: "50px",
              backgroundColor: "#425F57",
            }}
            color="reverse"
            onClick={toggleBtnHandle}
          >
            {toggle ? "회원가입" : "로그인"}
          </button>
        </Right>
      </Flex>
    </>
  )
}

export default Login

const Flex = styled.div`
  display: flex;
`

const Left = styled.div`
  width: 50%;
`

const Right = styled.div``

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
