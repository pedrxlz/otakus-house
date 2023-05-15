import { api } from "../api/index.js";

export const editUser = async (body, email) => {
  const user = typeof window !== "undefined" && localStorage.getItem("user");
  if (!user) return;
  const userObj = JSON.parse(user);
  const { data } = await api.put(`/api/v1/user?email=${email}`, body, {
    headers: { authorization: userObj?.authToken },
  });

  return data;
};
