import React from 'react'
import './duration.scss'
import { FaClock, FaBookOpen, FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";

const  dur= [
  {
    id: 1,
    icon: <FaClock />,
    label: "Duration",
    value: "8 Months",
  },
  {
    id: 2,
    icon: <FaBookOpen />,
    label: "Weekly Hours",
    value: "10-12 Hours",
  },
  {
    id: 3,
    icon: <FaChalkboardTeacher />,
    label: "Format",
    value: "Instructor-Led",
  },
  {
    id: 4,
    icon: <FaGraduationCap />,
    label: "Certification",
    value: "Industry Recognized",
  },
];


const Duration = () => {
  return (
    <>
    <div className="duration">
        <div className="section">
            <div className="cards">
                {dur.map((item,id)=>(
                <div className="card" key={id}>
                    <span className='d-icon'>{item.icon}</span>
                    <p>{item.label}</p>
                    <h3>{item.value}</h3>
                </div>))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Duration
