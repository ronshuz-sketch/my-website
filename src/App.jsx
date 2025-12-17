import React from "react";
import "./style.css";

function App() {



  return (
    <div className="app-container">

      {/* ================= NAVBAR ================= */}
<nav className="navbar navbar-animate">
  <div className="nav-left">
    <div className="icon logo-float">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="8" fill="#4F46E5" />
        <path
          d="M10 22V10H13V22H10ZM16 10H22V13H19V22H16V10Z"
          fill="white"
        />
      </svg>
    </div>

    <span className="logo-text logo-glow">ITportal</span>
  </div>

  <div className="nav-right">
    <a href="#services" className="nav-link">
      <span>Services</span>
    </a>
    <a href="#pricing" className="nav-link">
      <span>Pricing</span>
    </a>
    <a href="#how-it-works" className="nav-link">
      <span>How It Works</span>
    </a>

    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=prakhargar@iitbhilai.ac.in&su=${encodeURIComponent(
        "ITportal — Request Expert IT Team"
      )}&body=${encodeURIComponent(
        "Hello,\n\nI’m interested in hiring IT professionals through ITportal.\nPlease contact me to discuss my requirements.\n\nRegards,"
      )}`} className="nav-cta nav-cta-animate">
      Contact
    </a>
  </div>
</nav>

     {/* ================= HERO SECTION ================= */}
<section className="hero-section">
  {/* Background SVG Layers */}
  <svg
    className="hero-bg"
    width="100%"
    height="100%"
    viewBox="0 0 480 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="bgRad1" cx="0.3" cy="0.3" r="0.6">
        <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.15"/>
        <stop offset="100%" stopColor="#4F46E5" stopOpacity="0"/>
      </radialGradient>
      <radialGradient id="bgRad2" cx="0.7" cy="0.6" r="0.5">
        <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.12"/>
        <stop offset="100%" stopColor="#22D3EE" stopOpacity="0"/>
      </radialGradient>
      <radialGradient id="bgRad3" cx="0.5" cy="0.8" r="0.7">
        <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.08"/>
        <stop offset="100%" stopColor="#FBBF24" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="480" height="360" fill="url(#bgRad1)" />
    <rect width="480" height="360" fill="url(#bgRad2)" />
    <rect width="480" height="360" fill="url(#bgRad3)" />
  </svg>

  <div className="hero-content">
    <h1>
      Hire <span>IIT-Backed</span> IT Professionals <br />
      On Demand
    </h1>
    <p style={{ fontSize: "1.05rem", color: "#374151", lineHeight: "1.7" }}>
  Build faster with{" "}
  <span style={{ fontWeight: 600, color: "#111827" }}>
    pre-vetted engineers
  </span>{" "}
  or{" "}
  <span style={{ fontWeight: 600, color: "#111827" }}>
    full-stack IT teams
  </span>
  , strategically{" "}
  <span style={{ fontWeight: 600, color: "#111827" }}>
    guided by IIT experts
  </span>{" "}
  at every stage.
</p>


    <div
  className="hero-actions"
  style={{
    display: "flex",
    gap: "1rem",
    alignItems: "center"
  }}
>
  <a
    href={`https://mail.google.com/mail/?view=cm&fs=1&to=prakhargar@iitbhilai.ac.in&su=${encodeURIComponent(
        "ITportal — Request Expert IT Team"
      )}&body=${encodeURIComponent(
        "Hello,\n\nI’m interested in hiring IT professionals through ITportal.\nPlease contact me to discuss my requirements.\n\nRegards,"
      )}`}
    className="primary-btn"
    style={{
      fontSize: "16px",
      padding: "14px 28px",
      lineHeight: "1",
      transform: "none",
      scale: "1",
      maxWidth: "fit-content",
      whiteSpace: "nowrap"
    }}
  >
    Start Free Trial
  </a>

  <a
    href="#how-it-works"
    className="secondary-btn"
    style={{
      fontSize: "16px",
      padding: "14px 28px",
      lineHeight: "1",
      transform: "none",
      scale: "1",
      maxWidth: "fit-content",
      whiteSpace: "nowrap"
    }}
  >
    How It Works
  </a>
</div>


    <p style={{ fontSize: "0.95rem", color: "#166534", fontWeight: 500 }}>
  3–5 day <span style={{ fontWeight: 600 }}>no-commitment trial</span> ·{" "}
  <span style={{ fontWeight: 600 }}>Scale or exit</span> anytime
</p>

  </div>

  {/* Dashboard / Team Visual */}
  <div className="hero-visual">
    <svg
      width="480"
      height="360"
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4F46E5"/>
          <stop offset="100%" stopColor="#6366F1"/>
        </linearGradient>

        <linearGradient id="nodeGrad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4ADE80"/>
          <stop offset="100%" stopColor="#22D3EE"/>
        </linearGradient>

        <linearGradient id="nodeGrad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBBF24"/>
          <stop offset="100%" stopColor="#F43F5E"/>
        </linearGradient>

        <linearGradient id="connectionGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.6"/>
        </linearGradient>
      </defs>

      {/* Dashboard Card */}
      <rect x="70" y="60" width="340" height="220" rx="18" fill="white" stroke="#E0E7FF" strokeWidth="2"/>

      {/* Header Bars */}
      <rect x="95" y="85" width="140" height="16" rx="8" fill="#4F46E5"/>
      <rect x="250" y="88" width="90" height="10" rx="5" fill="#C7D2FE"/>

      {/* Status Pills */}
      <rect x="95" y="120" width="90" height="12" rx="6" fill="#A5B4FC"/>
      <rect x="195" y="120" width="70" height="12" rx="6" fill="#818CF8"/>
      <rect x="275" y="120" width="80" height="12" rx="6" fill="#C084FC"/>

      {/* Team Nodes */}
      <circle className="node node1" cx="135" cy="175" r="18" fill="url(#nodeGrad1)"/>
      <circle className="node node2" cx="210" cy="175" r="18" fill="url(#nodeGrad2)"/>
      <circle className="node node3" cx="285" cy="175" r="18" fill="url(#nodeGrad1)"/>
      <circle className="node node4" cx="175" cy="215" r="18" fill="url(#nodeGrad2)"/>
      <circle className="node node5" cx="250" cy="215" r="18" fill="url(#nodeGrad1)"/>

      {/* Connections */}
      <line x1="135" y1="175" x2="210" y2="175" stroke="url(#connectionGrad)" strokeWidth="2"/>
      <line x1="210" y1="175" x2="285" y2="175" stroke="url(#connectionGrad)" strokeWidth="2"/>
      <line x1="175" y1="215" x2="210" y2="175" stroke="url(#connectionGrad)" strokeWidth="2"/>
      <line x1="250" y1="215" x2="210" y2="175" stroke="url(#connectionGrad)" strokeWidth="2"/>

      {/* Monitoring Panel */}
      <rect x="310" y="170" width="70" height="50" rx="10" fill="url(#cardGrad)"/>
      <polyline
        points="320,200 330,190 345,205 360,185"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Footer Progress */}
      <rect x="95" y="250" width="210" height="10" rx="5" fill="#E0E7FF"/>
      <rect x="95" y="250" width="140" height="10" rx="5" fill="#4F46E5"/>
    </svg>
  </div>
</section>



      {/* ================= TRUST BAR ================= */}
      {/* ================= TECH LOGO MARQUEE ================= */}
<section className="tech-marquee">
  <div className="marquee-track">
    <div className="marquee-group">
      <img src="src/assets/logos/React.svg" alt="React" title="React" />
      <img src="src/assets/logos/Node.js.svg" alt="Node.js" title="Node.js" />
      <img src="src/assets/logos/MongoDB.svg" alt="MongoDB" title="MongoDB" />
      <img src="src/assets/logos/AWS.svg" alt="AWS" title="AWS" />
      <img src="src/assets/logos/Python.svg" alt="Python" title="Python" />
      <img src="src/assets/logos/Java.svg" alt="Java" title="Java" />
      <img src="src/assets/logos/Django.svg" alt="Django" title="Django" />
      <img src="src/assets/logos/Angular.svg" alt="Angular" title="Angular" />
      <img src="src/assets/logos/TypeScript.svg" alt="TypeScript" title="TypeScript" />
      <img src="src/assets/logos/Kubernetes.svg" alt="Kubernetes" title="Kubernetes" />
      <img src="src/assets/logos/Docker.svg" alt="Docker" title="Docker" />
      <img src="src/assets/logos/GraphQL.svg" alt="GraphQL" title="GraphQL" />
      <img src="src/assets/logos/HTML5.svg" alt="HTML5" title="HTML5" />
      <img src="src/assets/logos/CSS3.svg" alt="CSS3" title="CSS3" />
      <img src="src/assets/logos/Flutter.svg" alt="Flutter" title="Flutter" />
      <img src="src/assets/logos/Ruby.svg" alt="Ruby" title="Ruby" />
      <img src="src/assets/logos/Swift.svg" alt="Swift" title="Swift" />
      <img src="src/assets/logos/PostgresSQL.svg" alt="PostgreSQL" title="PostgresSQL" />
      <img src="src/assets/logos/Redis.svg" alt="Redis" title="Redis" />
      <img src="src/assets/logos/Next.js.svg" alt="Next.js" title="Next.js" />

      {/* Repeat logos for seamless infinite scrolling */}
      <img src="src/assets/logos/React.svg" alt="React" title="React" />
      <img src="src/assets/logos/Node.js.svg" alt="Node.js" title="Node.js" />
      <img src="src/assets/logos/MongoDB.svg" alt="MongoDB" title="MongoDB" />
      <img src="src/assets/logos/AWS.svg" alt="AWS" title="AWS" />
      <img src="src/assets/logos/Python.svg" alt="Python" title="Python" />
      <img src="src/assets/logos/Java.svg" alt="Java" title="Java" />
      <img src="src/assets/logos/Django.svg" alt="Django" title="Django" />
      <img src="src/assets/logos/Angular.svg" alt="Angular" title="Angular" />
      <img src="src/assets/logos/TypeScript.svg" alt="TypeScript" title="TypeScript" />
      <img src="src/assets/logos/Kubernetes.svg" alt="Kubernetes" title="Kubernetes" />
      <img src="src/assets/logos/Docker.svg" alt="Docker" title="Docker" />
      <img src="src/assets/logos/GraphQL.svg" alt="GraphQL" title="GraphQL" />
      <img src="src/assets/logos/HTML5.svg" alt="HTML5" title="HTML5" />
      <img src="src/assets/logos/CSS3.svg" alt="CSS3" title="CSS3" />
      <img src="src/assets/logos/Flutter.svg" alt="Flutter" title="Flutter" />
      <img src="src/assets/logos/Ruby.svg" alt="Ruby" title="Ruby" />
      <img src="src/assets/logos/Swift.svg" alt="Swift" title="Swift" />
      <img src="src/assets/logos/PostgresSQL.svg" alt="PostgreSQL" title="PostgresSQL" />
      <img src="src/assets/logos/Redis.svg" alt="Redis" title="Redis" />
      <img src="src/assets/logos/Next.js.svg" alt="Next.js" title="Next.js" />
    </div>
  </div>
</section>

      {/* ================= SERVICES ================= */}

   <section className="services-section" id="services">
  {/* Glowing Premium Scenery SVG */}
  <svg className="services-bg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="glowGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3"/>
        <stop offset="50%" stopColor="#6366F1" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.25"/>
      </linearGradient>
      <filter id="blurFilter" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
      </filter>
    </defs>
    {/* Animated Soft Curves */}
    <path d="M0 300 C300 150 700 450 1000 300 L1000 600 L0 600 Z" fill="url(#glowGrad1)" filter="url(#blurFilter)" className="curve1"/>
    <path d="M0 400 C400 200 600 500 1000 400 L1000 600 L0 600 Z" fill="url(#glowGrad1)" filter="url(#blurFilter)" className="curve2"/>
  </svg>

  <div className="services-content">
    <h2 className="reveal-on-scroll">What You Can Hire</h2>  

    <div className="services-grid">

      {/* Service 1 */}
      <div className="service-card reveal-on-scroll">
        <div className="service-icon">
          🌐
        </div>
        <h3>Web & App Development</h3>
        <p>MERN, React, Node, Mobile Apps</p>
      </div>

      {/* Service 2 */}
      <div className="service-card reveal-on-scroll">
        <div className="service-icon">
          🤖
        </div>
        <h3>AI / ML & Data</h3>
        <p>Model development, analytics, automation</p>
      </div>

      {/* Service 3 */}
      <div className="service-card reveal-on-scroll">
        <div className="service-icon">
          ⛓️
        </div>
        <h3>Blockchain & Web3</h3>
        <p>Smart contracts, dApps, audits</p>
      </div>

      {/* Service 4 */}
      <div className="service-card reveal-on-scroll">
        <div className="service-icon">
          ☁️
        </div>
        <h3>Cloud & DevOps</h3>
        <p>AWS, CI/CD, scalable infrastructure</p>
      </div>

      {/* Service 5 */}
      <div className="service-card reveal-on-scroll">
        <div className="service-icon">
          🔒
        </div>
        <h3>Cybersecurity</h3>
        <p>Audits, secure systems, compliance</p>
      </div>

      {/* Service 6 */}
      <div className="service-card reveal-on-scroll">
        <div className="service-icon">
          🎨
        </div>
        <h3>UI / UX & Product</h3>
        <p>Design systems, user research, creative solutions</p>
      </div>

      {/* Service 7 - New Profession */}
      <div className="service-card reveal-on-scroll">
        <div className="service-icon">
          📊
        </div>
        <h3>Data Engineering & Analytics</h3>
        <p>Data pipelines, visualization, insights</p>
      </div>
            {/* Service 8 */}
      <div className="service-card reveal-on-scroll">
        <div className="service-icon">
          💡
        </div>
        <h3>Innovation & R&D</h3>
        <p>Advanced prototypes, research-driven solutions, creative problem solving</p>
      </div>


    </div>
  </div>
</section>


     {/* ================= HOW IT WORKS ================= */}
<section className="how-it-works" id="how-it-works">
  {/* Background Premium SVG */}
  <svg className="how-bg-svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
    <path className="bg-shape" d="M0,300 C300,100 900,500 1200,300 L1200,600 L0,600 Z" fill="#E0E7FF"/>
    <path className="bg-shape" d="M0,400 C400,200 800,600 1200,400 L1200,600 L0,600 Z" fill="#C7D2FE"/>
  </svg>

  <div className="how-header reveal-on-scroll">
    <h2>How ITportal Works</h2>
    <p className="how-subtext">A simple 4-step journey to hire IIT-backed IT talent safely.</p>
  </div>

  <div className="steps-container">
    {/* Step 1 */}
    <div className="step-card reveal-on-scroll">
      <div className="step-icon">
        <svg width="36" height="36" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="30" height="28" rx="4" />
          <line x1="9" y1="10" x2="27" y2="10" />
          <line x1="9" y1="16" x2="27" y2="16" />
        </svg>
      </div>
      <span className="step-number">01</span>
      <h3>Share Requirements</h3>
      <p>Tell us exactly what you need, the role, skills, and duration.</p>
    </div>

    {/* Step 2 */}
    <div className="step-card reveal-on-scroll">
      <div className="step-icon">
        <svg width="36" height="36" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10" cy="18" r="6" />
          <circle cx="26" cy="18" r="6" />
        </svg>
      </div>
      <span className="step-number">02</span>
      <h3>Expert Assignment</h3>
      <p>We assign the IIT-backed expert who perfectly fits your project needs.</p>
    </div>

    {/* Step 3 */}
    <div className="step-card reveal-on-scroll">
      <div className="step-icon">
        <svg width="36" height="36" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="6 3 30 18 6 33 6 3" />
        </svg>
      </div>
      <span className="step-number">03</span>
      <h3>Start Free Trial</h3>
      <p>Experience 3–5 days risk-free work and see the expertise in action.</p>
    </div>

    {/* Step 4 */}
    <div className="step-card reveal-on-scroll">
      <div className="step-icon">
        <svg width="36" height="36" fill="none" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 33h30" />
          <path d="M9 25l9-9 9 9" />
        </svg>
      </div>
      <span className="step-number">04</span>
      <h3>Scale or Replace</h3>
      <p>Expand your team or replace talent easily, keeping full control.</p>
    </div>
  </div>
</section>


      {/* ================= PRICING ================= */}
<section className="pricing-section" id="pricing">

  {/* Background glow */}
  <div className="pricing-bg-glow"></div>

  <div className="pricing-header reveal">
    <h2>
      Simple, <span>Transparent</span> Pricing
    </h2>
    <p className="pricing-subtext">
      Start small. Scale anytime. Pricing varies by expertise level.
    </p>
  </div>

  <div className="pricing-grid">

    {/* GENERAL */}
    <div className="pricing-card reveal">
      <h3>General</h3>

      <div className="price-wrap">
        <span className="price">$26</span>
        <span className="price-unit">/ hour</span>
      </div>

      <p className="price-alt">for monthly commitment $840/month</p>

      <ul className="pricing-features">
  <li>✔ IIT-backed support for everyday technological needs</li>
  <li>✔ Web development with modern stacks</li>
  <li>✔ Mobile app development and maintenance</li>
  <li>✔ API integration and database management</li>
  <li>✔ Bug fixing, performance optimization, and troubleshooting</li>
  <li>✔ Routine software updates and enhancements</li>
  <li>✔ Scalable solutions for small to medium projects</li>
  <li>✔ Flexible team allocation with replacement options</li>
  <li>✔ Clear documentation and code quality assurance</li>
</ul>

      <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=prakhargar@iitbhilai.ac.in&su=${encodeURIComponent(
        "ITportal — Request Expert IT Team"
      )}&body=${encodeURIComponent(
        "Hello,\n\nI’m interested in hiring IT professionals through ITportal.\nPlease contact me to discuss my requirements.\n\nRegards,"
      )}`} className="primary-btn">
        Start Trial
      </a>
    </div>

    {/* ADVANCED */}
    <div className="pricing-card featured reveal">
      <div className="badge">Most Popular</div>

      <h3>Advanced</h3>

      <div className="price-wrap">
        <span className="price">$41</span>
        <span className="price-unit">/ hour</span>
      </div>

      <p className="price-alt">for monthly commitment $1610/month</p>

      <ul className="pricing-features">
  <li>✔ Dedicated IIT expert for high-complexity projects</li>
  <li>✔ Cutting-edge development for Web3</li>
  <li>✔ Custom architecture design and system optimization</li>
  <li>✔ Creative problem-solving for unique technical challenges</li>
  <li>✔ Advanced database structuring and cloud-native solutions</li>
  <li>✔ End-to-end innovation-driven project execution</li>
  <li>✔ Real-time debugging, performance tuning, and scaling</li>
  <li>✔ Integration of latest frameworks and technologies</li>
  <li>✔ High-quality code with maintainable architecture</li>
  <li>✔ Seamless collaboration and proactive technical guidance</li>
