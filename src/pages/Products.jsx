import React, { useState, useEffect } from 'react';
import styles from './Products.module.css';

const Products = () => {
  const categories = [
    'All Products',
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

  const products = [
    // Grains and Millets
    {
      name: 'Organic Brown Rice',
      description: 'High-quality organic brown rice, rich in fiber',
      price: '$12.99',
      image: '🌾',
      category: 'Grains and Millets',
      contactEmail: 'grains@organicfarm.com',
      phone: '+1-555-0101',
      availability: 'In Stock',
      minOrder: '5kg',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Whole Wheat Grains',
      description: 'Premium whole wheat grains for healthy meals',
      price: '$8.99',
      image: '🌾',
      category: 'Grains and Millets',
      contactEmail: 'grains@organicfarm.com',
      phone: '+1-555-0101',
      availability: 'In Stock',
      minOrder: '2kg',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Pearl Millet (Bajra)',
      description: 'Nutritious pearl millet, perfect for rotis',
      price: '$6.99',
      image: '🌾',
      category: 'Grains and Millets',
      contactEmail: 'grains@organicfarm.com',
      phone: '+1-555-0101',
      availability: 'Limited Stock',
      minOrder: '3kg',
      deliveryTime: '3-4 days'
    },

    // Spices
    {
      name: 'Organic Turmeric Powder',
      description: 'Pure organic turmeric with natural healing properties',
      price: '$5.99',
      image: '🌶️',
      category: 'Spices',
      contactEmail: 'spices@organicfarm.com',
      phone: '+1-555-0102',
      availability: 'In Stock',
      minOrder: '500g',
      deliveryTime: '1-2 days'
    },
    {
      name: 'Cumin Seeds',
      description: 'Aromatic cumin seeds for flavorful cooking',
      price: '$4.49',
      image: '🌶️',
      category: 'Spices',
      contactEmail: 'spices@organicfarm.com',
      phone: '+1-555-0102',
      availability: 'In Stock',
      minOrder: '250g',
      deliveryTime: '1-2 days'
    },
    {
      name: 'Coriander Powder',
      description: 'Freshly ground coriander powder',
      price: '$3.99',
      image: '🌶️',
      category: 'Spices',
      contactEmail: 'spices@organicfarm.com',
      phone: '+1-555-0102',
      availability: 'Out of Stock',
      minOrder: '250g',
      deliveryTime: '5-7 days'
    },

    // Add more products as needed...
  ];

  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    quantity: ''
  });

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All Products') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const handleInquiryClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setInquiryForm(prev => ({
      ...prev,
      message: `I'm interested in ${product.name}. Please provide more details.`
    }));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setInquiryForm({
      name: '',
      email: '',
      phone: '',
      message: '',
      quantity: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInquiryForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    console.log('Inquiry submitted:', {
      product: selectedProduct?.name,
      ...inquiryForm
    });
    
    alert('Thank you for your inquiry! We will contact you soon.');
    handleCloseModal();
  };

  return (
    <div className={styles.products}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Our Products</h1>
          <p>Fresh, organic, and delivered with care</p>
        </div>
      </section>

      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          {/* Category Filter with Horizontal Scroll */}
          <div className={styles.categoryFilter}>
            <h3>Filter by Category</h3>
            <div className={styles.categoryScrollContainer}>
              <div className={styles.categoryButtons}>
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`${styles.categoryButton} ${
                      selectedCategory === category ? styles.active : ''
                    }`}
                    onClick={() => handleCategoryFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Count */}
          <div className={styles.productsCount}>
            <p>
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} 
              {selectedCategory !== 'All Products' && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Products Grid */}
          <div className={styles.grid}>
            {filteredProducts.map((product, index) => (
              <div key={index} className={styles.product}>
                <div className={styles.image}>
                  <span>{product.image}</span>
                </div>
                <div className={styles.content}>
                  <h3>{product.name}</h3>
                  <p className={styles.description}>{product.description}</p>
                  <div className={styles.categoryTag}>
                    {product.category}
                  </div>
                  <div className={styles.availability}>
                    <span className={`${styles.availabilityBadge} ${
                      product.availability === 'In Stock' ? styles.inStock : 
                      product.availability === 'Limited Stock' ? styles.limitedStock : 
                      styles.outOfStock
                    }`}>
                      {product.availability}
                    </span>
                  </div>
                  <div className={styles.footer}>
                    <div className={styles.priceSection}>
                      <span className={styles.price}>{product.price}</span>
                      <span className={styles.minOrder}>Min: {product.minOrder}</span>
                    </div>
                    <div className={styles.buttonGroup}>
                      <button 
                        className={`btn ${styles.inquiryButton}`}
                        onClick={() => handleInquiryClick(product)}
                      >
                        Inquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Products Message */}
          {filteredProducts.length === 0 && (
            <div className={styles.noProducts}>
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Inquiry Modal */}
      {isModalOpen && selectedProduct && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Product Inquiry: {selectedProduct.name}</h2>
              <button className={styles.closeButton} onClick={handleCloseModal}>
                ×
              </button>
            </div>
            
            <div className={styles.modalContent}>
              <div className={styles.productInfo}>
                <div className={styles.productImage}>
                  <span>{selectedProduct.image}</span>
                </div>
                <div className={styles.productDetails}>
                  <h3>{selectedProduct.name}</h3>
                  <p>{selectedProduct.description}</p>
                  <div className={styles.productMeta}>
                    <div className={styles.metaItem}>
                      <strong>Price:</strong> {selectedProduct.price}
                    </div>
                    <div className={styles.metaItem}>
                      <strong>Category:</strong> {selectedProduct.category}
                    </div>
                    <div className={styles.metaItem}>
                      <strong>Availability:</strong> 
                      <span className={`${styles.availabilityBadge} ${
                        selectedProduct.availability === 'In Stock' ? styles.inStock : 
                        selectedProduct.availability === 'Limited Stock' ? styles.limitedStock : 
                        styles.outOfStock
                      }`}>
                        {selectedProduct.availability}
                      </span>
                    </div>
                    <div className={styles.metaItem}>
                      <strong>Minimum Order:</strong> {selectedProduct.minOrder}
                    </div>
                    <div className={styles.metaItem}>
                      <strong>Delivery Time:</strong> {selectedProduct.deliveryTime}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.contactInfo}>
                <h4>Contact Information</h4>
                <div className={styles.contactDetails}>
                  <p><strong>Email:</strong> {selectedProduct.contactEmail}</p>
                  <p><strong>Phone:</strong> {selectedProduct.phone}</p>
                </div>
              </div>

              <form className={styles.inquiryForm} onSubmit={handleSubmitInquiry}>
                <h4>Send Inquiry</h4>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={inquiryForm.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={inquiryForm.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={inquiryForm.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="quantity">Desired Quantity</label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={inquiryForm.quantity}
                      onChange={handleInputChange}
                      placeholder="e.g., 10kg, 5 units"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={inquiryForm.message}
                    onChange={handleInputChange}
                    rows="4"
                    required
                  />
                </div>

                <div className={styles.formActions}>
                  <button type="button" className={styles.cancelButton} onClick={handleCloseModal}>
                    Cancel
                  </button>
                  <button type="submit" className={styles.submitButton}>
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;