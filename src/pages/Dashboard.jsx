import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { logout } from "../redux/userRedux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { userRequest } from "../requestMethods";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("/photo/mainphoto7.png") center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1325px;
  padding: 20px;
  background-color: #e6ded5;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #12497d;
  margin-bottom: 20px;
  text-align: center;
`;

const UserDetails = styled.div`
  margin-bottom: 20px;

  h3 {
    margin-bottom: 10px;
    color: #12497d;
  }
`;

const OrderList = styled.div``;
const OrderItem = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;

  p {
    margin-bottom: 5px;
    color: #12497d;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin-top: 10px;
  }

  li {
    color: #12497d;
  }
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 10px;
  background-color: #17282f;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #0d1e25;
    color: #f5f5f5;
  }
`;

const Dashboard = () => {
  const { userId } = useParams();
  const user = useSelector((state) => state.user.currentUser);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await userRequest.get(`/order/find/${userId}`);
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    const fetchProducts = async () => {
      try {
        const res = await userRequest.get("/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchOrders();
    fetchProducts();
  }, [userId]);

  const handlePasswordReset = () => {
    // Implement password reset logic here
    alert("Password reset logic to be implemented.");
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("persist:root");
    dispatch({ type: "cart/reset" });
    navigate("/");
  };

  const getProductTitleById = (productId) => {
    const product = products.find((product) => product._id === productId);
    return product ? product.title : "Unknown Product";
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Dashboard</Title>
        <UserDetails>
          <h3>Username: {user?.username}</h3>
          <h3>Email: {user?.email}</h3>
          <h3>
            Register Date:{" "}
            {user?.createdAt && new Date(user.createdAt).toLocaleDateString()}
          </h3>
          <Button onClick={handlePasswordReset}>Reset Password</Button>
          <Button onClick={handleLogout}>Log Out</Button>
        </UserDetails>
        <OrderList>
          <h2>Your Orders</h2>
          {orders.map((order) => (
            <OrderItem key={order._id}>
              <p>Order ID: {order._id}</p>
              <p>Amount: {order.amount} LEI</p>
              <p>Status: {order.status}</p>
              <p>
                Order Date: {new Date(order.createdAt).toLocaleDateString()}
              </p>
              <ul>
                {order.products.map((product, index) => (
                  <li key={index}>
                    Product Name: {getProductTitleById(product.productId)}, Quantity:{" "}
                    {product.quantity}
                  </li>
                ))}
              </ul>
            </OrderItem>
          ))}
        </OrderList>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Dashboard;
