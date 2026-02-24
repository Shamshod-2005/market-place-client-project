import { useQuery } from "@tanstack/react-query";
import { getproductById } from "../api/detail.api";

export const useDetail = (id) => {
  return useQuery({
    queryKey: ["Products", id],
    queryFn: () => getproductById(id),
    enabled: !!id,
  });
};
