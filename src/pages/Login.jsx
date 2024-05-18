import { useState, useEffect } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

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
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.header`
  font-size: 24px;
  font-weight: 300;
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
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #deb887;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #d2a768;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Success = styled.span`
  color: green;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error, success, currentUser } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (currentUser) {
      window.location.href = "/dashboard";
    }
  }, [currentUser]);

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
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            {isFetching ? "Logging in..." : "LOGIN"}
          </Button>
          {error && <Error>{error.message}</Error>}
          {success && <Success>Login successful!</Success>}
          <Link>Forgot your password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
