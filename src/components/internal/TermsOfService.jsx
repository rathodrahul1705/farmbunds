import React from 'react';

const TermsOfService = () => {
  return (
    <div className="policy-container">
      <div className="policy-header">
        <h1>Terms of Service</h1>
        <p>Last Updated: 08/10/2025</p>
      </div>

      <div className="policy-content">
        <section>
          <h2>1. Agreement to Terms</h2>
          <p>By using our export services, you agree to these Terms of Service and our business policies.</p>
        </section>

        <section>
          <h2>2. Export Services</h2>
          <p>We provide international export services including:</p>
          <ul>
            <li>Export documentation preparation</li>
            <li>Customs clearance assistance</li>
            <li>International shipping coordination</li>
            <li>Regulatory compliance guidance</li>
            <li>Freight forwarding services</li>
          </ul>
        </section>

        <section>
          <h2>3. Customer Responsibilities</h2>
          <p>As our customer, you agree to:</p>
          <ul>
            <li>Provide accurate and complete export documentation</li>
            <li>Comply with all applicable export laws and regulations</li>
            <li>Ensure goods are properly classified and described</li>
            <li>Obtain necessary export licenses and permits</li>
            <li>Provide accurate customs valuation information</li>
          </ul>
        </section>

        <section>
          <h2>4. Pricing and Payments</h2>
          <p>All prices are quoted in [Currency] and include standard export services. Additional charges may apply for:</p>
          <ul>
            <li>Customs duties and taxes</li>
            <li>Special handling requirements</li>
            <li>Expedited shipping services</li>
            <li>Additional insurance coverage</li>
            <li>Storage and demurrage charges</li>
          </ul>
        </section>

        <section>
          <h2>5. Export Compliance</h2>
          <p>You are responsible for ensuring your exports comply with:</p>
          <ul>
            <li>International trade regulations</li>
            <li>Export control laws</li>
            <li>Sanctions and embargo restrictions</li>
            <li>Destination country import requirements</li>
            <li>Product-specific regulations</li>
          </ul>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>Our liability is limited to the value of the shipping costs, except where international conventions apply. We are not liable for:</p>
          <ul>
            <li>Customs delays or rejections</li>
            <li>Regulatory changes</li>
            <li>Force majeure events</li>
            <li>Customer-provided documentation errors</li>
          </ul>
        </section>

        <section>
          <h2>7. Governing Law</h2>
          <p>These terms are governed by the laws of [Your Country/Jurisdiction]. Any disputes shall be resolved in the courts of [Your City/Jurisdiction].</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;