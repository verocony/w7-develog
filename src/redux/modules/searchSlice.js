import { createSlice, current } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import Apis from "../../shared/Apis"

const initialState = {
  search: [
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
    },
  ],
  isLoading: false,
  error: null,
}

export const getSearch = createAsyncThunk(
  "team01/getSearch",
  async (keyword, thunkAPI) => {
    try {
      const res = await Apis.getSearchAX(keyword)
      return thunkAPI.fulfillWithValue(res.data)
    } catch (error) {
      alert(error.response.data.msg)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: {
    [getSearch.pending]: (state) => {
      state.isLoading = true
    },
    [getSearch.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      console.log("action.payload", action.payload)
      state.search = action.payload.data
    },
    [getSearch.rejected]: (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.error = action.payload
    },
  },
})

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {} = searchSlice.actions
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default searchSlice.reducer
