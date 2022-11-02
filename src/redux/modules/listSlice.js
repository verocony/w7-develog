// 첫 화면에 나오는 포스트 목록들의 모듈 (GET)

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Apis from "../../shared/Apis";

const initialState = {
  list: [
    {
      postId: 0,
      postImg: "",
      postTitle: "",
      countTime: "",
      tag: ["", ""],
      modifiyPost: "",
      countDay: "",
      userImg: "",
      userName: "",
      userLike: true,
      countLike: 0,
      countCmt: 0,
    }
  ],
  isLoading: false,
  error: null,
}

// 게시글 좋아요 수 Sort
export const __getLikeList = createAsyncThunk(
  "team01/getAllPostByLike",
  async (payload, thunkAPI) => {
    try {
      // console.log("getList payload : ", payload)
      const res = await Apis.getPostLikeAX(payload)
      return thunkAPI.fulfillWithValue(res.data);
        
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// 게시글 작성시간 순서 Sort
export const __getTimeList = createAsyncThunk(
  "team01/getAllPostByTime",
  async (payload, thunkAPI) => {
    try {
      // console.log("getList payload : ", payload)
      const res = await Apis.getPostTimeAX(payload)
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: {
    // 게시글 좋아요 수 Sort
    [__getLikeList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getLikeList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      console.log("action.payload", action.payload)
      state.list = action.payload.data;
    },
    [__getLikeList.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 게시글 작성시간 순서 Sort
    [__getTimeList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTimeList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      console.log("action.payload", action.payload)
      state.list = action.payload.data;
    },
    [__getTimeList.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
  },
})

export default listSlice.reducer;