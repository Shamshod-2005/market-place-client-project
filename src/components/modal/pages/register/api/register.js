import api from "../../../../../lib/axios";

export const register = async (data) => {
  const res = await api.post(`/auth/register`, data);
  return res.data;
};