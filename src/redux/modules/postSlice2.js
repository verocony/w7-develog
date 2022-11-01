import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { getCookie } from "../../shared/Cookie"
import Apis from "../../shared/Apis"

const initialState = {
  posts: [],
}
// const header = {
//   "Content-Type": "application/json",
//   Access_Token: getCookie("Access_Token"),
// }

export const addPost = createAsyncThunk(
  "contents/insert",
  async (postInfo, thunkAPI) => {
    try {
      Apis.postFileAX(postInfo).then((response) => {
        console.log("response", response.data)
        alert(response.data.msg)
        return thunkAPI.fulfillWithValue(postInfo)
      })
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const postSlice2 = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: {
    //-addPost-
    [addPost.pending]: (state) => {
      state.isLoading = true
    },
    [addPost.fulfilled]: (state, action) => {
      state.isLoading = false
      state.posts = [...state.post, { ...action.payload }]
    },
    [addPost.rejected]: (state, action) => {
      state.error = action.payload
      state.isLoading = false
      state.isSuccess = false
    },
  },
})

export const {} = postSlice2.actions
export default postSlice2.reducer
