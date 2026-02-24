import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useCartProduct } from "../features/cart/hooks/useCartProduct";
import ShopButton from "../shared/ui/atoms/buttons/ShopButton";
import "./product-card.scss";

const ProductCard = ({ image, name, price, product, cartItem }) => {
  const { isAuth, handleShow } = useContext(AuthContext);

  const { addToCart, updateToCart } = useCartProduct();

  const handleAddToCart = async () => {
    addToCart({ productId: product.id || product._id });
  };

  return (
    <div className="product-card">
      <div className="product-img">
        <Link
          className="text-decoration-none"
          to={`/products/detail/${product.id || product._id}`}
          key={product.id || product._id}
        >
          <img src={image} alt={name} />
        </Link>
      </div>

      <h5 className="product-name">{name}</h5>
      <div className="product-content">
        <h6 className="product-price">Price: ${price}</h6>
        {cartItem ? (
          <div className="cart-counter">
            <button
              className="btn btn-success"
              onClick={() =>
                updateToCart({
                  productId: product.id,
                  quantity: cartItem.quantity - 1,
                })
              }
            >
              -
            </button>
            <span className="p-2">{cartItem.quantity}</span>
            <button
              className="btn btn-success"
              onClick={() =>
                updateToCart({
                  productId: product.id,
                  quantity: cartItem.quantity + 1,
                })
              }
            >
              +
            </button>
          </div>
        ) : (
          <ShopButton
            text="ADD TO CART"
            onClick={() => (isAuth ? handleAddToCart() : handleShow())}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
