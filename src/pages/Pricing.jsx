import React from 'react';

export default function Pricing() {
  const plans = [
    {
      name: "Flexible",
      price: "$35 - $60",
      unit: "/ hour",
      desc: "Best for short-term projects, consultations, or when scope is fluid.",
      features: [
        "Pay only for hours worked",
        "No long-term commitment",
        "Weekly timesheets & reporting",
        "Direct communication with talent",
        "Scale up or down instantly"
      ],
      highlight: false
    },
    {
      name: "Dedicated Team",
      price: "$4,500+",
      unit: "/ month / dev",
      desc: "Ideal for long-term product development and scaling teams.",
      features: [
        "Full-time dedicated engineers",
        "Seamless integration with your team",
        "Shared Slack/Jira/Git access",
        "Monthly performance reviews",
        "Replacement guarantee"
      ],
      highlight: true
    },
    {
      name: "Project Based",
      price: "Custom",
      unit: "Fixed Price",
      desc: "For well-defined projects with clear requirements and deliverables.",
      features: [
        "Clear milestones & deliverables",
        "Fixed budget & timeline",
        "Project manager included",
        "Post-launch support period",
        "Risk-free delivery"
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" style={{ padding: '100px 24px', background: 'linear-gradient(180deg, var(--slate-950), var(--slate-900))', color: 'var(--ink)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <h2 className="section-title">Transparent Pricing</h2>
          <p className="section-subtitle">
            World-class talent at competitive rates. No hidden fees, no agencies in the middle.
            Just direct value.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'start' }}>
          {plans.map((plan, i) => (
            <div key={i} style={{ 
              background: plan.highlight ? 'var(--slate-950)' : 'var(--surface)', 
              color: plan.highlight ? 'var(--ink)' : 'var(--ink)',
              borderRadius: '16px', 
              padding: '40px 32px',
              border: plan.highlight ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 10px 24px rgba(0,0,0,0.35)',
              position: 'relative',
              transform: plan.highlight ? 'scale(1.05)' : 'none',
              zIndex: plan.highlight ? 2 : 1
            }}>
              {plan.highlight && (
                <div style={{ 
                  position: 'absolute', 
                  top: '-12px', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  background: 'var(--amber)', 
                  color: '#fff', 
                  padding: '4px 12px', 
                  borderRadius: '20px', 
                  fontSize: '12px', 
                  fontWeight: '700',
                  textTransform: 'uppercase'
                }}>
                  Most Popular
                </div>
              )}
              
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: 'var(--ink)' }}>{plan.name}</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '16px' }}>
                <span style={{ fontSize: '36px', fontWeight: '800', color: plan.highlight ? 'var(--amber)' : 'var(--rust)' }}>{plan.price}</span>
                <span style={{ fontSize: '14px', marginLeft: '8px', opacity: 0.8 }}>{plan.unit}</span>
              </div>
              <p style={{ marginBottom: '32px', opacity: 0.86, lineHeight: '1.6', minHeight: '48px', color: 'var(--ink-muted)' }}>{plan.desc}</p>
              
              <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '32px' }}></div>
              
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                {plan.features.map((feat, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', fontSize: '15px' }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '12px', flexShrink: 0 }}>
                      <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.08)"/>
                      <path d="M6 10L9 13L14 8" stroke={plan.highlight ? 'var(--amber)' : 'var(--rust)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=contact@stackzy.io&su=${encodeURIComponent(`Stackzy ${plan.name} Plan Inquiry`)}&body=${encodeURIComponent(`Hello Team Stackzy,\n\nI am interested in the ${plan.name} plan. Please reach out.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                display: 'inline-block',
                textAlign: 'center',
                textDecoration: 'none',
                width: '100%', 
                padding: '16px', 
                borderRadius: '8px', 
                background: plan.highlight ? 'var(--amber)' : 'transparent', 
                color: plan.highlight ? '#fff' : 'var(--ink)', 
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'all 0.2s ease',
                border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.18)'
              }}
              onMouseEnter={(e) => {
                if(!plan.highlight) e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                else e.currentTarget.style.background = '#1fb5e5';
              }}
              onMouseLeave={(e) => {
                if(!plan.highlight) e.currentTarget.style.background = 'transparent';
                else e.currentTarget.style.background = 'var(--amber)';
              }}
              >
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
