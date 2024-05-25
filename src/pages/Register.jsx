import styled from "styled-components";
import { useState } from "react";
import { register } from "../redux/apiCall";
import { useDispatch, useSelector } from "react-redux";
import {
  registerStart,
  registerSuccess,
  registerFailure,
} from "../redux/userRedux";
import React from "react";

const Success = styled.span`
  color: green;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/close-up-hand-making-heart-garland-with-spool-wrapped-gift-box-white-desk_23-2148137405.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711929600&semt=ais")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
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
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #deb887;
  color: white;
  cursor: pointer;
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
  const { isFetching, error , success} = useSelector((state) => state.user);

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
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="lastName"
            placeholder="last name"
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
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button type="submit" disabled={isFetching}>
            {isFetching ? "Creating..." : "CREATE"}
          </Button>
          {success && <Success>Register successful!</Success>}
          {error && <React.Fragment>Something went wrong...</React.Fragment>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;