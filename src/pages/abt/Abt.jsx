import React from 'react';
import './abt.scss';
import NewNav from '../newnav/NewNav';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
const social = [
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/yourusername/" },
  { icon: <FaTwitter />, url: "https://twitter.com/yourusername" },
  { icon: <FaGithub />, url: "https://github.com/yourusername" },
  { icon: <SiGooglescholar />, url: "https://scholar.google.com/citations?user=yourid" },
];

const Abt = () => {
  const stars = Array.from({ length: 20 });

  return (
    <>
      <NewNav />
      <div className="abt">
        <div className="night">
        {stars.map((_, index) => (
          <div
            key={index}
            className="shooting_star"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 5000}ms`
            }}
          />
        ))}
      </div>
        <div className="img">
          <div className="abt-img c">
            <img src="ajitkatiyar1.jpg" alt="Profile" />
          </div>
        </div>
        <div className="abt-text">
         <div className="abt-data">
           <h1>About Me</h1>
          <p>Hi, I’m Ajit Kumar — an AI/ML and Data Science expert with over 17 years of experience in delivering innovative solutions across industries like telecom, finance, healthcare, and agriculture. I specialize in designing and deploying scalable AI systems using frameworks like TensorFlow, PyTorch, and Langchain. With hands-on experience in generative models, LLMs, and cloud platforms like AWS, I’m passionate about transforming ideas into intelligent applications that solve real-world problems and drive business growth.</p>
          <div className="cards-abt">
            {social.map((social, id)=>(
            <div className="card" key={id}>
              <a href={social.url}>{social.icon}</a>
            </div>
            ))}
          </div>
        </div>
         </div>
      </div>

      
    </>
  );
};

export default Abt;
