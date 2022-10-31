import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import GlobalLayout from "./GlobalLayout"
import styled from "styled-components"
import detailHeaderLogo from "../assets/detailHeaderLogo.png"
import { BsFillSunFill, BsSearch } from "react-icons/bs"
import { IoMdArrowDropdown } from "react-icons/io"
import Portal from "../UserModal/Portal"
import Modal from "../UserModal/Modal"
import { useDispatch } from "react-redux"
import { logout } from "../../redux/modules/userSlice"

const GlobalHeader = ({
  userDetail,
  userToken,
  isLogin,
  setIsLogIn,
  isToggle,
  setIsToggle,
}) => {
  const [modalOn, setModalOn] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    userToken === null ? setIsLogIn(false) : setIsLogIn(true)
  }, [])

  // 모달 상태 변경
  const handleModal = () => {
    setModalOn(!modalOn)
  }

  const onLogOut = (event) => {
    event.stopPropagation()
    event.preventDefault()
    alert("로그아웃 하시겠습니까?")
    dispatch(logout())
    window.location.reload()
  }

  const profile = localStorage.getItem("user-profile")

  console.log("detail header 로그인 여부 확인 :::", isLogin)

  // ::: 유저 메뉴
  const onClickProfileMenu = () => {
    setIsToggle(!isToggle)
  }
  console.log("detail header 토글 여부 확인 :::", isToggle)
  return (
    <StGlobalHeaderWrap>
      {/* <GlobalLayout> */}
      <StHeaderContentBox>
        <h1>
          <Link to={`/`}>
            <img src={detailHeaderLogo} alt="logo" />
          </Link>
          <strong>{userDetail.account} .log</strong>
        </h1>
        <StHeaderRightWrap>
          <StLightDarkBox>
            <BsFillSunFill size="24" color="var(--title-color)" />
          </StLightDarkBox>
          <StSearchBox>
            <BsSearch size="18" color="var(--title-color)" />
          </StSearchBox>
          {userToken === null ? (
            <StLoginOffMenu>
              <button className="login" onClick={handleModal}>
                로그인
              </button>
              <Portal>{modalOn && <Modal onClose={handleModal} />}</Portal>
            </StLoginOffMenu>
          ) : (
            <StLoginOnMenu>
              <Link to={`/post`}>
                <button className="buttonNewPost">새 글 작성</button>
              </Link>
              <StProfileBox>
                <p onClick={onClickProfileMenu}>
                  {/* 로그인한 유저 정보 받아와야함. 주형님 머지하고 받아올 예정 */}
                  <img src={profile} alt="user profile image" />
                </p>
                <IoMdArrowDropdown />
                <StDropDownBox isToggle={isToggle} onClick={onLogOut}>
                  <li>로그아웃</li>
                </StDropDownBox>
              </StProfileBox>
            </StLoginOnMenu>
          )}
        </StHeaderRightWrap>
      </StHeaderContentBox>
      {/* </GlobalLayout> */}
    </StGlobalHeaderWrap>
  )
}

export default GlobalHeader

const StGlobalHeaderWrap = styled.div`
  width: 100%;
  height: 4rem;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
`

const StHeaderContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 img {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 1rem;
  }
  h1 strong {
    font-size: 1.3125rem;
    font-weight: 700;
    color: var(--title-color);
  }
`

const StHeaderRightWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;

  .buttonNewPost {
    margin-right: 1.25rem;
    height: 2.2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    outline: none;
    font-weight: bold;
    word-break: keep-all;
    border: 1px solid var(--title-color);
    color: var(--title-color);
    background-color: var(--subBg-color);
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
  }
  .buttonNewPost:hover {
    color: var(--bg-color);
    background-color: var(--title-color);
  }

  .login {
    margin-right: 1.25rem;
    height: 2.2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    outline: none;
    font-weight: bold;
    word-break: keep-all;
    border: 1px solid var(--title-color);
    color: var(--bg-color);
    background-color: var(--title-color);
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
  }
  .login:hover {
    color: var(--title-color);
    background-color: var(--bg-color);
  }

  .loginOn {
    display: flex;
    flex-direction: row;
  }
`

const StLoginOffMenu = styled.div`
  /* overflow: hidden; */
`
const StLoginOnMenu = styled.div`
  /* display: flex; */
  flex-direction: row;
  display: flex;
`

const StLightDarkBox = styled.div`
  padding: 1px 6px;
  margin-right: 0.25rem;
`

const StSearchBox = styled.div`
  margin: 0 0.7rem;
`

const StProfileBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: var(--bg-color);
    object-fit: cover;
    margin-right: 0.25rem;
    overflow: hidden;
  }
  svg {
    color: var(--subText-color);
    font-size: 1.5rem;
    margin-right: -0.4375rem;
    transition: all 0.125s ease-in 0s;
  }
  img {
    width: 100%;
    height: 100%;
  }
`

const StDropDownBox = styled.ul`
  position: absolute;
  background-color: var(--bg-color);
  display: ${({ isToggle }) => (isToggle ? "block" : "none")};
  top: 47px;
  right: 0;
  width: 120px;
  padding: 0 0.5rem;
  transition: 0.5ms;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
  overflow: hidden;

  li {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-weight: 700;
    color: var(--title-color);
    border-top: 1px solid var(--subGray-color);
  }
  li:first-child {
    border-top: 0px;
  }
`
