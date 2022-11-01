import { createSlice, current } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { createAction } from "redux-actions"
import Apis from "../../shared/Apis"
import { getCookie } from "../../shared/Cookie"

//  초기값
const initialState = {
  isLoading: false,
  error: null,
  post: [],
  postDetail: {},
}

// 게시글 상세 조회
export const __getPostDetail = createAsyncThunk(
  "detail/__getPostDetail",
  async (postId, thunkAPI) => {
    try {
      const response = await Apis.getDetailAX(postId)
      console.log("getDetailAX response")
      // .then((response) => {
      //   console.log("response", response.data)
      return thunkAPI.fulfillWithValue(response.data)
      // })
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 게시글 삭제
export const __deletePost = createAsyncThunk(
  "detail/__deletePost",
  async (id, thunkAPI) => {
    Apis.deletePostAX(id)
    try {
      console.log("deletePostAX response").then((response) => {
        console.log("response", response.data)
        return thunkAPI.fulfillWithValue(id)
      })
    } catch (error) {
      console.log(error)
      alert(error.response.data.msg)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    // 게시글 상세 조회
    [__getPostDetail.pending]: (state) => {
      state.isLoading = true
    },
    [__getPostDetail.fulfilled]: (state, action) => {
      state.isLoading = false
      console.log(action.postId.data)
      state.postDetail = action.postId.data
    },
    [__getPostDetail.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.postId
    },

    //  게시글 삭제
    [__deletePost.pending]: (state) => {
      state.isLoading = true
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false
      console.log("post delete state post : ", state.post)
      console.log("post delete action. : ", action.id)
      state.post = state.post.filter(
        (postcard) => postcard.id !== action.id.data
      )
      console.log("post delete state post : ", state.post)
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.id
    },
  },
})

export default postSlice.reducer
