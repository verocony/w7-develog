// 민지
import { createSlice, current } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { createAction } from "redux-actions";
import Apis from "../../shared/Apis";
import { getCookie } from "../../shared/Cookie";

// const EDIT_POST = "EDIT_POST";

// const editPost = createAction(EDIT_POST, (postId, post) => ({
//   postId,
//   post
// }));

//  초기값
const initialState = {
    isLoading: false,
    error: null,
    post: [],
    postDetail : {},
    // heartCount: null,
    // heartPush: null,
}

// const initialPost = {
//   postId : 1,
//   postImg : "",
//   postTitle : "",
//   postContent : "",
//   tag: [],
//   countTime : "",
//   modifiyPost : "",
//   countDay : "",
//   userImg : "",
//   userName : "",
//  countLike : 12,
//   countCmt : 0,
// };

// 게시글 불러오기


// 게시글 작성
// export const addPost = createAsyncThunk(
//   "contents/insert",
//   async (payload, thunkAPI) => {
//     Apis.filePostAX(payload)
//     try {
//       console.log("PostAX response").then((response) => {
//         console.log("response", response.data)
//         return thunkAPI.fulfillWithValue(payload)
//       })
//     } catch (error) {
//       console.log(error)
//       alert(error.response.data.message)
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )

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
    } 
    catch (error) {
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
// const __editPost = (postId = null, post = {}) => {
//   const Token = getCookie('Access_Token')

//   const _post = {
//     ...initialPost,
//     contents: post.contents,
//     imageUrl: post.file,
//   };

//   return async function (dispatch, getState, { history }) {
//     const form = new FormData();
//     form.append("file", post.file);
//     form.append(
//       "requestDto",
//       new Blob([JSON.stringify({ contents: post.contents })], {
//         type: "application/json",
//       })
//     );

//     await axios({
//       method: "put",
//       url: `http://13.124.136.171/api/posts/modify/${postId}`,
//       data: form,
//       headers: {
//         "Content-Type": "multipart/form-data",
//         Authorization: `${token}`,
//       },
//     })
//       .then((response) => {
//         console.log(response, "게시글 수정 성공");
//         dispatch(editPost(_post));
//         history.replace("/postList");
//       })
//       .catch((err) => {
//         console.log(err, "수정 실패");
//       });
//   };
// };


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

// import { createAction, handleActions } from "redux-actions";
// import { produce } from "immer";
// import Apis from "../../shared/Apis";

// // import axios from "axios"
// const GET_POST = "SET_POST";
// const ADD_POST = "ADD_POST";
// const EDIT_POST = "EDIT_POST";
// const DELETE_POST = "DELETE_POST";

// const getPost = createAction(GET_POST, (postList) => ({
//   postList,
// }));
// const addPost = createAction(ADD_POST, (post) => ({
//   post,
// }));
// const editPost = createAction(EDIT_POST, (post, postId) => ({
//   post,
//   postId,
// }));
// const deletePost = createAction(DELETE_POST, (postId) => ({
//   postId,
// }));

// const initialState = {
//   list: [],
// };

// const getPostDB = (category) => {
//   return function (dispatch, getState, { history }) {
//     if (category) {
//       Apis.getPostAX(`/post?category=${category}`)
//         .then((response) => {
//           console.log("44444444", response.data);
//           dispatch(getPost(response.data.posts));
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     } else {
//      Apis.getPostAX("/post")
//         .then((response) => {
//           dispatch(getPost(response.data.posts));
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   };
// };


// const getOnePostDB = (postId) => {
//   return function (dispatch, getState, { history }) {
//     Apis.getDetailAX(postId)
//       .then((response) => {
//         dispatch(getPost([response.data.post]));
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
// };

// const addPostDB = (post) => {
//   return function (dispatch, getState, { history }) {
//     Apis.filePostAX
//       .then((response) => {
//         dispatch(addPost(post));
//         history.push("/");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
// };

// const editPostDB = (post, postId) => {
//   return function (dispatch, getState, { history }) {
//     Apis.putPostAX
//       .then((response) => {
//         dispatch(editPost(post, postId));
//         history.push("/");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
// };

// const removePostDB = (postId) => {
//   return function (dispatch, getState, { history }) {
//     Apis.deletePostAX
//       .then((response) => {
//         dispatch(deletePost(postId));
//         history.push("/");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
// };

// export default handleActions(
//   {
//     [GET_POST]: (state, action) =>
//       produce(state, (draft) => {
//         draft.list = action.payload.postList;
//       }),
//     [ADD_POST]: (state, action) =>
//       produce(state, (draft) => {
//         draft.list.unshift(action.payload.post);
//       }),
//     [EDIT_POST]: (state, action) =>
//       produce(state, (draft) => {
//         let idx = draft.list.findIndex(
//           (e) => e.postId === action.payload.postId
//         );
//         draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
//       }),

//     [DELETE_POST]: (state, action) =>
//       produce(state, (draft) => {
//         console.log('delete_post');
//         draft.list = draft.list.filter(
//           (e) => e.postId !== action.payload.postId
//         );
//       }),
//   },
//   initialState
// );

// const actionCreators = {
//   getPost,
//   editPost,
//   getOnePostDB,
//   getPostDB,
//   addPostDB,
//   removePostDB,
//   editPostDB,
// };
// export { actionCreators };



// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {} = postSlice.actions
// reducer 는 configStore에 등록하기 위해 export default 합니다.

