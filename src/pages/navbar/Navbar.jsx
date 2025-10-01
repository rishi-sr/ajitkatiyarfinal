  import React, { useState } from 'react';
  import './navbar.scss';
  import { Link } from 'react-router-dom';
  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <>
        <div className="navbar">
          <div className="img">
            <img src="ak.png" alt="Logo" />
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
              <a onClick={toggleMenu}><Link to="/">Home</Link></a>
              <a onClick={toggleMenu}><Link to="/about">About</Link></a>
              <a onClick={toggleMenu}><Link to="/course">Courses</Link></a>
              <a onClick={toggleMenu}><Link to="/consultme">Consult Me</Link></a>
            </ul>
          </div>
        </div>
      </>
    );
  };

  export default Navbar;
