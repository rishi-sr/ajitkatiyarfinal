  import React, { useState } from 'react';
  import './navbar.scss';
  import { Link } from 'react-router-dom';
  
  const Navbar = () => {
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // makes it smooth
    });
  };
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <>
        <div className="navbar">
          <div className="img">
            <Link to="/"><img src="ak.png" alt="Logo" /></Link>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`line line1 ${isOpen ? "open" : ""}`}></div>
            <div className={`line line2 ${isOpen ? "open" : ""}`}></div>
          </div>
        </div>

        <div className={`menu-overlay ${isOpen ? "show" : ""}`}>
          <div className="menu-content">
            <h2>Menu</h2>
            <ul>
              <a onClick={toggleMenu}><Link to="/" onClick={scrollToTop}>Home</Link></a>
              <a onClick={toggleMenu}><Link to="/about" onClick={scrollToTop}>About</Link></a>
              <a onClick={toggleMenu}><Link to="/course" onClick={scrollToTop}>Courses</Link></a>
              <a onClick={toggleMenu}><Link to="/consultme" onClick={scrollToTop}>Consult Me</Link></a>
            </ul>
          </div>
        </div>
      </>
    );
  };

  export default Navbar;
