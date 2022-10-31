import { configureStore } from "@reduxjs/toolkit"
import user from "../modules/userSlice"
import post from "../modules/postSlice"
import list from "../modules/listSlice"
import cmt from "../modules/cmtSlice"
import image from "../modules/imageSlice"


const store = configureStore({
  reducer: {
    // home,
    post,
    image,
    // account,
    // cmts,
  },
  //배포 모드일때 리덕스 데브툴 사용 안함
  devTools: process.env.REACT_APP_MOD !== "production",
})

export default store
