import { createSlice } from "@reduxjs/toolkit"
import Apis from "../../shared/Apis"
import { createAsyncThunk } from "@reduxjs/toolkit"
// 초기값
const initialState = {
  isLoading: false,
  error: null,
  comment: {},
}
// 댓글 등록
export const __createComment = createAsyncThunk(
  "detail/__createComment",
  async (id, thunkAPI) => {
    try {
      Apis.postCmtAX(id)
      console.log("postCmt response").then((response) => {
        console.log("response", response.data)
        return thunkAPI.fulfillWithValue(id)
      })
    } catch (error) {
      console.log(error)
      alert(error.response.data.comment)
      return thunkAPI.rejectWithValue(error)
    }
  }
)
// 댓글 get
// export const __getComment = createAsynkThunk(
//   "detail/__getComment",
//   async (payload, thunkAPI) => {
//     try {
//       Apis.postCmtAX(payload)    ** 다시 확인
//       console.log("postCmt response").then((response) => {
//         console.log("response", response.data)
//         return thunkAPI.fulfillWithValue(payload)
//       })
//     } catch (error) {
//       console.log(error)
//       alert(error.response.data.comment)
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// );
// 댓글 삭제
export const __deleteComment = createAsyncThunk(
  "detail/__deleteComment",
  async (id, thunkAPI) => {
    try {
      Apis.deleteCmtAX(id)
      console.log("deleteCmt response").then((response) => {
        console.log("response", response.data)
        return thunkAPI.fulfillWithValue(id)
      })
    } catch (error) {
      console.log(error)
      alert(error.response.data)
      return thunkAPI.rejectWithValue(error)
    }
  }
)
const cmtSlice = createSlice({
  name: "cmt",
  initialState,
  reducers: {},
  extraReducers: {
    // //  댓글 get  ** 다시 확인
    // [__getComment.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__getComment.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.comment = {...action.payload.data};
    // },
    // [__getComment.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // :: 댓글 등록
    [__createComment.pending]: (state) => {
      state.isLoading = true
    },
    [__createComment.fulfilled]: (state, action) => {
      state.isLoading = false
      console.log("댓글 등록1 : ", state.comment)
      console.log("댓글 등록2 : ", action.payload)
      state.comment.responseDto.push(action.payload.data)
      state.comment.commentcount += 1
      console.log("댓글 등록3 : ", state.comment)
    },
    [__createComment.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // :: 댓글 삭제
    [__deleteComment.pending]: (state) => {
      state.isLoading = true
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false
      console.log("댓글 삭제 : ", state.comment.responseDto)
      console.log("댓글 삭제 : ", action.payload.data)
      state.comment.responseDto = state.comment.responseDto.filter(
        (commentCard) => commentCard.commentId !== action.payload.data
      )
      state.comment.commentcount -= 1
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})
export default cmtSlice.reducer
