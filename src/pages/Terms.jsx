import React from 'react';

export default function Terms() {
  return (
    <section style={{ padding: '100px 24px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif', color: '#1e293b' }}>
      <h1 className="section-title" style={{ marginBottom: '40px', textAlign: 'center' }}>Terms & Conditions</h1>
      
      <div style={{ lineHeight: '1.8' }}>
        <p style={{ marginBottom: '20px' }}>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginTop: '40px', marginBottom: '16px' }}>1. Agreement to Terms</h2>
        <p style={{ marginBottom: '20px' }}>
          By accessing our website and using our services, you agree to be bound by these Terms and Conditions. 
          If you disagree with any part of the terms, then you may not access the Service.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '600', marginTop: '40px', marginBottom: '16px' }}>2. Intellectual Property</h2>
        <p style={{ marginBottom: '20px' }}>
          The Service and its original content, features, and functionality are and will remain the exclusive property of Stackzy and its licensors. 
          The Service is protected by copyright, trademark, and other laws of both India and foreign countries.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '600', marginTop: '40px', marginBottom: '16px' }}>3. Hiring & Engagement</h2>
        <p style={{ marginBottom: '20px' }}>
          Stackzy acts as a platform to connect companies with engineering talent. All engagements are subject to a separate Service Agreement 
          detailing the specific scope, rates, and duration of the engagement.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '600', marginTop: '40px', marginBottom: '16px' }}>4. Limitation of Liability</h2>
        <p style={{ marginBottom: '20px' }}>
          In no event shall Stackzy, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, 
          special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
          resulting from your access to or use of or inability to access or use the Service.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '600', marginTop: '40px', marginBottom: '16px' }}>5. Governing Law</h2>
        <p style={{ marginBottom: '20px' }}>
          These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '600', marginTop: '40px', marginBottom: '16px' }}>6. Changes</h2>
        <p style={{ marginBottom: '20px' }}>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide 
          at least 30 days notice prior to any new terms taking effect.
        </p>
      </div>
    </section>
  );
}
