import React, { useState } from "react";
import "./footer.scss";
import footerImg from "../../assets/footerImg1.png";
import footerImg2 from "../../assets/footerImg2.png";
import paypal from "../../assets/paypal.png";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/master-card.png";
import americanExpress from "../../assets/american-express.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const fetchCategories = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/category`,
    );
    return data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const categories = data?.categories || data || [];

  return (
    <footer className="footer-content">
      <div className="footer-top-services">
        <div className="personal-information">
          <div className="information-card">
            <img src={footerImg} alt="" />
            <h5>Garden Care</h5>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trently plants.
            </p>
          </div>
          <div className="line"></div>
          <div className="information-card">
            <img src={footerImg2} alt="" />
            <h5>Garden Care</h5>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trently plants.
            </p>
          </div>
          <div className="line"></div>
          <div className="information-card">
            <img src={footerImg2} alt="" />
            <h5>Garden Care</h5>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trently plants.
            </p>
          </div>
        </div>
        <div className="newsletters">
          <h5>Would you like to newsletters</h5>
          <div className="newsletters-input">
            <input type="text" placeholder="Your email address" />
            <button>Join</button>
          </div>
          <p>
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>

      <div className="footer-location">
        <div className="footer-logo">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/054/475/262/small_2x/eco-green-leaf-icon-bio-nature-green-eco-symbol-for-web-and-business-png.png"
            alt="Green Shop Logo"
          />

          <h6>GREENSHOP</h6>
        </div>
        <div className="location">
          <IoLocationOutline size={20} color="rgb(70, 163, 88)" />
          <span>
            70 West Buckingham Ave. <br /> Farmingdale, NY 11735
          </span>
        </div>
        <div className="email">
          <MdAlternateEmail size={20} color="rgb(70, 163, 88)" />
          <span>contact@greenhouse.com</span>
        </div>
        <div className="telephone">
          <FiPhoneCall size={20} color="rgb(70, 163, 88)" />
          <span>+88 01911 717 490</span>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-links-left">
          <div className="my-account">
            <h5>My Account</h5>
            <ul>
              <li>
                <a href="/#">My Account</a>
              </li>
              <li>
                <a href="/#">Our Stories</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">Career</a>
              </li>
              <li>
                <a href="">Specials</a>
              </li>
            </ul>
          </div>
          <div className="help-guide">
            <div className="my-account">
              <h5>My Account</h5>
              <ul>
                <li>
                  <a href="/#">My Account</a>
                </li>
                <li>
                  <a href="/#">Our Stories</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
                <li>
                  <a href="">Career</a>
                </li>
                <li>
                  <a href="">Specials</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="categories">
            <h5>Categories</h5>
            <ul>
              {!isLoading &&
                !isError &&
                categories.map((category) => (
                  <li>
                    <a key={category.id} href="">
                      {category.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="footer-links-right">
          <div className="social-media">
            <h5>Social Media</h5>
            <div className="connections">
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaLinkedinIn />
              </a>
              <a href="">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="payments">
            <h5>We accept</h5>
            <div className="accept">
              <img src={paypal} alt="PayPal" />
              <img src={visa} alt="Visa" />
              <img src={mastercard} alt="Mastercard" />
              <img src={americanExpress} alt="American Express" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-part">
        <p>© 2024 GreenShop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
