// userRedux.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.success = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.success = true;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
    },
    registerStart: (state) => {
      state.isFetching = true;
      state.success = false;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.success = true;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registerStart,
  registerSuccess,
  registerFailure,
} = userSlice.actions;
export default userSlice.reducer;
