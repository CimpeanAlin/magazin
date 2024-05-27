import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.div``;
const UserDetails = styled.div``;
const OrderList = styled.div``;
const OrderItem = styled.div``;
const Button = styled.div``;

const Dashboard = () => {
  const { userId } = useParams();
  const user = useSelector((state) => state.user.currentUser);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/users/dashboard/${userId}/orders`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setOrders(res.data.orders);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOrders();
  }, [userId]);

  const handlePasswordReset = () => {
    // Implement password reset logic here
    alert("Password reset logic to be implemented.");
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
        </UserDetails>
        <OrderList>
          <h2>Your Orders</h2>
          {orders.map((order) => (
            <OrderItem key={order._id}>
              <p>Order ID: {order._id}</p>
              <p>Amount: ${order.amount}</p>
              <p>Status: {order.status}</p>
              <p>
                Order Date: {new Date(order.createdAt).toLocaleDateString()}
              </p>
              <ul>
                {order.products.map((product, index) => (
                  <li key={index}>
                    Product ID: {product.productId}, Quantity:{" "}
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