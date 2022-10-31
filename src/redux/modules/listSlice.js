import { createSlice, current } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import apis from "../../shared/Apis"
import { setCookie } from "../../shared/Cookie"

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

export const __getList = createAsyncThunk(
  "team01/getAllPost",
  async (payload, thunkAPI) => {
    try {
      // console.log("getList payload : ", payload)
      const res = await apis.getPostAX(payload)
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
    [__getList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      console.log("action.payload", action.payload)
      state.list = action.payload.data;
    },
    [__getList.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    }
  },
})

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { } = listSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default listSlice.reducer;