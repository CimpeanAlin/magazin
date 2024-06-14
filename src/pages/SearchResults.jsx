import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 100vw;
  height: 150vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/photo/mainphoto7.png") center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const Title = styled.h1`
  margin: 20px;
  
`;

const ProductsContainer = styled.div`
  width: 84%;
  margin-top: 30px;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  
`;

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const products = location.state?.products || [];

  return (
    <Container>
      <Navbar />
      <Title>Search Results for "{query}"</Title>
      <ProductsContainer>
        {products.map((item) => (
          <Product item={item} key={item._id} />
        ))}
      </ProductsContainer>
      <Footer />
    </Container>
  );
};

export default SearchResults;
