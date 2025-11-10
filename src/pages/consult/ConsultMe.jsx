import React, { useState } from 'react';
import { send } from '@emailjs/browser';
import NewNav from '../newnav/NewNav';
import './consult.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const icons = [
  { icon: <FaLinkedin />, link: "https://linkedin.com" },
  { icon: <FaGithub />, link: "https://github.com" },
];

const ConsultMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({ email: '', number: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    setFieldErrors({ ...fieldErrors, [e.target.name]: '' }); // clear field-specific error
  };

  const validateForm = () => {
    let valid = true;
    const errors = { email: '', number: '' };

    // Email validation (basic format check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
      valid = false;
    }

    // Phone validation (10 digits only)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.number)) {
      errors.number = 'Phone number must be exactly 10 digits.';
      valid = false;
    }

    setFieldErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setError('Please correct the errors above.');
      return;
    }

    const serviceId = "service_tc88vlc";
    const templateId = "template_lyj2bf6";
    const publicKey = "WQEe_uuHdWxHxv5JH";

    send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        setError('');
        setFormData({ name: '', email: '', number: '', message: '' });
        setFieldErrors({ email: '', number: '' });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setError('Failed to send message. Please try again later.');
      });
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
                <h2>Form Submitted!</h2>
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
                {fieldErrors.email && <p className="field-error">{fieldErrors.email}</p>}

                <input
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  maxLength={10}
                />
                {fieldErrors.number && <p className="field-error">{fieldErrors.number}</p>}

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Consult Me Regarding the Course"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button type="submit">Submit</button>
                {error && <p className="error">{error}</p>}
              </form>
              
            )}
          </div>

          <div className="consultdet">
            <div className="logo-c">
              <div className="img">
                <Link to="/"><img src="ak.png" alt="Profile" /></Link>
              </div>
            </div>

            <div className="socialico">
              {icons.map((ic, id) => (
                <a
                  href={ic.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icons"
                  key={id}
                >
                  <span>{ic.icon}</span>
                </a>
              ))}
            </div>

            <div className="aboutme">
              <p>
                Hi, I’m Ajit Kumar — an AI/ML and Data Science expert with over 19 years of experience
                in delivering innovative solutions across industries like telecom, finance, healthcare,
                and agriculture. I specialize in designing and deploying scalable AI systems using frameworks
                like TensorFlow, PyTorch, and Langchain. With hands-on experience in generative models, LLMs,
                and cloud platforms like AWS, I’m passionate about transforming ideas into intelligent applications
                that solve real-world problems and drive business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultMe;
