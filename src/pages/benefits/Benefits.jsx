import React from "react";
import "./benefits.scss";
import { FaBuilding, FaUsers, FaMicroscope, FaGlobe, FaBullseye, FaFileAlt } from "react-icons/fa";

const benefits = [
  { id: 1, icon: <FaBuilding />, title: "Live Industry Projects" },
  { id: 2, icon: <FaUsers />, title: "Career Counseling" },
  { id: 3, icon: <FaFileAlt />, title: "Resume Enhancement" },
  { id: 4, icon: <FaMicroscope />, title: "Unlimited Lab Access" },
  { id: 5, icon: <FaGlobe />, title: "Global Faculty" },
  { id: 6, icon: <FaBullseye />, title: "Placement Support" },
];

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="cards-d">
        <div className="demhead">
          <h1>Industrial Benefits</h1>
        </div>

        <div className="row">
          {benefits.slice(0, 3).map((item) => (
            <div key={item.id} className="card dtu">
              <span className="icon">{item.icon}</span>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <div className="row ">
          {benefits.slice(3, 6).map((item) => (
            <div key={item.id} className="card dtu2">
              <span className="icon">{item.icon}</span>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
