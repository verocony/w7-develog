import { configureStore } from "@reduxjs/toolkit"
import user from "../modules/userSlice"
import posts from "../modules/postSlice"
import list from "../modules/listSlice"
import cmt from "../modules/cmtSlice"
import search from "../modules/searchSlice"

const store = configureStore({
  reducer: {
    user,
    posts,
    list,
    cmt,
    search,
  },
  //배포 모드일때 리덕스 데브툴 사용 안함
  devTools: process.env.REACT_APP_MOD !== "production",
})

export default store
