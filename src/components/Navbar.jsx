import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  margin: 0 auto;
  height: 180px;
  display: flex;
  padding: 12px 24px;
  align-item: space-between;
  background-color: #12497Dff;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:630px;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: right;
  margin-left: 50px;
  padding: 5px;

`;

const Input = styled.input`
  border: none;
  color: #C0B2A9ff;
`;


const Logo = styled.div`
margin left:25px;
text-decoration:none;
  font-size:36px;
  color:#C0B2A9ff;
  font-weight: 700;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  align-items: right;
  color: #C0B2A9ff;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <NavLink to="/">
            <Logo>Hand-Made Boutique</Logo>
            </NavLink>
        </Left>
       
        <Right>
        <SearchContainer>
            <Input></Input>
            <Search></Search>
          </SearchContainer>
          <MenuItem>
            <NavLink to="/register">Register</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/login">Login</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/cart">
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
