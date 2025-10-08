import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Features.module.css';

const Features = () => {
  const navigate = useNavigate();

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
    { name: 'Grains and Millets', slug: 'grains-millets' },
    { name: 'Spices', slug: 'spices' },
    { name: 'Pulses', slug: 'pulses' },
    { name: 'Flours', slug: 'flours' },
    { name: 'Fruits and Vegetables', slug: 'fruits-vegetables' },
    { name: 'Religious Products', slug: 'religious-products' },
    { name: 'Processed Food', slug: 'processed-food' },
    { name: 'Milk Products', slug: 'milk-products' },
    { name: 'Jaggery Products', slug: 'jaggery-products' },
    { name: 'Oil Products', slug: 'oil-products' },
    { name: 'Dehydrated Products', slug: 'dehydrated-products' }
  ];

  const handleCategoryClick = (categorySlug) => {
    // Navigate to products page with category filter
    navigate(`/products?category=${categorySlug}`);
    
    // Alternative: If you want a dedicated category page
    // navigate(`/categories/${categorySlug}`);
    
    // Alternative: If you want to pass state
    // navigate('/products', { state: { category: categorySlug } });
  };

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
              <div 
                key={index} 
                className={styles.categoryCard}
                onClick={() => handleCategoryClick(category.slug)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCategoryClick(category.slug);
                  }
                }}
              >
                <div className={styles.categoryContent}>
                  <h3>{category.name}</h3>
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