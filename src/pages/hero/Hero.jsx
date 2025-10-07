import React, { useRef } from "react";
import "./hero.scss";
import {ReactTyped} from "react-typed";
import { Link } from "react-router-dom";

const Hero = () => {
  


  return (
    <>
    <div className="stars"></div>
    <div className="shooting-stars"></div>
    <div className="thumb">
      <div className="bg">
        <img src="bg.png" alt="" />
      </div>
      <div className="thumb-content">
        <div className="name">
          <h2>Hi! <br />I am Ajit</h2>
        </div>
        <div className="title">
          <h1>
            <ReactTyped 
              strings={["Generative AI", "Machine Learning", "Agentic AI"]} 
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
          <Link to="/consultme"><button >
            Consult Me
          </button></Link>
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
