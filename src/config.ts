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
    "AI/ML Engineer with a strong foundation in MLOps, cloud computing, and applied artificial intelligence. Skilled in building production-ready systems across AWS, Azure, and GCP, with experience applying NLP and LLM technologies such as LangChain to real-world business challenges. Adept at bridging the gap between engineering and strategy, bringing scalable, reliable, and data-driven solutions to cross-functional teams in fast-paced environments.",
  skills: ["Python", "AWS", "Azure", "Docker", "CI/CD", "MLOps", "FastAPI", "LangChain", "Git/GitHub"],
  experience: [
    {
      company: "Hewlett Packard (HP)",
      title: "MLOps Engineer",
      dateRange: "October 2024 - Present",
      bullets: [
        "Architected and maintained end-to-end ML pipelines on AWS (S3, ECR, EKS), enabling scalable insights for pricing, marketing, and customer segmentation",
        "Introduced a streamlined development framework that reduced delivery cycles and improved collaboration across engineering and GTM teams",
        "Built automated CI/CD pipelines ensuring secure, reliable, and production-ready deployments across multiple environments",
      ],
    },
    {
      company: "Palwise.ai",
      title: "Co-founder & Head of AI",
      dateRange: "March 2024 - September 2024",
      bullets: [
        "Co-founded an AI startup delivering custom NLP-powered chatbots tailored to website-specific needs",
        "Led end-to-end AI development, integrating LLM-based NLP models to generate dynamic, context-aware responses",
        "Gained hands-on experience in business development, scalability, and go-to-market strategy, sharpening entrepreneurial and leadership skills",
      ],
    },
    {
      company: "NTT Data",
      title: "Artificial Intelligence Engineer",
      dateRange: "January 2024 - July 2024",
      bullets: [
        "Delivered AI solutions to enhance business processes, leveraging Azure OpenAI, RPA, and low-code platforms.",
        "Integrated LLMs and LangChain into enterprise workflows, enabling automation and improving operational efficiency",
        "Designed and deployed end-to-end prototypes, demonstrating tangible business value to clients",
      ],
    },
  ],
  projects: [
    {
      name: "RAGaaS - Retrieval-Augmented Generation as a Service",
      description:
        "Production-ready RAG system with comprehensive monitoring, semantic caching, and multi-cloud deployment. Features multi-format document processing, flexible embedding models, vector database integration, and built-in observability with LangSmith and Prometheus metrics.",
      link: "https://github.com/salcamo/RAGaaS",
      skills: ["Python", "FastAPI", "LangChain", "Weaviate", "Redis", "Docker", "CI/CD", "MLOps", "Monitoring"],
    },
    {
      name: "Whisper fine-tuning",
      description:
        "As my Bachelor's Thesis, I fine-tuned the Whisper model to transcribe better in Valencian/Catalan.",
      link: "",
      skills: ["Python", "HuggingFace Transformers", "Fine-tuning"],
    },
  ],
  education: [
    {
      school: "University of Valencia",
      degree: "Computer Engineering",
      dateRange: "2019 - 2024",
      achievements: [
        "Top 10% of the class",
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
      dateRange: "2017 - 2019",
      achievements: [],
    },
  ],
};
