  import React, { useState } from 'react';
  import './newnav.scss';
  import { Link } from 'react-router-dom';
  const NewNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <>
        <div className="navbar-new">
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
              <a><Link to="/">Home</Link></a>
                            <a><Link to="/about">About</Link></a>
                            <a><Link to="/course">Courses</Link></a>
                            <a><Link to="/consultme">Consult Me</Link></a>
            </ul>
          </div>
        </div>
      </>
    );
  };

  export default NewNav;
