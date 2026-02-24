import "./shop.scss";
import img1 from "../../../assets/shop/img1.png";
import img2 from "../../../assets/shop/img2.png";
import img3 from "../../../assets/shop/img3.png";
import img4 from "../../../assets/shop/img4.png";
import image from "../../../assets/shop/image.png";
import { useProduct } from "../hooks/useProduct";
import ShopButton from "../../../shared/ui/atoms/buttons/ShopButton";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Shop = () => {
  const { data, isLoading, error } = useProduct();
  const product = data?.[0];

  return (
    <div className="shop-page">
    <h1>Shop</h1>
    </div>
  );
};

export default Shop;
