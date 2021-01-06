
import './App.css';
import NavBar from './NavBar';

import OurRange from './OurRange';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';
import Difference from './Difference';
import Features from './Features';


import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ContactUs from './ContactUs';

// Need to do this here to load the icons
library.add(fab, fas);

function App() {
  return (
    <div className="container">
      <nav>

        <NavBar />
      </nav>


      <div className="home" id="home">
        <Home />
      </div>
      <div className="our-story" id="ourstory">
        <div className="our-story-section">
          <Difference />
        </div>
        <div className="our-story-section-2">
          <Features />
        </div>
      </div>
      <div className="range" id="ourrange">
        <OurRange />
      </div>
      <div className="projects" id="projects">
        <Projects />
      </div>
      <div className="contact" id="contact">
        {/* <Contact /> */}
        <ContactUs />
      </div>



    </div>
  );
}
export default App;
