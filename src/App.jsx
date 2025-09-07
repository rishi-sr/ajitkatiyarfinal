import './App.scss';
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import Footer from './pages/footer/Footer';
import Hero from './pages/hero/Hero';
import Navbar from './pages/navbar/Navbar';
import Project from './pages/projects/Project';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="content">
        <div className="section about-section">
          <About />
        </div>
        <div className="section experience-section">
          <Experience />
        </div>
        <div className="section project-section">
          <Project />
        </div>
        <div className="section footer-section">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
