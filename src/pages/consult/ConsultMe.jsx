import React, { useState } from 'react';
import NewNav from '../newnav/NewNav';
import './consult.scss';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import Footer from '../footer/Footer';

const icons = [
  { icon: <FaTwitter />, link: "https://twitter.com" },
  { icon: <FaLinkedin />, link: "https://linkedin.com" },
  { icon: <FaGithub />, link: "https://github.com" },
  { icon: <SiGooglescholar />, link: "https://scholar.google.com" },
];

const ConsultMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setSubmitted(true);
  };

  return (
    <>
      <NewNav />
      <div className="consult">
        <div className="formsec">
          <div className="consultform">
            <h1>Consult Me</h1>
            {submitted ? (
              <div className="submitted-message">
                <h2>Form submitted!</h2>
                <p>Thank you for contacting me. I will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            )}
          </div>
          <div className="consultdet">
            <div className="logo-c">
              <div className="img">
                <img src="ak.png" alt="Profile" />
              </div>
            </div>
            <div className="socialico">
              {icons.map((ic, id) => (
                <a href={ic.link} target="_blank" rel="noopener noreferrer" className="icons" key={id}>
                  <span>{ic.icon}</span>
                </a>
              ))}
            </div>
            <div className="aboutme">
              <p>Hi, I’m Ajit Kumar — an AI/ML and Data Science expert with over 17 years of experience in delivering innovative solutions across industries like telecom, finance, healthcare, and agriculture. I specialize in designing and deploying scalable AI systems using frameworks like TensorFlow, PyTorch, and Langchain. With hands-on experience in generative models, LLMs, and cloud platforms like AWS, I’m passionate about transforming ideas into intelligent applications that solve real-world problems and drive business growth.</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ConsultMe;
