import React, { useRef, useEffect, useState } from "react";
import "./specialization.scss";
import { motion } from "framer-motion";
import {ReactTyped} from "react-typed";
import { FaRobot, FaDatabase, FaBolt } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { RiFileList3Fill } from "react-icons/ri";
import { HiOutlineLink } from "react-icons/hi";

const cards = [
  {
    id: 1,
    title: "Agentic AI Systems",
    icon: <FaRobot />
  },
  {
    id: 2,
    title: "Model Context Protocol",
    icon: <HiOutlineLink />
  },
  {
    id: 3,
    title: "Generative AI Applications",
    icon: <GiBrain />
  },
  {
    id: 4,
    title: "RAG Implementation",
    icon: <RiFileList3Fill />
  },
  {
    id: 5,
    title: "Vector Database Mastery",
    icon: <FaDatabase />
  },
  {
    id: 6,
    title: "Production Deployment",
    icon: <FaBolt />
  }
];




export default function Specialization({ scrollContainerRef }) {
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
    <div className="specialize">

      <section ref={sectionRef} className="carousel-section">

        <div className="carousel-container">
      <div className="spacer">
        <div className="header" ref={headerRef}>
  <h3>
    {inView && (
    <ReactTyped
      strings={["Advanced Specialization"]}
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
                  <div className="icon">{card.icon}</div>
                  <div className="title">
                    {card.title}
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
