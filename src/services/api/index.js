import axios from "axios";
import { parseCookies } from "nookies";

export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

const cookies = parseCookies();

api.interceptors.request.use((config) => {
  const authToken = cookies?.authToken;

  if (authToken) {
    config.headers.authorization = authToken;
  }

  return config;
});
