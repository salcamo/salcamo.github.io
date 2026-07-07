export const siteConfig = {
  name: "Salvador Campos Molins",
  title: "AI/ML Engineer",
  description: "Portfolio website of Salvador Campos Molins",
  accentColor: "#024ad8",
  social: {
    email: "salvacamposmolins99@gmail.com",
    linkedin: "https://linkedin.com/in/salvador-campos-molins/",
    github: "https://github.com/salcamo",
  },
  aboutMe:
    "I build AI systems that ship. Production ML pipelines, LLM integrations, and full-stack products from idea to deployment. I work across AWS, Azure, and GCP, and I care about the boring parts too: CI/CD, monitoring, cost, and reliability. Consulting by day, SaaS builder by night.",
  skills: ["Python", "LLMs", "Agents", "AWS", "Azure", "Docker", "CI/CD", "MLOps", "FastAPI", "LangChain", "Databricks", "Git/GitHub"],
  experience: [
    {
      company: "Visium",
      title: "AI Engineer",
      dateRange: "December 2025 to Present",
      bullets: [
        "Consult on AI engineering and MLOps for enterprise clients: LLM integration, model lifecycle, CI/CD for ML, and Databricks data platforms",
        "Design AI infrastructure on AWS and Azure, from experiment pipelines to production deployments with monitoring and cost controls",
        "Cut infrastructure costs by over 30% on an internal ML platform through right-sizing and pipeline optimisation",
        "Work with engineering and business teams to scope AI work, set priorities, and deliver to production",
      ],
    },
    {
      company: "Hewlett Packard (HP)",
      title: "MLOps Engineer",
      dateRange: "October 2024 to Present",
      bullets: [
        "Build and maintain ML pipelines on AWS (S3, ECR, EKS) for pricing, marketing, and customer segmentation",
        "Introduced a development framework that shortened delivery cycles and improved cross-team collaboration",
        "Set up CI/CD pipelines for secure, repeatable deployments across multiple environments",
        "Support ML and LLM workloads from experiment to production across GTM and engineering teams",
      ],
    },
    {
      company: "Palwise.ai",
      title: "Co-founder & Head of AI",
      dateRange: "March 2024 to September 2024",
      bullets: [
        "Co-founded an AI startup building NLP chatbots tailored to client websites",
        "Led AI development with LLM-based models for context-aware responses",
        "Handled business development, product scaling, and go-to-market alongside engineering",
      ],
    },
    {
      company: "NTT Data",
      title: "Artificial Intelligence Engineer",
      dateRange: "January 2024 to November 2024",
      bullets: [
        "Built AI solutions with Azure OpenAI, RPA, and low-code platforms",
        "Integrated LLMs and LangChain into enterprise workflows",
        "Delivered prototypes that showed concrete value to clients",
      ],
    },
  ],
  projects: [
    {
      name: "EUCLM",
      tagline: "European Contract Lifecycle Management",
      description:
        "Multi-tenant SaaS for European companies to manage contracts: upload PDFs and DOCX, extract terms with Mistral, generate from templates, track status on Kanban boards, and collect eIDAS signatures through Signaturit. GDPR-first design with EU data residency, retention policies, and tenant isolation via PostgreSQL RLS. Includes landing, billing, and admin console.",
      link: "https://www.euclm.com",
      images: [
        "/projects/euclm-features.png",
        "/projects/euclm-landing.png",
      ],
      skills: ["Next.js", "FastAPI", "PostgreSQL", "Mistral AI", "TipTap", "Signaturit", "Mollie", "Railway"],
    },
    {
      name: "UMT, Music Manager",
      tagline: "Band operations platform for 150+ musicians",
      description:
        "Web app for a 150+ member Valencian wind band. Covers events, call-ups, live attendance, per-musician payments, and season analytics. Mobile-first and bilingual in Spanish and Valencian. Built for volunteers marking attendance at the rehearsal hall before practice starts.",
      link: "",
      images: [
        "/projects/umt-attendance.png",
        "/projects/umt-home.png",
      ],
      skills: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "RLS", "Redis", "S3", "Docker"],
    },
    {
      name: "AlumniTrack",
      description:
        "Web platform for teachers to manage classes, track student progress, and generate AI reports. Hexagonal architecture, Google OAuth, JWT with refresh tokens, Gemini integration. Deployed on Supabase, Render, and Vercel with Valencian, Spanish, and English support.",
      link: "https://alumnitrack-frontend.vercel.app/",
      skills: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "SQLAlchemy", "Google Gemini", "OAuth", "JWT", "Docker", "Vercel", "Render", "Supabase"],
    },
    {
      name: "RAGaaS",
      description:
        "RAG system with monitoring, semantic caching, and multi-cloud deployment. Multi-format document processing, configurable embeddings, vector DB integration, and observability with LangSmith and Prometheus.",
      link: "https://github.com/salcamo/RAGaaS",
      skills: ["Python", "FastAPI", "LangChain", "Weaviate", "Redis", "Docker", "CI/CD", "MLOps", "Monitoring"],
    },
    {
      name: "Whisper fine-tuning",
      description:
        "Bachelor's thesis: fine-tuned Whisper for better transcription in Valencian and Catalan.",
      link: "",
      skills: ["Python", "HuggingFace Transformers", "Fine-tuning"],
    },
  ],
  education: [
    {
      school: "University of Valencia",
      degree: "Computer Engineering",
      dateRange: "2019 to 2024",
      achievements: [
        "Top 5% of the class",
      ],
    },
    {
      school: "Vytautas Magnus University",
      degree: "Computer Engineering",
      dateRange: "2023",
      achievements: [
        "Erasmus Exchange Program",
      ],
    },
    {
      school: "Computer Network and Systems Management",
      degree: "Associate Degree",
      dateRange: "2017 to 2019",
      achievements: [],
    },
  ],
};
