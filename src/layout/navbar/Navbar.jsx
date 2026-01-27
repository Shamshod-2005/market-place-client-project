import React, { useState } from "react";
import "./Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiLoginBoxLine } from "react-icons/ri";
import AuthModal from "../../components/modal/AuthModal";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleOpenModal = () => setShowAuthModal(true);
  const handleCloseModal = () => setShowAuthModal(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="navbar-content ">
        <div className="navbar-logo ">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/054/475/262/small_2x/eco-green-leaf-icon-bio-nature-green-eco-symbol-for-web-and-business-png.png"
            alt="Green Shop Logo"
          />

          <h6>GREENSHOP</h6>
        </div>

        <div className="navbar-links">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Shop
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Blog
          </NavLink>
          <NavLink
            to="/plant-care"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Plant Care
          </NavLink>
        </div>

        <div className="navbar-login">
          <IoSearch size={25} />
          <HiOutlineShoppingCart size={25} />
          <div className="login-link">
            {/* <RiLoginBoxLine color="#ffffff" size={20} /> */}
            {/* <NavLink to="/login">Login</NavLink> */}
            <AuthModal show={showAuthModal} handleClose={handleCloseModal} />
          </div>
        </div>
      </div>

      <div className="navbar-content-responsive">
        <div className="navbar-logo ">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/054/475/262/small_2x/eco-green-leaf-icon-bio-nature-green-eco-symbol-for-web-and-business-png.png"
            alt="Green Shop Logo"
          />

          <h6>GREENSHOP</h6>
        </div>
        <div className="link-button">
          <Button variant="success" onClick={handleShow} className="d-flex">
            <RxHamburgerMenu />
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>GREENSHOP</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="mobile-menu d-flex flex-column gap-3 ">
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/home"
                onClick={handleClose}
              >
                Home
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/shop"
                onClick={handleClose}
              >
                Shop
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/blog"
                onClick={handleClose}
              >
                Blog
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/plant-care"
                onClick={handleClose}
              >
                Plant Care
              </NavLink>
              <div className="">
                <AuthModal
                  show={showAuthModal}
                  handleClose={handleCloseModal}
                />
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
};

export default Navbar;
