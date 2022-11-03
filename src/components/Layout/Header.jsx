// 민지
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { getCookie } from "../../shared/Cookie"
import Modal from "../modal/Modal.js"
import Portal from "../modal/Portal.js"
import { logout } from "../../redux/modules/userSlice"

const Header = () => {
  const data = useSelector((state) => state.list.list)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onClickNewPost = () => {
    navigate("/edit")
  }

  const goHome = () => {
    navigate("/")
  }

  const askLogOut = (event) => {
    event.stopPropagation()
    if (window.confirm("로그아웃 하시겠습니까?")) {
      dispatch(logout())
    } else {
    }
  }

  const [modalOn, setModalOn] = useState(false)
  const handleModal = () => {
    setModalOn(true)
  }
  const userId = getCookie("userId")
  const userImg = getCookie("userImg")
  console.log(userId, userImg)
  const goSearch = () => {
    navigate("/search")
  }
  const goMy = () => {
    navigate(`/mypage`)
  }
  return (
    <>
      <HeaderLine>
        <Logo onClick={goHome} className="logo">
          develog
        </Logo>

        <Icons>
          {/* 라이트/다크모드 svg */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" />
          </svg>

          {/* 검색 svg */}
          <div
            style={{ cursor: "pointer", marginTop: "5px" }}
            onClick={goSearch}
          >
            <svg width="17" height="17" viewBox="0 0 17 17">
              <path
                fillRule="evenodd"
                d="M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z"
                clipRule="evenodd"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <HBtn2 onClick={onClickNewPost}>새 글 작성</HBtn2>
          {getCookie("userId") !== "undefined" &&
          getCookie("userId") !== undefined ? (
            <Div>
              <HBtn onClick={askLogOut}>
                {/* <button id="modal-potal" onClick={() => navigate("/login")}> */}
                로그아웃
              </HBtn>
              {/* 프로필 사진과 드롭다운 메뉴 */}
              <div onClick={goMy} className="profile">
                <img
                  style={{
                    marginLeft: "15px",
                    width: "40px",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                  alt="thumbnail"
                  src={userImg}
                />
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ margin: "0 5px 7px 5px" }}
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>
            </Div>
          ) : (
            <Div>
              <HBtn onClick={handleModal}>로그인</HBtn>
            </Div>
          )}
        </Icons>
      </HeaderLine>
      <Portal>{modalOn && <Modal setModalOn={setModalOn} />}</Portal>
    </>
  )
}

export default Header

const HeaderLine = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 64px;

  box-shadow: 0px 0px 4px #eee;
  color: #212529;
  font-size: 16px;
  text-align: start;
  line-height: normal;
  letter-spacing: normal;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
`

const Logo = styled.div`
  /* font-family: "Fira Mono", monospace; */
  font-size: 18px;
  text-align: center;
  letter-spacing: normal;
  color: #212529;
  margin-left: 30px;
  cursor: pointer;
`

const Icons = styled.div`
  /* background-color: aquamarine; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  width: 800px;
  gap: 15px;
`
const HBtn = styled.div`
  text-align: center;
  line-height: 2.3;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  border: 1px solid #212529;
  outline: none;
  font-weight: bold;
  background: #212529;
  color: white;
  transition: all 0.125s ease-in 0s;
  margin-top: 5px;
  cursor: pointer;
  margin-right: 20px;
`
const HBtn2 = styled.div`
  line-height: 2.3;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  border: 1px solid #212529;
  outline: none;
  font-weight: bold;
  word-break: keep-all;
  background: white;
  color: #212529;
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
`
const Div = styled.div`
  display: flex;
`
