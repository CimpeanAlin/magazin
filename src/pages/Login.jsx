import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCall";
import React from "react";
import { useNavigate } from "react-router-dom";

const indigoDye = "#12497Dff";
const charcoal = "#2B3F4Eff";
const darkSlateGray = "#33515Bff";
const silver = "#C0B2A9ff";
const gunmetal = "#17282Fff";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Success = styled.span`
  color: green;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/photo/mainphoto7.png") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: ${indigoDye};
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid ${charcoal};
  border-radius: 5px;
  &:focus {
    border-color: ${indigoDye};
    outline: none;
  }
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: ${indigoDye};
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  transition: background-color 0.3s;
  &:disabled {
    background-color: ${silver};
    cursor: not-allowed;
  }
  &:hover:enabled {
    background-color: ${darkSlateGray};
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: ${darkSlateGray};
`;

const Error = styled.span`
  color: red;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error, success, currentUser } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (currentUser) {
      navigate(`/`);
    }
  }, [currentUser, navigate]);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    console.log("Login successful");
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <label htmlFor="username">Username</label>
          <Input
            id="username"
            type="text"
            placeholder="Introduceți username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            placeholder="Introceți parola"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            {isFetching ? "Logging in..." : "LOGIN"}
          </Button>
          {error && <Error>{error.message}</Error>}
          {success && <Success>Login successful!</Success>}
          <Link>Ați uitat parola?</Link>
          <Link>Creați un cont</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
