import { useQuery } from "@tanstack/react-query";
import { getproductById } from "../api/shop.api";

export const useProduct = () => {
  return useQuery({
    queryKey: ["Products"],
    queryFn: getproductById,
  });
};
