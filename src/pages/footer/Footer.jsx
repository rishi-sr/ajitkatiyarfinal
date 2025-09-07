import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta">
          <div className="row">

            <div className="col">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210</span>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>ajitkatiyar@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

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
  developer with an interest in modern web technologies and clean design.
  I enjoy building interactive projects, solving real-world problems with
  code, and exploring new tools to improve efficiency. Always curious,
  I aim to grow my skills while contributing to meaningful work that makes
  an impact.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                  <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                  <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
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
                  <li><a href="#">Project</a></li>
                </ul>
              </div>
            </div>

            {/* Subscribe */}
            <div className="col">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Contact Me</h3>
                </div>
                <div className="footer-text">
                  
                </div>
                <div className="subscribe-form">
                  <form>
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
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
                  Copyright &copy; 2025, All Rights Reserved Ajit Katiyar
                </p>
              </div>
            </div>
            <div className="col">
              <div className="footer-menu">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Project</a></li>
                  <li><a href="#">Experience</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
