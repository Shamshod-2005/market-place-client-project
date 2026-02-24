import api from "../../../lib/axios";

export const getproductById = async (id) => {
  const res = await api.get(`/product/${id}`);
  return res.data;
};