</ul>

      <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=prakhargar@iitbhilai.ac.in&su=${encodeURIComponent(
        "ITportal — Request Expert IT Team"
      )}&body=${encodeURIComponent(
        "Hello,\n\nI’m interested in hiring IT professionals through ITportal.\nPlease contact me to discuss my requirements.\n\nRegards,"
      )}`} className="primary-btn primary-btn-glow">
        Start Trial
      </a>
    </div>

  </div>

  <p className="trial-highlight reveal">
    ⚡ No contracts · No lock-in · Pay only if you continue
  </p>

</section>

      {/* ================= CONTACT ================= */}
<section
  className="contact-section contact-glass"
  id="contact"
  style={{
    position: "relative",
    padding: "6rem 2rem",
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(18px)",
    borderRadius: "2rem",
    overflow: "hidden",
    textAlign: "center",
    color: "#0f172a",
  }}
>
  {/* Floating SVG background */}
  <svg
    className="contact-bg"
    viewBox="0 0 600 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
  >
    <circle cx="80" cy="80" r="18" fill="#6366F1" className="float1" />
    <circle cx="520" cy="60" r="14" fill="#22D3EE" className="float2" />
    <circle cx="460" cy="220" r="20" fill="#4ADE80" className="float3" />
    <circle cx="120" cy="230" r="12" fill="#FBBF24" className="float4" />
    <line x1="80" y1="80" x2="520" y2="60" stroke="#ffffff33" strokeWidth="2"/>
    <line x1="120" y1="230" x2="460" y2="220" stroke="#ffffff33" strokeWidth="2"/>
  </svg>

  <div className="contact-content reveal" style={{ position: "relative", zIndex: 1, maxWidth: "720px", margin: "0 auto" }}>
    <h2 style={{ fontSize: "2.8rem", fontWeight: 800, marginBottom: "1rem", color: "#4F46E5", textShadow: "0 0 10px rgba(79,70,229,0.3)" }}>
      Contact an <span style={{ color: "#FBBF24", fontStyle: "italic" }}>IIT Expert</span>
    </h2>

    <p style={{
      fontSize: "1.2rem",
      fontWeight: 500,
      lineHeight: "1.8rem",
      color: "#0f172a",
      fontStyle: "italic",
      background: "linear-gradient(90deg, #4F46E5, #6366F1)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "2.5rem",
    }}>
      Discuss your requirements directly with verified <strong>IIT engineers</strong>, and get a solution roadmap within hours.
    </p>

    <a
      className="contact-btn glow-btn"
      href={`https://mail.google.com/mail/?view=cm&fs=1&to=prakhargar@iitbhilai.ac.in&su=${encodeURIComponent(
        "ITportal — Request Expert IT Team"
      )}&body=${encodeURIComponent(
        "Hello,\n\nI’m interested in hiring IT professionals through ITportal.\nPlease contact me to discuss my requirements.\n\nRegards,"
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.8rem",
        padding: "0.8rem 2rem",
        fontSize: "1rem",
        fontWeight: 700,
        borderRadius: "12px",
        background: "linear-gradient(135deg, #4F46E5, #6366F1)",
        color: "#fff",
        textDecoration: "none",
        boxShadow: "0 10px 25px rgba(79,70,229,0.35)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px) scale(1.03)"; e.currentTarget.style.boxShadow = "0 15px 40px rgba(79,70,229,0.45)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 10px 25px rgba(79,70,229,0.35)"; }}
    >
      <span>Email Us</span>
      <svg
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </a>
  </div>
