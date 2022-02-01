import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { ImHeart } from "react-icons/im";

function Header() {
  return (
    <div className="header">
      <div className="logo">FLOWERS</div>
      <nav class="navbar">
        <Link to="/">
          {/* <img src="home.png" className="ico" /> */}
          Home
        </Link>
        <Link to="/About">
          {/* <img src="about.png" className="ico" /> */}
          About
        </Link>
        <Link to="/Products">
          {/* <img src="flower-pot.png" className="ico" /> */}
          Products
        </Link>
        <Link to="/Review">
          {/* <img src="bad-review.png" className="ico" /> */}
          Review
        </Link>
        <Link to="/Contact">
          {/* <img src="contact.png" className="ico" /> */}
          Contact
        </Link>
      </nav>
      <div class="icons">
        <Link to="#">
          <ImHeart />
        </Link>
        <Link to="#">
          <FaShoppingCart />
        </Link>
        <Link to="#">
          <FaUser />
        </Link>
      </div>
    </div>
  );
}

export default Header;
