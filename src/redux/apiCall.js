import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { registerFailure, registerStart, registerSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods.js";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, userData) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", userData);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};