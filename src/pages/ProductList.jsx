import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/photo/mainphoto7.png") center center / cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 20px 0;
  text-align: center;
  font-size: 2.5em;
`;

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterText = styled.span`
  font-size: 1.2em;
  font-weight: 600;
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    border-color: #888;
  }
`;

const Option = styled.option``;

const ProductsGrid = styled.div`
gap: 10px;
flex-wrap: wrap;
  justify-content: space-between;
`;

const Product = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const categoryTitles = {
    all: "Toate produsele",
    lumanari: "Lumânări",
    bijuterii: "Bijuterii",
    ingrijire: "Produse de îngrijire",
  };

  return (
    <Container>
      <Navbar />
      <ContentWrapper>
        <Title>{categoryTitles[cat] || cat}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option>alb</Option>
              <Option>negru</Option>
              <Option>rosu</Option>
              <Option>albastru</Option>
              <Option>galben</Option>
              <Option>verde</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>mic</Option>
              <Option>mediu</Option>
              <Option>mare</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <ProductsGrid>
          <Products cat={cat === "all" ? null : cat} filters={filters} sort={sort} />
        </ProductsGrid>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

export default ProductList;
