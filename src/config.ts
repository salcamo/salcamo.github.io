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
    "I build AI systems meant for production. ML pipelines, LLM integrations, and full-stack products from first deploy to steady operation. I work across AWS, Azure, and GCP, with the same attention to CI/CD, monitoring, cost, and reliability. I consult on enterprise ML and build SaaS products of my own.",
  skills: ["Python", "LLMs", "Agents", "AWS", "Azure", "Docker", "CI/CD", "MLOps", "FastAPI", "LangChain", "Databricks", "Git/GitHub"],
  experience: [
    {
      company: "Visium",
      title: "Machine Learning Engineer",
      dateRange: "December 2025 to Present",
      bullets: [
        "Deliver ML for enterprise clients across LLM integration, model lifecycle, Databricks platforms, and CI/CD pipelines built for production",
        "Design ML infrastructure on AWS and Azure, from experiment workflows to governed deployments with monitoring and cost controls",
        "Cut infrastructure spend by 30%+ on an internal ML platform through right-sizing, smarter pipelines, and tighter resource allocation",
        "Partner with client engineering and business teams to scope, build, and deploy ML systems with clear outcomes and production ownership",
      ],
    },
    {
      company: "Hewlett Packard (HP)",
      title: "MLOps Engineer",
      dateRange: "October 2024 to Present",
      bullets: [
        "Own ML pipelines on AWS (S3, ECR, EKS) for pricing, marketing, and customer segmentation",
        "Built a development framework that reduced delivery cycles and improved collaboration across GTM and engineering",
        "Implemented CI/CD for ML across multiple environments with secure, repeatable release workflows",
        "Support ML and LLM workloads from experimentation through production deployment",
      ],
    },
    {
      company: "Palwise.ai",
      title: "Co-founder & Head of AI",
      dateRange: "March 2024 to September 2024",
      bullets: [
        "Co-founded an AI startup building website-specific NLP chatbots for client use cases",
        "Led LLM-based product development for dynamic, context-aware conversational experiences",
        "Drove business development, product scaling, and go-to-market alongside core engineering work",
      ],
    },
    {
      company: "NTT Data",
      title: "Artificial Intelligence Engineer",
      dateRange: "January 2024 to November 2024",
      bullets: [
        "Built client AI solutions using Azure OpenAI, RPA, and low-code platforms",
        "Integrated LLMs and LangChain into enterprise workflows for automation and efficiency gains",
        "Delivered end-to-end prototypes that demonstrated measurable business value to clients",
      ],
    },
  ],
  projects: [
    {
      name: "EUCLM",
      tagline: "European Contract Lifecycle Management",
      description:
        "Contract lifecycle SaaS built for European teams. Upload PDFs and DOCX, extract terms with Mistral, generate from templates, track deals on Kanban boards, and collect eIDAS signatures through Signaturit. GDPR-first with EU data residency, retention policies, and tenant isolation via PostgreSQL RLS. Full stack from landing page to billing and admin console.",
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
        "Operations platform for a 150+ member Valencian wind band. Events, call-ups, live attendance, payments, and season analytics in one mobile-first app. Bilingual in Spanish and Valencian, built for volunteers taking attendance at the rehearsal hall before practice starts.",
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
        "Platform for teachers to manage classes, track student progress, and generate AI reports. Hexagonal architecture with Google OAuth, JWT refresh rotation, and Gemini integration. Deployed on Supabase, Render, and Vercel with Spanish, Valencian, and English support.",
      link: "https://alumnitrack-frontend.vercel.app/",
      skills: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "SQLAlchemy", "Google Gemini", "OAuth", "JWT", "Docker", "Vercel", "Render", "Supabase"],
    },
    {
      name: "RAGaaS",
      description:
        "Retrieval-augmented generation platform with semantic caching, multi-cloud deployment, and production monitoring. Handles multiple document formats, configurable embeddings, vector database integration, and observability through LangSmith and Prometheus.",
      link: "https://github.com/salcamo/RAGaaS",
      skills: ["Python", "FastAPI", "LangChain", "Weaviate", "Redis", "Docker", "CI/CD", "MLOps", "Monitoring"],
    },
    {
      name: "Whisper fine-tuning",
      description:
        "Bachelor's thesis fine-tuning OpenAI Whisper for improved transcription accuracy in Valencian and Catalan.",
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
