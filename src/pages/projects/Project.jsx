import React, { useRef, useEffect, useState } from "react";
import "./project.scss";
import { motion } from "framer-motion";
import {ReactTyped} from "react-typed";


const cards = [
  { 
    id: 1,
    title: "Foundation & Mathematics", 
    desc: [
      "Linear Algebra & Statistics",
      "Calculus for ML",
      "Python Programming Mastery",
      "Data Structures & Algorithms",
      "NumPy, Pandas, Matplotlib"
    ]
  },
  { 
    id: 2,
    title: "Machine Learning Core", 
    desc: [
      "Supervised & Unsupervised Learning",
      "Feature Engineering & Selection",
      "Model Selection & Validation",
      "Ensemble Methods",
      "Scikit-learn, XGBoost"
    ]
  },
  { 
    id: 3,
    title: "Deep Learning & Neural Networks", 
    desc: [
      "CNNs, RNNs, LSTMs",
      "Transfer Learning",
      "Computer Vision & NLP",
      "TensorFlow, PyTorch, Keras",
      "Model Optimization Techniques"
    ]
  },
  { 
    id: 4,
    title: "Generative AI & LLMs", 
    desc: [
      "Transformer Architecture",
      "Fine-tuning Large Language Models",
      "Prompt Engineering & Optimization",
      "GPT, BERT, T5 Implementation",
      "Text Generation & Summarization"
    ]
  },
  { 
    id: 5,
    title: "RAG & Vector Databases", 
    desc: [
      "Retrieval-Augmented Generation",
      "Vector Embeddings & Similarity Search",
      "Pinecone, Weaviate, ChromaDB",
      "Document Processing & Chunking",
      "Semantic Search Implementation"
    ]
  },
  { 
    id: 6,
    title: "Agentic AI & MCP", 
    desc: [
      "Multi-Agent Systems Design",
      "Model Context Protocol (MCP)",
      "Agent Communication & Coordination",
      "LangChain, AutoGen, CrewAI",
      "Tool Use & Function Calling"
    ]
  },
  { 
    id: 7,
    title: "MLOps & Production", 
    desc: [
      "Model Versioning & Tracking",
      "CI/CD for ML Pipelines",
      "Docker, Kubernetes, MLflow",
      "Model Monitoring & Drift Detection",
      "A/B Testing for ML Models"
    ]
  }
];



export default function Project({ scrollContainerRef }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [sidePadding, setSidePadding] = useState(0);
  const [inView, setInView] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    function calculateSizes() {
  if (!trackRef.current || !sectionRef.current) return;

  const trackWidth = trackRef.current.scrollWidth;
  const viewportWidth = window.innerWidth;

  const card = trackRef.current.querySelector(".card");
  const cardWidth = card ? card.offsetWidth : 800;

  const padding = (viewportWidth - cardWidth)/2;

  const distance = Math.max(padding, trackWidth - viewportWidth + padding);

  setScrollDistance(distance);
  setSidePadding(padding);

  sectionRef.current.style.height = `${distance + window.innerHeight}px`;
}


    calculateSizes();
    window.addEventListener("resize", calculateSizes);
    return () => window.removeEventListener("resize", calculateSizes);
  }, []);

  useEffect(() => {
    const scrollEl = scrollContainerRef?.current || window;
    const track = trackRef.current;
    const section = sectionRef.current;

    if (!track || !section || !scrollEl) return;

    function onScroll() {
      if (scrollDistance === 0) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableHeight = section.offsetHeight - viewportHeight;

      if (scrollableHeight <= 0) return;

      if (rect.top <= 0 && rect.bottom >= viewportHeight) {
        const progress = Math.min(1, Math.max(0, -rect.top / scrollableHeight));
        
        track.style.transform = `translateX(${-progress * scrollDistance}px)`;
      } else if (rect.top > 0) {
        track.style.transform = `translateX(0px)`;
      } else {
        track.style.transform = `translateX(${-scrollDistance}px)`;
      }
    }

    scrollEl.addEventListener("scroll", onScroll);
    onScroll();

    return () => scrollEl.removeEventListener("scroll", onScroll);
  }, [scrollDistance, scrollContainerRef]);

  return (
    <div className="project">

      <section ref={sectionRef} className="carousel-section">

        <div className="carousel-container">
      <div className="spacer">
        <div className="header" ref={headerRef}>
  <h1>
    {inView && (
    <ReactTyped
      strings={["Master AI/ML/DATA SCIENCE"]}
      typeSpeed={90}
      backSpeed={30}
      showCursor={false}
    />)}
  </h1>
  <h3>
    {inView && (
    <ReactTyped
      strings={["Complete Course Curriculum"]}
      typeSpeed={40}
      backSpeed={20}
      startDelay={300}
      showCursor={false}

    />)}
  </h3>
</div>
      </div>
          <div
            ref={trackRef}
            className="carousel-track"
            style={{ paddingLeft: `${sidePadding*2.5}px`, paddingRight: `${sidePadding}px` }}
          >
            {cards.map((card,id) => (
              <div key={id} className="card">
                <div
                  className="card-image"
                />
                <div className="card-content">
                  <div className="number">
                    <div className="circle">{card.id}</div>
                  </div>
                  <div className="head">{card.title}</div>
                  <div className="cont">
                    {card.desc.map((point, idx)=>(
                    <li key={idx}><i class="fa-solid fa-caret-right"></i>{point}</li>))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
