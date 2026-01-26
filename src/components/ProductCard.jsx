import ShopButton from "../shared/ui/atoms/buttons/ShopButton";
import "./product-card.scss";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={image} alt={name} />
      </div>

      <h5 className="product-name">{name}</h5>
      <div className="product-content">
        <h6 className="product-price">Price: ${price}</h6>
        <ShopButton text="ADD TO CART" />
      </div>
    </div>
  );
};

export default ProductCard;