</section>



      {/* ================= FOOTER ================= */}
      <footer
  className="footer"
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "3rem 4rem",
    background: "#1e293b",
    color: "#f8fafc",
    flexWrap: "wrap",
    gap: "2rem",
    borderTop: "2px solid #4f46e5",
    fontFamily: "'Poppins', sans-serif",
  }}
>
  {/* Left Section - About & Address */}
  <div
    className="footer-left"
    style={{
      maxWidth: "40%",
      minWidth: "260px",
      textAlign: "left",
      fontSize: "0.95rem",
      lineHeight: "1.6",
    }}
  >
    <strong
      style={{
        fontSize: "1.7rem",
        fontWeight: 900,
        color: "#fff",
      }}
    >
      ITportal
    </strong>
    <p style={{ margin: "0.5rem 0 1rem", color: "#d1d5db" }}>
      On‑Demand IIT‑Backed IT Talent for Every Project.
    </p>

    <div style={{ fontSize: "0.9rem", color: "#e5e7eb" }}>
      <p style={{ margin: "0.3rem 0", fontWeight: 600 }}>📍 Office Address</p>
      <p style={{ margin: "0.15rem 0" }}>Indian Institute of Technology Bhilai</p>
      <p style={{ margin: "0.15rem 0" }}>Kutelabhata Village, Durg District</p>
      <p style={{ margin: "0.15rem 0" }}>Bhilai, 491001, Chhattisgarh, India</p>
      <p style={{ margin: "0.15rem 0" }}>📧 prakhargar@iitbhilai.ac.in</p>
    </div>

    <p style={{ marginTop: "1rem", color: "#9ca3af", fontSize: "0.85rem" }}>
      ITportal is a verified IIT-backed IT solutions company, delivering quality services across web, mobile, AI, blockchain, cloud, and product design.
    </p>
  </div>

  {/* Middle Section - Quick Links */}
  <div
    className="footer-links"
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "0.8rem",
      minWidth: "180px",
      fontSize: "0.95rem",
      color: "#d1d5db",
    }}
  >
    <strong style={{ color: "#fff", marginBottom: "0.5rem" }}>Quick Links</strong>
    <a href="#services" style={{ color: "inherit", textDecoration: "none" }}>Services</a>
    <a href="#pricing" style={{ color: "inherit", textDecoration: "none" }}>Pricing</a>
    <a href="#how-it-works" style={{ color: "inherit", textDecoration: "none" }}>How It Works</a>
    <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</a>
    {/* <a href="#privacy" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</a>
    <a href="#terms" style={{ color: "inherit", textDecoration: "none" }}>Terms & Conditions</a> */}
  </div>

  {/* Right Section - Socials */}
  <div
    className="footer-right"
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      alignItems: "flex-start",
      fontSize: "1.5rem",
      color: "#dbdbdb",
      minWidth: "140px",
    }}
  >
    <strong style={{ color: "#fff", marginBottom: "0.5rem" }}>Follow Us</strong>
    <div style={{ display: "flex", gap: "1.2rem" }}>
      {/* LinkedIn */}
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
         style={{ color: "inherit", transition: "color 0.3s" }}
         onMouseEnter={(e) => (e.currentTarget.style.color = "#4f46e5")}
         onMouseLeave={(e) => (e.currentTarget.style.color = "#dbdbdb")}
      >
        <svg width="24" height="24" fill="currentColor">
          <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 8.98h4v12H3zM9 8.98h3.8v1.6h.05a4.2 4.2 0 013.8-2c4.1 0 4.8 2.7 4.8 6.2v6.2h-4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6H9z"/>
        </svg>
      </a>
      {/* Twitter */}
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
         style={{ color: "inherit", transition: "color 0.3s" }}
         onMouseEnter={(e) => (e.currentTarget.style.color = "#22d3ee")}
         onMouseLeave={(e) => (e.currentTarget.style.color = "#dbdbdb")}
      >
        <svg width="24" height="24" fill="currentColor">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012.1 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
        </svg>
      </a>
      {/* GitHub */}
      <a href="https://github.com" target="_blank" rel="noopener noreferrer"
         style={{ color: "inherit", transition: "color 0.3s" }}
         onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
         onMouseLeave={(e) => (e.currentTarget.style.color = "#dbdbdb")}
      >
        <svg width="24" height="24" fill="currentColor">
          <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.6 2.9 8.5 6.9 9.9.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.5-.7 1.8-1.1-2.2-.3-4.6-1.1-4.6-5a3.8 3.8 0 011-2.7 3.5 3.5 0 01.1-2.7s.8-.3 2.8 1a9.7 9.7 0 015 0c2-1.3 2.8-1 2.8-1 .4 1 .1 2.1.1 2.7a3.8 3.8 0 011 2.7c0 3.9-2.4 4.7-4.7 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.3 10.3 0 0022 12.3C22 6.6 17.5 2 12 2z"/>
        </svg>
      </a>
    </div>
  </div>

  {/* Bottom copyright */}
  <div
    style={{
      width: "100%",
      marginTop: "2rem",
      textAlign: "center",
      fontSize: "0.8rem",
      color: "#9ca3af",
    }}
  >
    © 2002 ITportal. All Rights Reserved.
  </div>
</footer>


    </div>
  );
}

export default App;
