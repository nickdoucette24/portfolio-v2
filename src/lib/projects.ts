// src/lib/projects.ts
export type Project = {
  id: string;
  name: string;
  role: string;
  shortDescription: string;
  tech: string[];
  bullets: string[];
  link?: string;
  repo?: string;
  image?: string;
  category: "Professional" | "Personal";
};

export const projects: Project[] = [
  {
    id: "integrations-qupos",
    name: "QuPOS Live Logs Integration",
    role: "Software Engineer – Integrations Team",
    category: "Professional",
    shortDescription:
      "Enabled customers to request live POS API logs through the admin panel to debug and monitor sales integrations.",
    tech: ["React", "PHP", "MySQL", "Docker", "Datadog"],
    bullets: [
      "Implemented frontend features in React to request and display live API logs from POS partner QuPOS.",
      "Worked with PHP and MySQL services running in Docker to fetch and normalize integration log data.",
      "Used Datadog logs, monitors, and traces to diagnose integration issues and verify performance improvements.",
      "Collaborated in an agile, sprint-based environment with an integrations-focused team.",
    ],
  },
  {
    id: "integrations-sales-disputes",
    name: "Sales Disputes Dashboard",
    role: "Software Engineer – Integrations Team",
    category: "Professional",
    shortDescription:
      "Internal tool to surface sales disputes by store, location, and customer for support and operations teams.",
    tech: ["React", "PHP", "MySQL"],
    bullets: [
      "Built a Sales Disputes page that aggregates disputes from integrated POS systems into a structured UI.",
      "Implemented filters by store, location, and customer to help support teams quickly find relevant disputes.",
      "Collaborated with product and support stakeholders to refine UI workflows based on real-world usage.",
    ],
  },
  {
    id: "pitstop",
    name: "PitStop – F1 Live Session Tracker",
    role: "Personal Project",
    category: "Personal",
    shortDescription:
      "Real-time Formula 1 hub with live session tracking, standings, schedule, and team-themed UI.",
    tech: ["React", "TypeScript", "Node.js", "Express", "WebSockets"],
    bullets: [
      "Designed a real-time dashboard to display live timing, standings, and session data for F1 races.",
      "Built a Node.js/Express backend with WebSockets to push session updates to connected clients.",
      "Implemented a customizable React dashboard with tiles for standings, schedules, drivers, and tracks.",
      "Focused on responsive, accessible design with dark/light themes and team color accents.",
    ],
  },
  {
    id: "dashii",
    name: "Dashii – Freelancer Revenue Dashboard",
    role: "Personal Project",
    category: "Personal",
    shortDescription:
      "Dashboard for freelancers to track clients, projects, invoices, and income breakdown over time.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Chart.js"],
    bullets: [
      "Built a full-stack app for tracking clients, projects, invoices, and payments in one place.",
      "Implemented REST APIs in Node.js/Express with MongoDB for user and transaction data.",
      "Created interactive charts with Chart.js for profitability, earnings vs. estimates, and tax/expense breakdown.",
      "Added user authentication, theme switching, and calendar views for upcoming invoices and deadlines.",
    ],
  },
  {
    id: "crater-finance",
    name: "Crater – Personal Finance Web App",
    role: "Personal Project",
    category: "Personal",
    shortDescription:
      "Personal finance tool for tracking accounts, transactions, and budgets with a clean, developer-grade backend.",
    tech: ["Node.js", "Express", "MySQL", "TypeScript", "React"],
    bullets: [
      "Designed a TypeScript Node.js backend using Express and MySQL for account, category, and transaction models.",
      "Implemented environment variable management, linting, and formatting similar to production-grade backends.",
      "Exposed REST endpoints for managing balances, transaction history, and budget categories.",
      "Built a React frontend (in progress) focused on summaries, charts, and actionable insights.",
    ],
  },
];
