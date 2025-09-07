import React, { useRef, useEffect, useState } from "react";
import "./project.scss";
import { motion } from "framer-motion";

const cards = [
  { url: "pr.png", title: "Project 1", id: 1 },
  { url: "pr.png", title: "Project 2", id: 2 },
  { url: "pr.png", title: "Project 3", id: 3 },
  { url: "pr.png", title: "Project 4", id: 4 },
  { url: "pr.png", title: "Project 5", id: 5 },
  { url: "pr.png", title: "Project 6", id: 6 },
  { url: "pr.png", title: "Project 7", id: 7 },
];

export default function Project({ scrollContainerRef }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [sidePadding, setSidePadding] = useState(0);

  useEffect(() => {
    function calculateSizes() {
      if (!trackRef.current || !sectionRef.current) return;

      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const cardWidth = 450;
      const padding = (viewportWidth - cardWidth) / 2;

      // Adjust scroll distance so that last card is centered at end
      const distance = Math.max(0, trackWidth - viewportWidth + padding + padding);

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
      <div className="spacer">
        <div className="header">
          <h1>My Projects</h1>
        </div>
      </div>

      <section ref={sectionRef} className="carousel-section">

        <div className="carousel-container">
          <div
            ref={trackRef}
            className="carousel-track"
            style={{ paddingLeft: `${sidePadding}px`, paddingRight: `${sidePadding}px` }}
          >
            {cards.map(({ id, url, title }) => (
              <div key={id} className="card">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${url})` }}
                />
                <div className="card-content">
                  <p>{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
