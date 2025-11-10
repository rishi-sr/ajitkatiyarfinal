import React, { useEffect } from 'react'
import './projects.scss'

const Projects = () => {
  useEffect(() => {
    const next = document.querySelector('.next')
    const prev = document.querySelector('.prev')

    const handleNext = () => {
      const items = document.querySelectorAll('.item')
      if (items.length > 0) {
        document.querySelector('.slide').appendChild(items[0])
      }
    }

    const handlePrev = () => {
      const items = document.querySelectorAll('.item')
      if (items.length > 0) {
        document.querySelector('.slide').prepend(items[items.length - 1])
      }
    }

    next?.addEventListener('click', handleNext)
    prev?.addEventListener('click', handlePrev)

    return () => {
      next?.removeEventListener('click', handleNext)
      prev?.removeEventListener('click', handlePrev)
    }
  }, [])

  const projects = [
    {
      title: "StreamlineBot - Comcast USA",
      industry: "Entertainment / Streaming Services | Scale: Enterprise Production",
      challenge: "Optimize customer support efficiency in streaming services operations",
      solution: "Deployed autonomous multi-agent system for real-time customer query resolution.",
      technologies: "LangGraph multi-agent coordination, advanced RAG with semantic search",
      impact: "Direct support automation enabling 24/7 customer assistance with contextual understanding."
    },
    {
      title: "LogiGenie - Intelligent Logistics Assistant",
      industry: "Supply Chain & Logistics | Scale: Multi-regional Deployment",
      challenge: "Complex logistics operations requiring intelligent decision-making.",
      solution: "Generative AI-powered assistant with autonomous workflow management.",
      technologies: "Graph RAG for complex reasoning, Vector DB optimization, custom embeddings.",
      impact: "Streamlined logistics operations with predictive insights and automated decision support."
    },
    {
      title: "AI-Tutor / Facilitator Platform",
      industry: "Education Technology | Scale: Learning Management System",
      challenge: "Automated learning/training with adaptive assessment capabilities.",
      solution: "One-stop AI portal with intelligent tutoring and survey generation.",
      technologies: "Multi-modal AI integration, fine-tuned LLMs, automated content generation.",
      impact: "Personalized learning experiences with automated polls, surveys, and adaptive training modules."
    },
    {
      title: "Zero Touch ITSM - Autonomous Service Desk",
      industry: "IT Infrastructure & Operations | Scale: Enterprise IT Operations",
      challenge: "Manual IT service management causing delays and resource inefficiency.",
      solution: "Fully autonomous Agentic AI system for zero-touch ITSM and service desk operations.",
      technologies: "LangGraph multi-agent orchestration, intelligent ticket routing, automated resolution workflows.",
      impact: "80%+ reduction in manual interventions, 24/7 automated incident resolution, improved MTTR by 60%."
    },
    {
      title: "Enterprise Knowledge Summarization - Multimodal Agent",
      industry: "Enterprise Knowledge Management | Scale: Multi-Platform Integration",
      challenge: "Scattered organizational knowledge across Confluence, SharePoint, and repositories.",
      solution: "Multimodal Agentic AI system for intelligent content summarization and knowledge extraction.",
      technologies: "Multimodal AI (text, image, document), Vector embeddings, Graph RAG.",
      impact: "70% reduction in knowledge discovery time, enhanced decision-making through contextual insights."
    },
    {
      title: "Telecom Operations Intelligence - Planner Agent",
      industry: "Telecommunications | Scale: Network Infrastructure Management",
      challenge: "Complex telecom network planning and optimization across multiple domains.",
      solution: "Specialized Agentic AI ecosystem for telecom operations and strategic planning.",
      technologies: "Domain-specific LLMs, network topology analysis, predictive modeling.",
      impact: "45% improvement in network efficiency, reduced planning cycles from weeks to days."
    },
    {
      title: "Infrastructure Operations - Multi-Agent Ecosystem",
      industry: "Cloud & Infrastructure Operations | Scale: Multi-Cloud Enterprise Environment",
      challenge: "Complex infrastructure management across cloud, network, and database environments.",
      solution: "Specialized agent ecosystem for comprehensive infrastructure automation.",
      technologies: "Multi-agent coordination, infra-as-code, automated remediation.",
      impact: "65% reduction in infrastructure incidents, automated 90% of routine operations tasks."
    }
  ]

  return (
    <div className="project-container">
      <h1>My Projects</h1>
      <div className="project-cont">
        <div className="slide">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="item"
              style={{
                backgroundImage: `url(/project${idx + 1}.jpg)`,
              }}
            >
              <div className="content">
                <div className="name">{proj.title}</div>
                <div className="des">
                  <p><strong>Industry:</strong> {proj.industry}</p>
                  <p><strong>Challenge:</strong> {proj.challenge} </p>
                  <p><strong>Solution:</strong> {proj.solution}</p> 
                  <p><strong>Technologies:</strong> {proj.technologies}</p>
                  <p><strong>Impact:</strong> {proj.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="button">
          <button className="prev">
            <i className="fa-regular fa-circle-left"></i>
          </button>
          <button className="next">
            <i className="fa-regular fa-circle-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
