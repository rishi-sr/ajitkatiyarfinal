import React from 'react'
import './benefits.scss'
import { FaBriefcase, FaBuilding, FaUsers, FaMicroscope, FaGlobe, FaBullseye } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa"; // for resume/document


const Benefits = () => {
  return (
    <>
    <div className="benefits">
        <div className="bhead">
            <h2><FaBriefcase /> Industry Benefits</h2>
        </div>
        <div className="grid">
            <div className="card"><FaBuilding /> Live Industry Projects</div>
            <div className="card"><FaUsers /> Career Counseling</div>
            <div className="card"><FaFileAlt /> Resume Enhancement</div>
            <div className="card"><FaMicroscope /> Unlimited Lab Access</div>
            <div className="card"><FaGlobe /> Global Faculty</div>
            <div className="card"><FaBullseye /> Placement Support</div>
          </div>
        </div>

    </>
  )
}

export default Benefits
