import React from 'react';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;