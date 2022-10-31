// 민지
import { createSlice, current } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { setCookie } from "../../shared/Cookie"

const initialState = {
  user: [],
  isLoading: false,
  error: null,
}

export const 함수명 = createAsyncThunk()

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {},
})

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {} = postSlice.actions
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default postSlice.reducer