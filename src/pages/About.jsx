import React from 'react';

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 24px', background: 'linear-gradient(180deg, var(--slate-950), var(--slate-900))', color: 'var(--ink)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="section-title">About Stackzy</h2>
          <p className="section-subtitle">
            Bridging the gap between ambitious global companies and India's finest engineering talent.
          </p>
        </div>

        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', color: 'var(--ink)' }}>Our Mission</h3>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--ink-muted)', marginBottom: '24px' }}>
            We believe that great software is built by great engineers, not by agencies that add layers of management and overhead. 
            Stackzy was founded by IIT alumni to provide a direct, transparent, and high-quality pathway for companies to hire 
            exceptional developers who think like product owners.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--ink-muted)' }}>
            Our rigorous vetting process ensures that every engineer in our network possesses not just technical prowess, 
            but the communication skills and reliability required for seamless remote collaboration.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
          <div style={{ padding: '32px', background: 'var(--surface)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h4 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: 'var(--rust)' }}>The IIT Advantage</h4>
            <p style={{ color: 'var(--ink-muted)', lineHeight: '1.6' }}>
              Our network is deeply rooted in the Indian Institutes of Technology (IITs), known globally for their 
              extremely selective acceptance rates (less than 1%) and rigorous engineering curriculum.
            </p>
          </div>
          <div style={{ padding: '32px', background: 'var(--surface)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h4 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: 'var(--olive)' }}>Direct Collaboration</h4>
            <p style={{ color: 'var(--ink-muted)', lineHeight: '1.6' }}>
              No middle managers. No "account managers" who don't code. You work directly with your engineers, 
              integrated into your Slack, Jira, and GitHub workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
