import React from 'react'
import { popularProducts } from "./data";
import styled from 'styled-components';
import Product from './Product';

const PageContainer = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 32px;
`;

const SectionTitle = styled.h2`
  max-width: 1400px;
  background-color: #C0B2A9;
  font-size: 32px;
  color: #12497D;
  margin-bottom: 10px;
  
  text-align: left;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

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

const Products = () => {
  return (
    <PageContainer>
      <SectionTitle>Produse recomandate</SectionTitle>
      <GridContainer>
        {popularProducts.map(item => (
          <ProductCard key={item.id}>
            <ProductImage src={item.img} alt={item.title} />
            <ProductTitle>{item.title}</ProductTitle>
          </ProductCard>
        ))}
      </GridContainer>
    </PageContainer>
  );
};

export default Products;