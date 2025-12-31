import React from 'react';

export default function CTA() {
  return (
    <section id="cta" style={{ padding: '120px 24px', background: 'linear-gradient(180deg, var(--slate-950), var(--slate-900))', color: 'var(--ink)', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="section-title">Ready to Build?</h2>
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>
          Whether you need a single specialist or a full dedicated team, we can have you up and running 
          with vetted talent in as little as 48 hours.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@stackzy.io&su=Stackzy%20Hire%20Inquiry&body=Hello%20Team%20Stackzy%2C%0A%0AI%27d%20like%20to%20hire%20professionals.%20Please%20reach%20out%20with%20next%20steps."
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              padding: '16px 32px', 
              background: 'var(--amber)', 
              color: '#fff', 
              borderRadius: '8px', 
              fontSize: '18px', 
              fontWeight: '600', 
              textDecoration: 'none',
              transition: 'background 0.2s'
            }}
          >
            Start Hiring
          </a>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@stackzy.io&su=Stackzy%20Consultation&body=Hello%20Team%20Stackzy%2C%0A%0AI%27d%20like%20to%20discuss%20my%20needs.%20Please%20reach%20out."
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              padding: '16px 32px', 
              background: 'transparent', 
              border: '1px solid rgba(15,23,42,0.2)', 
              color: 'var(--ink)', 
              borderRadius: '8px', 
              fontSize: '18px', 
              fontWeight: '600', 
              textDecoration: 'none',
              transition: 'background 0.2s'
            }}
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
