import React, { useState } from "react";
export default function Form(props) {
  const [enteredProduct, setEnteredProduct] = useState("");
  const [enteredPhotoLink, setPhotoLink] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");

  const productChangeHandler = (e) => {
    setEnteredProduct(e.target.value);
    console.log(enteredProduct);
  };
  const photoChangeHandler = (e) => {
    setPhotoLink(e.target.value);
    console.log(enteredPhotoLink);
  };
  const priceChangeHandler = (e) => {
    setEnteredPrice(e.target.value);
    console.log(enteredPrice);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      productName: enteredProduct,
      photo: enteredPhotoLink,
      price: enteredPrice,
      sold: false,
      id: props.size.length + 1,
    };
    console.log(newProduct);
    props.onAddProduct(newProduct);
    setEnteredProduct("");
    setPhotoLink("");
    setEnteredPrice("");
  };
  return (
    <form
      onSubmit={submitHandler}
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="card">
        <div className="card-body" style={{ width: "18rem" }}>
          <h1 className="text-header"> Add a Product</h1>
          <label className="form-label" name="productName">
            Product Name:
          </label>
          <input
            onChange={productChangeHandler}
            className="form-control "
            value={enteredProduct}
            type="text"
          ></input>
          <label className="form-label" name="photoLink">
            Photo link:
          </label>
          <input
            onChange={photoChangeHandler}
            className="form-control "
            value={enteredPhotoLink}
            type="text"
          ></input>
          <label className="form-label" name="price">
            Price:
          </label>
          <input
            onChange={priceChangeHandler}
            value={enteredPrice}
            className="form-control "
            type="text"
          ></input>
        </div>
        <button className="btn btn-secondary">Add</button>
      </div>
    </form>
  );
}
