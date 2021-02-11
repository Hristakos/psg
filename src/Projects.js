import React from 'react';
import ProjectSlider from './components/ProjectSlider';

import "./Projects.css"
const project1Images = [
    "../assets/projects/project1/1.jpg",
    "../assets/projects/project1/2.jpg",
    "../assets/projects/project1/3.jpg",
    "../assets/projects/project1/4.jpg",
    "../assets/projects/project1/5.jpg",
    "../assets/projects/project1/6.jpg"
]
const project2Images = [
    "../assets/projects/project2/1.jpg",
    "../assets/projects/project2/2.jpg",
    "../assets/projects/project2/3.jpg",
    "../assets/projects/project2/4.jpg",
    "../assets/projects/project2/5.jpg",
    "../assets/projects/project2/6.jpg"
]
const project3Images = [
    "../assets/projects/project3/1.jpg",
    "../assets/projects/project3/2.jpg"
]

const Project = ({ heading = "heading", images, autoplay = true }) => {
    return (
        <div className="project-container">
            <div className="project-heading">{heading}</div>
            <div className="project-images">
                <ProjectSlider
                    images={images}
                    autoplay={autoplay} />
            </div>
        </div>
    )
}
function Projects() {
    return (
        <>
            <div className="projects-heading">Past projects</div>
            <div className="projects-page-container">
                <div className="projects-container">
                    <Project
                        images={project1Images}
                        heading="Residential redevelopment" />
                    <Project
                        images={project2Images}
                        heading="Residential extension and renovation" />
                    <Project
                        images={project3Images}
                        heading="Residential renovation" />
                </div>

            </div>
        </>
    )
}

export default Projects;