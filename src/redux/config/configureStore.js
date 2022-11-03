import { configureStore } from "@reduxjs/toolkit"
import user from "../modules/userSlice"
import post from "../modules/postSlice"
import list from "../modules/listSlice"
import cmt from "../modules/cmtSlice"
import posts from "../modules/postSilice2"
import mylist from "../modules/mypageSlice"

// ksjf

const store = configureStore({
  reducer: {
    user,
    post,
    list,
    cmt,
    posts,
    mylist,
  },
  //배포 모드일때 리덕스 데브툴 사용 안함
  devTools: process.env.REACT_APP_MOD !== "production",
})

export default store
