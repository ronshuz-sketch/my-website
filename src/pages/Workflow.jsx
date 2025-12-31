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
                 <svg x="-40" y="-40" width="20" height="20" viewBox="0 0 128 128" opacity="0.6" xmlns="http://www.w3.org/2000/svg"><g stroke="#61DAFB" fill="none" strokeWidth="8"><ellipse cx="64" cy="64" rx="45" ry="18"/><ellipse cx="64" cy="64" rx="45" ry="18" transform="rotate(60 64 64)"/><ellipse cx="64" cy="64" rx="45" ry="18" transform="rotate(120 64 64)"/></g><circle cx="64" cy="64" r="11.4" fill="#61DAFB"/></svg>
              </g>

              {/* CI/CD Node */}
              <g transform="translate(290, 200)">
                 <circle r="35" fill="#0d1117" stroke="#e6a43a" strokeWidth="2" />
                 <text x="0" y="5" textAnchor="middle" fill="#e6a43a" fontSize="10">CI/CD</text>
                 <svg x="20" y="-40" width="20" height="20" viewBox="0 0 128 128" opacity="0.6" xmlns="http://www.w3.org/2000/svg"><g fill="#181616"><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/></g></svg>
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
                <svg x="-10" y="-15" width="20" height="20" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#252f3e" d="M36.379 53.64c0 1.56.168 2.825.465 3.75.336.926.758 1.938 1.347 3.032.207.336.293.672.293.969 0 .418-.254.84-.8 1.261l-2.653 1.77c-.379.25-.758.379-1.093.379-.422 0-.844-.211-1.266-.59a13.28 13.28 0 0 1-1.516-1.98 34.153 34.153 0 0 1-1.304-2.485c-3.282 3.875-7.41 5.813-12.38 5.813-3.535 0-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086 0-3.578 1.262-6.484 3.833-8.671 2.566-2.192 5.976-3.286 10.316-3.286 1.43 0 2.902.125 4.46.336 1.56.211 3.161.547 4.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061 32.633 23.788 32 20.546 32c-1.473 0-2.988.168-4.547.547a33.416 33.416 0 0 0-4.547 1.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59 0-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586 1.18-.883 1.472-.758 3.242-1.39 5.304-1.895 2.063-.547 4.254-.8 6.57-.8 5.008 0 8.672 1.136 11.032 3.41 2.316 2.273 3.492 5.726 3.492 10.359v13.64z"/></svg>
              </g>

              {/* Data Layer */}
              <g transform="translate(90, 220)">
                <path d="M-30 -10 A30 10 0 1 1 30 -10 A30 10 0 1 1 -30 -10" fill="#1e1e1e" stroke="#e6a43a" strokeWidth="2" />
                <path d="M-30 -10 L-30 40 A30 10 0 0 0 30 40 L30 -10" fill="#1e1e1e" stroke="#e6a43a" strokeWidth="2" />
                <text x="0" y="20" textAnchor="middle" fill="#fff" fontSize="10">Data</text>
                <svg x="-10" y="-25" width="20" height="20" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.209 5.214.558 10.079 1.621 12.948 1.063 2.868 2.317 10.256 12.191 8.14 8.252-1.764 14.561-4.309 15.136-27.985"/></svg>
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
                <svg x="190" y="70" width="28" height="28" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g stroke="#61DAFB" fill="none" strokeWidth="8"><ellipse cx="64" cy="64" rx="45" ry="18"/><ellipse cx="64" cy="64" rx="45" ry="18" transform="rotate(60 64 64)"/><ellipse cx="64" cy="64" rx="45" ry="18" transform="rotate(120 64 64)"/></g><circle cx="64" cy="64" r="11.4" fill="#61DAFB"/></svg>
                <svg x="226" y="70" width="28" height="28" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"/></svg>
                <svg x="262" y="70" width="28" height="28" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.209 5.214.558 10.079 1.621 12.948 1.063 2.868 2.317 10.256 12.191 8.14 8.252-1.764 14.561-4.309 15.136-27.985"/></svg>
                <svg x="298" y="70" width="28" height="28" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#A41E11" d="M121.8 93.1c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1C49.9 92.3 13 77.4 6.3 74.2c-3.3-1.6-5-2.9-5-4.2V57.3s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9V68c0 1.3-1.5 2.7-4.9 4.5z"/></svg>
                <svg x="334" y="70" width="28" height="28" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54" d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z"/><path fill="#00AADA" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"/></svg>
                <svg x="206" y="108" width="28" height="28" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill="#486bb3"><path d="M56.484 55.098c.37.27.82.43 1.31.43 1.2 0 2.18-.95 2.23-2.13l.05-.03.75-13.26c-.9.11-1.8.26-2.7.46-4.93 1.12-9.2 3.55-12.54 6.83l10.87 7.71.03-.01zM55.034 74.528a2.218 2.218 0 00-2.58-1.69l-.02-.03-13.05 2.21a26.15 26.15 0 0010.51 13.15l5.06-12.22-.04-.05c.17-.42.23-.89.12-1.37z"/></g></svg>
                <svg x="242" y="108" width="28" height="28" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#252f3e" d="M36.379 53.64c0 1.56.168 2.825.465 3.75.336.926.758 1.938 1.347 3.032.207.336.293.672.293.969 0 .418-.254.84-.8 1.261l-2.653 1.77c-.379.25-.758.379-1.093.379-.422 0-.844-.211-1.266-.59a13.28 13.28 0 0 1-1.516-1.98 34.153 34.153 0 0 1-1.304-2.485c-3.282 3.875-7.41 5.813-12.38 5.813-3.535 0-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086 0-3.578 1.262-6.484 3.833-8.671 2.566-2.192 5.976-3.286 10.316-3.286 1.43 0 2.902.125 4.46.336 1.56.211 3.161.547 4.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061 32.633 23.788 32 20.546 32c-1.473 0-2.988.168-4.547.547a33.416 33.416 0 0 0-4.547 1.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59 0-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586 1.18-.883 1.472-.758 3.242-1.39 5.304-1.895 2.063-.547 4.254-.8 6.57-.8 5.008 0 8.672 1.136 11.032 3.41 2.316 2.273 3.492 5.726 3.492 10.359v13.64z"/></svg>
                <svg x="278" y="108" width="28" height="28" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill="#E434AA"><path d="M18.39 96.852l-4.6-2.657L65.04 5.434l4.597 2.656z"/></g></svg>
                <svg x="314" y="108" width="28" height="28" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#439934" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142"/></svg>
              </svg>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
