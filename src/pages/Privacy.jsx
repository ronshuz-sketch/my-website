import React from 'react';

export default function Privacy() {
  return (
    <section style={{ padding: '100px 24px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif', color: '#1e293b' }}>
      <h1 className="section-title" style={{ marginBottom: '40px', textAlign: 'center' }}>Privacy Policy</h1>
      
      <div style={{ lineHeight: '1.8' }}>
        <p style={{ marginBottom: '20px' }}>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginTop: '40px', marginBottom: '16px' }}>1. Introduction</h2>
        <p style={{ marginBottom: '20px' }}>
          Stackzy ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
          This privacy policy will inform you as to how we look after your personal data when you visit our website 
          and tell you about your privacy rights and how the law protects you.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '600', marginTop: '40px', marginBottom: '16px' }}>2. Data We Collect</h2>
        <p style={{ marginBottom: '20px' }}>
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '20px' }}>
          <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
          <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
          <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
        </ul>

        <h2 style={{ fontSize: '24px', fontWeight: '600', marginTop: '40px', marginBottom: '16px' }}>3. How We Use Your Data</h2>
        <p style={{ marginBottom: '20px' }}>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '20px' }}>
          <li>To facilitate the hiring process between companies and talent.</li>
          <li>To manage our relationship with you.</li>
          <li>To improve our website, products/services, marketing and customer relationships.</li>
        </ul>

        <h2 style={{ fontSize: '24px', fontWeight: '600', marginTop: '40px', marginBottom: '16px' }}>4. Data Security</h2>
        <p style={{ marginBottom: '20px' }}>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '600', marginTop: '40px', marginBottom: '16px' }}>5. Contact Us</h2>
        <p style={{ marginBottom: '20px' }}>
          If you have any questions about this privacy policy or our privacy practices, please contact us at: 
          <a href="mailto:contact@stackzy.io" style={{ color: 'var(--amber)', textDecoration: 'none', fontWeight: '500' }}> contact@stackzy.io</a>.
        </p>
      </div>
    </section>
  );
}
