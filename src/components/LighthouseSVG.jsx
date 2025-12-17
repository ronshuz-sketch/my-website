export default function LighthouseSVG({ className = '' }) {
  return (
    <svg
      viewBox="0 0 300 400"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      {/* Ocean */}
      <ellipse cx="150" cy="340" rx="150" ry="40" fill="#1e40af" opacity="0.6" />
      <path
        d="M 0 320 Q 75 300, 150 320 T 300 320 L 300 400 L 0 400 Z"
        fill="#1e40af"
        opacity="0.8"
      />

      {/* Rocks */}
      <circle cx="80" cy="350" r="20" fill="#64748b" />
      <circle cx="100" cy="355" r="15" fill="#475569" />
      <circle cx="200" cy="360" r="18" fill="#64748b" />
      <circle cx="220" cy="355" r="14" fill="#475569" />

      {/* Lighthouse Base */}
      <rect x="125" y="280" width="50" height="60" fill="#d2691e" rx="2" />
      <rect x="120" y="275" width="60" height="8" fill="#8b4513" rx="1" />

      {/* Lighthouse Tower - Red and White Stripes */}
      <rect x="130" y="140" width="40" height="140" fill="#ef2b2d" rx="3" />
      <rect x="130" y="140" width="40" height="15" fill="white" />
      <rect x="130" y="170" width="40" height="15" fill="white" />
      <rect x="130" y="200" width="40" height="15" fill="white" />
      <rect x="130" y="230" width="40" height="15" fill="white" />

      {/* Door */}
      <rect x="138" y="240" width="24" height="35" fill="#8b4513" rx="2" />
      <circle cx="160" cy="257" r="2" fill="#ffd700" />

      {/* Lighthouse Lantern Room (Top) */}
      <rect x="125" y="120" width="50" height="25" fill="#2c3e50" rx="2" />
      <rect x="123" y="118" width="54" height="4" fill="#8b4513" />

      {/* Lantern Glass */}
      <circle cx="135" cy="135" r="5" fill="#87ceeb" opacity="0.7" />
      <circle cx="150" cy="135" r="5" fill="#87ceeb" opacity="0.7" />
      <circle cx="165" cy="135" r="5" fill="#87ceeb" opacity="0.7" />

      {/* Light Rays - Animated */}
      <g opacity="0.8">
        <line
          x1="150"
          y1="130"
          x2="150"
          y2="40"
          stroke="#ffd700"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="150"
          y1="130"
          x2="220"
          y2="60"
          stroke="#ffd700"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="150"
          y1="130"
          x2="80"
          y2="60"
          stroke="#ffd700"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="150"
          y1="130"
          x2="240"
          y2="130"
          stroke="#ffd700"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="150"
          y1="130"
          x2="60"
          y2="130"
          stroke="#ffd700"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      {/* Light glow effect */}
      <circle cx="150" cy="135" r="35" fill="#ffd700" opacity="0.1" />
      <circle cx="150" cy="135" r="25" fill="#ffd700" opacity="0.15" />

      {/* Stars */}
      <circle cx="50" cy="30" r="1.5" fill="#ffffff" />
      <circle cx="90" cy="20" r="1" fill="#ffffff" />
      <circle cx="130" cy="15" r="1.5" fill="#ffffff" />
      <circle cx="220" cy="25" r="1" fill="#ffffff" />
      <circle cx="260" cy="35" r="1.5" fill="#ffffff" />
      <circle cx="270" cy="60" r="1" fill="#ffffff" />

      {/* Moon */}
      <circle cx="270" cy="80" r="25" fill="#f0f0f0" opacity="0.9" />
      <circle cx="280" cy="75" r="25" fill="#1a1a2e" />

      {/* Waves */}
      <path
        d="M 0 360 Q 20 355, 40 360 T 80 360 T 120 360 T 160 360 T 200 360 T 240 360 T 280 360 T 300 360"
        stroke="#0f3460"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M 0 375 Q 25 370, 50 375 T 100 375 T 150 375 T 200 375 T 250 375 T 300 375"
        stroke="#0f3460"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
      />

      <style>{`
        @keyframes glow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </svg>
  );
}
