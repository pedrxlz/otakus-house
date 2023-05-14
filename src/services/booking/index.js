import { api } from "../api/index.js";

export const createBooking = async (body) => {
  const user = typeof window !== "undefined" && localStorage.getItem("user");
  if (!user) return;
  const userObj = JSON.parse(user);
  const { data } = await api.post(`/api/v1/booking/create`, body, {
    headers: { authorization: userObj?.authToken },
  });

  return data;
};

export const cancelBooking = async ({ id }) => {
  const user = typeof window !== "undefined" && localStorage.getItem("user");
  if (!user) return;
  const userObj = JSON.parse(user);
  const { data } = await api.delete(`/api/v1/booking/cancel-booking?id=${id}`, {
    headers: { authorization: userObj?.authToken },
  });

  return data;
};
