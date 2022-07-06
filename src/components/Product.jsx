import React from "react";

export default function Product({ product, handleDelete, handleSold, index }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        style={{ height: "200px" }}
        src={product.photo}
        alt="Card"
      />
      <div className="card-body">
        <h5 className="card-title">{product.productName}</h5>
        <p className="card-text">{product.price}€</p>
        <p className="card-text">Sold? {product.sold ? "Yes" : "No"}</p>
        <button className="btn btn-danger" onClick={() => handleDelete(index)}>
          Delete
        </button>
        <button className="btn btn-success" onClick={() => handleSold(index)}>
          Sold
        </button>
      </div>
    </div>
  );
}
