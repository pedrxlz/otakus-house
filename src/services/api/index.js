import axios from "axios";

export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });
export const rooms = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ROOMS_API_URL,
});
