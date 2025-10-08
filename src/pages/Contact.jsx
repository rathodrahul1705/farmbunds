import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS service parameters
    const serviceID = 'service_pvom7lh';
    const templateID = 'template_7hqhuyg';
    const publicKey = 'Ic_ewN3fhLCj8HcJA';

    // Enhanced template parameters with more detailed information
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'connect@farmbunds.com',
      subject: `New Contact Form Submission from ${formData.name}`,
      reply_to: formData.email,
      
      // Enhanced content for the email body
      message: formData.message,
      user_name: formData.name,
      user_email: formData.email,
      submission_date: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'long'
      }),
      
      // Additional context for better email organization
      company_name: 'FarmBunds',
      contact_method: 'Website Contact Form',
      priority: 'Normal'
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        alert('Sorry, there was an error sending your message. Please try again or email us directly at connect@farmbunds.com');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles.contact}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.info}>
              <h2>Contact Information</h2>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📧</span>
                <div>
                  <h3>Email</h3>
                  <p>connect@farmbunds.com</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📞</span>
                <div>
                  <h3>Phone</h3>
                  <p>+91 9870161484</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📍</span>
                <div>
                  <h3>Address</h3>
                  <p>
                    Destiny Heights Chs Ltd<br />
                    6C/2201, New PMGP Colony<br />
                    Gavhanpada, Mulund East<br />
                    Mumbai 400081
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.form}>
              <h2>Send us a Message</h2>
              <form onSubmit={sendEmail}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    disabled={loading}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    disabled={loading}
                    placeholder="Enter your email address"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    disabled={loading}
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={loading || !formData.name || !formData.email || !formData.message}
                >
                  {loading ? (
                    <>
                      <span className={styles.spinner}></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;