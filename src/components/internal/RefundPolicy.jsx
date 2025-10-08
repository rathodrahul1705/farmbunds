import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="policy-container">
      <div className="policy-header">
        <h1>Refund & Cancellation Policy</h1>
        <p>Last Updated: 08/10/2025</p>
      </div>

      <div className="policy-content">
        <section>
          <h2>1. Service Cancellation</h2>
          <p>Cancellation requests are accepted under the following conditions:</p>
          <ul>
            <li><strong>Before processing:</strong> Full refund available</li>
            <li><strong>After documentation started:</strong> 50% refund</li>
            <li><strong>After carrier booking:</strong> No refund available</li>
            <li><strong>Customs fees:</strong> Non-refundable once paid</li>
          </ul>
        </section>

        <section>
          <h2>2. Refund Eligibility</h2>
          <p>Refunds may be issued for:</p>
          <ul>
            <li>Service cancellation within allowed timeframe</li>
            <li>Our failure to perform contracted services</li>
            <li>Significant delays caused by our error</li>
            <li>Duplicate payments or billing errors</li>
          </ul>
        </section>

        <section>
          <h2>3. Non-Refundable Items</h2>
          <p>The following are non-refundable:</p>
          <ul>
            <li>Customs duties and government fees</li>
            <li>Carrier charges once shipment is booked</li>
            <li>Documentation preparation services</li>
            <li>Third-party service fees</li>
            <li>Expedited service upgrades</li>
          </ul>
        </section>

        <section>
          <h2>4. Export-Specific Refund Conditions</h2>
          <p>Due to the nature of export services:</p>
          <ul>
            <li>No refunds for customs rejections due to customer documentation errors</li>
            <li>No refunds for regulatory changes affecting shipment</li>
            <li>No refunds for force majeure events</li>
            <li>Shipping costs are non-refundable once shipment is in transit</li>
          </ul>
        </section>

        <section>
          <h2>5. Refund Process</h2>
          <p>To request a refund:</p>
          <ol>
            <li>Contact our customer service team</li>
            <li>Provide your export reference number</li>
            <li>Explain the reason for refund request</li>
            <li>Allow 7-10 business days for processing</li>
          </ol>
        </section>

        <section>
          <h2>6. Partial Refunds</h2>
          <p>Partial refunds may be issued for:</p>
          <ul>
            <li>Partial service non-performance</li>
            <li>Service level not met</li>
            <li>Mutually agreed service modifications</li>
          </ul>
        </section>

        <section>
          <h2>7. Contact Information</h2>
          <p>For refund requests or questions, contact:</p>
          <p>Email: refunds@yourexportbusiness.com<br />
          Phone: [Your Business Phone]<br />
          Hours: Monday-Friday, 9 AM - 5 PM [Your Timezone]</p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;