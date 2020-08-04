import createDataContext from "../index";
import { defaultTheme } from "../../theme/types";
import { USER_ACTION_TYPES, USER_PATHS } from "../../constants";
import {
  airtimePurchase,
  dataPurchase,
  fundWallet,
  getBusinessData,
  getUserSubscriptions,
  getUserTransactions,
  removeData,
  searchUserSubscriptions,
  searchUserTransactions,
  verifyUser,
} from "./actions";

const {
  GET_DATA,
  GET_TRANSACTIONS,
  GET_SUBSCRIPTIONS,
  LOADING,
  NOT_LOADING,
  FUND_WALLET,
  DATA_PURCHASE,
  AIRTIME_PURCHASE,
  VERIFY_USER,
  REMOVE_DATA,
  ERROR,
} = USER_ACTION_TYPES;

const {
  GET_DATA_PATH,
  GET_TRANSACTIONS_PATH,
  GET_SUBSCRIPTIONS_PATH,
  FUND_WALLET_PATH,
  ATM_DATA_PURCHASE_PATH,
  WALLET_DATA_PURCHASE_PATH,
  ATM_AIRTIME_PURCHASE_PATH,
  WALLET_AIRTIME_PURCHASE_PATH,
  VERIFY_USER_PATH,
} = USER_PATHS;

const dataReducer = (state, action) => {
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
    case VERIFY_USER:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        verifyUserData: action.payload.data,
      };
    case GET_DATA:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        businessData: action.payload.data,
        theme: {
          primary: action.payload.data.business.primary_color,
          secondary: action.payload.data.business.secondary_color,
        },
      };
    case GET_TRANSACTIONS:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        transactionsData: action.payload.data,
      };
    case GET_SUBSCRIPTIONS:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        subscriptionsData: action.payload.data,
      };
    case FUND_WALLET:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        paymentData: action.payload.data,
      };
    case DATA_PURCHASE:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        paymentData: action.payload.data,
      };
    case AIRTIME_PURCHASE:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        paymentData: action.payload.data,
      };
    case REMOVE_DATA:
      return {
        ...state,
        message: "",
        status: "",
        businessData: {},
        paymentData: {},
        transactionsData: {},
        subscriptionsData: {},
        verifyUserData: {},
        theme: defaultTheme,
      };
    default:
      return state;
  }
};

export const { Provider, Context } = createDataContext(
  dataReducer,
  {
    verifyUser,
    getBusinessData,
    getUserTransactions,
    searchUserTransactions,
    getUserSubscriptions,
    searchUserSubscriptions,
    fundWallet,
    dataPurchase,
    airtimePurchase,
    removeData,
  },
  {
    message: "",
    isLoading: false,
    status: "",
    businessData: {},
    paymentData: {},
    transactionsData: {},
    subscriptionsData: {},
    verifyUserData: {},
    theme: defaultTheme,
  }
);
