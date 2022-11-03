import { configureStore } from "@reduxjs/toolkit"
import user from "../modules/userSlice"
import post from "../modules/postSlice"
import list from "../modules/listSlice"
import cmt from "../modules/cmtSlice"
import posts from "../modules/postSilice2"
import mylist from "../modules/mypageSlice"
import search from "../modules/searchSlice"
import posts from "../modules/postSlice2"

// 스토어 연결
const store = configureStore({
  reducer: {
    // 로그인, 회원가입용
    user,

    // 작성용
    posts,

    //마이페이지
    mylist,

    // 게시글 상세조회, 삭제
    post,

    // 코멘트
    cmt,

    // 검색
    search,

    // 게시글 전체조회
    list,
  },
  //배포 모드일때 리덕스 데브툴 사용 안함
  devTools: process.env.REACT_APP_MOD !== "production",
})

export default store
