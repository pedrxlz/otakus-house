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

export const login = async (user) => {
  const body = {
    email: user.email,
    password: user.password,
  };

  const { data } = await api.post("/api/v1/auth/login", body);

  return data;
};

export const logout = async () => {
  const { data } = await api.get("/api/v1/auth/logout");

  return data;
};
