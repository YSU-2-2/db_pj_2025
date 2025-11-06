import { createSlice } from '@reduxjs/toolkit';
import reducer from './authSlice';

const initialState = {
  id : '',
  pw : '',
  loading: false,
  error: null,
};


const signupSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
      //회원가입 정보 저장
      userInfo:(state, action)=>{
          state.id = action.payload.id;
          state.pw = action.payload.pw;
      },
      //에러메시지 저장
      signupFail:(state, action)=>{
          state.error = action.payload;
      }
  }
})

export const {userInfo, signupFail} = signupSlice.actions;
export default signupSlice.reducer;