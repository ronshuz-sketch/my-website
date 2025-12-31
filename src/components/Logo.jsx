import React from 'react';

export default function Logo({ mode = 'word' }) {
  return (
    <div className={`logo ${mode}`}>
      <div className="logo-mark">
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g-accent" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#7c3aed"/>
              <stop offset="1" stopColor="#22d3ee"/>
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="32" height="32" rx="7" fill="url(#g-accent)"/>
          <g transform="translate(0,0)">
            <rect x="8" y="9" width="16" height="4" rx="2" fill="#ffffff" opacity="0.95"/>
            <rect x="8" y="15" width="16" height="4" rx="2" fill="#ffffff" opacity="0.85"/>
            <rect x="8" y="21" width="16" height="4" rx="2" fill="#ffffff" opacity="0.75"/>
            <path d="M22 24L26 20L26 26L22 24Z" fill="#10b981" opacity="0.95"/>
          </g>
        </svg>
      </div>
      <div className="logo-word">
        Stack<span>zy</span>
      </div>
    </div>
  );
}
