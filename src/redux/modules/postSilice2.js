import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { getCookie } from "../../shared/Cookie"
import Apis from "../../shared/Apis"

const initialState = {
  posts: [],
}
const header = {
  "Content-Type": "application/json",
  Access_Token: getCookie("Access_Token"),
}

export const addPost = createAsyncThunk(
  "contents/insert",
  async (payload, thunkAPI) => {
    Apis.filePostAX(payload)
    try {
      console.log("PostAX response").then((response) => {
        console.log("response", response.data)
        return thunkAPI.fulfillWithValue(payload)
      })
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// //ID로
// export const getDetail = createAsyncThunk(
//   "posts/getDetail", //type
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get(
//         `${process.env.REACT_APP_API_URL}/posts/${payload}`
//       );
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// // );

// // 3가지 조건 Params로 전달
// export const getList = createAsyncThunk(
//   "post/getList", //type
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get(
//         `${process.env.REACT_APP_URL}/api/posts?sort=createdAt&accountTeam=All&tag=All`,
//         {
//           headers: header,
//         }
//       )
//       return thunkAPI.fulfillWithValue(data.data)
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )

// export const deletePost = createAsyncThunk(
//   "post/deletePost", //type
//   async (payload, thunkAPI) => {
//     try {
//       await axios.delete(`${process.env.REACT_APP_URL}/api/posts/${payload}`, {
//         headers: header,
//       })
//       alert("삭제가 완료되었습니다.")
//       const data = await axios.get(
//         `http://54.180.146.88/api/posts?sort=createdAt&accountTeam=All&tag=All`,
//         {
//           headers: header,
//         }
//       )

//       return thunkAPI.fulfillWithValue(payload)
//     } catch (error) {
//       alert(error.response.data.message)
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )

// export const __updateStatus = createAsyncThunk(
//   "todos/updateStatus", //type
//   async (payload, thunkAPI) => {
//     try {
//       await axios.patch(
//         `${process.env.REACT_APP_API_URL_TODOS}/${payload.id}`,
//         payload
//       );
//       const data = await axios.get(`${process.env.REACT_APP_API_URL_TODOS}`);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __updateContent = createAsyncThunk(
//   "todos/updateContent", //type
//   async (payload, thunkAPI) => {
//     try {
//       await axios.patch(
//         `${process.env.REACT_APP_API_URL_TODOS}/${payload.id}`,
//         payload
//       );
//       const data = await axios.get(
//         `${process.env.REACT_APP_API_URL_TODOS}/${payload.id}`
//       );
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const postSlice2 = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: {
    // //-__getTodos-
    // [getList.pending]: (state) => {
    //   state.isLoading = true // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    // },
    // [getList.fulfilled]: (state, action) => {
    //   state.isLoading = false // 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.isSuccess = false
    //   state.posts = action.payload // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    // },
    // [getList.rejected]: (state, action) => {
    //   state.isLoading = false // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.isSuccess = false
    //   state.error = action.payload // catch 된 error 객체를 state.error에 넣습니다.
    // },
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
//     // -__deleteTodo-
//     [deletePost.pending]: (state) => {
//       state.isLoading = true
//     },
//     [deletePost.fulfilled]: (state, action) => {
//       state.isLoading = false
//       console.log(state.posts)
//       console.log(action.payload)
//       state.posts = action.payload.fiter((item) => item.id !== action.payload)
//     },
//     [deletePost.rejected]: (state, action) => {
//       state.isLoading = false
//       state.error = action.payload
//     },
//     // //-__updateStatus-
//     // [__updateStatus.pending]: (state) => {
//     //   state.isLoading = true;
//     // },
//     // [__updateStatus.fulfilled]: (state, action) => {
//     //   state.isLoading = false;
//     //   state.todos = action.payload;
//     // },
//     // [__updateStatus.rejected]: (state, action) => {
//     //   state.isLoading = false;
//     //   state.error = action.payload;
//     // },
//     // //-__updateContent-
//     // [__updateContent.pending]: (state) => {
//     //   state.isLoading = true;
//     // },
//     // [__updateContent.fulfilled]: (state, action) => {
//     //   state.isLoading = false;
//     //   state.todo = action.payload;
//     // },
//     // [__updateContent.rejected]: (state, action) => {
//     //   state.isLoading = false;
//     //   state.error = action.payload;
//     // },
//     // //-getDetail
//     // [getDetail.pending]: (state) => {
//     //   state.isLoading = true;
//     // },
//     // [getDetail.fulfilled]: (state, action) => {
//     //   state.isLoading = false;
//     //   state.posts = action.payload;
//     // },
//     // [getDetail.rejected]: (state, action) => {
//     //   state.isLoading = false;
//     //   state.error = action.payload;
//     // },
//   },
// })

export const {} = postSlice2.actions
export default postSlice2.reducer
