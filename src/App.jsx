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
              <img src="/src/assets/logos/React.svg" alt="React" />
              <span>React</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Node.js.svg" alt="Node.js" />
              <span>Node.js</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Docker.svg" alt="Docker" />
              <span>Docker</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Kubernetes.svg" alt="Kubernetes" />
              <span>Kubernetes</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/GitHub.svg" alt="GitHub" />
              <span>GitHub</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Vite.svg" alt="Vite" />
              <span>Vite</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Java.svg" alt="Java" />
              <span>Java</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/HTML5.svg" alt="HTML5" />
              <span>HTML5</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/CSS3.svg" alt="CSS3" />
              <span>CSS3</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Figma.svg" alt="Figma" />
              <span>Figma</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Firebase.svg" alt="Firebase" />
              <span>Firebase</span>
            </div>
            {/* duplicate for seamless scroll */}
            <div className="brand-item">
              <img src="/src/assets/logos/React.svg" alt="React" />
              <span>React</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Node.js.svg" alt="Node.js" />
              <span>Node.js</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Docker.svg" alt="Docker" />
              <span>Docker</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Kubernetes.svg" alt="Kubernetes" />
              <span>Kubernetes</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/GitHub.svg" alt="GitHub" />
              <span>GitHub</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Vite.svg" alt="Vite" />
              <span>Vite</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/HTML5.svg" alt="HTML5" />
              <span>HTML5</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/CSS3.svg" alt="CSS3" />
              <span>CSS3</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Figma.svg" alt="Figma" />
              <span>Figma</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Firebase.svg" alt="Firebase" />
              <span>Firebase</span>
            </div>
          </div>
          <div className="brand-track rev" style={{ marginTop: 18 }}>
            <div className="brand-item">
              <img src="/src/assets/logos/PostgresSQL.svg" alt="PostgreSQL" />
              <span>PostgreSQL</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Redis.svg" alt="Redis" />
              <span>Redis</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/AWS.svg" alt="AWS" />
              <span>AWS</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Azure.svg" alt="Azure" />
              <span>Azure</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Go.svg" alt="Go" />
              <span>Go</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Rust.svg" alt="Rust" />
              <span>Rust</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/MongoDB.svg" alt="MongoDB" />
              <span>MongoDB</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/GraphQL.svg" alt="GraphQL" />
              <span>GraphQL</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/HashiCorp-Terraform.svg" alt="Terraform" />
              <span>Terraform</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Google-Cloud.svg" alt="GCP" />
              <span>GCP</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Cloudflare.svg" alt="Cloudflare" />
              <span>Cloudflare</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Apache-Kafka.svg" alt="Kafka" />
              <span>Kafka</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Elastic-Search.svg" alt="Elasticsearch" />
              <span>Elasticsearch</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/RabbitMQ.svg" alt="RabbitMQ" />
              <span>RabbitMQ</span>
            </div>
            {/* duplicate for seamless scroll */}
            <div className="brand-item">
              <img src="/src/assets/logos/PostgresSQL.svg" alt="PostgreSQL" />
              <span>PostgreSQL</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Redis.svg" alt="Redis" />
              <span>Redis</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/AWS.svg" alt="AWS" />
              <span>AWS</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Azure.svg" alt="Azure" />
              <span>Azure</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Go.svg" alt="Go" />
              <span>Go</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Rust.svg" alt="Rust" />
              <span>Rust</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/MongoDB.svg" alt="MongoDB" />
              <span>MongoDB</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/GraphQL.svg" alt="GraphQL" />
              <span>GraphQL</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/HashiCorp-Terraform.svg" alt="Terraform" />
              <span>Terraform</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Google-Cloud.svg" alt="GCP" />
              <span>GCP</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Cloudflare.svg" alt="Cloudflare" />
              <span>Cloudflare</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Apache-Kafka.svg" alt="Kafka" />
              <span>Kafka</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Elastic-Search.svg" alt="Elasticsearch" />
              <span>Elasticsearch</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/RabbitMQ.svg" alt="RabbitMQ" />
              <span>RabbitMQ</span>
            </div>
          </div>
          <div className="brand-track" style={{ marginTop: 18 }}>
            <div className="brand-item">
              <img src="/src/assets/logos/Swift.svg" alt="Swift" />
              <span>Swift</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Kotlin.svg" alt="Kotlin" />
              <span>Kotlin</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Flutter.svg" alt="Flutter" />
              <span>Flutter</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Azure.svg" alt="Azure" />
              <span>Azure</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Nginx.svg" alt="Nginx" />
              <span>Nginx</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Svelte.svg" alt="Svelte" />
              <span>Svelte</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Django.svg" alt="Django" />
              <span>Django</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Laravel.svg" alt="Laravel" />
              <span>Laravel</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/CSS3.svg" alt="CSS3" />
              <span>CSS3</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Figma.svg" alt="Figma" />
              <span>Figma</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Firebase.svg" alt="Firebase" />
              <span>Firebase</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Go.svg" alt="Go" />
              <span>Go</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Rust.svg" alt="Rust" />
              <span>Rust</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/MongoDB.svg" alt="MongoDB" />
              <span>MongoDB</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/GraphQL.svg" alt="GraphQL" />
              <span>GraphQL</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/HashiCorp-Terraform.svg" alt="Terraform" />
              <span>Terraform</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Google-Cloud.svg" alt="GCP" />
              <span>GCP</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Cloudflare.svg" alt="Cloudflare" />
              <span>Cloudflare</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Apache-Kafka.svg" alt="Kafka" />
              <span>Kafka</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/Elastic-Search.svg" alt="Elasticsearch" />
              <span>Elasticsearch</span>
            </div>
            <div className="brand-item">
              <img src="/src/assets/logos/RabbitMQ.svg" alt="RabbitMQ" />
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
