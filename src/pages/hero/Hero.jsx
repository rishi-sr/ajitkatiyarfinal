import React, { useRef } from "react";
import "./hero.scss";
import {ReactTyped} from "react-typed";
import { Link } from "react-router-dom";

const Hero = () => {
  const hireRef = useRef(null);
  const originalText = "Consult ME";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const scrambleText = () => {
    let count = 0;
    const textLength = originalText.length;

    const interval = setInterval(() => {
      const scrambled = Array.from({ length: textLength })
        .map(() => letters[Math.floor(Math.random() * letters.length)])
        .join("");

      if (hireRef.current) hireRef.current.innerText = scrambled;

      count++;
      if (count >= textLength) {
        clearInterval(interval);
        if (hireRef.current) hireRef.current.innerText = originalText;
      }
    }, 30);
  };

  return (
    <>
    <div className="stars"></div>
    <div className="shooting-stars"></div>
    <div className="thumb">
      <div className="thumb-content">
        <div className="name">
          <h2>Hi! <br />I am Ajit Katiyar</h2>
        </div>
        <div className="title">
          <h1>
            <ReactTyped 
              strings={["Generative AI", "Machine Learning"]} 
              typeSpeed={100} 
              backSpeed={50} 
              loop 
            />
          </h1>
        </div>
        <div className="para">
          <p>AI meets Innovation – Generative AI, LLMs, and Machine Learning delivered with impact.</p>
        </div>
        <div className="consultbtn">
          <button ref={hireRef} onMouseEnter={scrambleText}>
            <Link to="/consult">{originalText}</Link>
          </button>
        </div>
      </div>
      <div className="thumb-image">
        <div className="thumb-img">
          <img src="ajitkatiyar.png" alt="Ajit Katiyar" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
