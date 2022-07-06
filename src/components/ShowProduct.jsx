import React from "react";
import Product from "./Product";
import "./ShowProduct.css";

export default function ShowProduct(props) {
  return (
    <div className="container">
      {props.products.map((item, i) => {
        return (
          <Product
            index={i}
            key={i}
            handleSold={props.handleSold}
            handleDelete={props.handleDelete}
            product={item}
          />
        );
      })}
    </div>
  );
}
