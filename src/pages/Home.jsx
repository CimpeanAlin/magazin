import React from 'react'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default Home



