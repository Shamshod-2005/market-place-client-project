import { useMemo } from "react";
import promoImg1 from "../../../../assets/promo-img1.png";
import ProductCard from "../../../../components/ProductCard";
import { useCartProduct } from "../../../cart/hooks/useCartProduct";
import { useProduct } from "../../hooks/useProduct";
import "./shop-product.scss";

const ShopProducts = () => {
  const { data, isLoading, error } = useProduct();
  const { cartProducts } = useCartProduct();

  const products = useMemo(()=>{
     return data?.map((item)=> item)
  },[cartProducts, data])

  return (
    <div>
      <div className="shop-products">
        <h1>Products</h1>

        <div className="products">
          {products?.map((product) => {
            // 🔑 Product cartda bor yoki yo‘q tekshirish
            const cartItem = cartProducts?.find(
              (item) =>
                item.product.id === product.id
            );

            return (
              <ProductCard
                key={product.id || product._id}
                image={promoImg1}
                name={product.name}
                price={product.price}
                description={product.description}
                product={product}
                cartItem={cartItem} // 👈 counter chiqarish uchun
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
