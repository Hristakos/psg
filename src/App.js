
import './App.css';
import NavBar from './NavBar';
import OurStory from './OurStory';
import OurRange from './OurRange';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="container">

      <NavBar />



      <section id="ourstory">
        <OurStory />
      </section>
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
