import React from 'react';
import './logo.scss';

const Logos = () => {
  const logos = [
    "1.png", "2.png", "3.png", "4.png",
    "5.png", "6.png", "7.png", "8.png"
  ];

  // Duplicate the logos once for seamless looping
  const allLogos = [...logos, ...logos];

  return (
    <div className="container">
      <main className="main">
        <div className="wrapper">
          <div className="carousel-mask">
            <ul className="carousel">
              {allLogos.map((logo, i) => (
                <li key={i}>
                  <img src={logo} alt={`Logo ${i + 1}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Logos;
