import React, { useEffect, useRef } from 'react';
import './logo.scss';

const Logos = () => {



  return (
    <div className="container">
      <main className="main">
        <div className="wrapper">
          <div className="carousel-mask">
            <ul className="carousel">
              <li><img src="1.png" alt="Facebook" /></li>
              <li><img src="2.png" alt="Disney" /></li>
              <li><img src="3.png" alt="Airbnb" /></li>
              <li><img src="4.png" alt="Apple" /></li>
              <li><img src="5.png" alt="Spark" /></li>
              <li><img src="6.png" alt="Samsung" /></li>
              <li><img src="7.png" alt="Quora" /></li>
              <li><img src="8.png" alt="Sass" /></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Logos;
