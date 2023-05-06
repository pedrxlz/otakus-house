import { api } from "../api/index.js";

export const register = async (user) => {
  const body = {
    name: user.name,
    email: user.email,
    password: user.password,
    telefone: user.tel,
    address: user.address,
  };

  const { data } = await api.post("/api/v1/auth/register", body);

  return data;
};
