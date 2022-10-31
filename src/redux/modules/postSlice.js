import { createSlice, current } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import Apis from "../../shared/Apis";
import { getCookie } from "../../shared/Cookie";


//  초기값
const initialState = {
    isLoading: false,
    error: null,
    post: [],
    postDetail : {},
}



// 게시글 작성
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


// 게시글 상세 조회
// export const __getPostDetail = createAsyncThunk(
//     "detail/__getPostDetail",
//     async (postId, thunkAPI) => {
//         try {
//             const response = await instance
//             .get(`/team01/getPost/${postId}`, 
//             {
//                 headers: {
//                   Access_Token: `Bearer ${getCookie("token")}`
//                 }
//             });
//             return thunkAPI.fulfillWithValue(response.data);         
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

export const __getPostDetail = createAsyncThunk(
  "detail/__getPostDetail",
  async (postId, thunkAPI) => {
   
    try { Apis.getDetailAX(postId)
      console.log("getDetailAX response").then((response) => {
        console.log("response", response.data)
        return thunkAPI.fulfillWithValue(response.data)
      })
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 유저 정보 불러오기

// export const __getUserDetail = createAsyncThunk(
//   "detail/__getUserDetail",
//   async (payload, thunkAPI) => {
//     Apis.getDetailAX(postId)
//     try {
//       console.log("getDetailAX response").then((response) => {
//         console.log("response", response.data)
//         return thunkAPI.fulfillWithValue(postId)
//       })
//     } catch (error) {
//       console.log(error)
//       alert(error.response.data.message)
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )


// 게시글 삭제
// export const __deletePost = createAsyncThunk(
//     "datail/__deletePost",
//     async (id, thunkAPI) => {
//         try {
//             const response = await instance
//             .delete(`/team/01/post/${id}`, 
//             {
//               headers: {
//                 Access_Token: `Bearer ${getCookie("token")}`
//               }
//           }

//             );
//             console.log("post delete : ", response.data);
//             return thunkAPI.fulfillWithValue(response.data);
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );
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
      alert(error.response.data.message)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 게시글 수정

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {},
  extraReducers: {
    //  유저 정보 불러오기
    // [__getUserDetail.pending]: (state, action) => {
    //   state.isLoading = true;
    // },
    // [__getUserDetail.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.userDetail = action.payload;
    // },
    // [__getUserDetail.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    // 게시글 상세 조회
    [__getPostDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPostDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.postId.data);
      state.postDetail = action.postId.data;
    },
    [__getPostDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.postId;
    },

    //  게시글 삭제
    [__deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("post delete state post : ", state.post);
      console.log("post delete action. : ", action.id);
      state.post = state.post.filter(
        (postcard) => 
          postcard.id !== action.id.data
        );
        console.log("post delete state post : ", state.post);
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.id;
    },
  }
});


export default postSlice.reducer;

