import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { logout } from "../redux/userRedux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { userRequest } from "../requestMethods";

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.div``;
const UserDetails = styled.div``;
const OrderList = styled.div``;
const OrderItem = styled.div``;

const Button = styled.button`
  border: none;
  padding: 8px;
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
    fetchOrders();
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
