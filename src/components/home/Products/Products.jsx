import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Products.module.css';

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '',
    message: ''
  });

  const featuredProducts = [
    {
      id: 1,
      name: 'Organic Brown Rice',
      description: 'Nutritious whole grain rice rich in fiber and essential nutrients',
      price: '$12.99',
      image: '🌾',
      category: 'grains and millets',
      categorySlug: 'grains-millets',
      availability: 'In Stock',
      minOrder: '5kg',
      deliveryTime: '2-3 days',
      contactEmail: 'connect@farmbunds.com',
      phone: '+91 (987) 016-1484'
    },
    {
      id: 2,
      name: 'Premium Turmeric',
      description: 'Pure organic turmeric powder with natural healing properties',
      price: '$8.99',
      image: '🟨',
      category: 'spices',
      categorySlug: 'spices',
      availability: 'In Stock',
      minOrder: '1kg',
      deliveryTime: '1-2 days',
      contactEmail: 'connect@farmbunds.com',
      phone: '+91 (987) 016-1484'
    },
    {
      id: 3,
      name: 'Toor Dal',
      description: 'High-protein lentils perfect for traditional Indian dishes',
      price: '$6.99',
      image: '🟠',
      category: 'pulses',
      categorySlug: 'pulses',
      availability: 'Limited Stock',
      minOrder: '2kg',
      deliveryTime: '2-3 days',
      contactEmail: 'connect@farmbunds.com',
      phone: '+91 (987) 016-1484'
    },
    {
      id: 4,
      name: 'Whole Wheat Flour',
      description: 'Freshly milled atta for healthy chapatis and breads',
      price: '$5.99',
      image: '🫓',
      category: 'flours',
      categorySlug: 'flours',
      availability: 'In Stock',
      minOrder: '5kg',
      deliveryTime: '1-2 days',
      contactEmail: 'connect@farmbunds.com',
      phone: '+91 (987) 016-1484'
    },
    {
      id: 5,
      name: 'Fresh Vegetable Bundle',
      description: 'Seasonal organic vegetables harvested daily from our farm',
      price: '$15.99',
      image: '🥦',
      category: 'fruits and vegetables',
      categorySlug: 'fruits-vegetables',
      availability: 'In Stock',
      minOrder: '1 bundle',
      deliveryTime: 'Same day',
      contactEmail: 'connect@farmbunds.com',
      phone: '+91 (987) 016-1484'
    },
    {
      id: 6,
      name: 'Natural Incense Sticks',
      description: 'Pure herbal incense for spiritual and religious ceremonies',
      price: '$9.99',
      image: '🪔',
      category: 'religious products',
      categorySlug: 'religious-products',
      availability: 'In Stock',
      minOrder: '50 units',
      deliveryTime: '3-4 days',
      contactEmail: 'connect@farmbunds.com',
      phone: '+91 (987) 016-1484'
    },
    {
      id: 7,
      name: 'Organic Pasta',
      description: 'Whole wheat pasta made from traditional recipes',
      price: '$7.99',
      image: '🍝',
      category: 'processed food',
      categorySlug: 'processed-food',
      availability: 'In Stock',
      minOrder: '10 packs',
      deliveryTime: '2-3 days',
      contactEmail: 'connect@farmbunds.com',
      phone: '+91 (987) 016-1484'
    },
    {
      id: 8,
      name: 'Fresh Cow Ghee',
      description: 'Pure clarified butter made from traditional methods',
      price: '$18.99',
      image: '🧈',
      category: 'milk products',
      categorySlug: 'milk-products',
      availability: 'Limited Stock',
      minOrder: '1kg',
      deliveryTime: '1-2 days',
      contactEmail: 'connect@farmbunds.com',
      phone: '+91 (987) 016-1484'
    },
    {
      id: 9,
      name: 'Organic Jaggery',
      description: 'Natural sweetener rich in minerals and iron',
      price: '$10.99',
      image: '🟤',
      category: 'jaggery products',
      categorySlug: 'jaggery-products',
      availability: 'In Stock',
      minOrder: '2kg',
      deliveryTime: '2-3 days',
      contactEmail: 'connect@farmbunds.com',
      phone: '+91 (987) 016-1484'
    },
    {
      id: 10,
      name: 'Cold-Pressed Coconut Oil',
      description: 'Pure virgin coconut oil for cooking and wellness',
      price: '$14.99',
      image: '🥥',
      category: 'oil product',
      categorySlug: 'oil-products',
      availability: 'In Stock',
      minOrder: '1 liter',
      deliveryTime: '2-3 days',
      contactEmail: 'connect@farmbunds.com',
      phone: '+91 (987) 016-1484'
    },
    {
      id: 11,
      name: 'Dehydrated Mango Slices',
      description: 'Natural dried mangoes without preservatives',
      price: '$11.99',
      image: '🥭',
      category: 'dehydrated products',
      categorySlug: 'dehydrated-products',
      availability: 'Out of Stock',
      minOrder: '500g',
      deliveryTime: '4-5 days',
      contactEmail: 'connect@farmbunds.com',
      phone: '+91 (987) 016-1484'
    }
  ];

  const handleInquiryClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    // Reset form when opening new inquiry
    setInquiryForm({
      name: '',
      email: '',
      phone: '',
      quantity: '',
      message: ''
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
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
    // Here you would typically send the inquiry to your backend
    console.log('Inquiry submitted:', {
      product: selectedProduct.name,
      ...inquiryForm
    });
    
    // Show success message or handle response
    alert('Thank you for your inquiry! We will get back to you soon.');
    handleCloseModal();
  };

  return (
    <section className={`section section-beige ${styles['product-home']}`}>
      <div className="container">
        <div className={styles['product-home__header']}>
          <h2>Featured Products</h2>
          <p>Discover our most popular farm-fresh and traditional products</p>
        </div>
        
        <div className={styles['product-home__grid']}>
          {featuredProducts.map(product => (
            <div key={product.id} className={styles['product-home__item']}>
              <div className={styles['product-home__image']}>
                <span className={styles['product-home__icon']}>{product.image}</span>
                <Link 
                  to={`/products`}
                  className={styles['product-home__category-link']}
                >
                  <div className={styles['product-home__category']}>
                    {product.category}
                  </div>
                </Link>
              </div>
              
              <div className={styles['product-home__content']}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                
                <div className={styles['product-home__footer']}>
                  <button 
                    className={`btn btn-primary ${styles['product-home__inquiry-btn']}`}
                    onClick={() => handleInquiryClick(product)}
                  >
                    Inquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles['product-home__cta']}>
          <Link to="/products" className="btn btn-secondary">
            View All Products
          </Link>
        </div>

        {/* Inquiry Modal */}
        {isModalOpen && selectedProduct && (
          <div className={styles['product-home__modal-overlay']} onClick={handleCloseModal}>
            <div className={styles['product-home__modal']} onClick={(e) => e.stopPropagation()}>
              <div className={styles['product-home__modal-header']}>
                <h2>Product Inquiry: {selectedProduct.name}</h2>
                <button className={styles['product-home__close-button']} onClick={handleCloseModal}>
                  ×
                </button>
              </div>
              
              <div className={styles['product-home__modal-content']}>
                <div className={styles['product-home__product-info']}>
                  <div className={styles['product-home__product-image']}>
                    <span>{selectedProduct.image}</span>
                  </div>
                  <div className={styles['product-home__product-details']}>
                    <h3>{selectedProduct.name}</h3>
                    <p>{selectedProduct.description}</p>
                    <div className={styles['product-home__product-meta']}>
                      <div className={styles['product-home__meta-item']}>
                        <strong>Price:</strong> {selectedProduct.price}
                      </div>
                      <div className={styles['product-home__meta-item']}>
                        <strong>Category:</strong> 
                        <Link 
                          to={`/products?category=${selectedProduct.categorySlug}`}
                          className={styles['product-home__category-link-modal']}
                        >
                          {selectedProduct.category}
                        </Link>
                      </div>
                      <div className={styles['product-home__meta-item']}>
                        <strong>Availability:</strong> 
                        <span className={`${styles['product-home__availability-badge']} ${
                          selectedProduct.availability === 'In Stock' ? styles['product-home__in-stock'] : 
                          selectedProduct.availability === 'Limited Stock' ? styles['product-home__limited-stock'] : 
                          styles['product-home__out-of-stock']
                        }`}>
                          {selectedProduct.availability}
                        </span>
                      </div>
                      <div className={styles['product-home__meta-item']}>
                        <strong>Minimum Order:</strong> {selectedProduct.minOrder}
                      </div>
                      <div className={styles['product-home__meta-item']}>
                        <strong>Delivery Time:</strong> {selectedProduct.deliveryTime}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles['product-home__contact-info']}>
                  <h4>Contact Information</h4>
                  <div className={styles['product-home__contact-details']}>
                    <p><strong>Email:</strong> {selectedProduct.contactEmail}</p>
                    <p><strong>Phone:</strong> {selectedProduct.phone}</p>
                  </div>
                </div>

                <form className={styles['product-home__inquiry-form']} onSubmit={handleSubmitInquiry}>
                  <h4>Send Inquiry</h4>
                  <div className={styles['product-home__form-row']}>
                    <div className={styles['product-home__form-group']}>
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
                    <div className={styles['product-home__form-group']}>
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
                  
                  <div className={styles['product-home__form-row']}>
                    <div className={styles['product-home__form-group']}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={inquiryForm.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className={styles['product-home__form-group']}>
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

                  <div className={styles['product-home__form-group']}>
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

                  <div className={styles['product-home__form-actions']}>
                    <button type="button" className={styles['product-home__cancel-button']} onClick={handleCloseModal}>
                      Cancel
                    </button>
                    <button type="submit" className={styles['product-home__submit-button']}>
                      Send Inquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;