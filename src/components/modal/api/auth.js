import api from "../../../lib/axios";

export const login = async (data) => {
  const res = await api.post(`/auth/login`, data);
  return res.data;
};

export const logout = async () => {
  const res = await api.post(`/auth/logout`);
  return res.data;
};
