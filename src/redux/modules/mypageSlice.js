// 마이페이지 GET PUT 모듈 (intro랑 userImg 쿠키에서 가져오고, 사용자들의 게시글은 GET으로 받아온다)

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Apis from "../../shared/Apis";

export const __getMyPage = createAsyncThunk(
  "team01/getMyPage",
  async (userId, thunkAPI) => {
    console.log("userId getMyPage", userId)
    try {
      const res = await Apis.getMyPageAX(userId)
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const __updateIntro = createAsyncThunk(
  "team01/myPage/intro",
  async (payload, thunkAPI) => {
    try {
      const res = await Apis.postMyPageAX(payload)
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 이미지 수정 다시 확인하고 수정해야 한다
export const __updateImg = createAsyncThunk(
  "team01/mypage/userImg",
  async (payload, thunkAPI) => {
    try {
      const res = await Apis.postMyImgAX(payload)
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  mylist: 
    {
    postId: "",
    postImg: "",
    postTitle: "",
    postCount: "",
    postTime: "",
    modifyPost: null,
    userImg: "",
    userName: "",
    countLike: 0,
    countCmt: 0,
    },
}

export const mypageSlice = createSlice({
  name: "mylist",
  initialState,
  reducers: {
    // clearUser: (state) => {
    //   state.mylist.mylist = "";
    // },
  },
  extraReducers: {
    [__getMyPage.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      console.log("action.payload - mypage", action.payload)
      state.mylist = action.payload;
    },
    [__getMyPage.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    [__updateIntro.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateIntro.fulfilled]: (state, action) => {
      const target = state.mylist.data.findIndex(
        (data) => data.postId === action.payload.postId
      );
      state.isLoading = false;
      state.mylist.data.splice(target, 1, action.payload);
    },
    [__updateIntro.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 이미지 수정 다시 확인하고 수정해야 한다
    [__updateImg.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateImg.fulfilled]: (state, action) => {
      const target = state.mylist.data.findIndex(
        (data) => data.postImg === action.payload.postImg
      );
      state.isLoading = false;
      state.userId.data.splice(target, 1, action.payload);
    },
    [__updateImg.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

export const { clearUser } = mypageSlice.actions;
export default mypageSlice.reducer;