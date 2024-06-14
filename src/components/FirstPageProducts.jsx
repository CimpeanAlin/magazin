import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const PageContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex; 
  flex-direction: column; 
  align-items: center;
  justify-content: center; 
  background-color: #e6ded5;
  margin-top: 10px;
  margin-bottom: 10px;
  
`;

const SectionTitle = styled.h2`
  max-width: 1500px;
  background-color: #c0b2a9;
  font-size: 32px;
  color: #12497d;
  margin-bottom: 10px;
  text-align: left;
`;

const GridContainer = styled.div`
  width: 100%; 
  flex-grow: 1; 
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
`;

const ProductCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProductTitle = styled.p`
  font-size: 16px;
  color: #333333;
  margin-top: 10px;
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FirstPageProducts = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <PageContainer>
      <GridContainer>
        {products.slice(0, 4).map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </GridContainer>
    </PageContainer>
  );
};

export default FirstPageProducts;
