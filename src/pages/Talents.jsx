import React from 'react';

export default function Talents() {
  const categories = [
    {
      title: "Backend Engineering",
      roles: ["Go Developers", "Java/Spring Boot Experts", "Rust Engineers", "Python/Django Developers", "Node.js Architects"],
      desc: "Scalable APIs, microservices, high-concurrency systems, and database optimization.",
      icon: "Server"
    },
    {
      title: "Frontend & Fullstack",
      roles: ["React/Next.js Pros", "Vue.js Developers", "Full Stack (MERN/PERN)", "TypeScript Specialists"],
      desc: "Pixel-perfect UIs, performance-driven web apps, and seamless user experiences.",
      icon: "Monitor"
    },
    {
      title: "Product Design (UI/UX)",
      roles: ["UI Designers", "UX Researchers", "Product Designers", "Design Systems Architects"],
      desc: "Intuitive interfaces, user-centric research, and beautiful, functional design systems.",
      icon: "PenTool"
    },
    {
      title: "Cloud & DevOps",
      roles: ["AWS Certified Solutions Architects", "Kubernetes Administrators", "CI/CD Specialists", "SREs"],
      desc: "Infrastructure as Code, automated pipelines, reliability, and cloud-native security.",
      icon: "Cloud"
    },
    {
      title: "Emerging Tech",
      roles: ["AI/ML Engineers", "Blockchain Developers", "Data Engineers", "IoT Specialists"],
      desc: "Cutting-edge solutions in artificial intelligence, decentralized finance, and big data.",
      icon: "Cpu"
    }
  ];

  return (
    <section id="talents" className="hire-section">
      <div className="hire-container">
        <div className="hire-header">
          <h2 className="section-title">Who You Can Hire</h2>
          <p className="section-subtitle">
            Access a curated network of top-tier talent from India's premier institutes (IITs).
            We vet for technical depth, communication, and product ownership.
          </p>
        </div>

        <div className="hire-grid">
          {categories.map((cat, i) => (
            <div key={i} className="hire-card">
              <div className="hire-icon-box">
                {/* Simple SVG Icon placeholder */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <h3 className="hire-card-title">{cat.title}</h3>
              <p className="hire-card-desc">{cat.desc}</p>
              
              <ul className="hire-role-list">
                {cat.roles.map((role, j) => (
                  <li key={j} className="hire-role-item">
                    <span className="hire-role-dot"></span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
