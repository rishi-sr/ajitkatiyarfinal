import React from 'react'
import './course.scss'
import NewNav from '../newnav/NewNav'
import { FaArrowTrendUp } from "react-icons/fa6";
import Section from './Section';
import Footer from '../footer/Footer';
import Durationc from './Durationc';
import Special from './Special';
const Courses = () => {
    const stars = Array.from({ length: 20 });
  return (
    <>
    <NewNav/>
    <div className="course">
    <div className="night">
        {stars.map((_, index) => (
          <div
            key={index}
            className="shooting_star"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 5000}ms`
            }}
          />
        ))}
      </div>
        <div className="c-head">
            <div className="c-part1">
                <div className="c-content">
                <div className="textarea">
                    <p><FaArrowTrendUp /> Improve your skills</p>
                    <h1>Master AI/ML/DATA SCIENCE</h1>
                    <p className='info'>
                        This program covers essential topics for building expertise in machine learning and AI. It starts with foundational mathematics like linear algebra and calculus, along with Python programming and data manipulation using libraries like NumPy and Pandas. Next, it dives into machine learning algorithms, feature engineering, and model validation using tools such as Scikit-learn and XGBoost. Advanced topics include deep learning with CNNs, RNNs, and frameworks like TensorFlow and PyTorch. It also explores generative AI, transformer models, and vector databases for semantic search. Finally, the course teaches MLOps practices including model versioning, CI/CD, monitoring, and deployment using Docker and Kubernetes.
                    </p>
                    <button className="enroll"><span>Get Enrolled</span></button>
                </div>
            </div>
            <div className="imag">
                <div className="area-img">
                    <div className="im img"></div>
                <div className="img2 im"></div>
                <div className="img3 im"></div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <Section/>
    <Special/>
    <Durationc/>
    <Footer/>
    </>
  )
}

export default Courses
