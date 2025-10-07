import React, { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Nikhil Sharma',
      location: 'Punjab, India',
      rating: 5,
      text: 'FarmBunds has revolutionized wheat farming for us. The quality of wheat we export now is exceptional, thanks to their sustainable farming practices and premium seeds.',
      image: '👨‍🌾'
    },
    {
      id: 2,
      name: 'Priya Patel',
      location: 'Gujarat, India',
      rating: 5,
      text: 'The organic vegetables from FarmBunds are incredibly fresh and flavorful. My family can taste the difference in every meal!',
      image: '👩‍💼'
    },
    {
      id: 3,
      name: 'Arjun Singh',
      location: 'Rajasthan, India',
      rating: 5,
      text: 'As a restaurant owner, I rely on consistent quality. FarmBunds never disappoints with their dairy products and fresh produce.',
      image: '👨‍🍳'
    },
    {
      id: 4,
      name: 'Ananya Reddy',
      location: 'Karnataka, India',
      rating: 5,
      text: 'The convenience of home delivery combined with farm-fresh quality has made FarmBunds an essential part of our kitchen.',
      image: '👩‍🌾'
    },
    {
      id: 5,
      name: 'Rohan Verma',
      location: 'Delhi, India',
      rating: 5,
      text: 'The wheat export quality from FarmBunds has helped our business grow internationally. Superior quality and reliable supply.',
      image: '👨‍💼'
    },
    {
      id: 6,
      name: 'Sneha Kapoor',
      location: 'Maharashtra, India',
      rating: 5,
      text: 'Fresh, organic, and delivered right to my doorstep. FarmBunds has transformed how we eat and live healthier.',
      image: '👩‍🎓'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Check mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className={`section ${styles.testimonials}`} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Customers Say</h2>
          <p className={styles.subtitle}>Don't just take our word for it</p>
        </div>

        <div className={styles.carousel}>
          <button 
            className={`${styles.navButton} ${styles.navButtonPrev}`} 
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div className={styles.testimonialContainer}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`${styles.testimonial} ${
                  index === currentTestimonial ? styles.active : ''
                }`}
                role="tabpanel"
                aria-hidden={index !== currentTestimonial}
                aria-labelledby={`testimonial-${testimonial.id}`}
              >
                <div className={styles.quote}>
                  <span className={styles.quoteMark}>"</span>
                  <p>{testimonial.text}</p>
                </div>

                <div className={styles.rating} aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                  {'★'.repeat(testimonial.rating)}
                  <span className="sr-only">{testimonial.rating} out of 5 stars</span>
                </div>

                <div className={styles.author}>
                  <div className={styles.avatar} aria-hidden="true">
                    {testimonial.image}
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 id={`testimonial-${testimonial.id}`}>{testimonial.name}</h4>
                    <p>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className={`${styles.navButton} ${styles.navButtonNext}`} 
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        <div className={styles.dots} role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentTestimonial ? styles.active : ''
              }`}
              onClick={() => goToTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-selected={index === currentTestimonial}
              role="tab"
            />
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>4.9/5</span>
            <span className={styles.statLabel}>Average Rating</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Happy Customers</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>Would Recommend</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;