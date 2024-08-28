import { createSlice } from '@reduxjs/toolkit'

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null
  
const userSlice = createSlice({
  name: 'userLogin',
  initialState: {
    userInfo: userInfoFromStorage,
   
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state) => {
      localStorage.removeItem('userInfo');
      state.userInfo = null;
      
    },
  },
 
});

export const { setUserInfo, logout } = userSlice.actions;
export default userSlice.reducer;

