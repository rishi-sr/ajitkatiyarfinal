import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./hero.scss";

const Hero = () => {
  const [activeBoxes, setActiveBoxes] = useState([]);
  const [bgImage, setBgImage] = useState("ajitkatiyar.png");
  const hireRef = useRef(null);
  const originalText = "Consult Me!";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 768) {
        setBgImage("ajitkm.png");
      } else {
        setBgImage("ajitkatiyar.png");
      }
    };

    updateImage(); // run on mount
    window.addEventListener("resize", updateImage);

    return () => window.removeEventListener("resize", updateImage);
  }, []);

  const handleEnter = (i) => {
    setActiveBoxes((prev) => [...prev, i]);
    setTimeout(() => {
      setActiveBoxes((prev) => prev.filter((id) => id !== i));
    }, 800);
  };

  const scrambleText = () => {
    const textLength = originalText.length;
    let count = 0;

    const interval = setInterval(() => {
      const scrambled = Array.from({ length: textLength })
        .map(() => letters[Math.floor(Math.random() * letters.length)])
        .join("");

      if (hireRef.current) {
        hireRef.current.innerText = scrambled;
      }

      count++;
      if (count >= textLength) {
        clearInterval(interval);
        if (hireRef.current) {
          hireRef.current.innerText = originalText;
        }
      }
    }, 30);
  };

  return (
    <div className="thumb" style={{ backgroundImage: `url(${bgImage})` }}>
      {Array.from({ length: 2000 }).map((_, i) => (
        <motion.div
          key={i}
          className={`box ${activeBoxes.includes(i) ? "glow" : ""}`}
          onMouseEnter={() => handleEnter(i)}
          whileHover={{ scale: 1 }}
        ></motion.div>
      ))}
      <p className="name">Ajit Katiyar</p>
      <h1>
        Generative AI / <span>Machine Learning</span>
      </h1>
      <p className="description">
        AI meets Innovation – Generative AI, LLMs, and Machine Learning delivered with impact.
      </p>
      <motion.p
        ref={hireRef}
        className="hire"
        onMouseEnter={scrambleText}
        whileHover={{ color: "#00246B" }}
      >
        {originalText}
      </motion.p>
    </div>
  );
};

export default Hero;
