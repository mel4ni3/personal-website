import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import './App.css';
import { SocialIcon } from 'react-social-icons';
import Project from './Project';
import WorkExperience from './WorkExperience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faNodeJs, faHtml5, faCss3Alt, faPython } from '@fortawesome/free-brands-svg-icons';

const App = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);

    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: "#ffffff"
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000"
                            },
                            polygon: {
                                nb_sides: 5
                            }
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            },
                            onclick: {
                                enable: true,
                                mode: "push"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    retina_detect: true
                }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1
                }}
            />
            <div className="top-bar">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#work-experience">Work Experience</a>
                <a href="#resume">Resume</a>
                <a href="#contact">Contact</a>
                <a href="#skills">Skills</a>
            </div>
            <div className="App">
                <br />
                <br />
                <br />
                <div id="home" className="section title">
                    <h1>Melanie Ehrlich</h1>
                </div>
                <SocialIcon url="https://twitter.com/creamcakex" target="_blank" rel="noopener noreferrer" style={{ margin: 20 }} />
                <SocialIcon url="https://github.com/mel4ni3" target="_blank" rel="noopener noreferrer" style={{ margin: 20 }} />
                <SocialIcon url="https://instagram.com/melaniie.exe" target="_blank" rel="noopener noreferrer" style={{ margin: 20 }} />
                <SocialIcon url="https://www.linkedin.com/in/melanie-ehrlich/" target="_blank" rel="noopener noreferrer" style={{ margin: 20 }} />
                <div className="info">
                    <img src="https://via.placeholder.com/150" alt="Developer" className="dev-image" />
                    <p>Hi! I am Melanie Ehrlich, a Computer Science student
                        at the University of Central Florida. Some of my interests
                        include drawing, listening to music, and playing video games. Thanks
                        for visiting my site!
                    </p>
                </div>
                <div id="projects" className="section projects">
                    <h1>Projects</h1>
                    <Project
                        name="Project 1"
                        url="https://example.com"
                        imageUrl="https://via.placeholder.com/300"
                        description="This is a description of the project. It explains what the project is about and its key features."
                    />
                </div>
                <div id="work-experience" className="section work-experience">
                    <h1>Work Experience</h1>
                    <WorkExperience
                        logoUrl="https://via.placeholder.com/100"
                        companyName="Company Name"
                        position="Position"
                        datesWorked="Dates Worked"
                        description="This is a description of the work experience. It explains the role and key responsibilities."
                        skills={["Skill 1", "Skill 2", "Skill 3"]}
                    />
                </div>
                <div id="resume" className="section resume">
                    <h1>Resume</h1>
                    <a href="https://mel4ni3.github.io/assets/Melanie_Resume.pdf">Click here to download resume.</a>
                </div>
                <div id="contact" className="section contact">
                    <h1>Contact</h1>
                    <p>Feel free to reach out to me via email at <a href="mailto:melanie6104@icloud.com">melanie6104@icloud.com</a>, or through <a href="https://www.linkedin.com/in/melanie-ehrlich/">LinkedIn</a>.</p>
                </div>
                <div id="skills" className="section skills">
                    <h1>Skills</h1>
                    <div className="skills-icons">
                        <FontAwesomeIcon icon={faReact} size="3x" style={{ margin: '10px' }} />
                        <FontAwesomeIcon icon={faJsSquare} size="3x" style={{ margin: '10px' }} />
                        <FontAwesomeIcon icon={faNodeJs} size="3x" style={{ margin: '10px' }} />
                        <FontAwesomeIcon icon={faHtml5} size="3x" style={{ margin: '10px' }} />
                        <FontAwesomeIcon icon={faCss3Alt} size="3x" style={{ margin: '10px' }} />
                        <FontAwesomeIcon icon={faPython} size="3x" style={{ margin: '10px' }} />
                    </div>
                </div>
                <div className="footer">
                    <p>&copy; Melanie Ehrlich</p>
                </div>
                <br />
            </div>
        </>
    );
};

export default App;