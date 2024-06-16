import React, { useState } from "react";
import { userRequest } from "../requestMethods";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Message = styled.p`
  text-align: center;
  margin-bottom: 20px;
  color: green;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

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

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userRequest.post("/products/", product);
      setMessage("Product added successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Error adding product!");
    }
  };

  return (
    <Container>
      <Title>Insert Product</Title>
      {message && <Message>{message}</Message>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="desc">Description</Label>
          <Input
            type="text"
            id="desc"
            name="desc"
            placeholder="Description"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="img">Image URL</Label>
          <Input
            type="text"
            id="img"
            name="img"
            placeholder="Image URL"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="categories">Categories</Label>
          <Input
            type="text"
            id="categories"
            name="categories"
            placeholder="Categories (comma separated)"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="size">Size</Label>
          <Input
            type="text"
            id="size"
            name="size"
            placeholder="Size"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="color">Color</Label>
          <Input
            type="text"
            id="color"
            name="color"
            placeholder="Color"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="price">Price</Label>
          <Input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit">Add Product</Button>
      </Form>
    </Container>
  );
};

export default InsertProduct;
