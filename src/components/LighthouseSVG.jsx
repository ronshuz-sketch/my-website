export default function LighthouseSVG({ className = '' }) {
  return (
    <svg
      viewBox="0 0 360 360"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0b1021" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(124,58,237,0.35)" />
          <stop offset="60%" stopColor="rgba(34,211,238,0.22)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      <rect x="0" y="0" width="360" height="360" fill="url(#bg)" />
      <circle cx="180" cy="180" r="140" fill="url(#glow)" filter="url(#soft)" />

      <g transform="translate(180,180)">
        <rect x="-70" y="-56" width="140" height="28" rx="10" fill="#0f1115" stroke="#7c3aed" strokeWidth="2" />
        <rect x="-60" y="-18" width="120" height="28" rx="10" fill="#0f1115" stroke="#22d3ee" strokeWidth="2" />
        <rect x="-50" y="20" width="100" height="28" rx="10" fill="#0f1115" stroke="#10b981" strokeWidth="2" />
        <circle cx="46" cy="-42" r="6" fill="#7c3aed" />
        <circle cx="36" cy="-4" r="6" fill="#22d3ee" />
        <circle cx="26" cy="34" r="6" fill="#10b981" />
      </g>

      <g transform="translate(180,180)">
        <circle r="80" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" />
        <circle r="120" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <g style={{ animation: 'orbit1 12s linear infinite' }}>
          <circle cx="80" cy="0" r="6" fill="#22d3ee" />
        </g>
        <g style={{ animation: 'orbit2 16s linear infinite' }}>
          <circle cx="-120" cy="0" r="7" fill="#7c3aed" />
        </g>
        <g style={{ animation: 'orbit3 20s linear infinite' }}>
          <circle cx="0" cy="120" r="5" fill="#10b981" />
        </g>
      </g>

      <g>
        <line x1="80" y1="110" x2="140" y2="160" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="280" y1="110" x2="220" y2="160" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="80" y1="250" x2="140" y2="200" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="280" y1="250" x2="220" y2="200" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      <style>{`
        @keyframes orbit1 { 
          0% { transform: rotate(0deg); } 
          100% { transform: rotate(360deg); } 
        }
        @keyframes orbit2 { 
          0% { transform: rotate(0deg); } 
          100% { transform: rotate(-360deg); } 
        }
        @keyframes orbit3 { 
          0% { transform: rotate(0deg); } 
          100% { transform: rotate(360deg); } 
        }
      `}</style>
    </svg>
  );
}

