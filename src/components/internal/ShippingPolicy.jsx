import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="policy-container">
      <div className="policy-header">
        <h1>Shipping Policy</h1>
        <p>Last Updated: 08/10/2025</p>
      </div>

      <div className="policy-content">
        <section>
          <h2>1. Shipping Methods</h2>
          <p>We offer various international shipping options:</p>
          <ul>
            <li><strong>Air Freight:</strong> 3-7 business days (major destinations)</li>
            <li><strong>Ocean Freight:</strong> 20-45 business days</li>
            <li><strong>Express Courier:</strong> 2-5 business days</li>
            <li><strong>Land Transport:</strong> Regional destinations only</li>
          </ul>
        </section>

        <section>
          <h2>2. Shipping Process</h2>
          <p>Our export shipping process includes:</p>
          <ul>
            <li>Documentation review and preparation</li>
            <li>Customs compliance verification</li>
            <li>Carrier selection and booking</li>
            <li>Export declaration filing</li>
            <li>Real-time tracking provided</li>
          </ul>
        </section>

        <section>
          <h2>3. Shipping Costs</h2>
          <p>Shipping costs are calculated based on:</p>
          <ul>
            <li>Destination country</li>
            <li>Package dimensions and weight</li>
            <li>Shipping method selected</li>
            <li>Customs duties and taxes</li>
            <li>Fuel surcharges and fees</li>
          </ul>
        </section>

        <section>
          <h2>4. Delivery Timeframes</h2>
          <p>Estimated delivery times:</p>
          <ul>
            <li><strong>North America:</strong> 3-7 days (air), 15-25 days (sea)</li>
            <li><strong>Europe:</strong> 3-6 days (air), 20-30 days (sea)</li>
            <li><strong>Asia:</strong> 2-5 days (air), 10-20 days (sea)</li>
            <li><strong>Other Regions:</strong> Varies by destination</li>
          </ul>
          <p><em>Note: Customs clearance may add additional time</em></p>
        </section>

        <section>
          <h2>5. Customs and Import Duties</h2>
          <p>Recipients are responsible for:</p>
          <ul>
            <li>All import duties and taxes</li>
            <li>Customs clearance in destination country</li>
            <li>Providing required import documentation</li>
            <li>Complying with destination country regulations</li>
          </ul>
        </section>

        <section>
          <h2>6. Shipping Restrictions</h2>
          <p>We cannot ship:</p>
          <ul>
            <li>Prohibited or restricted items</li>
            <li>Hazardous materials without proper documentation</li>
            <li>Items requiring special licenses</li>
            <li>To embargoed countries</li>
          </ul>
        </section>

        <section>
          <h2>7. Tracking and Support</h2>
          <p>All shipments include tracking numbers. Our export team is available to assist with shipping inquiries at shipping@yourexportbusiness.com</p>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;