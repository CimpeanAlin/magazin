import React from 'react'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Blog />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default Home



