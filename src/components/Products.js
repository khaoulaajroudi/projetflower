import React from "react";
import { useSelector } from "react-redux";
import AddProduit from "./AddProduit";
import CardProduct from "./CardProduct";
import Review from "./Review";

function Products() {
  const Prod = useSelector((state) => state.Products);
  return (
    <div>
      <h1 class="heading">
        {" "}
        <span> Our </span> Products{" "}
      </h1>
      <div className="box-container">
        {Prod.map((el) => (
          <CardProduct produit={el} />
        ))}
        <AddProduit />
      </div>
    </div>
  );
}

export default Products;
