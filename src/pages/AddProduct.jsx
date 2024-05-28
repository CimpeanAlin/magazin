import React, { useState } from "react";
import { userRequest } from "../requestMethods";

const InsertProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    img: "",
    categories: "",
    size: "",
    color: "",
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userRequest.post("/products/", product);
      alert("Product added successfully!");
    } catch (err) {
      console.error(err);
      alert("Error adding product!");
    }
  };

  return (
    <div>
      <h2>Insert Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="desc"
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="categories"
          placeholder="Categories (comma separated)"
          onChange={handleChange}
        />
        <input
          type="text"
          name="size"
          placeholder="Size"
          onChange={handleChange}
        />
        <input
          type="text"
          name="color"
          placeholder="Color"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default InsertProduct;
