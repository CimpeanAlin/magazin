
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Dashboard from "./pages/Dashboard";
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Blog from './pages/Blog';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

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
      </Routes>
    </Router>
</Provider>
  );
};

export default App;
