import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import PrivacyPolicy from './components/internal/PrivacyPolicy'
import RefundPolicy from './components/internal/RefundPolicy'
import ShippingPolicy from './components/internal/ShippingPolicy'
import TermsOfService from './components/internal/TermsOfService'
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/shipping" element={<ShippingPolicy />} />
          <Route path="/refunds" element={<RefundPolicy />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;