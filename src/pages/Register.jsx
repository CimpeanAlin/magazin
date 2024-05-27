import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { register } from "../redux/apiCall";
import { useDispatch, useSelector } from "react-redux";
import {
  registerStart,
  registerSuccess,
  registerFailure,
} from "../redux/userRedux";
import React from "react";

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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1px solid ${charcoal};
  border-radius: 5px;
  &:focus {
    border-color: ${indigoDye};
    outline: none;
  }
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  color: ${darkSlateGray};
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

const Error = styled.span`
  color: red;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const { isFetching, error, success } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerStart());

    try {
      await register(dispatch, formData); // Use the register function
      console.log("Registration successful");

      // Clear all input fields after successful registration
      setFormData({
        name: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      dispatch(registerFailure());
      console.error("Registration failed:", error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREAZĂ CONT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="nume"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="lastName"
            placeholder="prenume"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Input
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
          />
          <Input
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="parola"
            value={formData.password}
            onChange={handleChange}
          />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="confirmă parola"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button type="submit" disabled={isFetching}>
            {isFetching ? "Creating..." : "CREAZĂ"}
          </Button>
          {success && <Success>Register successful!</Success>}
          {error && <Error>Something went wrong...</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;