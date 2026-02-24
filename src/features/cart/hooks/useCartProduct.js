import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { get } from "lodash";
import {
  cartProduct,
  cartUpdate,
  getCartProducts,
  cartRemove,
} from "../api/shopping.cart.js";

export const useCartProduct = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: getCartProducts,
    staleTime: 0,
    gcTime: 0,
  });

  const { mutate: addToCart, isPending } = useMutation({
    mutationFn: (data) => {
      cartProduct(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  //--------------------------------------------------------------------------
  const { mutate: updateToCart } = useMutation({
    mutationFn: (data) => {
      // alert(JSON.stringify(data));
      cartUpdate(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      refetch();
    },
  });
  //-------------------------------------------------------------------------
  const { mutate: removeToCart } = useMutation({
    mutationFn: (data) => cartRemove(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      refetch();
    },
  });

  return {
    cartProducts: get(data, "cartItems", []),
    isLoading,
    error,
    addToCart,
    isPending,
    updateToCart,
    removeToCart,
  };
};
