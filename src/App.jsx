import "./style.css";
import Logo from "./components/Logo";
import TechDeepDives from "./components/TechDeepDives";
import AnimateOnScroll from "./components/AnimateOnScroll";
import HeroGraphic from "./components/HeroGraphic";
import { useEffect, useState, useRef } from "react";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import Talents from "./pages/Talents";
import Tech from "./pages/Tech";
import PricingPage from "./pages/Pricing";
import CTA from "./pages/CTA";
import Workflow from "./pages/Workflow";

function Detail({ title, subtitle, items, code }) {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left"><Logo /></div>
          <ul className="nav-links">
            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a></li>
            <li><a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a></li>
            <li><a href="#talents" style={{ color: 'inherit', textDecoration: 'none' }}>Talents</a></li>
            <li><a href="#tech" style={{ color: 'inherit', textDecoration: 'none' }}>Technical deep dives</a></li>
            <li><a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</a></li>
          </ul>
          <a href={"https://mail.google.com/mail/?view=cm&fs=1&to=contact@stackzy.io&su=Stackzy%20Inquiry&body=Hello%20Team%20Stackzy%2C%0A%0AI%27d%20like%20to%20get%20started.%20Please%20reach%20out%20with%20next%20steps."} target="_blank" rel="noopener noreferrer" className="nav-cta" style={{ textDecoration: 'none' }}>Get Started</a>
        </div>
      </nav>
      <section className="talent">
        <div className="talent-container">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
          <div className="talent-grid">
            {items.map((it, i) => (
              <div key={i} className="talent-card">
                <h3>{it.heading}</h3>
                <p>{it.body}</p>
              </div>
            ))}
          </div>
          {code && (
            <div className="code-block" style={{ marginTop: '24px' }}>
              <div className="code-top">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="code-label">snippet</span>
              </div>
              <pre><code>{code}</code></pre>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function App() {
  const [route, setRoute] = useState(window.location.hash.replace("#", "") || "");
  const [scrolled, setScrolled] = useState(false);
  const howRef = useRef(null);
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace("#", ""));
    window.addEventListener("hashchange", onHash);
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const nav = (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          {(() => {
            const isHome = !route;
            const mode = isHome && !scrolled ? "word" : "merge";
            return <Logo mode={mode} />;
          })()}
        </div>
        <ul className="nav-links">
          <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a></li>
          <li><a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a></li>
          <li><a href="#talents" style={{ color: 'inherit', textDecoration: 'none' }}>Talents</a></li>
          <li><a href="#tech" style={{ color: 'inherit', textDecoration: 'none' }}>Technical deep dives</a></li>
          <li><a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</a></li>
        </ul>
        <a href={"https://mail.google.com/mail/?view=cm&fs=1&to=contact@stackzy.io&su=Stackzy%20Inquiry&body=Hello%20Team%20Stackzy%2C%0A%0AI%27d%20like%20to%20get%20started.%20Please%20reach%20out%20with%20next%20steps."} target="_blank" rel="noopener noreferrer" className="nav-cta" style={{ textDecoration: 'none' }}>Get Started</a>
      </div>
    </nav>
  );

  if (route.startsWith("hire/")) {
    const slug = route.split("/")[1];
    const map = {
      backend: {
        title: "Backend engineers",
        subtitle: "Depth in APIs, databases, performance, and reliability.",
        items: [
          { heading: "System design", body: "Clear boundaries, interfaces, modularity." },
          { heading: "Storage choices", body: "Postgres, Redis, patterns for scale." },
          { heading: "Operational health", body: "Observability, graceful degradation." },
        ],
        code: `// Go API handler with context cancellation and error boundaries
http.HandleFunc("/v1/users", func(w http.ResponseWriter, r *http.Request) {
  ctx := r.Context()
  users, err := repo.ListUsers(ctx)
  if err != nil {
    http.Error(w, "internal", http.StatusInternalServerError)
    return
  }
  json.NewEncoder(w).Encode(users)
})`,
      },
      fullstack: {
        title: "Full‑stack engineers",
        subtitle: "Frontend and backend with product thinking.",
        items: [
          { heading: "Frontend craft", body: "Accessible, fast interfaces." },
          { heading: "API shaping", body: "Stable contracts and iterations." },
          { heading: "UX loops", body: "Feedback-driven refinement." },
        ],
        code: `// React + Express wiring
app.get("/api/todos", async (req, res) => {
  const rows = await db.query("select * from todos order by created_at desc");
  res.json(rows);
});
// Frontend
useEffect(() => { fetch("/api/todos").then(r => r.json()).then(setTodos) }, [])`,
      },
      "ai-ml": {
        title: "AI & ML engineers",
        subtitle: "Pipelines, models, and applied machine learning.",
        items: [
          { heading: "Data pipelines", body: "Ingestion, cleaning, monitoring." },
          { heading: "Modeling", body: "Training, evaluation, reproducibility." },
          { heading: "Serving", body: "Efficient inference and versioning." },
        ],
        code: `# PyTorch inference
model.eval()
with torch.no_grad():
  x = torch.tensor(batch).to(device)
  y = model(x)
  probs = torch.softmax(y, dim=1)`,
      },
      blockchain: {
        title: "Blockchain engineers",
        subtitle: "Smart contracts, protocol work, and security.",
        items: [
          { heading: "Contracts", body: "Safety, audits, testing." },
          { heading: "Protocols", body: "Integration and performance." },
          { heading: "Security", body: "Threat modeling and hardening." },
        ],
        code: `// Solidity snippet
pragma solidity ^0.8.20;
contract Vault { mapping(address=>uint) bal; 
  function deposit() external payable { bal[msg.sender] += msg.value; }
  function balanceOf(address a) external view returns(uint){ return bal[a]; }
}`,
      },
      "cloud-devops": {
        title: "Cloud & DevOps",
        subtitle: "CI/CD, Kubernetes, observability, infrastructure automation.",
        items: [
          { heading: "Pipelines", body: "Reliable delivery and rollbacks." },
          { heading: "Kubernetes", body: "Practical deployments and ops." },
          { heading: "Observability", body: "Tracing, metrics, logs." },
        ],
        code: `# GitHub Actions CI
name: ci
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci && npm test`,
      },
      cybersecurity: {
        title: "Cybersecurity",
        subtitle: "Threat modeling, audits, secure coding, incident response.",
        items: [
          { heading: "Audits", body: "Static/dynamic checks and reviews." },
          { heading: "Practices", body: "Least privilege and safe defaults." },
          { heading: "Response", body: "Preparedness and playbooks." },
        ],
        code: `// Express helmet and rate limit
import helmet from "helmet";
import rateLimit from "express-rate-limit";
app.use(helmet());
app.use(rateLimit({ windowMs: 60000, max: 120 }));`,
      },
      "ui-ux": {
        title: "UI / UX",
        subtitle: "User research, interaction design, prototyping, systems.",
        items: [
          { heading: "Research", body: "Discovery, interviews, synthesis." },
          { heading: "Design", body: "Flows, components, accessibility." },
          { heading: "Prototypes", body: "Validate assumptions early." },
        ],
        code: `/* CSS focus ring and reduced motion */
button:focus { outline: 3px solid #10a37f; outline-offset: 3px; }
@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }`,
      },
      data: {
        title: "Data engineers & analysts",
        subtitle: "ETL, warehousing, analytics, dashboards, reliable ops.",
        items: [
          { heading: "ETL", body: "Reliable ingestion and transformations." },
          { heading: "Warehouse", body: "Modeling and performance." },
          { heading: "Analytics", body: "Dashboards and decisions." },
        ],
        code: `# Python ETL outline
for row in source:
  cleaned = normalize(row)
  sink.write(cleaned)`,
      },
      innovation: {
        title: "Innovation & R&D",
        subtitle: "Exploration, prototypes, feasibility studies, spikes.",
        items: [
          { heading: "Exploration", body: "Goal-driven discovery work." },
          { heading: "Prototypes", body: "Cut risk with focused proofs." },
          { heading: "Feasibility", body: "Scope, constraints, tradeoffs." },
        ],
        code: `// Feature flag stub
function enabled(flag) { return process.env['FF_'+flag] === 'on' }`,
      },
      "qa-testing": {
        title: "QA & Testing",
        subtitle: "Automation, CI integration, and resilient releases.",
        items: [
          { heading: "Automation", body: "Coverage, speed, reliability." },
          { heading: "Integration", body: "CI, gates, and quality bars." },
          { heading: "Resilience", body: "Safety nets and rollbacks." },
        ],
        code: `// Jest sample
test("adds", () => { expect(1+2).toBe(3) })`,
      },
    };
    const cfg = map[slug];
    if (cfg) return <Detail title={cfg.title} subtitle={cfg.subtitle} items={cfg.items} code={cfg.code} />;
  }

  if (route.startsWith("mindset/")) {
    const slug = route.split("/")[1];
    const map = {
      "global-network": {
        title: "Global network",
        subtitle: "Topology-aware designs and practical scaling patterns.",
        items: [
          { heading: "Boundaries", body: "APIs that respect latency and failure." },
          { heading: "Replication", body: "Data layouts for global reach." },
          { heading: "Caching", body: "Reduce load with right TTLs." },
        ],
      },
      "robust-code": {
        title: "Robust code",
        subtitle: "Error handling and boundaries that keep systems healthy.",
        items: [
          { heading: "Contracts", body: "Explicit inputs and outputs." },
          { heading: "Fallbacks", body: "Graceful degradation paths." },
          { heading: "Testing", body: "Meaningful coverage and checks." },
        ],
      },
    };
    const cfg = map[slug];
    if (cfg) return <Detail title={cfg.title} subtitle={cfg.subtitle} items={cfg.items} />;
  }

  if (route.startsWith("trust/")) {
    const slug = route.split("/")[1];
    const map = {
      evaluation: {
        title: "IIT-linked evaluation mindset",
        subtitle: "Fundamentals, reasoning, and decision-making over buzzwords.",
        items: [
          { heading: "Depth", body: "Strong core understanding and clarity." },
          { heading: "Judgment", body: "Practical choices under constraints." },
          { heading: "Ownership", body: "Responsible, long-term thinking." },
        ],
      },
      selective: {
        title: "Selective by design",
        subtitle: "Fit and depth prioritized over scale.",
        items: [
          { heading: "Signal", body: "High-quality matches and trust." },
          { heading: "Continuity", body: "Stable relationships and outcomes." },
          { heading: "Consistency", body: "Quality that compounds." },
        ],
      },
      "direct-collab": {
        title: "Direct collaboration",
        subtitle: "Work directly with the engineer doing the work.",
        items: [
          { heading: "No layers", body: "Reduce gaps and speed decisions." },
          { heading: "Clarity", body: "Aligned goals and expectations." },
          { heading: "Focus", body: "Time spent building, not pitching." },
        ],
      },
    };
    const cfg = map[slug];
    if (cfg) return <Detail title={cfg.title} subtitle={cfg.subtitle} items={cfg.items} />;
  }
  if (route === "privacy") {
    return (<><>{nav}</><Privacy /></>);
  }
  if (route === "terms") {
    return (<><>{nav}</><Terms /></>);
  }
  if (route === "about") {
    return (<><>{nav}</><About /></>);
  }
  if (route === "talents") {
    return (<><>{nav}</><Talents /></>);
  }
  if (route === "tech") {
    return (<><>{nav}</><Tech /></>);
  }
  if (route === "pricing") {
    return (<><>{nav}</><PricingPage /></>);
  }
  if (route === "cta") {
    return (<><>{nav}</><CTA /></>);
  }
  const SHOW_WORKFLOW = false;
  const SHOW_VISUALS = false;
  const SHOW_TRUST = false;
  const SHOW_MERGE = false;
  const SHOW_ENGINEERS = false;
  return (
    <>
      {nav}

      <section className="hero">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-eyebrow">
                Trusted IIT-backed engineering network
              </p>
              <h1 className="hero-title">
                Hire reliable IT professionals <br />
                who focus on building, not pitching
              </h1>
              <p className="hero-subtitle">
                Stackzy connects you with carefully evaluated engineers backed by
                IIT experience. Clear communication, practical execution, and
                long-term thinking, without the agency noise.
              </p>
              <div className="hero-actions">
                <a
                  href={
                    "https://mail.google.com/mail/?view=cm&fs=1&to=contact@stackzy.io"
                    + "&su=" + encodeURIComponent("Stackzy Hire Professionals")
                    + "&body=" + encodeURIComponent(
                      [
                        "Hello Team Stackzy,",
                        "",
                        "I’d like to hire professionals for my project. Here are the details:",
                        "",
                        "• Company: ",
                        "• Contact Name: ",
                        "• Email / Phone: ",
                        "",
                        "Project Overview:",
                        "- What we’re building: ",
                        "- Goals/outcomes: ",
                        "",
                        "Key Technologies (if known): ",
                        "Timeline:",
                        "- Start date: ",
                        "- Milestones: ",
                        "- Target launch: ",
                        "",
                        "Budget Range:",
                        "- Hourly or monthly preference: ",
                        "- Range: ",
                        "",
                        "Collaboration:",
                        "- Tools we use (Slack/Jira/GitHub): ",
                        "- Timezone preferences: ",
                        "",
                        "Please share the next steps and suitable engineer profiles.",
                        "",
                        "Thanks."
                      ].join("\n")
                    )
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn"
                >
                  Hire professionals
                </a>
                <a
                  href={
                    "https://mail.google.com/mail/?view=cm&fs=1&to=contact@stackzy.io"
                    + "&su=" + encodeURIComponent("Stackzy Discuss Needs")
                    + "&body=" + encodeURIComponent(
                      [
                        "Hello Team Stackzy,",
                        "",
                        "I’d like to discuss my requirements and get recommendations.",
                        "",
                        "Context:",
                        "- Current product / idea: ",
                        "- Primary objectives: ",
                        "",
                        "Scope & Skills Needed (if known): ",
                        "- Backend / Frontend / Full‑stack / DevOps / AI/ML: ",
                        "",
                        "Timeline & Budget:",
                        "- Start date: ",
                        "- Duration: ",
                        "- Budget range: ",
                        "",
                        "Logistics:",
                        "- Preferred communication tools: ",
                        "- Timezone: ",
                        "",
                        "Please advise on next steps and share how we should approach this engagement.",
                        "",
                        "Thanks."
                      ].join("\n")
                    )
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn"
                >
                  Discuss your needs
                </a>
              </div>
            </div>
            <div className="hero-right">
              <HeroGraphic />
            </div>
          </div>
        </div>
      </section>

      

      <div className="brand-bar">
        <div className="brand-container">
          <div className="brand-track">
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.[...snip...]"/></g></svg>
              <span>React</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"/></svg>
              <span>Node.js</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z"/><path fill="#00AADA" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"/></svg>
              <span>Docker</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill="#486bb3"><path d="M56.484 55.098c.37.27.82.43 1.31.43 1.2 0 2.18-.95 2.23-2.13l.05-.03.75-13.26c-.9.11-1.8.26-2.7.46-4.93 1.12-9.2 3.55-12.54 6.83l10.87 7.71.03-.01zM55.034 74.528a2.218 2.218 0 00-2.58-1.69l-.02-.03-13.05 2.21a26.15 26.15 0 0010.51 13.15l5.06-12.22-.04-.05c.17-.42.23-.89.12-1.37z"/></g></svg>
              <span>Kubernetes</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/></g></svg>
              <span>GitHub</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#006bff" d="M128 3.83 48.72 22.547 36.977 124.17ZM39.464 24.264 0 33.167l35.658 90.604Z"/></svg>
              <span>Vite</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969z"/></svg>
              <span>Java</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/></svg>
              <span>HTML5</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/></svg>
              <span>CSS3</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129z"/><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5z"/><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5z"/><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67z"/><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5z"/></svg>
              <span>Figma</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#f58220" d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76z"/></svg>
              <span>Firebase</span>
            </div>
            {/* duplicate for seamless scroll */}
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8z"/></g></svg>
              <span>React</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"/></svg>
              <span>Node.js</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z"/><path fill="#00AADA" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"/></svg>
              <span>Docker</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill="#486bb3"><path d="M56.484 55.098c.37.27.82.43 1.31.43 1.2 0 2.18-.95 2.23-2.13l.05-.03.75-13.26c-.9.11-1.8.26-2.7.46-4.93 1.12-9.2 3.55-12.54 6.83l10.87 7.71.03-.01zM55.034 74.528a2.218 2.218 0 00-2.58-1.69l-.02-.03-13.05 2.21a26.15 26.15 0 0010.51 13.15l5.06-12.22-.04-.05c.17-.42.23-.89.12-1.37z"/></g></svg>
              <span>Kubernetes</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/></g></svg>
              <span>GitHub</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#006bff" d="M128 3.83 48.72 22.547 36.977 124.17ZM39.464 24.264 0 33.167l35.658 90.604Z"/></svg>
              <span>Vite</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/></svg>
              <span>HTML5</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/></svg>
              <span>CSS3</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129z"/><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5z"/><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5z"/><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67z"/><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5z"/></svg>
              <span>Figma</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#f58220" d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76z"/></svg>
              <span>Firebase</span>
            </div>
          </div>
          <div className="brand-track rev" style={{ marginTop: 18 }}>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.209 5.214.558 10.079 1.621 12.948 1.063 2.868 2.317 10.256 12.191 8.14 8.252-1.764 14.561-4.309 15.136-27.985"/></svg>
              <span>PostgreSQL</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#A41E11" d="M121.8 93.1c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1S13 98.1 6.3 94.9c-3.3-1.6-5-2.9-5-4.2V78s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c0 1.3-1.5 2.7-4.9 4.4z"/></svg>
              <span>Redis</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#252f3e" d="M36.379 53.64c0 1.56.168 2.825.465 3.75.336.926.758 1.938 1.347 3.032.207.336.293.672.293.969 0 .418-.254.84-.8 1.261l-2.653 1.77c-.379.25-.758.379-1.093.379-.422 0-.844-.211-1.266-.59a13.28 13.28 0 0 1-1.516-1.98 34.153 34.153 0 0 1-1.304-2.485c-3.282 3.875-7.41 5.813-12.38 5.813-3.535 0-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086 0-3.578 1.262-6.484 3.833-8.671 2.566-2.192 5.976-3.286 10.316-3.286 1.43 0 2.902.125 4.46.336 1.56.211 3.161.547 4.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061 32.633 23.788 32 20.546 32c-1.473 0-2.988.168-4.547.547a33.416 33.416 0 0 0-4.547 1.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59 0-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586 1.18-.883 1.472-.758 3.242-1.39 5.304-1.895 2.063-.547 4.254-.8 6.57-.8 5.008 0 8.672 1.136 11.032 3.41 2.316 2.273 3.492 5.726 3.492 10.359v13.64z"/></svg>
              <span>AWS</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="azure-a" x1="60.919" y1="9.602" x2="18.667" y2="134.423" gradientUnits="userSpaceOnUse"><stop stop-color="#114A8B"/><stop offset="1" stop-color="#0669BC"/></linearGradient></defs><path d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 01-6.146 4.413H6.733a6.482 6.482 0 01-5.262-2.699 6.474 6.474 0 01-.876-5.848L39.944 4.414A6.488 6.488 0 0146.09 0z" fill="url(#azure-a)"/></svg>
              <span>Azure</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#6AD7E5" d="M29.3 26.4c-13.6-3.8-3.5-21.1 7.4-14l-7.4 14z"/></svg>
              <span>Go</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M62.96.242c-.232.135-1.203 1.528-2.16 3.097-2.4 3.94-2.426 3.942-5.65.549-2.098-2.207-2.605-2.611-3.28-2.606-.44.002-.995.152-1.235.332-.239.18-.916 1.612-1.504 3.183-1.346 3.6-1.41 3.715-2.156 3.859-.46.087-1.343-.406-3.463-1.928-1.565-1.125-3.1-2.045-3.411-2.045-1.291 0-1.655.706-2.27 4.4-.78 4.697-.754 4.681-4.988 2.758-1.71-.776-3.33-1.411-3.603-1.411-.274 0-.792.294-1.15.653-.652.652-.653.655-.475 4.246l.178 3.595-.68.364c-.602.322-1.017.283-3.684-.348-3.48-.822-4.216-.8-4.92.15l-.516.693.692 2.964c.38 1.63.745 3.2.814 3.487.067.287-.05.746-.26 1.02-.348.448-.717.489-3.939.44-5.453-.086-5.762.382-3.51 5.3.717 1.56 1.304 2.979 1.304 3.149 0 .899-.717 1.225-3.794 1.728-1.722.28-3.218.51-3.326.51-.107 0-.43.235-.717.522-.937.936-.671 1.816 1.453 4.814 2.646 3.735 2.642 3.749-1.73 5.421-4.971 1.902-5.072 2.37-1.287 5.96 3.525 3.344 3.53 3.295-.461 5.804C.208 62.8.162 62.846.085 63.876c-.093 1.253-.071 1.275 3.538 3.48 3.57 2.18 3.57 2.246.067 5.56C-.078 76.48.038 77 5.013 78.877c4.347 1.64 4.353 1.66 1.702 5.394-1.502 2.117-1.981 2.999-1.981 3.653 0 1.223.637 1.535 4.441 2.174 3.205.54 3.919.857 3.919 1.741 0 .182-.588 1.612-1.307 3.177-2.236 4.87-1.981 5.275 3.311 5.275 4.929 0 4.798-.15 3.736 4.294-.8 3.35-.813 3.992-.088 4.715.554.556 1.6.494 4.87-.289 2.499-.596 2.937-.637 3.516-.328l.661.354-.178 3.594c-.178 3.593-.177 3.595.475 4.248.358.359.884.652 1.165.652.282 0 1.903-.631 3.604-1.404 4.22-1.916 4.194-1.932 4.973 2.75.617 3.711.977 4.4 2.294 4.4.327 0 1.83-.88 3.34-1.958 2.654-1.893 3.342-2.19 4.049-1.74.182.115.89 1.67 1.572 3.455"/></svg>
              <span>Rust</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#439934" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142"/></svg>
              <span>MongoDB</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill="#E434AA"><path d="M18.39 96.852l-4.6-2.657L65.04 5.434l4.597 2.656z"/></g></svg>
              <span>GraphQL</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M77.941 44.5v36.836L46.324 62.918V26.082z" fill="#5c4ee5"/></g></svg>
              <span>Terraform</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#ea4535" d="M80.6 40.3h.4l-.2-.2 14-14v-.3c-11.8-10.4-28.1-14-43.2-9.5"/></svg>
              <span>GCP</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#FAAE40" d="M101.542 60.275c-.4 0-.836 0-1.236.036-.291 0-.545.218-.654.509l-1.744 6.069"/></svg>
              <span>Cloudflare</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#231f20" d="M86.758 70.89c-4.992 0-9.465 2.208-12.528 5.68l-7.851-5.547"/></svg>
              <span>Kafka</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#343741" d="M4 64c0 5.535.777 10.879 2.098 16H84c8.836 0 16-7.164 16-16"/></svg>
              <span>Elasticsearch</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#ff6600" d="M119.517 51.188H79.291a3.641 3.641 0 0 1-3.64-3.642V5.62"/></svg>
              <span>RabbitMQ</span>
            </div>
            {/* duplicate for seamless scroll */}
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.209 5.214.558 10.079 1.621 12.948 1.063 2.868 2.317 10.256 12.191 8.14 8.252-1.764 14.561-4.309 15.136-27.985"/></svg>
              <span>PostgreSQL</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#A41E11" d="M121.8 93.1c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1C49.9 92.3 13 77.4 6.3 74.2c-3.3-1.6-5-2.9-5-4.2V57.3s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9V68c0 1.3-1.5 2.7-4.9 4.5z"/></svg>
              <span>Redis</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#252f3e" d="M36.379 53.64c0 1.56.168 2.825.465 3.75.336.926.758 1.938 1.347 3.032.207.336.293.672.293.969 0 .418-.254.84-.8 1.261l-2.653 1.77c-.379.25-.758.379-1.093.379-.422 0-.844-.211-1.266-.59a13.28 13.28 0 0 1-1.516-1.98 34.153 34.153 0 0 1-1.304-2.485c-3.282 3.875-7.41 5.813-12.38 5.813-3.535 0-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086 0-3.578 1.262-6.484 3.833-8.671 2.566-2.192 5.976-3.286 10.316-3.286 1.43 0 2.902.125 4.46.336 1.56.211 3.161.547 4.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061 32.633 23.788 32 20.546 32c-1.473 0-2.988.168-4.547.547a33.416 33.416 0 0 0-4.547 1.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59 0-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586 1.18-.883 1.472-.758 3.242-1.39 5.304-1.895 2.063-.547 4.254-.8 6.57-.8 5.008 0 8.672 1.136 11.032 3.41 2.316 2.273 3.492 5.726 3.492 10.359v13.64z"/></svg>
              <span>AWS</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="azure-a" x1="60.919" y1="9.602" x2="18.667" y2="134.423" gradientUnits="userSpaceOnUse"><stop stop-color="#114A8B"/><stop offset="1" stop-color="#0669BC"/></linearGradient></defs><path d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 01-6.146 4.413H6.733a6.482 6.482 0 01-5.262-2.699 6.474 6.474 0 01-.876-5.848L39.944 4.414A6.488 6.488 0 0146.09 0z" fill="url(#azure-a)"/></svg>
              <span>Azure</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#6AD7E5" d="M29.3 26.4c-13.6-3.8-3.5-21.1 7.4-14l-7.4 14z"/></svg>
              <span>Go</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M62.96.242c-.232.135-1.203 1.528-2.16 3.097-2.4 3.94-2.426 3.942-5.65.549-2.098-2.207-2.605-2.611-3.28-2.606-.44.002-.995.152-1.235.332-.239.18-.916 1.612-1.504 3.183-1.346 3.6-1.41 3.715-2.156 3.859-.46.087-1.343-.406-3.463-1.928-1.565-1.125-3.1-2.045-3.411-2.045-1.291 0-1.655.706-2.27 4.4-.78 4.697-.754 4.681-4.988 2.758-1.71-.776-3.33-1.411-3.603-1.411-.274 0-.792.294-1.15.653-.652.652-.653.655-.475 4.246l.178 3.595-.68.364c-.602.322-1.017.283-3.684-.348-3.48-.822-4.216-.8-4.92.15l-.516.693.692 2.964c.38 1.63.745 3.2.814 3.487.067.287-.05.746-.26 1.02-.348.448-.717.489-3.939.44-5.453-.086-5.762.382-3.51 5.3.717 1.56 1.304 2.979 1.304 3.149 0 .899-.717 1.225-3.794 1.728-1.722.28-3.218.51-3.326.51-.107 0-.43.235-.717.522-.937.936-.671 1.816 1.453 4.814 2.646 3.735 2.642 3.749-1.73 5.421-4.971 1.902-5.072 2.37-1.287 5.96 3.525 3.344 3.53 3.295-.461 5.804C.208 62.8.162 62.846.085 63.876c-.093 1.253-.071 1.275 3.538 3.48"/></svg>
              <span>Rust</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#439934" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142"/></svg>
              <span>MongoDB</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill="#E434AA"><path d="M18.39 96.852l-4.6-2.657L65.04 5.434l4.597 2.656z"/></g></svg>
              <span>GraphQL</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M77.941 44.5v36.836L46.324 62.918V26.082z" fill="#5c4ee5"/></g></svg>
              <span>Terraform</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#ea4535" d="M80.6 40.3h.4l-.2-.2 14-14v-.3c-11.8-10.4-28.1-14-43.2-9.5"/></svg>
              <span>GCP</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#FAAE40" d="M101.542 60.275c-.4 0-.836 0-1.236.036-.291 0-.545.218-.654.509l-1.744 6.069"/></svg>
              <span>Cloudflare</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#231f20" d="M86.758 70.89c-4.992 0-9.465 2.208-12.528 5.68l-7.851-5.547"/></svg>
              <span>Kafka</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#343741" d="M4 64c0 5.535.777 10.879 2.098 16H84c8.836 0 16-7.164 16-16"/></svg>
              <span>Elasticsearch</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#ff6600" d="M119.517 51.188H79.291a3.641 3.641 0 0 1-3.64-3.642V5.62"/></svg>
              <span>RabbitMQ</span>
            </div>
          </div>
          <div className="brand-track" style={{ marginTop: 18 }}>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#f05138" d="M126.33 34.06a39.32 39.32 0 00-.79-7.83 28.78 28.78 0 00-2.65-7.58 28.84 28.84 0 00-4.76-6.32 23.42 23.42 0 00-6.62-4.55 27.27 27.27 0 00-7.68-2.53c-2.65-.51-5.56-.51-8.21-.76H30.25a45.46 45.46 0 00-6.09.51 21.82 21.82 0 00-5.82 1.52c-.53.25-1.32.51-1.85.76a33.82 33.82 0 00-5 3.28c-.53.51-1.06.76-1.59 1.26a22.41 22.41 0 00-4.76 6.32 23.61 23.61 0 00-2.65 7.58 78.5 78.5 0 00-.79 7.83v60.39a39.32 39.32 0 00.79 7.83 28.78 28.78 0 002.65 7.58 28.84 28.84 0 004.76 6.32 23.42 23.42 0 006.62 4.55 27.27 27.27 0 007.68 2.53c2.65.51 5.56.51 8.21.76h63.22a45.08 45.08 0 008.21-.76 27.27 27.27 0 007.68-2.53 30.13 30.13 0 006.62-4.55 22.41 22.41 0 004.76-6.32 23.61 23.61 0 002.65-7.58 78.49 78.49 0 00.79-7.83V34.06z"/></svg>
              <span>Swift</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="kot-a" x1="500.003" x2="-.097" y1="579.106" y2="1079.206" gradientTransform="translate(15.534 -96.774) scale(.1939)" gradientUnits="userSpaceOnUse"><stop offset=".003" stop-color="#e44857"/><stop offset=".469" stop-color="#c711e1"/><stop offset="1" stop-color="#7f52ff"/></linearGradient></defs><path fill="url(#kot-a)" d="M112.484 112.484H15.516V15.516h96.968L64 64Z"/></svg>
              <span>Kotlin</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill="#3FB6D3"><path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"/></g><path fill="#27AACD" d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z"/><path fill="#19599A" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"/></svg>
              <span>Flutter</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="azure-a2" x1="60.919" y1="9.602" x2="18.667" y2="134.423" gradientUnits="userSpaceOnUse"><stop stop-color="#114A8B"/><stop offset="1" stop-color="#0669BC"/></linearGradient></defs><path d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 01-6.146 4.413H6.733a6.482 6.482 0 01-5.262-2.699 6.474 6.474 0 01-.876-5.848L39.944 4.414A6.488 6.488 0 0146.09 0z" fill="url(#azure-a2)"/></svg>
              <span>Azure</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M24.5 50.5c-1.5 0-2.5 1.2-2.5 2.7v14.1l-15.9-16c-.8-.8-2.2-1-3.2-.6S1 52.1 1 53.2v20.7c0 1.5 1.5 2.7 3 2.7s3-1.2 3-2.7V59.8l16.1 16c.5.5 1.2.8 1.9.8.3 0 .4-.1.7-.2 1-.4 1.3-1.4 1.3-2.5V53.3c0-1.5-1-2.8-2.5-2.8zm19.7 11.8c-1.4 0-2.7 1.4-2.7 2.8s1.3 2.8 2.7 2.8l6.6.4-1.5 3.7h-8.5l-4.2-7.9 4.3-8.1H50l2.1 4h5.5L54 52.1l-.8-1.1H37.6l-.7 1.2L31 62.5l-.7 1.3.7 1.3 5.8 10.3.8 1.6h15.1l.7-1.7 4.3-9 1.9-4.3h-4.4l-11 .3zM65 50.5c-1.4 0-3 1.3-3 2.7V60h6v-6.7c0-1.5-1.6-2.8-3-2.8zm30.4.3c-1-.4-2.4-.2-3.1.6L76 67.4V53.3c0-1.5-1-2.7-2.5-2.7S71 51.8 71 53.3V74c0 1.1.7 2.1 1.7 2.5.3.1.7.2 1 .2.7 0 1.6-.3 2.1-.8l16.2-16V74c0 1.5 1 2.7 2.5 2.7S97 75.5 97 74V53.3c0-1.1-.6-2.1-1.6-2.5zm21.8 12.8l8.4-8.4c1.1-1.1 1.1-2.8 0-3.8-1.1-1.1-2.8-1.1-3.8 0l-8.4 8.4-8.4-8.4c-1.1-1.1-2.8-1.1-3.8 0-1.1 1.1-1.1 2.8 0 3.8l8.4 8.4-8.4 8.4c-1.1 1.1-1.1 2.8 0 3.8.5.5 1.2.8 1.9.8s1.4-.3 1.9-.8l8.4-8.4 8.4 8.4c.5.5 1.2.8 1.9.8s1.4-.3 1.9-.8c1.1-1.1 1.1-2.8 0-3.8l-8.4-8.4zM62 73.9c0 1.4 1.5 2.7 3 2.7 1.4 0 3-1.3 3-2.7V62h-6v11.9z" fill="#090"/></svg>
              <span>Nginx</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M 110.43093,16.935847 C 98.552474,-0.076153 75.089104,-5.118154 58.130818,5.695846 l -29.793,19.000001 c -4.030441,2.529 -7.488786,5.871 -10.15468,9.814 -2.665895,3.943 -4.479469,8.399 -5.325138,13.083 a 25.478172,30.64 0 0 0 -0.572094,6.396 c 0.0183,5.831 1.446866,11.571 4.163485,16.729995 -2.546986,3.87201 -4.285721,8.22 -5.110602,12.78201 a 25.347621,30.483 0 0 0 0.345086,14.41199 c 1.072679,4.732998 3.078336,9.203998 5.900559,13.151998 11.877618,17.011 35.393374,22.053 52.299272,11.24 l 29.762238,-19.001 c 4.027946,-2.532 7.482126,-5.877998 10.141386,-9.824998 2.65841,-3.947 4.46282,-8.40699 5.29686,-13.093 0.3825,-2.107 0.57458,-4.244 0.5721,-6.386 -0.007,-5.81999 -1.41778,-11.550995 -4.11194,-16.708995 2.54616,-3.869 4.28489,-8.213 5.11143,-12.771 0.36921,-2.109 0.55713,-4.245 0.56212,-6.386 0.002,-7.595 -2.37152,-15 -6.78697,-21.178 z" fill="#ff3e00"/></svg>
              <span>Svelte</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#092e20" d="M59.448 0h20.93v96.88c-10.737 2.04-18.62 2.855-27.181 2.855-25.551-.001-38.87-11.551-38.87-33.705 0-21.338 14.135-35.2 36.015-35.2 3.398 0 5.98.272 9.106 1.087zm0 48.765c-2.446-.815-4.485-1.086-7.067-1.086-10.6 0-16.717 6.523-16.717 17.939 0 11.145 5.845 17.26 16.582 17.26 2.309 0 4.212-.136 7.202-.542z"/></svg>
              <span>Django</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 133" xmlns="http://www.w3.org/2000/svg"><path fill="#F05149" d="M26.027.137C25.824.215 20.086 3.484 13.281 7.395 5.035 12.137.801 14.633.574 14.867c-.18.203-.383.555-.445.777-.17.574-.183 84.703-.011 85.309.062.234.265.578.449.77.446.469 49.672 78.773 50.27 78.91.277.066.59.054.898-.032.672-.168 49.77-28.41 50.207-28.871.18-.199.383-.543.45-.777.086-.277.117-4.676.117-13.938V73.48l11.969-6.875c11.285-6.488 11.977-6.895 12.266-7.34l.297-.48V44.207c0-15.871.031-14.977-.598-15.551-.168-.148-5.918-3.504-12.789-7.461L101.172 14.016h-1.386L87.574 21.027c-6.723 3.867-12.438 7.172-12.715 7.352-.277.184-.609.524-.746.77l-.246.426-.054 13.734-.051 13.738-10.082 5.809c-5.547 3.187-10.164 5.828-10.262 5.852-.18.051-.191-1.257-.191-26.503V15.633l-.266-.457C52.629 14.078 54.121 14.965 39.137 6.895 26.57-.332 26.871-.18 26.027.137z"/></svg>
              <span>Laravel</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/></svg>
              <span>CSS3</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129z"/><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5z"/><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5z"/><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67z"/><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5z"/></svg>
              <span>Figma</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#f58220" d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76z"/></svg>
              <span>Firebase</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#6AD7E5" d="M29.3 26.4c-13.6-3.8-3.5-21.1 7.4-14l-7.4 14z"/></svg>
              <span>Go</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M62.96.242c-.232.135-1.203 1.528-2.16 3.097-2.4 3.94-2.426 3.942-5.65.549-2.098-2.207-2.605-2.611-3.28-2.606-.44.002-.995.152-1.235.332-.239.18-.916 1.612-1.504 3.183"/></svg>
              <span>Rust</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#439934" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142"/></svg>
              <span>MongoDB</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill="#E434AA"><path d="M18.39 96.852l-4.6-2.657L65.04 5.434l4.597 2.656z"/></g></svg>
              <span>GraphQL</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M77.941 44.5v36.836L46.324 62.918V26.082z" fill="#5c4ee5"/></g></svg>
              <span>Terraform</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#ea4535" d="M80.6 40.3h.4l-.2-.2 14-14v-.3c-11.8-10.4-28.1-14-43.2-9.5"/></svg>
              <span>GCP</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#FAAE40" d="M101.542 60.275c-.4 0-.836 0-1.236.036-.291 0-.545.218-.654.509l-1.744 6.069"/></svg>
              <span>Cloudflare</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#231f20" d="M86.758 70.89c-4.992 0-9.465 2.208-12.528 5.68l-7.851-5.547"/></svg>
              <span>Kafka</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#343741" d="M4 64c0 5.535.777 10.879 2.098 16H84c8.836 0 16-7.164 16-16"/></svg>
              <span>Elasticsearch</span>
            </div>
            <div className="brand-item">
              <svg height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#ff6600" d="M119.517 51.188H79.291a3.641 3.641 0 0 1-3.64-3.642V5.62"/></svg>
              <span>RabbitMQ</span>
            </div>
          </div>
        </div>
      </div>

{/* HOW IT WORKS */}
<section className="how-it-works">
  <AnimateOnScroll>
  <div className="how-container" ref={howRef}>
    <h2 className="section-title">How Stackzy works</h2>
    <p className="section-subtitle">A simple process designed to save time and avoid mismatches.</p>
    <div className="steps">
      <div className="step">
        <span className="step-number">01</span>
        <h3>Share your requirement</h3>
        <p>Tell us what you’re building and the skills you need.</p>
      </div>
      <div className="step">
        <span className="step-number">02</span>
        <h3>Get matched with engineers</h3>
        <p>We shortlist engineers whose strengths align with your problem.</p>
      </div>
      <div className="step">
        <span className="step-number">03</span>
        <h3>Start building</h3>
        <p>Work directly with the engineer. No intermediaries.</p>
      </div>
    </div>
  </div>
  </AnimateOnScroll>
</section>

{/* WORKFLOW */}
      {SHOW_WORKFLOW && <Workflow />}
      <AnimateOnScroll>
  <TechDeepDives />
</AnimateOnScroll>

{/* WHO YOU CAN HIRE */}
<section id="talents" className="hire-section">
  <AnimateOnScroll>
  <div className="hire-container">
    <div className="hire-header">
      <h2 className="section-title">Who you can hire</h2>
      <p className="section-subtitle">
        Engineers selected for depth, clarity of thinking, and ability to execute.
      </p>
    </div>
    <div className="hire-table-wrap">
      <table className="hire-table">
        <thead>
          <tr>
            <th>Role</th>
            <th>What they do</th>
            <th>Typical Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="#hire/backend" style={{color: 'inherit', textDecoration: 'none'}}>Backend engineers</a></td>
            <td>System design, APIs, databases, and scalable architectures.</td>
            <td>$29/hr</td>
          </tr>
          <tr>
            <td><a href="#hire/fullstack" style={{color: 'inherit', textDecoration: 'none'}}>Full‑stack engineers</a></td>
            <td>Frontend + backend with strong product usability focus.</td>
            <td>$24/hr</td>
          </tr>
          <tr>
            <td><a href="#hire/ai-ml" style={{color: 'inherit', textDecoration: 'none'}}>AI & ML engineers</a></td>
            <td>Data pipelines, model development, and applied machine learning.</td>
            <td>$31/hr</td>
          </tr>
          <tr>
            <td><a href="#hire/blockchain" style={{color: 'inherit', textDecoration: 'none'}}>Blockchain engineers</a></td>
            <td>Smart contracts, protocols, and security-focused development.</td>
            <td>$39/hr</td>
          </tr>
          <tr>
            <td><a href="#hire/cloud-devops" style={{color: 'inherit', textDecoration: 'none'}}>Cloud & DevOps</a></td>
            <td>CI/CD, Kubernetes, observability, and infra automation.</td>
            <td>$43/hr</td>
          </tr>
          <tr>
            <td><a href="#hire/cybersecurity" style={{color: 'inherit', textDecoration: 'none'}}>Cybersecurity</a></td>
            <td>Threat modeling, audits, secure coding, incident response.</td>
            <td>$37/hr</td>
          </tr>
          <tr>
            <td><a href="#hire/ui-ux" style={{color: 'inherit', textDecoration: 'none'}}>UI/UX</a></td>
            <td>User research, interaction design, prototyping, design systems.</td>
            <td>$14/hr</td>
          </tr>
          <tr>
            <td><a href="#hire/data" style={{color: 'inherit', textDecoration: 'none'}}>Data engineers & analysts</a></td>
            <td>ETL, warehousing, analytics, dashboards, and reliable data ops.</td>
            <td>$22/hr</td>
          </tr>
          <tr>
            <td><a href="#hire/innovation" style={{color: 'inherit', textDecoration: 'none'}}>Innovation & R&D</a></td>
            <td>Exploration, prototypes, feasibility, and technical spikes.</td>
            <td>$33/hr</td>
          </tr>
          <tr>
            <td><a href="#hire/qa-testing" style={{color: 'inherit', textDecoration: 'none'}}>QA & Testing</a></td>
            <td>Automated tests, CI integration, resilient release practices.</td>
            <td>$18/hr</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </AnimateOnScroll>
</section>

{/* WHY STACKZY */}
<section className="why">
  <AnimateOnScroll>
  <div className="why-container">
    <h2 className="section-title">Why Stackzy</h2>
    <p className="section-subtitle">
      Built for teams that value clear thinking and long-term outcomes.
    </p>

    <div className="why-track">
      <div className="why-item">
        <h3>Engineer-first network</h3>
        <p>
          We work directly with engineers. No account managers, no layers that
          dilute communication.
        </p>
      </div>

      <div className="why-item">
        <h3>IIT-backed evaluation</h3>
        <p>
          Every engineer is reviewed for fundamentals, problem-solving ability,
          and real-world judgment.
        </p>
      </div>

      <div className="why-item">
        <h3>Low noise, high signal</h3>
        <p>
          No inflated profiles or artificial urgency. Just people who can build
          what you actually need.
        </p>
      </div>

      <div className="why-item">
        <h3>Long-term alignment</h3>
        <p>
          Optimized for continuity and ownership, not short-term project churn.
        </p>
      </div>
      <div className="why-item">
        <h3>Engineer-first network</h3>
        <p>
          We work directly with engineers. No account managers, no layers that
          dilute communication.
        </p>
      </div>
      <div className="why-item">
        <h3>IIT-backed evaluation</h3>
        <p>
          Every engineer is reviewed for fundamentals, problem-solving ability,
          and real-world judgment.
        </p>
      </div>
      <div className="why-item">
        <h3>Low noise, high signal</h3>
        <p>
          No inflated profiles or artificial urgency. Just people who can build
          what you actually need.
        </p>
      </div>
      <div className="why-item">
        <h3>Long-term alignment</h3>
        <p>
          Optimized for continuity and ownership, not short-term project churn.
        </p>
      </div>
    </div>
  </div>
  </AnimateOnScroll>
</section>

{/* PRICING */}
<PricingPage />

{SHOW_VISUALS && (
<section className="visuals">
  <AnimateOnScroll>
  <div className="how-container">
    <h2 className="section-title">Internet-scale mindset</h2>
    <p className="section-subtitle">
      Reliable systems, clear architecture, and maintainable code.
    </p>
    <div className="talent-grid">
      <AnimateOnScroll>
        <a href="#mindset/global-network" style={{ color: 'inherit', textDecoration: 'none' }}>
        <div className="talent-card">
          <h3>
            <svg className="card-icon" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="7" stroke="var(--brown)" strokeWidth="2" fill="none" />
              <path d="M5 12h14M12 5v14" stroke="var(--rust)" strokeWidth="2" />
            </svg>
            Global network
          </h3>
          <p>Topology-aware designs and practical scaling patterns.</p>
        </div>
        </a>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <a href="#mindset/robust-code" style={{ color: 'inherit', textDecoration: 'none' }}>
        <div className="talent-card">
          <h3>
            <svg className="card-icon" viewBox="0 0 24 24">
              <path d="M4 5h16v8H4z" fill="var(--olive)" />
              <path d="M8 17h8" stroke="var(--amber)" strokeWidth="2" />
            </svg>
            Robust code
          </h3>
          <p>Error handling and boundaries that keep systems healthy.</p>
        </div>
        </a>
      </AnimateOnScroll>
    </div>
  </div>
  </AnimateOnScroll>
</section>
)}

{SHOW_TRUST && (
<section className="trust">
  <AnimateOnScroll>
  <div className="trust-container">
    <h2 className="section-title">Built on trust, not volume</h2>
    <p className="section-subtitle">
      StackyFi is shaped by academic rigor and real-world engineering practice.
    </p>

    <div className="trust-points">
      <AnimateOnScroll>
        <a href="#trust/evaluation" style={{ color: 'inherit', textDecoration: 'none' }}>
        <div className="trust-point">
          <h3>
            <svg className="card-icon" viewBox="0 0 24 24">
              <path d="M12 3l7 7-7 7-7-7 7-7z" fill="var(--amber)" />
            </svg>
            IIT-linked evaluation mindset
          </h3>
          <p>
            Our screening focuses on fundamentals, reasoning, and decision-making —
            not just tools or buzzwords.
          </p>
        </div>
        </a>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <a href="#trust/selective" style={{ color: 'inherit', textDecoration: 'none' }}>
        <div className="trust-point">
          <h3>
            <svg className="card-icon" viewBox="0 0 24 24">
              <path d="M5 5h14v10H5z" stroke="var(--rust)" strokeWidth="2" fill="none" />
              <path d="M7 19h10" stroke="var(--rust)" strokeWidth="2" />
            </svg>
            Selective by design
          </h3>
          <p>
            We prioritize fit and depth over scale. This keeps quality consistent
            and relationships sustainable.
          </p>
        </div>
        </a>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <a href="#trust/direct-collab" style={{ color: 'inherit', textDecoration: 'none' }}>
        <div className="trust-point">
          <h3>
            <svg className="card-icon" viewBox="0 0 24 24">
              <path d="M8 8h8v8H8z" fill="var(--olive)" />
              <path d="M4 12h16" stroke="var(--brown)" strokeWidth="2" />
            </svg>
            Direct collaboration
          </h3>
          <p>
            You work directly with the engineer doing the work. No hidden layers,
            no communication gaps.
          </p>
        </div>
        </a>
      </AnimateOnScroll>
    </div>
  </div>
  </AnimateOnScroll>
</section>
)}

{/* ENGINEERS */}
{SHOW_ENGINEERS && (
<section className="engineers">
  <div className="engineers-container">
    <h2 className="section-title">Engineers you’ll meet</h2>
    <p className="section-subtitle">
      Faces and qualifications that reflect substance, not flash.
    </p>
    <div className="engineers-grid"></div>
  </div>
  </section>
)}

{/* MERGE ANIMATION */}
{SHOW_MERGE && (
<section className="merge">
  <div className="merge-container">
    <h2 className="section-title">Different aspects, one quality solution</h2>
    <p className="section-subtitle">
      Speed, reliability, security, UX — merged with clear engineering.
    </p>
    <svg className="merge-svg" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g>
        <circle className="bubble" cx="90" cy="80" r="22" fill="#10a37f" filter="url(#glow)"/>
        <text x="90" y="84" fontSize="10" textAnchor="middle" fill="#083344">Speed</text>
      </g>
      <g>
        <circle className="bubble" cx="120" cy="210" r="22" fill="#e6a43a" filter="url(#glow)"/>
        <text x="120" y="214" fontSize="10" textAnchor="middle" fill="#3b260f">UX</text>
      </g>
      <g>
        <circle className="bubble" cx="420" cy="80" r="22" fill="#566529" filter="url(#glow)"/>
        <text x="420" y="84" fontSize="10" textAnchor="middle" fill="#101510">Reliability</text>
      </g>
      <g>
        <circle className="bubble" cx="380" cy="220" r="22" fill="#c84a1b" filter="url(#glow)"/>
        <text x="380" y="224" fontSize="10" textAnchor="middle" fill="#2a0d05">Security</text>
      </g>
      <circle cx="250" cy="150" r="56" fill="#0f1115" stroke="#10a37f" strokeWidth="2"/>
      <text x="250" y="155" fontSize="12" textAnchor="middle" fill="#e6edf3">Quality</text>
    </svg>
  </div>
</section>
)}

{/* FINAL CTA */}
<section className="final-cta">
  <AnimateOnScroll>
  <div className="cta-container">
    <h2 className="cta-title">
      Start with a clear conversation
    </h2>

    <p className="cta-text">
      Share what you’re building and the kind of help you’re looking for.
      We’ll respond with clarity, not sales pressure.
    </p>

    <div className="cta-actions">
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@stackzy.io&su=Stackzy%20Hire%20Professionals&body=Hello%20Team%20Stackzy%2C%0A%0AI%27d%20like%20to%20hire%20professionals.%20Please%20reach%20out%20with%20next%20steps." target="_blank" rel="noopener noreferrer" className="primary-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>Hire professionals</a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@stackzy.io&su=Stackzy%20Discuss%20Needs&body=Hello%20Team%20Stackzy%2C%0A%0AI%27d%20like%20to%20discuss%20my%20needs.%20Please%20reach%20out." target="_blank" rel="noopener noreferrer" className="secondary-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>Talk to us</a>
    </div>
  </div>
  </AnimateOnScroll>
</section>

{/* FOOTER */}
<footer className="footer">
  <div className="footer-container">
    <div className="footer-left">
      <a href="#" className="footer-logo">Stack<span>zy</span></a>
      <p className="footer-text">
        A quiet network of IIT-backed engineers focused on building meaningful
        technology.
      </p>
    </div>

    <div className="footer-right">
      <ul>
        <li><a href="#talents">Hire Talent</a></li>
        <li><a href="#tech">Technical deep dives</a></li>
      </ul>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#cta">Get Started</a></li>
      </ul>
      <ul>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#terms">Terms & Conditions</a></li>
        <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@stackzy.io&su=Stackzy%20Contact&body=Hello%20Team%20Stackzy%2C%0A%0AI%27d%20like%20to%20connect.%20Please%20reach%20out." target="_blank" rel="noopener noreferrer">Contact</a></li>
      </ul>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2016-{new Date().getFullYear()} Stackzy. All rights reserved.</p>
  </div>
</footer>

<section className="footer-brand-anim">
  <div className="footer-anim-container">
    <div className="footer-anim-text">Stackzy</div>
  </div>
  </section>
 
  {/* END CAP: STACKYFI WAVE */}
  <section className="stackyfi-cover">
  <div className="stackyfi-track">
    <div className="stackyfi-word">STACKZY</div>
    <div className="stackyfi-sep">•</div>
    <div className="stackyfi-word">STACKZY</div>
    <div className="stackyfi-sep">•</div>
    <div className="stackyfi-word">STACKZY</div>
  </div>
  <div className="stackyfi-underline"></div>
</section>


    </>
    
  );
}

export default App;
