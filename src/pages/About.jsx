import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Global Excellence in Export</h1>
          <p>Delivering quality products worldwide since 2025</p>
        </div>
      </section>

      <section className={`section ${styles.story}`}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.text}>
              <h2>From Local Roots to Global Reach</h2>
              <p>
                Founded in 2025 by John Anderson, our company began as a small family farm 
                with a vision for sustainable agriculture. Today, we've evolved into a 
                trusted global export partner, serving clients across 50+ countries with 
                premium agricultural products.
              </p>
              <p>
                Our journey from local farming to international exports has been driven by 
                our commitment to quality, reliability, and sustainable practices. We 
                combine traditional farming wisdom with modern export expertise to deliver 
                exceptional products worldwide.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <h3>50+</h3>
                  <p>Countries Served</p>
                </div>
                <div className={styles.stat}>
                  <h3>1000+</h3>
                  <p>Global Clients</p>
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <div className={styles.placeholder}>Global Operations Map</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.mission}`}>
        <div className="container">
          <div className={styles.missionContent}>
            <div className={styles.image}>
              <div className={styles.placeholder}>Quality Control Facility</div>
            </div>
            <div className={styles.text}>
              <h2>Our Export Mission</h2>
              <p>
                We bridge the gap between premium agricultural producers and international 
                markets. Our mission is to deliver farm-fresh quality to every corner of 
                the globe while maintaining the highest standards of food safety and 
                sustainable practices.
              </p>
              <ul className={styles.missionList}>
                <li>Global supply chain management</li>
                <li>Quality assurance & certification</li>
                <li>Customized export solutions</li>
                <li>Sustainable sourcing practices</li>
                <li>Timely international delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`section section-beige ${styles.values}`}>
        <div className="container">
          <h2>Our Export Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.value}>
              <h3>Global Reliability</h3>
              <p>Consistent quality and timely delivery to international markets with robust supply chain management</p>
            </div>
            <div className={styles.value}>
              <h3>Quality Excellence</h3>
              <p>Rigorous quality control meeting international standards and certification requirements</p>
            </div>
            <div className={styles.value}>
              <h3>Sustainable Trade</h3>
              <p>Ethical sourcing and environmentally responsible export practices</p>
            </div>
            <div className={styles.value}>
              <h3>Client Partnership</h3>
              <p>Building long-term relationships with customized export solutions</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.certifications}`}>
        <div className="container">
          <h2>International Certifications & Standards</h2>
          <p className={styles.certIntro}>
            Our commitment to quality is backed by international certifications and compliance standards
          </p>
          <div className={styles.certGrid}>
            <div className={styles.certItem}>
              <h3>ISO 22000</h3>
              <p>Food Safety Management</p>
            </div>
            <div className={styles.certItem}>
              <h3>GlobalG.A.P.</h3>
              <p>Good Agricultural Practices</p>
            </div>
            <div className={styles.certItem}>
              <h3>HACCP</h3>
              <p>Hazard Analysis Critical Control Points</p>
            </div>
            <div className={styles.certItem}>
              <h3>Organic Certified</h3>
              <p>International Organic Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Official Certificates Section */}
      <section className={`section section-beige ${styles.officialCerts}`}>
        <div className="container">
          <h2>Official Certificates & Registrations</h2>
          <p className={styles.certIntro}>
            We are fully compliant with all government regulations and hold the necessary certifications for international trade
          </p>
          <div className={styles.officialCertGrid}>
            <div className={styles.officialCert}>
              <div className={styles.certIcon}>📄</div>
              <h3>IEC Certificate</h3>
              <p>Importer Exporter Code</p>
              <div className={styles.certDetails}>
                <span className={styles.certNumber}>IEC No: ABCCF1234X</span>
                <span className={styles.validity}>Valid: Permanent</span>
              </div>
              <p className={styles.certDesc}>
                Authorized by Directorate General of Foreign Trade for international trade operations
              </p>
            </div>

            <div className={styles.officialCert}>
              <div className={styles.certIcon}>🏢</div>
              <h3>GST Registration</h3>
              <p>Goods and Services Tax</p>
              <div className={styles.certDetails}>
                <span className={styles.certNumber}>GSTIN: 07ABCCF1234X1Z5</span>
                <span className={styles.validity}>Valid: Permanent</span>
              </div>
              <p className={styles.certDesc}>
                Registered under GST Act for seamless domestic and international tax compliance
              </p>
            </div>

            <div className={styles.officialCert}>
              <div className={styles.certIcon}>⭐</div>
              <h3>Udyam Registration</h3>
              <p>MSME Enterprise</p>
              <div className={styles.certDetails}>
                <span className={styles.certNumber}>UDYAM-DL-01-1234567</span>
                <span className={styles.validity}>Valid: Permanent</span>
              </div>
              <p className={styles.certDesc}>
                Recognized as Micro, Small & Medium Enterprise by Government of India
              </p>
            </div>

            <div className={styles.officialCert}>
              <div className={styles.certIcon}>🌿</div>
              <h3>Organic Certification</h3>
              <p>NPOP Certified</p>
              <div className={styles.certDetails}>
                <span className={styles.certNumber}>Cert No: ORG-123-456</span>
                <span className={styles.validity}>Valid until: Dec 2025</span>
              </div>
              <p className={styles.certDesc}>
                Certified organic by APEDA under National Program for Organic Production
              </p>
            </div>

            <div className={styles.officialCert}>
              <div className={styles.certIcon}>⚡</div>
              <h3>FSSAI License</h3>
              <p>Food Safety Compliance</p>
              <div className={styles.certDetails}>
                <span className={styles.certNumber}>License No: 11223344000123</span>
                <span className={styles.validity}>Valid until: Mar 2026</span>
              </div>
              <p className={styles.certDesc}>
                Licensed by Food Safety and Standards Authority of India for food processing
              </p>
            </div>

            <div className={styles.officialCert}>
              <div className={styles.certIcon}>🌍</div>
              <h3>Export License</h3>
              <p>International Trade</p>
              <div className={styles.certDetails}>
                <span className={styles.certNumber}>EL No: EXP/IND/12345</span>
                <span className={styles.validity}>Valid until: Dec 2025</span>
              </div>
              <p className={styles.certDesc}>
                Authorized exporter for agricultural products to international markets
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.global}`}>
        <div className="container">
          <h2>Global Presence</h2>
          <div className={styles.regions}>
            <div className={styles.region}>
              <h3>Europe</h3>
              <p>UK, Germany, France, Netherlands, Scandinavia</p>
            </div>
            <div className={styles.region}>
              <h3>North America</h3>
              <p>USA, Canada, Mexico</p>
            </div>
            <div className={styles.region}>
              <h3>Asia</h3>
              <p>Japan, Singapore, UAE, South Korea</p>
            </div>
            <div className={styles.region}>
              <h3>Oceania</h3>
              <p>Australia, New Zealand</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;