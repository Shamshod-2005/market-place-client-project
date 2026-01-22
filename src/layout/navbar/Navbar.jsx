import React from "react";
import "./Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiLoginBoxLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar-content ">
      <div className="navbar-logo ">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/054/475/262/small_2x/eco-green-leaf-icon-bio-nature-green-eco-symbol-for-web-and-business-png.png"
          alt="Green Shop Logo"
        />

        <h6>GREENSHOP</h6>
      </div>
      <div className="navbar-links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/plant-care">Plant Care</NavLink>
      </div>
      <div className="navbar-login">
        <IoSearch size={25} />
        <HiOutlineShoppingCart size={25} />
        <div className="login-link">
          <RiLoginBoxLine color="#ffffff" size={20} />
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
