import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './abt.scss'
import Navbar from '../navbar/Navbar'

const finalText = "Download Resume";

const Abt = () => {
  const btnRef = useRef(null);
  const h1Controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (!btnRef.current) return;

    const el = btnRef.current;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    const scramble = () => {
      let frames = 0;
      const totalFrames = 6;
      const interval = setInterval(() => {
        if (frames < totalFrames) {
          el.innerText = finalText
            .split("")
            .map((char) =>
              Math.random() > 0.5 ? char : chars[Math.floor(Math.random() * chars.length)]
            )
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
      h1Controls.start({ color: "#fffceb", transition: { duration: 0.8 } });
    } else {
      h1Controls.start({ color: "#fff", transition: { duration: 0.8 } });
    }
  }, [inView, h1Controls]);

  return (
    <>
      <Navbar />
      <div className="about-p">
        <div className="abt-body">
          <div className="img">
            <div className="img2">
              <img src="ajitkatiyar1.jpg" alt="Profile" />
            </div>
          </div>
          <div className="details">
            <h3>ABOUT ME</h3>
            <motion.h1
              ref={ref}
              animate={h1Controls}
              initial={{ color: "#fff" }}
            >
              Generative AI and Data Science expertise – crafting scalable,
              innovative AI/ML solutions with 17+ years of IT leadership.
            </motion.h1>
            <a ref={btnRef} className="resume-btn" role="button">{finalText}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Abt;
