import React from 'react';
import Hero from '../components/home/Hero/Hero';
import Features from '../components/home/Features/Features';
import Products from '../components/home/Products/Products';
import Testimonials from '../components/home/Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Products />
      <Testimonials />
    </div>
  );
};

export default Home;