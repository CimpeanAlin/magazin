import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import SearchResults from "./pages/SearchResults";
import InsertProduct from "./pages/AddProduct"
import { store } from "./redux/store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/:userId" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/addproduct" element={<InsertProduct />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
