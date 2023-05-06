import axios from "axios";
import { parseCookies } from "nookies";

export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

const cookies = parseCookies();

api.interceptors.request.use((config) => {
  if (!!cookies?.user) {
    const user = JSON.parse(cookies.user);

    config.headers.authorization = user?.authToken;
  }

  return config;
});
