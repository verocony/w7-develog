import { createSlice, current } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { createAction } from "redux-actions"
import Apis from "../../shared/Apis"
import { useNavigate } from "react-router-dom"
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
      return thunkAPI.fulfillWithValue(response.data.data)
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

// 게시글 수정

export const __updatePost = createAsyncThunk(
  "detail/__updatePost",
  async (payload, thunkAPI) => {
    console.log(payload)

    try {
      const response = await Apis.putPostAX(payload)

      // const navigate = useNavigate();
      // navigate(`/post/${response.data.id}`, {replace: true})

      console.log(response, "게시글 수정 성공")
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      console.log(error, "수정 실패")
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
      state.post = action.payload
    },
    [__getPostDetail.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.postId
    },

    //  게시글 좋아요
    // [__updatePostHeart.pending]: (state, action) => {
    //   state.isLoading = true;
    // },
    // [__updatePostHeart.fulfilled]: (state, action) => {
    //   state.isLoading = false;

    //   state.heartPush === true ? state.heartPush = false : state.heartPush = true;
    //   state.heartCount = action.payload.data;
    //   console.log(action.payload);
    //   console.log(state.heartPush);
    //   console.log(state.heartCount);
    // },
    // [__updatePostHeart.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    // 게시글 수정
    [__updatePost.pending]: (state) => {
      state.isLoading = true
    },
    [__updatePost.fulfilled]: (state, action) => {
      state.isLoading = false
      console.log(action.id)
      state.post = action.payload
    },
    [__updatePost.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.postId
    },

    //  게시글 삭제
    [__deletePost.pending]: (state) => {
      state.isLoading = true
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false
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
