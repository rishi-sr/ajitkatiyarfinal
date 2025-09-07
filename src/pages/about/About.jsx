import React, { useEffect, useRef } from "react";
import "./about.scss";

const About = () => {
  const btnRef = useRef(null);
  const finalText = "Download Resume";

  useEffect(() => {
    if (!btnRef.current) return;

    const el = btnRef.current;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    const scramble = () => {
      let frames = 0;
      const totalFrames = 3; 
      const interval = setInterval(() => {
        if (frames < totalFrames) {
          el.innerText = finalText
            .split("")
            .map(() => chars[Math.floor(Math.random() * chars.length)])
            .join("");
          frames++;
        } else {
          el.innerText = finalText;
          clearInterval(interval);
        }
      }, 100); 
    };

    el.addEventListener("mouseenter", scramble);
    return () => {
      el.removeEventListener("mouseenter", scramble);
    };
  }, []);

  return (
    <>
    <div className="about">
      <div className="abt-part1">
        <div className="box">
          <div className="img">
            <div className="img2"></div>
          </div>
          <div className="details">
            <h3>ABOUT ME</h3>
            <h1>
              Generative AI and Data Science expertise – crafting scalable,
              innovative AI/ML solutions with 17+ years of IT leadership.
            </h1>

            <a ref={btnRef} className="resume-btn">{finalText}</a>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default About;
