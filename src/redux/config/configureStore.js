import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// import user from './modules/userSlice';

import cmtSlice from '../modules/cmtSlice';
import postSlice from '../modules/postSlice';

const middlewares = [thunk];

// 리듀서 통합
const rootReducer = combineReducers({
  // user,
  // post,
  postSlice,
  cmtSlice,
});

// 스토어 연결
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
