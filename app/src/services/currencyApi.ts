import { ConversationRequestParams, ConversationResponse } from '@/models/currency';
import axios from 'axios';

const KEY = '43bdd2c47cb82eda969d85a0';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${KEY}/`;

const apiClient = axios.create({
  baseURL: BASE_URL,
});

const getConversation = async ({ from, to, amount }: ConversationRequestParams) => {
  const resp = await apiClient<ConversationResponse>(`pair/${from}/${to}/${amount}`);
  return resp.data;
};

export const currencyApi = { getConversation };
