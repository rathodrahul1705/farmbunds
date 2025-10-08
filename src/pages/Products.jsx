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
      description: 'High-quality organic brown rice, rich in fiber and nutrients',
      price: '$12.99',
      image: '🌾',
      category: 'Grains and Millets',
      contactEmail: 'connect@farmbunds.com',
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
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0101',
      availability: 'In Stock',
      minOrder: '2kg',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Pearl Millet (Bajra)',
      description: 'Nutritious pearl millet, perfect for rotis and porridge',
      price: '$6.99',
      image: '🌾',
      category: 'Grains and Millets',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0101',
      availability: 'Limited Stock',
      minOrder: '3kg',
      deliveryTime: '3-4 days'
    },
    {
      name: 'Basmati Rice',
      description: 'Aromatic long-grain basmati rice for biryanis',
      price: '$15.99',
      image: '🍚',
      category: 'Grains and Millets',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0101',
      availability: 'In Stock',
      minOrder: '5kg',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Quinoa',
      description: 'Organic quinoa, high in protein and gluten-free',
      price: '$18.99',
      image: '🌾',
      category: 'Grains and Millets',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0101',
      availability: 'In Stock',
      minOrder: '2kg',
      deliveryTime: '3-5 days'
    },
    {
      name: 'Oats',
      description: 'Whole grain oats for healthy breakfast',
      price: '$7.49',
      image: '🌾',
      category: 'Grains and Millets',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0101',
      availability: 'In Stock',
      minOrder: '3kg',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Finger Millet (Ragi)',
      description: 'Calcium-rich finger millet flour',
      price: '$9.99',
      image: '🌾',
      category: 'Grains and Millets',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0101',
      availability: 'In Stock',
      minOrder: '2kg',
      deliveryTime: '3-4 days'
    },

    // Spices
    {
      name: 'Organic Turmeric Powder',
      description: 'Pure organic turmeric with natural healing properties',
      price: '$5.99',
      image: '🌶️',
      category: 'Spices',
      contactEmail: 'connect@farmbunds.com',
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
      contactEmail: 'connect@farmbunds.com',
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
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0102',
      availability: 'Out of Stock',
      minOrder: '250g',
      deliveryTime: '5-7 days'
    },
    {
      name: 'Red Chili Powder',
      description: 'Spicy red chili powder for authentic taste',
      price: '$6.49',
      image: '🌶️',
      category: 'Spices',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0102',
      availability: 'In Stock',
      minOrder: '250g',
      deliveryTime: '1-2 days'
    },
    {
      name: 'Garam Masala',
      description: 'Traditional Indian spice blend',
      price: '$7.99',
      image: '🌶️',
      category: 'Spices',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0102',
      availability: 'In Stock',
      minOrder: '200g',
      deliveryTime: '1-2 days'
    },
    {
      name: 'Black Pepper',
      description: 'Freshly ground black pepper corns',
      price: '$8.99',
      image: '🌶️',
      category: 'Spices',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0102',
      availability: 'In Stock',
      minOrder: '200g',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Cardamom Green',
      description: 'Premium green cardamom for sweets and tea',
      price: '$12.99',
      image: '🌶️',
      category: 'Spices',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0102',
      availability: 'Limited Stock',
      minOrder: '100g',
      deliveryTime: '2-3 days'
    },

    // Pulses
    {
      name: 'Toor Dal',
      description: 'High-quality pigeon peas for traditional dishes',
      price: '$4.99',
      image: '🥜',
      category: 'Pulses',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0103',
      availability: 'In Stock',
      minOrder: '2kg',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Moong Dal',
      description: 'Split green gram for healthy recipes',
      price: '$5.49',
      image: '🥜',
      category: 'Pulses',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0103',
      availability: 'In Stock',
      minOrder: '2kg',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Chana Dal',
      description: 'Split Bengal gram for nutritious meals',
      price: '$4.79',
      image: '🥜',
      category: 'Pulses',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0103',
      availability: 'In Stock',
      minOrder: '2kg',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Urad Dal',
      description: 'Black gram for idlis and dosas',
      price: '$5.99',
      image: '🥜',
      category: 'Pulses',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0103',
      availability: 'In Stock',
      minOrder: '2kg',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Masoor Dal',
      description: 'Red lentils for quick cooking',
      price: '$4.29',
      image: '🥜',
      category: 'Pulses',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0103',
      availability: 'In Stock',
      minOrder: '2kg',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Rajma',
      description: 'Kidney beans for North Indian curry',
      price: '$6.49',
      image: '🥜',
      category: 'Pulses',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0103',
      availability: 'Limited Stock',
      minOrder: '2kg',
      deliveryTime: '3-4 days'
    },

    // Flours
    {
      name: 'Whole Wheat Flour',
      description: 'Freshly milled whole wheat flour',
      price: '$3.99',
      image: '🫓',
      category: 'Flours',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0104',
      availability: 'In Stock',
      minOrder: '5kg',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Besan (Gram Flour)',
      description: 'Chickpea flour for pakoras and sweets',
      price: '$5.49',
      image: '🫓',
      category: 'Flours',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0104',
      availability: 'In Stock',
      minOrder: '3kg',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Rice Flour',
      description: 'Fine rice flour for gluten-free baking',
      price: '$4.99',
      image: '🫓',
      category: 'Flours',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0104',
      availability: 'In Stock',
      minOrder: '3kg',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Ragi Flour',
      description: 'Nutritious finger millet flour',
      price: '$6.99',
      image: '🫓',
      category: 'Flours',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0104',
      availability: 'In Stock',
      minOrder: '2kg',
      deliveryTime: '3-4 days'
    },
    {
      name: 'Multigrain Flour',
      description: 'Healthy blend of 7 different grains',
      price: '$7.49',
      image: '🫓',
      category: 'Flours',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0104',
      availability: 'In Stock',
      minOrder: '3kg',
      deliveryTime: '2-3 days'
    },

    // Fruits and Vegetables
    {
      name: 'Organic Apples',
      description: 'Fresh organic apples from Himalayan farms',
      price: '$9.99',
      image: '🍎',
      category: 'Fruits and Vegetables',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0105',
      availability: 'In Stock',
      minOrder: '3kg',
      deliveryTime: '1-2 days'
    },
    {
      name: 'Fresh Tomatoes',
      description: 'Farm-fresh ripe tomatoes',
      price: '$4.99',
      image: '🍅',
      category: 'Fruits and Vegetables',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0105',
      availability: 'In Stock',
      minOrder: '5kg',
      deliveryTime: '1 day'
    },
    {
      name: 'Organic Bananas',
      description: 'Naturally ripened organic bananas',
      price: '$3.99',
      image: '🍌',
      category: 'Fruits and Vegetables',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0105',
      availability: 'In Stock',
      minOrder: '4kg',
      deliveryTime: '1-2 days'
    },
    {
      name: 'Fresh Potatoes',
      description: 'Premium quality potatoes',
      price: '$5.49',
      image: '🥔',
      category: 'Fruits and Vegetables',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0105',
      availability: 'In Stock',
      minOrder: '5kg',
      deliveryTime: '1-2 days'
    },
    {
      name: 'Seasonal Vegetable Box',
      description: 'Mixed seasonal vegetables',
      price: '$15.99',
      image: '🥬',
      category: 'Fruits and Vegetables',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0105',
      availability: 'In Stock',
      minOrder: '1 box',
      deliveryTime: '1 day'
    },

    // Religious Products
    {
      name: 'Gangajal',
      description: 'Holy water from River Ganga',
      price: '$12.99',
      image: '🪔',
      category: 'Religious Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0106',
      availability: 'In Stock',
      minOrder: '1 liter',
      deliveryTime: '3-5 days'
    },
    {
      name: 'Sandalwood Paste',
      description: 'Pure sandalwood for religious ceremonies',
      price: '$8.99',
      image: '🪔',
      category: 'Religious Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0106',
      availability: 'In Stock',
      minOrder: '200g',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Incense Sticks',
      description: 'Natural fragrance incense sticks',
      price: '$4.99',
      image: '🪔',
      category: 'Religious Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0106',
      availability: 'In Stock',
      minOrder: '1 pack',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Rudraksha Mala',
      description: 'Authentic rudraksha beads',
      price: '$29.99',
      image: '🪔',
      category: 'Religious Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0106',
      availability: 'Limited Stock',
      minOrder: '1 piece',
      deliveryTime: '4-6 days'
    },

    // Processed Food
    {
      name: 'Organic Pasta',
      description: 'Whole wheat organic pasta',
      price: '$6.99',
      image: '🍝',
      category: 'Processed Food',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0107',
      availability: 'In Stock',
      minOrder: '5 packs',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Tomato Ketchup',
      description: 'Organic tomato ketchup without preservatives',
      price: '$4.49',
      image: '🍅',
      category: 'Processed Food',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0107',
      availability: 'In Stock',
      minOrder: '3 bottles',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Ready-to-Eat Meals',
      description: 'Healthy ready-to-eat Indian meals',
      price: '$8.99',
      image: '🍱',
      category: 'Processed Food',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0107',
      availability: 'In Stock',
      minOrder: '5 packs',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Organic Breakfast Cereal',
      description: 'Mixed grain breakfast cereal',
      price: '$7.99',
      image: '🥣',
      category: 'Processed Food',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0107',
      availability: 'In Stock',
      minOrder: '2 packs',
      deliveryTime: '2-3 days'
    },

    // Milk Products
    {
      name: 'Organic Ghee',
      description: 'Pure desi cow ghee',
      price: '$24.99',
      image: '🥛',
      category: 'Milk Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0108',
      availability: 'In Stock',
      minOrder: '500ml',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Paneer',
      description: 'Fresh homemade cottage cheese',
      price: '$9.99',
      image: '🧀',
      category: 'Milk Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0108',
      availability: 'In Stock',
      minOrder: '500g',
      deliveryTime: '1-2 days'
    },
    {
      name: 'Yogurt',
      description: 'Fresh probiotic yogurt',
      price: '$5.99',
      image: '🥛',
      category: 'Milk Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0108',
      availability: 'In Stock',
      minOrder: '1kg',
      deliveryTime: '1-2 days'
    },
    {
      name: 'Fresh Milk',
      description: 'Organic farm fresh milk',
      price: '$6.99',
      image: '🥛',
      category: 'Milk Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0108',
      availability: 'Limited Stock',
      minOrder: '2 liters',
      deliveryTime: '1 day'
    },

    // Jaggery Products
    {
      name: 'Organic Jaggery',
      description: 'Pure sugarcane jaggery',
      price: '$8.99',
      image: '🍯',
      category: 'Jaggery Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0109',
      availability: 'In Stock',
      minOrder: '1kg',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Jaggery Powder',
      description: 'Granulated jaggery for easy use',
      price: '$9.49',
      image: '🍯',
      category: 'Jaggery Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0109',
      availability: 'In Stock',
      minOrder: '1kg',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Palm Jaggery',
      description: 'Traditional palm jaggery',
      price: '$11.99',
      image: '🍯',
      category: 'Jaggery Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0109',
      availability: 'Limited Stock',
      minOrder: '500g',
      deliveryTime: '3-4 days'
    },

    // Oil Products
    {
      name: 'Cold-Pressed Mustard Oil',
      description: 'Pure cold-pressed mustard oil',
      price: '$14.99',
      image: '🫒',
      category: 'Oil Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0110',
      availability: 'In Stock',
      minOrder: '1 liter',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Organic Coconut Oil',
      description: 'Virgin coconut oil for cooking and hair',
      price: '$16.99',
      image: '🫒',
      category: 'Oil Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0110',
      availability: 'In Stock',
      minOrder: '500ml',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Sesame Oil',
      description: 'Pure sesame oil for cooking',
      price: '$12.99',
      image: '🫒',
      category: 'Oil Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0110',
      availability: 'In Stock',
      minOrder: '1 liter',
      deliveryTime: '2-3 days'
    },
    {
      name: 'Groundnut Oil',
      description: 'Refined groundnut oil',
      price: '$10.99',
      image: '🫒',
      category: 'Oil Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0110',
      availability: 'In Stock',
      minOrder: '1 liter',
      deliveryTime: '2-3 days'
    },

    // Dehydrated Products
    {
      name: 'Dehydrated Onion Flakes',
      description: 'Crispy dehydrated onion for cooking',
      price: '$7.99',
      image: '🧅',
      category: 'Dehydrated Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0111',
      availability: 'In Stock',
      minOrder: '500g',
      deliveryTime: '3-4 days'
    },
    {
      name: 'Dry Mango Powder',
      description: 'Tangy amchur powder for flavoring',
      price: '$6.49',
      image: '🥭',
      category: 'Dehydrated Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0111',
      availability: 'In Stock',
      minOrder: '250g',
      deliveryTime: '3-4 days'
    },
    {
      name: 'Dehydrated Ginger',
      description: 'Dry ginger for tea and cooking',
      price: '$8.99',
      image: '🫚',
      category: 'Dehydrated Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0111',
      availability: 'In Stock',
      minOrder: '200g',
      deliveryTime: '3-4 days'
    },
    {
      name: 'Dry Coconut Powder',
      description: 'Desiccated coconut for sweets',
      price: '$5.99',
      image: '🥥',
      category: 'Dehydrated Products',
      contactEmail: 'connect@farmbunds.com',
      phone: '+1-555-0111',
      availability: 'In Stock',
      minOrder: '500g',
      deliveryTime: '3-4 days'
    }
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