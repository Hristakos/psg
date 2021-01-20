import React from 'react';
import NavBar from './NavBar';
import OurRange from './OurRange';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';
import Difference from './Difference';
import Features from './Features';

function Root() {

    return (
        <>
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
        </>
    )
}

export default Root;