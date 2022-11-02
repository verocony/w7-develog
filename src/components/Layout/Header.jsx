import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./Header.css"
import { getCookie } from "../../shared/Cookie";

const Header = () => {
  const navigate = useNavigate();

  const onClickNewPost = () => {
    navigate("/post");
  };

  const userId = getCookie("userId");
  console.log("cookie", userId);

  return (
    <HeaderLine>
      <Logo
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        develog
      </Logo>

      <Icons>
        {/* 라이트/다크모드 svg */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" />
        </svg>

        {/* 검색 svg */}
        <svg width="17" height="17" viewBox="0 0 17 17">
          <path
            fillRule="evenodd"
            d="M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z"
            clipRule="evenodd"
            fill="currentColor"
          ></path>
        </svg>

        <HeaderBtn onClick={onClickNewPost} className="header-btn">
          새 글 작성
        </HeaderBtn>

        {/* 프로필 사진과 드롭다운 메뉴 */}
        <div
          className="profile"
          onClick={() => {
            navigate(`/getMyPage?id=${getCookie("userId")}`);
          }}
        >
          <UserImg src={`${getCookie("userImg")}`} alt="thumbnail" />
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
      </Icons>
    </HeaderLine>
  );
};

export default Header;

const HeaderLine = styled.div`
  width: 90%;
  max-width: 1376px;
  height: 64px;

  background-color: #f8f9fa;
  color: #212529;
  font-size: 16px;
  text-align: start;
  line-height: normal;
  letter-spacing: normal;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto 24px;
`;

const Logo = styled.div`
  font-family: "Fira Mono", monospace;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  letter-spacing: normal;
  color: #212529;
  margin-left: 30px;

  &:hover {
    cursor: pointer;
  }
`;

const Icons = styled.div`
  /* background-color: aquamarine; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;

  gap: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const HeaderBtn = styled.button`
  background-color: #f8f9fa;
  width: 109px;
  height: 32px;

  font-size: 16px;
  font-weight: 600;
  text-align: center;
  line-height: normal;
  letter-spacing: normal;

  color: #212529;
  border: 3px solid #212529;
  box-shadow: none;
  border-radius: 16px;

  &:hover {
    cursor: pointer;
    background-color: #212529;
    color: #f8f9fa;
  }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`