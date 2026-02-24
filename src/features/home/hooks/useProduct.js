import {  useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/home.api";

export const useProduct = () => {
  return useQuery({
  queryKey:["Products"],
  queryFn: getProducts,
  });
};
