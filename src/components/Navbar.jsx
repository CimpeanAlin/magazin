import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  width:100vw;
  max-width: 1300px;
  height: 90px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  background-color: #12497d;
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
  color: #8b5e34;
  font-weight: 500;
  text-decoration: none;
  font-family: "Great Vibes", cursive;
  letter-spacing: 1.5px;
  transition: color 0.3s ease;

  &:hover {
    color: #6d4c41;
  }
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
  color: #12497d;
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
  color: #c0b2a9;
`;

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      try {
        const res = await publicRequest.get(
          `/products/search?q=${searchQuery}`
        );
        navigate(`/search?q=${searchQuery}`, { state: { products: res.data } });
      } catch (err) {
        console.error(err);
      }
    }
  };


  const NavImage = styled.img`
  width: 120%;
  max-width: 210px;
  padding: 20px;
  height: auto;
  border-radius: 38px;
  margin-left: 24px;
  @media (max-width: 768px) {
    max-width: 200px;
    margin: 0 auto;
  }
`;

  return (
    <Container>
      <Wrapper>
        <Left>
          <NavLink to="/" style={{ textDecoration: "none" }}>
          <NavImage src="/photo/logo.png" />
           
          </NavLink>
        </Left>
        <Right>
          <SearchContainer>
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
            <Search />
          </SearchContainer>
          {!user ? (
            <>
              <MenuItem>
                <NavLink
                  to="/register"
                  style={{ textDecoration: "none", color: "#c0b2a9" }}
                >
                  Register
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none", color: "#c0b2a9" }}
                >
                  Login
                </NavLink>
              </MenuItem>
            </>
          ) : (
            <MenuItem>
              <NavLink
                to={`/dashboard/${user._id}`}
                style={{ textDecoration: "none", color: "#c0b2a9" }}
              >
                Dashboard
              </NavLink>
            </MenuItem>
          )}
          <MenuItem>
            <NavLink
              to="/blog"
              style={{ textDecoration: "none", color: "#c0b2a9" }}
            >
              Blog
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/cart"
              style={{ textDecoration: "none", color: "#c0b2a9" }}
            >
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
