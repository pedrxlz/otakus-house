import { api } from "../api/index.js";

export const editUser = async (body, email) => {
  const { data } = await api.put(`/api/v1/user?email=${email}`, body);

  return data;
};
