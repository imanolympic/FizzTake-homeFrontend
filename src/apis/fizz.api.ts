import axios from "axios";

const fizzApiClient = axios.create({
  baseURL: process.env.REACT_APP_FIZZ_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTransactionsRequest = () => fizzApiClient.get("transactions");

export const refundTransactionRequest = (_id: string, changes: any) =>
  fizzApiClient.patch("transactions", { _id, ...changes });

export const addTransactionRequest = (
  title: string,
  type: string,
  amount: number
) => fizzApiClient.post("transactions", { title, type, amount });

export const addRepaymentRequest = () => fizzApiClient.post("repayments");

export const getRepaymentsRequest = () => fizzApiClient.get("repayments");

export const getSpendinglimitRequest = () =>
  fizzApiClient.get("spendinglimits");
