import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  max-width: 1300px;
  height: 90px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  background-color: #12497D;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
margin-left: 50px;
  font-size: 24px;
  color: #8B5E34;  
  font-weight: 500;
  text-decoration: none;
  font-family: 'Great Vibes', cursive;  
  letter-spacing: 1.5px;  
  transition: color 0.3s ease;  

  &:hover {
    color: #6D4C41;  
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 50px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  color: #12497D;
  &:focus {
    outline: none;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  color: #C0B2A9;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <Logo>Hand-Made Boutique</Logo>
          </NavLink>
        </Left>
        <Right>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search />
          </SearchContainer>
          <MenuItem>
            <NavLink to="/register" style={{ textDecoration: 'none', color: '#C0B2A9' }}>Register</NavLink>
          </MenuItem>
  
          <MenuItem>
            <NavLink to="/login" style={{ textDecoration: 'none', color: '#C0B2A9' }}>Login</NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink to="/register" style={{ textDecoration: 'none', color: '#C0B2A9' }}>Blog</NavLink>
          </MenuItem>

          <MenuItem>

            <NavLink to="/cart" style={{ textDecoration: 'none', color: '#C0B2A9' }}>
              <Badge badgeContent={4} color="primary">

            <NavLink to="/cart" style={{ textDecoration: 'none', color: '#C0B2A9' }}>
              <Badge badgeContent={quantity} color="primary">

                <ShoppingCartOutlined />
              </Badge>
            </NavLink>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
