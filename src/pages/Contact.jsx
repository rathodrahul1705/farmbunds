import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
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
              <form>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
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