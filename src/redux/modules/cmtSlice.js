import { createSlice, current} from "@reduxjs/toolkit";
import Apis from "../../shared/Apis";
import { createAsyncThunk } from "@reduxjs/toolkit";


// 초기값
const initialState = {
  isLoading: false,
  error: null,
  comment: {},
}

// 댓글 등록
export const __createComment = createAsyncThunk(
  "detail/__createComment",
  async (payload, thunkAPI) => {
    
    try {
      Apis.postCmtAX(payload)
      console.log("postCmt response")
      // .then((response) => {
      //   console.log("response", response.data)
        return thunkAPI.fulfillWithValue(payload)
      // })
    } catch (error) {
      console.log(error)
      alert(error.response.data.comment)
      return thunkAPI.rejectWithValue(error)
    }
  }
);


// 댓글 삭제

export const __deleteComment = createAsyncThunk(
  "detail/__deleteComment",
  async (id, thunkAPI) => {
    console.log('아이디 ===> ',id)
    try {
      Apis.deleteCmtAX(id)
      .then((response) => {
      console.log("response", response.data)
        
        // return thunkAPI.fulfillWithValue(id)
      })
      return thunkAPI.fulfillWithValue(id)
    } catch (error) {
      console.log(error)
      alert(error.response.data)
      return thunkAPI.rejectWithValue(error)
    }
  }
);


const cmtSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {

    // 댓글 등록
    [__createComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__createComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(state.comment)
      console.log(action.id)
      state.comment.response.push(action.id.data);
      // state.comment.commentcount += 1;
    },
    [__createComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.id;
    },


    // 댓글 삭제
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log('삭제 :', action.payload)

      // state.comment= state.comment.filter(
      //   (commentCard) => 
      //     commentCard.id !== action.payload
        
      //   ); 

      console.log('94번 ====> ' ,current(state.comment))

      state.comment = state.comment.splice(action.payload, 1)

       
      // state.comment.commentcount -= 1;
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.id;
    },

  }
});


export default cmtSlice.reducer;