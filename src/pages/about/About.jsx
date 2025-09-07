import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./about.scss";

const content = [""];
const About = () => {
  const btnRef = useRef(null);
  const finalText = "Download Resume";

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5, // Element is considered in view when half visible
  });

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

  useEffect(() => {
    if (inView) {
      controls.start({color: "#000", transition: { duration: 0.5 } });
    } else {
      controls.start({ color: "#333", transition: { duration: 0.5 } });
    }
  }, [inView, controls]);

  return (
    <div className="about">
      <div className="abt-part1">
        <div className="box">
          <div className="img">
            <div className="img2"></div>
          </div>
          <div className="details">
            <h3>ABOUT ME</h3>
            <motion.h1
              ref={ref}
              animate={controls}
            >
              Generative AI and Data Science expertise – crafting scalable,
              innovative AI/ML solutions with 17+ years of IT leadership.
            </motion.h1>

            <a ref={btnRef} className="resume-btn">{finalText}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
