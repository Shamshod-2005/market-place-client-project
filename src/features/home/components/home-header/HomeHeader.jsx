import React from "react";
import "./home-header.scss";
import ShopButton from "../../../../shared/ui/atoms/buttons/ShopButton";
import homeImg from "../../../../assets/main-img.png";

const HomeHeader = () => {
  return (
    <div>
      <div className="home-header">
        <div className="home-title">
          <span>WELCOME TO GREENSHOP</span>
          <h1>
            LET'S MAKE A BETTER <span>PLANET</span>
          </h1>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trently plants. Use our plants to create an unique Urban Jungle.
            Prder your favorite plantrs!
          </p>

          <ShopButton text="SHOP NOW" />
        </div>
        <div className="home-img">
          <img src={homeImg} alt="Main Image" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
