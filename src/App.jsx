import './App.scss';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/about/About';
import Abt from './pages/abt/Abt';
import Benefits from './pages/benefits/Benefits';
import Duration from './pages/duration/Duration';
import Experience from './pages/experience/Experience';
import Footer from './pages/footer/Footer';
import Hero from './pages/hero/Hero';
import Navbar from './pages/navbar/Navbar';
import Project from './pages/projects/Project';
import Specialization from './pages/specialization/Specialization';
import Home from './Home';
import Courses from './pages/courses/Courses';
import ConsultMe from './pages/consult/ConsultMe';
import Enroll from './pages/enroll/Enroll';

function App() {
  return (
    <>
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Abt />} />
        <Route path="/course" element={<Courses/>} />
        <Route path="/consultme" element={<ConsultMe/>} />
        <Route path="/enroll" element={<Enroll/>} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
