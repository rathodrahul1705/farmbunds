import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: 'Fresh organic vegetables basket'
    },
    {
      src: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
      alt: 'Farm fresh dairy products'
    },
    {
      src: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: 'Organic fruits collection'
    },
    {
      src: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: 'Farm to table delivery'
    },
    {
      src: "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
      alt: 'Fresh farm produce market'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        {/* Carousel Container */}
        <div className={styles.carousel}>
          <div 
            className={styles.carouselTrack} 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroImages.map((image, index) => (
              <div key={index} className={styles.carouselSlide}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className={styles.carouselImage}
                  loading="lazy"
                />
                {/* Enhanced overlay for better text readability */}
                <div className={styles.imageOverlay}></div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className={styles.carouselIndicators}>
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`${styles.carouselIndicator} ${
                  index === currentSlide ? styles.carouselIndicatorActive : ''
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Content Overlay */}
        <div className={styles.content}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.title}>
              Fresh Organic Produce
              <span className={styles.highlight}> From Farm to Table</span>
            </h1>
            <p className={styles.subtitle}>
              Experience the freshness of nature with FarmBunds. We deliver the finest organic 
              vegetables, fruits, and dairy products straight from our farm to your doorstep.
            </p>
            <div className={styles.buttons}>
              <Link to="/products" className={`${styles.btn} ${styles.btnPrimary}`}>
                Shop Now
              </Link>
              <Link to="/about" className={`${styles.btn} ${styles.btnSecondary}`}>
                Learn More
              </Link>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Happy Families</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Products</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Organic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;