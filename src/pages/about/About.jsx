import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./about.scss";

const content = [""];
const About = () => {
  const btnRef = useRef(null);
  const finalText = "Download Resume";

  // Controls for h1 animation
  const h1Controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 1.0,
  });

  const maskControls = useAnimation();

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
      h1Controls.start({ color: "#000", transition: { duration: 0.8 } });
      maskControls.start({ scale: 1, transition: { duration: 0.8 } });
    } else {
      h1Controls.start({ color: "#333", transition: { duration: 0.8 } });
      maskControls.start({ scale: 0.8, transition: { duration: 0.8 } });
    }
  }, [inView, h1Controls, maskControls]);

  return (
    <div className="about">
      <div className="abt-part1">
        <div className="box">
          <div className="img" style={{ backgroundImage: "url('ajitkatiyar.jpg')" }}>
            <motion.div
              className="img2"
              style={{ backgroundImage: "url('mask.jpg')" }}
              animate={maskControls}
              initial={{ scale: 0.8 }}
            />
          </div>
          <div className="details">
            <h3>ABOUT ME</h3>
            <motion.h1
              ref={ref}
              animate={h1Controls}
              initial={{ color: "#333" }}
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
