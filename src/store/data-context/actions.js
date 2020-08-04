import { USER_ACTION_TYPES, USER_PATHS } from "../../constants";
import { defaultTheme } from "../../theme/types";
import api from "../../api/data";

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

export const verifyUser = (dispatch) => async ({ receiver }) => {
  dispatch({ type: LOADING });
  try {
    const response = await api.post(`/${VERIFY_USER_PATH}`, { receiver });
    dispatch({ type: VERIFY_USER, payload: response.data });
    // console.log(response.data);
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
    console.log(error.response.data);
  }
  dispatch({ type: NOT_LOADING });
};

export const getBusinessData = (dispatch) => async () => {
  dispatch({ type: LOADING });
  try {
    const response = await api.get(`/${GET_DATA_PATH}`);
    dispatch({ type: GET_DATA, payload: response.data });
    // console.log(response.data);
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
    console.log(error.response.data);
  }
  dispatch({ type: NOT_LOADING });
};

export const getUserTransactions = (dispatch) => async () => {
  dispatch({ type: LOADING });
  try {
    const response = await api.get(`/${GET_TRANSACTIONS_PATH}`);

    dispatch({ type: GET_TRANSACTIONS, payload: response.data });
    // console.log(response.data);
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
    console.log(error.response.data);
  }
  dispatch({ type: NOT_LOADING });
};

export const searchUserTransactions = (dispatch) => async ({
  search,
  date_from,
  date_to,
  size,
  page,
  network,
  payment_method,
  transaction_type,
}) => {
  dispatch({ type: LOADING });
  try {
    const response = await api.get(
      `/${GET_TRANSACTIONS_PATH}?search=${search ? search : ""}&date_from=${
        date_from ? date_from : ""
      }&date_to=${date_to ? date_to : ""}&size=${size ? size : ""}&page=${
        page ? page : ""
      }&network=${network ? network : ""}&payment_method=${
        payment_method ? payment_method : ""
      }&transaction_type=${transaction_type ? transaction_type : ""}`
    );

    dispatch({ type: GET_TRANSACTIONS, payload: response.data });
    // console.log(response.data);
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
    console.log(error.response.data);
  }
  dispatch({ type: NOT_LOADING });
};

export const getUserSubscriptions = (dispatch) => async () => {
  dispatch({ type: LOADING });
  try {
    const response = await api.get(`/${GET_SUBSCRIPTIONS_PATH}`);
    dispatch({ type: GET_SUBSCRIPTIONS, payload: response.data });
    // console.log(response.data);
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
    console.log(error.response.data);
  }
  dispatch({ type: NOT_LOADING });
};

export const searchUserSubscriptions = (dispatch) => async ({
  search,
  date_from,
  date_to,
  size,
  page,
  network,
  payment_method,
  transaction_type,
}) => {
  dispatch({ type: LOADING });
  try {
    const response = await api.get(
      `/${GET_SUBSCRIPTIONS_PATH}?search=${search ? search : ""}&date_from=${
        date_from ? date_from : ""
      }&date_to=${date_to ? date_to : ""}&size=${size ? size : ""}&page=${
        page ? page : ""
      }&network=${network ? network : ""}&payment_method=${
        payment_method ? payment_method : ""
      }&transaction_type=${transaction_type ? transaction_type : ""}`
    );
    dispatch({ type: GET_SUBSCRIPTIONS, payload: response.data });
    // console.log(response.data);
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
    console.log(error.response.data);
  }
  dispatch({ type: NOT_LOADING });
};

export const fundWallet = (dispatch) => async ({ amount }) => {
  dispatch({ type: LOADING });
  try {
    const response = await api.post(`/${FUND_WALLET_PATH}`, { amount });
    dispatch({ type: FUND_WALLET, payload: response.data });
    // console.log(response.data);
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
    console.log(error.response.data);
  }
  dispatch({ type: NOT_LOADING });
};

export const dataPurchase = (dispatch) => async ({
  type,
  source,
  phone_number,
  email,
  plan_id,
  password,
}) => {
  try {
    dispatch({ type: LOADING });
    const response = await api.post(
      `/${
        type === "Wallet" ? WALLET_DATA_PURCHASE_PATH : ATM_DATA_PURCHASE_PATH
      }`,
      {
        source,
        phone_number,
        email,
        plan_id,
        password,
      }
    );
    dispatch({ type: DATA_PURCHASE, payload: response.data });
    console.log(response.data);
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
    console.log(error.response.data);
  }
  dispatch({ type: NOT_LOADING });
};

export const airtimePurchase = (dispatch) => async ({
  type,
  source,
  phone_number,
  email,
  amount,
  network,
  password,
}) => {
  try {
    dispatch({ type: LOADING });
    const response = await api.post(
      `/${
        type === "Wallet"
          ? WALLET_AIRTIME_PURCHASE_PATH
          : ATM_AIRTIME_PURCHASE_PATH
      }`,
      {
        source,
        phone_number,
        email,
        amount,
        network,
        password,
      }
    );
    dispatch({ type: AIRTIME_PURCHASE, payload: response.data });
    console.log(response.data);
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
    console.log(error.response.data);
  }
  dispatch({ type: NOT_LOADING });
};

export const removeData = (dispatch) => async () => {
  dispatch({ type: LOADING });
  try {
    dispatch({ type: REMOVE_DATA });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: NOT_LOADING });
};
