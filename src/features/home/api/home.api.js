import api from "../../../lib/axios";

export const getProducts = async () => {
  const res = await api.get(`/product`);
  return res.data;
};