import { api } from "../api/index.js";

export const createBooking = async (body) => {
  const user = localStorage.getItem("user");
  if (!user) return;
  const userObj = JSON.parse(user);
  const { data } = await api.post(`/api/v1/booking/create`, body, {
    headers: { authorization: userObj?.authToken },
  });

  return data;
};
