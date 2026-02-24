import api from "../../../lib/axios";

export const cartProduct = async (data) => {
  const res = await api.post(`/cart/add`, data);
  return res.data;
};

export const getCartProducts = async () => {
  const res = await api.get(`/cart`);
  return res.data;
};

export const cartUpdate = async (data) => {
  const res = await api.patch(`/cart/update`, data);
  return res.data;
};

export const cartRemove = async (data) => {
  const res = await api.delete("/cart/remove", {
    data: data,
  });
  return res.data;
};

export const getCartOrder = async () => {
  const res = await api.get(`/order/all`);
  return res.data;
};

