import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import FirstPageProducts from "../components/FirstPageProducts";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import ProduseRec from "../components/ProduseRec";
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <ProduseRec />
      <FirstPageProducts />
      <BlogSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
