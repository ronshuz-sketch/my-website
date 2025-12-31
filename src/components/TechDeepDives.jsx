import React from 'react';

export default function TechDeepDives() {
  const techs = [
    { 
      title: "React Concurrency & Internals", 
      desc: "Deep dive into Fiber architecture, concurrent mode, and optimizing render cycles for high-performance UIs.", 
      code: `// Concurrent Mode Transition
import { startTransition } from 'react';

function handleSearch(e) {
  const query = e.target.value;
  setSearch(query);
  startTransition(() => {
    setResults(filter(query));
  });
}` 
    },
    { 
      title: "Distributed Systems & Scalability", 
      desc: "Designing resilient systems using event-driven architectures, CAP theorem trade-offs, and consistent hashing.", 
      code: `// Event sourcing pattern
interface Event {
  type: string;
  payload: any;
  timestamp: number;
}

function apply(state: State, event: Event): State {
  switch(event.type) {
    case 'ORDER_CREATED': return { ...state, orders: [...] };
    // ...
  }
}` 
    },
    { 
      title: "Database Performance Tuning", 
      desc: "Advanced indexing strategies, query plan analysis, and connection pooling for high-throughput applications.", 
      code: `-- Partial Index for Active Users
CREATE INDEX idx_users_active 
ON users (last_login) 
WHERE status = 'active';

-- Analyze query performance
EXPLAIN ANALYZE SELECT * FROM users WHERE status = 'active';` 
    },
    { 
      title: "Security & Cryptography", 
      desc: "Implementing OAuth2 flows, JWT best practices, and secure data encryption at rest and in transit.", 
      code: `// Secure Password Hashing (Argon2)
import argon2 from 'argon2';

async function hashPassword(password) {
  return await argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 3
  });
}` 
    },
    {
      title: "Kubernetes & Orchestration",
      desc: "Managing container lifecycles, service mesh integration (Istio), and GitOps workflows with ArgoCD.",
      code: `# Deployment Manifest
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend-api
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0`
    },
    {
      title: "GraphQL Federation",
      desc: "Stitching schemas from multiple microservices into a unified graph for efficient data fetching.",
      code: `// Apollo Federation Subgraph
const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }])
});

// Gateway
const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [{ name: 'users', url: '...' }]
  })
});`
    }
  ];

  return (
    <section id="tech" className="tech">
      <div className="tech-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="section-title">Technical Deep Dives</h2>
          <p className="section-subtitle">
            Our engineering culture is built on deep understanding. We don't just use tools; we master them.
            Here are some of the areas where our engineers excel.
          </p>
        </div>
        
        <div className="tech-grid">
          {techs.map((t, i) => (
            <div key={i} className="tech-card" style={{ 
              padding: '32px', 
              background: '#fff', 
              borderRadius: '12px', 
              border: '1px solid rgba(90, 50, 28, 0.1)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              minWidth: '350px'
            }}>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--slate-950)' }}>{t.title}</h3>
              <p style={{ marginBottom: '24px', color: 'var(--ink-muted)', flex: 1 }}>{t.desc}</p>
              <div className="code-block" style={{ 
                padding: '16px', 
                background: '#1e1e1e', 
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <pre style={{ margin: 0, color: '#e0e0e0', fontSize: '13px', overflowX: 'auto', fontFamily: 'monospace' }}><code>{t.code}</code></pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
