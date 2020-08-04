import AsyncStorage from "@react-native-community/async-storage";
import * as RootNavigation from "../../RootNavigation";
import api from "../../api/data";
import { USER_ACTION_TYPES, USER_PATHS } from "../../constants";

const {
  SIGNIN_USER,
  SIGNOUT_USER,
  SIGNUP_USER,
  LOADING,
  NOT_LOADING,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  EDIT_USER,
  GET_USER,
  ERROR,
} = USER_ACTION_TYPES;

const {
  SIGNIN_PATH,
  SIGNOUT_PATH,
  SIGNUP_PATH,
  FORGOT_PASSWORD_PATH,
  RESET_PASSWORD_PATH,
} = USER_PATHS;

export const signup = (dispatch) => async ({
  name,
  email,
  phone_number,
  password,
}) => {
  dispatch({ type: LOADING });
  try {
    const response = await api.post(`/${SIGNUP_PATH}`, {
      name,
      email,
      phone_number,
      password,
    });
    await AsyncStorage.setItem("@token", response.data.token);
    dispatch({ type: SIGNUP_USER, payload: response.data });
    // console.log(response.data);
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
    console.log(error.response.data);
  }
  dispatch({ type: NOT_LOADING });
};

export const signin = (dispatch) => async ({ identifier, password }) => {
  dispatch({ type: LOADING });
  try {
    const response = await api.post(`/${SIGNIN_PATH}`, {
      identifier,
      password,
    });
    await AsyncStorage.setItem("@token", response.data.token);
    dispatch({ type: SIGNIN_USER, payload: response.data });
    RootNavigation.navigate("HomeScreen");
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
    console.log(error.response.data);
  }
  dispatch({ type: NOT_LOADING });
};

export const signout = (dispatch) => async () => {
  dispatch({ type: LOADING });
  try {
    await AsyncStorage.removeItem("@token");
    await AsyncStorage.removeItem("@color");
    dispatch({ type: SIGNOUT_USER });
    RootNavigation.navigate("LoginScreen");
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
    console.log(error.response.data);
  }
  dispatch({ type: NOT_LOADING });
};

export const getUser = (dispatch) => async () => {
  dispatch({ type: LOADING });
  try {
    const response = await api.get("");
    dispatch({ type: GET_USER, payload: response.data });
    console.log(response.data.data);
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
    console.log(error.response.data);
  }
  dispatch({ type: NOT_LOADING });
};

export const editUser = (dispatch) => async ({
  firstname,
  othername,
  lastname,
  email,
  phone_number,
  password,
  cpassword,
}) => {
  dispatch({ type: LOADING });
  try {
    const response = await api.patch("", {
      firstname,
      lastname,
      othername,
      email,
      phone_number,
      password,
      cpassword,
    });

    dispatch({ type: EDIT_USER, payload: response.data });
    // console.log(response);
    RootNavigation.navigate("ProfileScreen");
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
    console.log(error.response.data);
  }
  dispatch({ type: NOT_LOADING });
};

export const tryLocalSignin = (dispatch) => async () => {
  dispatch({ type: LOADING });
  try {
    const response = await api.get("");
    dispatch({ type: GET_USER, payload: response.data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
    console.log(error.response.data);
  }
  dispatch({ type: NOT_LOADING });
};

export const forgotPassword = (dispatch) => async ({ identifier }) => {
  dispatch({ type: LOADING });
  try {
    const response = await api.post(`/${FORGOT_PASSWORD_PATH}`, { identifier });
    dispatch({ type: FORGOT_PASSWORD, payload: response.data });
    // console.log(response);
    RootNavigation.navigate("ResetPasswordScreen");
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
    console.log(error.response.data);
  }
  dispatch({ type: NOT_LOADING });
};

export const resetPassword = (dispatch) => async ({
  identifier,
  token,
  password,
}) => {
  dispatch({ type: LOADING });
  try {
    const response = await api.post(`/${RESET_PASSWORD_PATH}`, {
      identifier,
      token,
      password,
    });
    dispatch({ type: RESET_PASSWORD, payload: response.data });
    // console.log(response);
    RootNavigation.navigate("LoginScreen");
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
    console.log(error.response.data);
  }
  dispatch({ type: NOT_LOADING });
};
