import React from "react";
import { motion } from "framer-motion";
import "./projects.scss";

const projects = [
  {
    title: "🎯 StreamlineBot - Comcast USA",
    industry: "Entertainment / Streaming Services | Scale: Enterprise Production",
    challenge: "Optimize customer support efficiency in streaming services operations",
    solution: "Deployed autonomous multi-agent system for real-time customer query resolution.",
    technologies: "LangGraph multi-agent coordination, advanced RAG with semantic search",
    impact: "Direct support automation enabling 24/7 customer assistance with contextual understanding."
  },
  {
    title: "🚛 LogiGenie - Intelligent Logistics Assistant",
    industry: "Supply Chain & Logistics | Scale: Multi-regional Deployment",
    challenge: "Complex logistics operations requiring intelligent decision-making.",
    solution: "Generative AI-powered assistant with autonomous workflow management.",
    technologies: "Graph RAG for complex reasoning, Vector DB optimization, custom embeddings.",
    impact: "Streamlined logistics operations with predictive insights and automated decision support."
  },
  {
    title: "📚 AI-Tutor / Facilitator Platform",
    industry: "Education Technology | Scale: Learning Management System",
    challenge: "Automated learning/training with adaptive assessment capabilities.",
    solution: "One-stop AI portal with intelligent tutoring and survey generation.",
    technologies: "Multi-modal AI integration, fine-tuned LLMs, automated content generation.",
    impact: "Personalized learning experiences with automated polls, surveys, and adaptive training modules."
  },
  {
    title: "🔧 Zero Touch ITSM - Autonomous Service Desk",
    industry: "IT Infrastructure & Operations | Scale: Enterprise IT Operations",
    challenge: "Manual IT service management causing delays and resource inefficiency.",
    solution: "Fully autonomous Agentic AI system for zero-touch ITSM and service desk operations.",
    technologies: "LangGraph multi-agent orchestration, intelligent ticket routing, automated resolution workflows.",
    impact: "80%+ reduction in manual interventions, 24/7 automated incident resolution, improved MTTR by 60%."
  },
  {
    title: "📄 Enterprise Knowledge Summarization - Multimodal Agent",
    industry: "Enterprise Knowledge Management | Scale: Multi-Platform Integration",
    challenge: "Scattered organizational knowledge across Confluence, SharePoint, and repositories.",
    solution: "Multimodal Agentic AI system for intelligent content summarization and knowledge extraction.",
    technologies: "Multimodal AI (text, image, document), Vector embeddings, Graph RAG.",
    impact: "70% reduction in knowledge discovery time, enhanced decision-making through contextual insights."
  },
  {
    title: "📡 Telecom Operations Intelligence - Planner Agent",
    industry: "Telecommunications | Scale: Network Infrastructure Management",
    challenge: "Complex telecom network planning and optimization across multiple domains.",
    solution: "Specialized Agentic AI ecosystem for telecom operations and strategic planning.",
    technologies: "Domain-specific LLMs, network topology analysis, predictive modeling.",
    impact: "45% improvement in network efficiency, reduced planning cycles from weeks to days."
  },
  {
    title: "☁ Infrastructure Operations - Multi-Agent Ecosystem",
    industry: "Cloud & Infrastructure Operations | Scale: Multi-Cloud Enterprise Environment",
    challenge: "Complex infrastructure management across cloud, network, and database environments.",
    solution: "Specialized agent ecosystem for comprehensive infrastructure automation.",
    technologies: "Multi-agent coordination, infra-as-code, automated remediation.",
    impact: "65% reduction in infrastructure incidents, automated 90% of routine operations tasks."
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="section-title">Key Agentic AI & GenAI Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{p.title}</h3>
            <p><strong>Industry:</strong> {p.industry}</p>
            <p><strong>Challenge:</strong> {p.challenge}</p>
            <p><strong>Solution:</strong> {p.solution}</p>
            <p><strong>Technologies:</strong> {p.technologies}</p>
            <p><strong>Impact:</strong> {p.impact}</p>
          </motion.div>
        ))}
      </div>

      <div className="enterprise-info">
        <h3>🏢 Enterprise Client Engagements</h3>
        <p><strong>Global Fortune 500 Clients:</strong> Telstra, INDOSAT, Smart Telecom, AT&T, Novartis, FedEx, Mastercard, Comcast USA</p>

        <h3>🚀 Current Focus Areas (2025)</h3>
        <ul>
          <li>Next-Generation Agentic Systems</li>
          <li>Multimodal AI Integration (Text, Image, Audio, Video)</li>
          <li>Edge AI Deployment</li>
          <li>Industry 4.0 Applications</li>
        </ul>

        <h3>🧠 Research & Innovation Focus</h3>
        <ul>
          <li>Advanced model interpretability and explainable AI</li>
          <li>Flexible AI frameworks for rapid business adaptation</li>
          <li>Responsible AI: Ethics, governance, and security compliance</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
