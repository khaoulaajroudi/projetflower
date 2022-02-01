import React from "react";
import { FiHeart } from "react-icons/fi";
import { FaShare } from "react-icons/fa";
import Review from "./Review";

function CardProduct({ produit }) {
  const pricedisc = () => {
    produit.pricei = produit.Price - (produit.Price * produit.discount) / 100;
  };
  return (
    <div>
      <div className="boxshop">
        <span className="discount">{produit.discount}% </span>
        <div className="image">
          <img src={produit.Image} />

          <div className="icox">
            <a href="#">
              <FiHeart />
            </a>
            <a href="#" class="cart-btn">
              add to cart
            </a>
            <a href="#">
              <FaShare />
            </a>
          </div>
        </div>
        <div class="contents">
          <h3>{produit.Name}</h3>
          <div class="price">
            {produit.pricei}dt
            {pricedisc()}
            <span>{produit.Price}dt</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
