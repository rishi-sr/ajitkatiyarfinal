import React from 'react'
import './experience.scss'

const exp = [
  {
    flag: "Solutions Architect",
    company: "HCLTech",
    time: "Apr 2025 – Present (6 mos)",
    location: "Full-time",
    desc: "Design and implementation of autonomous agentic systems powered by LLMs, reducing customer service resolution times by 37% while maintaining 98% accuracy across 14 domains. End-to-end MLOps pipelines, RAG implementations, multi-agent orchestration, and enterprise-grade infrastructure for handling 100k+ daily interactions."
  },
  {
    flag: "Responsible AI Architect",
    company: "Accenture",
    time: "Apr 2023 – Mar 2025 (2 yrs)",
    location: "Hybrid",
    desc: "Led Responsible AI initiatives, MLOps, Generative AI tools, and human-AI collaboration frameworks."
  },
  {
    flag: "Technology Manager – AI and Innovation",
    company: "Accenture",
    time: "Aug 2021 – Apr 2023 (1 yr 9 mos)",
    location: "India",
    desc: "Worked on AI, MLOps, LLMs, and OpenAI-powered solutions for innovation-driven projects."
  },
  {
    flag: "Data Scientist",
    company: "Finicity, a Mastercard Company",
    time: "Feb 2020 – Jun 2021 (1 yr 5 mos)",
    location: "Hybrid, Mumbai Metropolitan Region",
    desc: "Machine Learning, Predictive Modeling, AI, and data-driven insights. Worked with databases, LLMs, transformers (BERT, GPT), and Python-based model deployment."
  },
  {
    flag: "Senior Technical Lead – Data Science",
    company: "HCL Technologies",
    time: "Mar 2016 – Mar 2020 (3 yrs 11 mos)",
    location: "India",
    desc: "AI Application, NLP, Computer Vision, Data Science Deployment, and Data Administration using Python, CV, and OpenCV."
  },
  {
    flag: "Data Engineer – Analytics",
    company: "Netlink Software Group America Inc",
    time: "Mar 2014 – Jan 2016 (1 yr 11 mos)",
    location: "Greater Bhopal Area",
    desc: "Big Data Engineering, HiveQLR, and analytics pipeline building."
  },
  {
    flag: "Asst Manager IT",
    company: "ORIFLAME SOFTWARE",
    time: "Oct 2012 – Jan 2014 (1 yr 4 mos)",
    location: "Delhi",
    desc: "Design and Development of MLM Software for FMCG."
  },
  {
    flag: "Lead Engineer",
    company: "Mahindra Comviva",
    time: "May 2010 – Oct 2012 (2 yrs 6 mos)",
    location: "",
    desc: "Telecom Software Implementation: PACS across 32 countries in Africa, Sri Lanka, and India."
  },
  {
    flag: "Senior Software Engineer",
    company: "iGATE (Patni)",
    time: "Jun 2008 – May 2010 (2 yrs)",
    location: "",
    desc: "Development and support for Rockwell automation."
  },
  {
    flag: "Software Executive",
    company: "Rolta India Limited",
    time: "Oct 2006 – Feb 2008 (1 yr 5 mos)",
    location: "Mumbai",
    desc: "Oracle and UNIX development with GIS support."
  }
];

const Experience = () => {
  return (
    <>
      <div className="exp">
      <h1 id='exp'>Experience</h1>
        <ul className="timeline">
        {exp.map((job, i) => (
          <li key={i}>
            <div className={i % 2 === 0 ? "direction-r" : "direction-l"}>
              <div className="flag-wrapper">
                <span className="flag">{job.flag}</span>
                <span className="time-wrapper">
                  <span className="time">{job.time}</span>
                </span>
              </div>
              <div className="desc">{job.desc}</div>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default Experience
