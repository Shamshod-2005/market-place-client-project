import React from "react";
import "./promo-section.scss";
import promoImg1 from "../../../../assets/promo-img1.png";
import promoImg2 from "../../../../assets/promo-img2.png";
import ShopButton from "../../../../shared/ui/atoms/buttons/ShopButton";
import { FaArrowRightLong } from "react-icons/fa6";

const PromoSection = () => {
  return (
    <div>
      <div className="promo-section">
        <div className="promo-card">
          <div className="promo-img">
            <img src={promoImg1} alt="Promo Image 1" />
          </div>
          <div className="promo-content">
            <h5>
              SUMMER CACTUS <br /> & SUCCULENTS
            </h5>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <ShopButton text="Find More  " icon={<FaArrowRightLong />} />
          </div>
        </div>
        <div className="promo-card">
          <div className="promo-img">
            <img src={promoImg2} alt="Promo Image 1" />
          </div>
          <div className="promo-content">
            <h5>
              SUMMER CACTUS <br /> & SUCCULENTS
            </h5>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <ShopButton text="Find More  " icon={<FaArrowRightLong />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
