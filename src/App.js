
import './App.css';
import NavBar from './NavBar';

import OurRange from './OurRange';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';
import Difference from './Difference';
import Features from './Features';

function App() {
  return (
    <div className="container">
      <nav>

        <NavBar />
      </nav>


      <section id="home">
        <Home />
      </section>
      <div className="our-story" id="ourstory">
        <div className="our-story-section">
          <Difference />
        </div>
        <div className="our-story-section-2">
          <Features />
        </div>
      </div>
      <section id="ourrange">
        <OurRange />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>



    </div>
  );
}
export default App;
