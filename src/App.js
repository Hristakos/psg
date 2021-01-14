import React, { useEffect } from 'react';
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


// Need to do this here to load the icons
library.add(fab, fas);

function App() {
  // // import im1 from 'img/im1.png'
  // // import im2 from 'img/im2.png'
  // // import im3 from 'img/im3.png'

  // // componentDidMount() {
  // //   imageList = [im1, im2, im3]
  // //   imageList.forEach((image) => {
  // //     new Image().src = image
  // //   });
  // // }
  // useEffect(() => {
  //   //preloading image
  //   const imagesArray = [
  //     // { name: "../assets/images/pic1new.png" },
  //     // { name: "../assets/images/pic2new.png" },
  //     // { name: "../assets/images/pic6new.png" },
  //     // { name: "../assets/images/bathroom.png" },
  //     // { name: "../assets/images/kitchen.png" },
  //     // { name: "../assets/images/living.png" },
  //     // { name: "../assets/images/bedroom.png" }
  //   ]
  //   imagesArray.forEach((image) => {
  //     const img = new Image();
  //     img.src = image.name;
  //   });
  // }, []);
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
        <Contact />
      </div>



    </div>
  );
}
export default App;
