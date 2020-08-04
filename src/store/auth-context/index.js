import createDataContext from "../index";
import { USER_ACTION_TYPES } from "../../constants";
import {
  editUser,
  forgotPassword,
  getUser,
  resetPassword,
  signin,
  signout,
  signup,
  tryLocalSignin,
} from "./actions";

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

const userReducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: true };
    case NOT_LOADING:
      return { ...state, isLoading: false };
    case ERROR:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
      };
    case SIGNIN_USER:
      return {
        ...state,
        isSignedIn: true,
        isLoading: false,
        message: action.payload.message,
        token: action.payload.token,
        status: action.payload.status,
        user: action.payload.data,
      };
    case SIGNUP_USER:
      return {
        ...state,
        isSignedIn: true,
        isLoading: false,
        message: action.payload.message,
        token: action.payload.token,
        status: action.payload.status,
        user: action.payload.data,
      };
    case SIGNOUT_USER:
      return {
        ...state,
        isSignedIn: false,
        message: "",
        status: "",
        token: null,
        user: {},
      };
    case GET_USER:
      return {
        ...state,
        isSignedIn: true,
        message: action.payload.message,
        status: action.payload.status,
        user: action.payload.data,
      };
    case EDIT_USER:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        user: action.payload.data,
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        user: {},
      };
    case RESET_PASSWORD:
      return {
        ...state,
        message: action.payload.message,
        token: action.payload.token,
        status: action.payload.status,
        user: action.payload.data,
      };
    default:
      return state;
  }
};

export const { Provider, Context } = createDataContext(
  userReducer,
  {
    signup,
    signin,
    signout,
    getUser,
    editUser,
    tryLocalSignin,
    forgotPassword,
    resetPassword,
  },
  {
    message: "",
    isLoading: false,
    isSignedIn: false,
    status: "",
    token: null,
    user: {},
  }
);
