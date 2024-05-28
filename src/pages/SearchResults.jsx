import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
