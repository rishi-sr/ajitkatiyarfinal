import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Footer Main */}
        <div className="footer-content">
          <div className="row">
            {/* Left Section */}
            <div className="col">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="/">
                    <img
                      src="ak.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                     Hi, I'm <strong>Ajit Katiyar</strong>, a passionate learner and aspiring
                      developer with an interest in modern web
                      technologies and clean design. I enjoy building interactive projects, solving real-world problems with
                      code, and exploring new tools to improve efficiency. Always curious,
                      I aim to grow my skills while contributing to meaningful work that makes
                      an impact.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                  <a href="#"><i class="fa-brands fa-google-scholar"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in linkedin-bg"></i></a>

                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Experience</a></li>
                </ul>
              </div>
            </div>

            {/* Subscribe */}
            <div className="col">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Consult Me</h3>
                </div>
                <div className="footer-text">
                  <p>Get the support you need! Click here for consultancy services.</p>
                </div>
                <div className="subscribe-form">
                  <button className="btn1-foot">Consult Me
                  </button>
                    <button className="btn2"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2025, All Rights Reserved Purpul Digital | Developed by Purpul Digital
                </p>
              </div>
            </div>
            <div className="col">
              <div className="footer-menu">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
