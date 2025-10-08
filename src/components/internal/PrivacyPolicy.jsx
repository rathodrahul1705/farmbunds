import React from 'react';
import styles from '../../styles/internal.css';

const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      <div className="policy-header">
        <h1>Privacy Policy</h1>
        <p>Last Updated: 08/10/2025</p>
      </div>

      <div className="policy-content">
        <section>
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Business contact information (company name, address, phone number)</li>
            <li>Personal identification information (name, email address)</li>
            <li>Export documentation and shipping details</li>
            <li>Payment and billing information</li>
            <li>Customs and regulatory compliance data</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information for:</p>
          <ul>
            <li>Processing and managing export orders</li>
            <li>Customs clearance and documentation preparation</li>
            <li>International shipping and logistics coordination</li>
            <li>Regulatory compliance and export control</li>
            <li>Customer service and communication</li>
            <li>Legal and tax compliance requirements</li>
          </ul>
        </section>

        <section>
          <h2>3. Data Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>International shipping carriers and freight forwarders</li>
            <li>Customs brokers and regulatory authorities</li>
            <li>Payment processors and financial institutions</li>
            <li>Legal and government entities as required by law</li>
            <li>Service providers assisting with export operations</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your information, including encryption, secure servers, and access controls. Export documentation is stored securely and retained as required by international trade regulations.</p>
        </section>

        <section>
          <h2>5. International Data Transfers</h2>
          <p>As an export business, your data may be transferred to countries where we conduct business, in compliance with applicable data protection laws and export regulations.</p>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information, subject to legal and regulatory retention requirements for export documentation.</p>
        </section>

        <section>
          <h2>7. Contact Us</h2>
          <p>For privacy-related questions, contact our Data Protection Officer at privacy@yourexportbusiness.com</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;