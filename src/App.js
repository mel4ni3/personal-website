import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import './App.css';
import { SocialIcon } from 'react-social-icons';
import Project from './Project';
import WorkExperience from './WorkExperience';
import Education from './Education';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faNodeJs, faHtml5, faCss3Alt, faPython, faJava, faFlutter } from '@fortawesome/free-brands-svg-icons';

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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
            <div className="menu-icon" onClick={toggleMenu}>
                &#9776;
            </div>
            <div className={`top-bar ${menuOpen ? 'vertical' : ''}`}>
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#work-experience">Work Experience</a>
                <a href="#education">Education</a>
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
                    <img src={`${process.env.PUBLIC_URL}/assets/photo_2024-04-14_22-28-21.jpg`} alt="Developer" className="dev-image" />
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
                <div id="education" className="section education">
                    <h1>Education</h1>
                    <Education 
                        logoUrl="https://via.placeholder.com/100"
                        schoolName="School Name"
                        degree="Degree"
                        datesStudied="Dates Studied"
                        activities="Activities"
                        skills={["Skill 1", "Skill 2", "Skill 3"]}
                    />
                </div>
                <div id="resume" className="section resume">
                    <h1>Resume</h1>
                    <a href={`${process.env.PUBLIC_URL}/assets/Melanie_Resume.pdf`}>Click here to view resume.</a>
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
                        <FontAwesomeIcon icon={faJava} size="3x" style={{ margin: '10px' }} />
                        <FontAwesomeIcon icon={faFlutter} size="3x" style={{ margin: '10px' }} />
                        <svg id="Devicon" class='devicon-devicon-plain' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zM115 62h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6H94v-5h3.5l.9-4H94v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zm-12.7 4h3.8l.9-4h-3.8z" fill="#68217A"/></svg>                    
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