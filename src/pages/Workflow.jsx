import React from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function Workflow() {
  return (
    <section className="workflow" id="workflow" style={{ padding: '80px 24px', background: 'linear-gradient(180deg, var(--slate-950), var(--slate-900))', color: 'var(--ink)' }}>
      <div className="workflow-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="section-title" style={{ color: 'var(--ink)' }}>Workflow to solution</h2>
          <p className="section-subtitle" style={{ color: 'var(--ink-muted)' }}>Signals move through reliable layers to form a quality output.</p>
        </div>
        
        <div style={{ overflowX: 'auto', paddingBottom: '40px' }}>
          <svg className="workflow-svg" viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg" style={{ minWidth: '900px', display: 'block', margin: '0 auto' }}>
            <defs>
              <filter id="glow-panel"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c84a1b" stopOpacity="0.2"/>
                <stop offset="50%" stopColor="#e6a43a" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#566529" stopOpacity="0.2"/>
              </linearGradient>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#8b949e" />
              </marker>
            </defs>
            
            {/* Background Grid */}
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#30363d" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* SECTION 1: DISCOVERY & PLANNING */}
            <g transform="translate(50, 50)">
              <rect x="0" y="0" width="180" height="400" rx="10" fill="#161b22" stroke="#30363d" />
              <text x="20" y="30" fill="#8b949e" fontSize="12" fontWeight="bold">PHASE 1: DISCOVERY</text>
              
              {/* Nodes */}
              <g transform="translate(90, 80)">
                <circle r="30" fill="#1e1e1e" stroke="#c84a1b" strokeWidth="2" />
                <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10">Vision</text>
              </g>
              <g transform="translate(90, 200)">
                <rect x="-60" y="-25" width="120" height="50" rx="4" fill="#1e1e1e" stroke="#e6a43a" strokeWidth="2" />
                <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10">Requirements</text>
              </g>
              <g transform="translate(90, 320)">
                <rect x="-60" y="-25" width="120" height="50" rx="4" fill="#1e1e1e" stroke="#566529" strokeWidth="2" />
                <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10">Architecture</text>
              </g>
              
              {/* Flows */}
              <path d="M90 110 L90 175" stroke="#8b949e" strokeWidth="1" markerEnd="url(#arrowhead)" strokeDasharray="4"/>
              <path d="M90 225 L90 295" stroke="#8b949e" strokeWidth="1" markerEnd="url(#arrowhead)" strokeDasharray="4"/>
            </g>

            {/* Connecting Phase 1 to 2 */}
            <path d="M230 250 L280 250" stroke="url(#flow-grad)" strokeWidth="2" strokeDasharray="5" />

            {/* SECTION 2: DEVELOPMENT LOOP */}
            <g transform="translate(280, 50)">
              <rect x="0" y="0" width="340" height="400" rx="10" fill="#161b22" stroke="#30363d" />
              <text x="20" y="30" fill="#8b949e" fontSize="12" fontWeight="bold">PHASE 2: ENGINEERING CYCLE</text>
              
              {/* The Loop */}
              <path d="M170 200 m-120,0 a120,120 0 1,0 240,0 a120,120 0 1,0 -240,0" fill="none" stroke="#30363d" strokeWidth="1" strokeDasharray="8 4" opacity="0.5"/>
              
              {/* Dev Node */}
              <g transform="translate(170, 80)">
                 <circle r="35" fill="#0d1117" stroke="#58a6ff" strokeWidth="2" />
                 <text x="0" y="5" textAnchor="middle" fill="#58a6ff" fontSize="10">Code</text>
                 <image href="/src/assets/logos/React.svg" x="-40" y="-40" width="20" height="20" opacity="0.6"/>
              </g>

              {/* CI/CD Node */}
              <g transform="translate(290, 200)">
                 <circle r="35" fill="#0d1117" stroke="#e6a43a" strokeWidth="2" />
                 <text x="0" y="5" textAnchor="middle" fill="#e6a43a" fontSize="10">CI/CD</text>
                 <image href="/src/assets/logos/GitHub.svg" x="20" y="-40" width="20" height="20" opacity="0.6"/>
              </g>

              {/* Test Node */}
              <g transform="translate(170, 320)">
                 <circle r="35" fill="#0d1117" stroke="#c84a1b" strokeWidth="2" />
                 <text x="0" y="5" textAnchor="middle" fill="#c84a1b" fontSize="10">Test</text>
              </g>

              {/* Review Node */}
              <g transform="translate(50, 200)">
                 <circle r="35" fill="#0d1117" stroke="#566529" strokeWidth="2" />
                 <text x="0" y="5" textAnchor="middle" fill="#566529" fontSize="10">Review</text>
              </g>

              {/* Arrows for loop */}
              <path d="M205 80 Q290 80 290 165" fill="none" stroke="#8b949e" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <path d="M290 235 Q290 320 205 320" fill="none" stroke="#8b949e" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <path d="M135 320 Q50 320 50 235" fill="none" stroke="#8b949e" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <path d="M50 165 Q50 80 135 80" fill="none" stroke="#8b949e" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            </g>

            {/* Connecting Phase 2 to 3 */}
            <path d="M620 250 L670 250" stroke="url(#flow-grad)" strokeWidth="2" strokeDasharray="5" />

            {/* SECTION 3: PRODUCTION & SCALE */}
            <g transform="translate(670, 50)">
              <rect x="0" y="0" width="180" height="400" rx="10" fill="#161b22" stroke="#30363d" />
              <text x="20" y="30" fill="#8b949e" fontSize="12" fontWeight="bold">PHASE 3: DELIVERY</text>
              
              {/* Cloud Infra */}
              <g transform="translate(90, 100)">
                <path d="M-40 0 L0 -20 L40 0 L40 40 L0 60 L-40 40 Z" fill="#1e1e1e" stroke="#58a6ff" strokeWidth="2" />
                <text x="0" y="25" textAnchor="middle" fill="#fff" fontSize="10">Cloud</text>
                <image href="/src/assets/logos/AWS.svg" x="-10" y="-15" width="20" height="20" />
              </g>

              {/* Data Layer */}
              <g transform="translate(90, 220)">
                <path d="M-30 -10 A30 10 0 1 1 30 -10 A30 10 0 1 1 -30 -10" fill="#1e1e1e" stroke="#e6a43a" strokeWidth="2" />
                <path d="M-30 -10 L-30 40 A30 10 0 0 0 30 40 L30 -10" fill="#1e1e1e" stroke="#e6a43a" strokeWidth="2" />
                <text x="0" y="20" textAnchor="middle" fill="#fff" fontSize="10">Data</text>
                <image href="/src/assets/logos/PostgresSQL.svg" x="-10" y="-25" width="20" height="20" />
              </g>

              {/* End User */}
              <g transform="translate(90, 340)">
                 <circle r="30" fill="#238636" stroke="#2ea043" strokeWidth="2" filter="url(#glow-panel)"/>
                 <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Live</text>
              </g>

              {/* Connections */}
              <line x1="90" y1="160" x2="90" y2="190" stroke="#8b949e" strokeWidth="2" />
              <line x1="90" y1="270" x2="90" y2="310" stroke="#8b949e" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            </g>

          </svg>
        </div>

        <div className="quality-banner" style={{ textAlign: 'center', margin: '60px 0' }}>
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#fff' }}>Different aspects, one quality solution</h3>
        </div>

        <div className="workflow-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <AnimateOnScroll className="wf-item">
            <div className="board-wrap" style={{ background: '#161b22', padding: '20px', borderRadius: '12px', border: '1px solid #30363d' }}>
              <h4 style={{ color: '#e6edf3', marginBottom: '16px', textAlign: 'center' }}>Structured Process</h4>
              <svg className="board-svg" viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                <rect x="12" y="12" width="396" height="216" rx="12" fill="#0f1115" stroke="#c84a1b" opacity="0.85"/>
                <g stroke="#e6a43a" strokeWidth="2" opacity="0.8">
                  <rect x="36" y="36" width="120" height="60" rx="8" fill="none" />
                  <rect x="264" y="36" width="120" height="60" rx="8" fill="none" />
                  <rect x="150" y="144" width="120" height="60" rx="8" fill="none" />
                  <path d="M156 66 H264" />
                  <path d="M96 96 V144 H150" />
                  <path d="M324 96 V144 H270" />
                </g>
              </svg>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll className="wf-item">
            <div className="engineer-wrap" style={{ background: '#161b22', padding: '20px', borderRadius: '12px', border: '1px solid #30363d' }}>
              <h4 style={{ color: '#e6edf3', marginBottom: '16px', textAlign: 'center' }}>Expert Engineering</h4>
              <svg className="engineer-svg" viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                <defs>
                  <filter id="screenGlow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                <rect x="0" y="200" width="420" height="24" fill="#5a321c" opacity="0.9" />
                <circle cx="80" cy="120" r="26" fill="#c84a1b" />
                <rect x="60" y="140" width="40" height="40" rx="8" fill="#566529" />
                <rect x="180" y="60" width="160" height="110" rx="10" fill="#0f1115" stroke="#e6a43a" className="engineer-screen" />
                <rect x="240" y="172" width="40" height="8" rx="4" fill="#c84a1b" />
                <image href="/src/assets/logos/React.svg" x="190" y="70" width="28" height="28" />
                <image href="/src/assets/logos/Node.js.svg" x="226" y="70" width="28" height="28" />
                <image href="/src/assets/logos/PostgresSQL.svg" x="262" y="70" width="28" height="28" />
                <image href="/src/assets/logos/Redis.svg" x="298" y="70" width="28" height="28" />
                <image href="/src/assets/logos/Docker.svg" x="334" y="70" width="28" height="28" />
                <image href="/src/assets/logos/Kubernetes.svg" x="206" y="108" width="28" height="28" />
                <image href="/src/assets/logos/AWS.svg" x="242" y="108" width="28" height="28" />
                <image href="/src/assets/logos/GraphQL.svg" x="278" y="108" width="28" height="28" />
                <image href="/src/assets/logos/MongoDB.svg" x="314" y="108" width="28" height="28" />
              </svg>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
