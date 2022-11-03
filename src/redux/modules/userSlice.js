import { createSlice, current } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import Apis from "../../shared/Apis"
import { setCookie, getCookie, delCookie } from "../../shared/Cookie"
import { useNavigate } from "react-router-dom"

export const userSignin = createAsyncThunk(
  "user/signIn",

  // login : reducer name, 경로 정해줘야
  async (loginInfo, thunkAPI) => {
    try {
      Apis.loginAX(loginInfo)

        .then((response) => {
          if (response.status === 200) {
            console.log(response)
            console.log(response.headers)
            setCookie("Access_Token", response.headers.access_token)
            setCookie("userId", response.data.data.userId)
            setCookie("userName", response.data.data.userName)
            setCookie("userImg", response.data.data.userImgUrl)
            setCookie("intro", response.data.data.intro)
            alert(response.data.msg)

            // window.location.replace("/edit")
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            alert(error.response.data.msg)
          }
        })

      // return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const userCheck = createAsyncThunk(
  "user/check",
  async (payload, thunkAPI) => {
    try {
      Apis.usernameAX(payload).then((response) => {
        console.log("idCheckAX response", response)

        alert(response.data.msg)
        return thunkAPI.fulfillWithValue(payload)
      })
    } catch (error) {
      if (error.response.status === 400) {
        alert(error.response.data.msg)
      }

      return thunkAPI.rejectWithValue(error)
    }
    // type
    // async (payload, thunkAPI) => {
    //   try {
    //     const data = await axios.post(`${process.env.REACT_APP_URL}/auth/check`, {
    //       email: payload,
    //     })
    //     alert(data.data.message)
    //     return thunkAPI.fulfillWithValue(payload)
    //   } catch (error) {
    //     alert(error.response.data.message)
    //     console.log(error)
    //     return thunkAPI.rejectWithValue(error)
    //   }
    // }
  }
)

export const userSignup = createAsyncThunk(
  "user/userSignUp",
  async (signupInfo, thunkAPI) => {
    const postInfo = signupInfo.postInfo
    Apis.signupAX(signupInfo)
    try {
      console
        .log("join")
        .then((response) => {
          console.log("joinAX response", response)
          alert(response.data.msg)
          return thunkAPI.fulfillWithValue(response.data)
        })
        .catch()
    } catch (error) {
      console.log("joinAX error", error)
      alert(error.response.msg)
      return thunkAPI.rejectWithValue(error)
    }
  }
)
// async (payload, thunkAPI) => {
//   try {
//     const data = await axios.post(
//       `${process.env.REACT_APP_URL}/auth/signup`,
//       payload
//     )
//     alert(data.data.message)
//     window.location.replace("/signin")
//     return thunkAPI.fulfillWithValue(data.data)
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error)
//   }
// }

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    modal: false,
  },
  reducers: {
    // //모달 토글
    // modalTogle(state, action) {
    //   state.modal = !state.modal
    // },
    logout: (state) => {
      delCookie("Access_Token")
      delCookie("userId")
      delCookie("userName")
      delCookie("userImg")
      delCookie("intro")

      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
  },

  extraReducers: {
    // 로그인
    [userSignin.pending]: (state) => {
      state.isLoading = true // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [userSignin.fulfilled]: (state, action) => {
      state.isLoading = false // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false
      state.user = action.payload //
    },
    [userSignin.rejected]: (state, action, error) => {
      state.isLoading = false // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false
      state.error = action.payload // catch 된 error 객체를 state.error에 넣습니다.
    },

    // 아이디 중복체크
    [userCheck.pending]: (state) => {
      state.isLoading = true // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [userCheck.fulfilled]: (state, action) => {
      state.isLoading = false // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false
      state.idCheck = action.payload
    },
    [userCheck.rejected]: (state, action) => {
      state.isLoading = false // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false
      state.error = action.payload // catch 된 error 객체를 state.error에 넣습니다.
    },

    // 회원가입
    [userSignup.pending]: (state) => {
      state.isLoading = true // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [userSignup.fulfilled]: (state, action) => {
      state.isLoading = false // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false
      state.user = action.payload //
    },
    [userSignup.rejected]: (state, action) => {
      state.isLoading = false // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false
      state.error = action.payload // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
})

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { modalToggle, logout } = userSlice.actions
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default userSlice.reducer
