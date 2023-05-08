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

export const logout = async ({ authorization }) => {
  const { data } = await api.get("/api/v1/auth/logout", {
    headers: {
      authorization: authorization,
    },
  });

  return data;
};

export const findAccount = async (str) => {
  let key = "";
  if (str.includes("@")) key = "email";
  else key = "telefone";
  const body = {
    [key]: str,
  };

  const { data } = await api.put(`/api/v1/auth/forget-password`, body);

  return data;
};

export const resetPassword = async (newPassword, authToken) => {
  const body = {
    password: newPassword,
  };

  const { data } = await api.put(`/api/v1/auth/reset-password`, body, {
    headers: {
      "Skip-Interceptor": true,
      authorization: authToken,
    },
  });

  return data;
};
