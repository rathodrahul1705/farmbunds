import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  const features = [
    {
      icon: '🌱',
      title: '100% Organic',
      description: 'Grown naturally without harmful pesticides or chemicals'
    },
    {
      icon: '🚚',
      title: 'Fresh Delivery',
      description: 'Harvested and delivered on the same day for maximum freshness'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Farm-direct prices without middlemen markup'
    },
    {
      icon: '❤️',
      title: 'Family Farm',
      description: 'Three generations of farming expertise and care'
    }
  ];

  const productCategories = [
    'Grains and Millets',
    'Spices',
    'Pulses',
    'Flours',
    'Fruits and Vegetables',
    'Religious Products',
    'Processed Food',
    'Milk Products',
    'Jaggery Products',
    'Oil Products',
    'Dehydrated Products'
  ];

  return (
    <section className={`section section-light ${styles.features}`}>
      <div className="container">
        {/* Features Section */}
        <div className={styles.header}>
          <h2>Why Choose FarmBunds?</h2>
          <p>We're committed to bringing you the freshest, most nutritious produce</p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Product Categories Section */}
        <div className={styles.categoriesSection}>
          <div className={styles.categoriesHeader}>
            <h2>Our Product Categories</h2>
            <p>Explore our wide range of farm-fresh products</p>
          </div>
          <div className={styles.categoriesGrid}>
            {productCategories.map((category, index) => (
              <div key={index} className={styles.categoryCard}>
                <div className={styles.categoryContent}>
                  <h3>{category}</h3>
                  <span className={styles.arrow}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;