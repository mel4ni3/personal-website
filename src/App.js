import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import './App.css';
import { SocialIcon } from 'react-social-icons';
import Project from './Project';
import WorkExperience from './WorkExperience';
import Education from './Education';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faNodeJs, faHtml5, faCss3Alt, faPython, faJava, faFlutter, faRProject } from '@fortawesome/free-brands-svg-icons';

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showMore, setShowMore] = useState(false);

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

    const toggleShowMore = () => {
        setShowMore(!showMore);
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
                    <p>Hi! I am Melanie Ehrlich, a Computer Science graduate
                        from the University of Central Florida. I study Master of Science in Business Analytics
                        at the University of Florida. In addition, I am a Software Engineer. Fields that I am interested in include Machine Learning, Data Science, and Full-Stack Development. Outside of school or work, some of my interests
                        include writing, reading comics, watching shows, drawing, listening to music, and playing video games. Thanks
                        for visiting my site!
                    </p>
                </div>
                <div id="projects" className="section projects">
                    <h1>Projects</h1>
                    <Project
                        name="KnightAssist"
                        url="https://github.com/KnightAssistUCF/KnightAssist-Mobile-App"
                        imageUrl={`${process.env.PUBLIC_URL}/assets/KnightAssistCoA3.png`}
                        description="A full-stack website and mobile application that allows students to sign up for volunteering shifts and record their hours. Organizations can publish volunteering events and administrators can modify all data. Worked primarily on the mobile application. This was my UCF Senior Design project."
                    />
                    <Project
                        name="Budgie"
                        url="https://github.com/tanndlin/budgie"
                        imageUrl={`${process.env.PUBLIC_URL}/assets/logo.png`}
                        description="A full-stack web and mobile application for tracking expenses. Large project for UCF COP 4331C Processes of Object-Oriented Software Development course. Worked on the backend APIs in Express."
                    />
                    {showMore && (
                        <>
                            <Project
                                name="Face Detection in Python"
                                url="https://github.com/mel4ni3/python-facedetection"
                                imageUrl={`${process.env.PUBLIC_URL}/assets/img_screenshot_27.11.2024.png`}
                                description="A Python project in OpenCV that detects faces in real time image capture. Uses Haar Cascades to detect faces as well as eyes."
                            />
                            <Project
                                name="R Analysis on Per Capita Income"
                                url={`${process.env.PUBLIC_URL}/assets/Investigative Assignment 2_ Trends of Three Countries DRAFT.pdf`}
                                imageUrl={`${process.env.PUBLIC_URL}/assets/R project.png`}
                                description={
                                    <>
                                    A paper written from R analysis on the per capita income of the United States, Dominican Republic, and Vietnam, using data from the <a href="https://databank.worldbank.org/source/world-development-indicators#" target="_blank" rel="noopener noreferrer">World Bank</a>.
                                    </>
                                }
                            />
                        </>
                    )}
                    <button onClick={toggleShowMore} className="show-more-button">
                        {showMore ? "Hide" : "Show More"}
                    </button>
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
                        logoUrl={`${process.env.PUBLIC_URL}/assets/Florida_Gators_gator_logo.svg.png`}
                        schoolName="University of Florida"
                        degree="Master of Science in Business Analytics"
                        datesStudied="Aug 2024 - Aug 2026"
                        activities=""
                        skills={["R", "Python", "SQL", "Tableau", "Power BI", "Excel", "Machine Learning", "Data Mining", "Data Visualization"]}
                    />
                    <Education 
                        logoUrl={`${process.env.PUBLIC_URL}/assets/images.png`}
                        schoolName="University of Central Florida"
                        degree="Bachelor of Science in Computer Science"
                        datesStudied="Aug 2020 - May 2024"
                        activities="Knight Hacks, Association for Computing Machinery, WikiKnights"
                        skills={["C", "Java", "C++", "Python", "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "MySQL", "Git", "C#", "R", "Flutter", "Dart", "Swift"]}
                    />
                     <Education 
                        logoUrl={`${process.env.PUBLIC_URL}/assets/Cobra_high_logo.jpg`}
                        schoolName="Park Vista Community High School"
                        degree="High School Diploma"
                        datesStudied="Aug 2016 - May 2020"
                        activities="Spanish Honor Society, Park Vista Marching Band, Strategic Games Club"
                        skills={[]}
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
                        <div className="tooltip">
                        <FontAwesomeIcon icon={faReact} size="3x" style={{ margin: '10px' }} data-tooltip="React" />
                        <span class="tooltiptext">React</span>
                        </div>
                        <div className="tooltip">
                        <FontAwesomeIcon icon={faJsSquare} size="3x" style={{ margin: '10px' }}  data-tooltip="JavaScript"/>
                        <span class="tooltiptext">JavaScript</span>
                        </div>
                        <div className="tooltip">
                        <FontAwesomeIcon icon={faNodeJs} size="3x" style={{ margin: '10px' }}  data-tooltip="Node.js"/>
                        <span class="tooltiptext">Node.js</span>
                        </div>
                        <div className="tooltip">
                        <FontAwesomeIcon icon={faHtml5} size="3x" style={{ margin: '10px' }}  data-tooltip="HTML5"/>
                        <span class="tooltiptext">HTML5</span>
                        </div>
                        <div className="tooltip">
                        <FontAwesomeIcon icon={faCss3Alt} size="3x" style={{ margin: '10px' }}  data-tooltip="CSS3"/>
                        <span class="tooltiptext">CSS3</span>
                        </div>
                        <div className="tooltip">
                        <FontAwesomeIcon icon={faPython} size="3x" style={{ margin: '10px' }}  data-tooltip="Python"/>
                        <span class="tooltiptext">Python</span>
                        </div>
                        <div className="tooltip">
                        <FontAwesomeIcon icon={faJava} size="3x" style={{ margin: '10px' }}  data-tooltip="Java"/>
                        <span class="tooltiptext">Java</span>
                        </div>
                        <div className="tooltip">
                        <FontAwesomeIcon icon={faFlutter} size="3x" style={{ margin: '10px' }}  data-tooltip="Flutter"/>
                        <span class="tooltiptext">Flutter</span>
                        </div>
                        <div className="tooltip" style={{height: '10%', width: '10%',  margin: '10px' }}>
                        <svg id="Devicon" className="devicon-devicon-plain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"  data-tooltip="C#"><path d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zM115 62h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6H94v-5h3.5l.9-4H94v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zm-12.7 4h3.8l.9-4h-3.8z" fill="#68217A"/></svg>
                        <span class="tooltiptext">C#</span>
                        </div>
                        <div className="tooltip">
                        <FontAwesomeIcon icon={faRProject} size="3x" style={{ margin: '10px' }}  data-tooltip="R"/>
                        <span class="tooltiptext">R</span>
                        </div>
                        <div className="tooltip" style={{height: '10%', width: '10%',  margin: '10px'}}>
                        <svg id="Devicon" class='devicon-devicon-plain' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"  data-tooltip="MySQL"><path fill="#00618A" d="M0 91.313h4.242V74.566l6.566 14.598c.773 1.77 1.832 2.391 3.914 2.391s3.098-.621 3.871-2.391l6.566-14.598v16.746h4.242V74.594c0-1.633-.652-2.422-2-2.828-3.223-1.004-5.383-.137-6.363 2.039l-6.441 14.41-6.238-14.41c-.937-2.176-3.14-3.043-6.359-2.039-1.348.406-2 1.195-2 2.828zM32.93 77.68h4.238v9.227c-.039.5.16 1.676 2.484 1.715h9.223V77.633h4.25c.02 0-.008 14.984-.008 15.047.023 3.695-4.582 4.496-6.707 4.559H33.02v-2.852l13.414-.004c2.73-.285 2.406-1.645 2.406-2.098v-1.113h-9.012c-4.195-.039-6.863-1.871-6.898-3.977-.004-.191.09-9.422 0-9.516zm23.461 13.633h12.195c1.426 0 2.813-.301 3.914-.816 1.836-.84 2.73-1.984 2.73-3.48v-3.098c0-1.223-1.016-2.367-3.016-3.125-1.059-.41-2.367-.625-3.629-.625h-5.141c-1.711 0-2.527-.516-2.73-1.656-.039-.137-.039-.246-.039-.383V76.2c0-.109 0-.219.039-.355.203-.867.652-1.113 2.16-1.25l.41-.027h12.109v-2.824H63.488c-1.711 0-2.609.109-3.426.352-2.527.789-3.629 2.039-3.629 4.215v2.473c0 1.902 2.16 3.535 5.789 3.914.41.027.816.055 1.223.055h4.406c.164 0 .324 0 .449.027 1.344.109 1.914.355 2.324.844.211.195.332.473.324.758v2.477c0 .297-.203.68-.609 1.004-.367.328-.98.543-1.793.598l-.449.027H56.391zm45.297-4.922c0 2.91 2.164 4.539 6.523 4.867.41.027.816.055 1.227.055h11.051v-2.828h-11.133c-2.488 0-3.426-.625-3.426-2.121V71.738h-4.238V86.39zm-23.75.148V76.457c0-2.559 1.801-4.113 5.355-4.602a7.976 7.976 0 0 1 1.145-.082h8.047c.41 0 .777.027 1.188.082 3.555.488 5.352 2.043 5.352 4.602v10.082c0 2.078-.762 3.188-2.523 3.914l4.18 3.77h-4.926l-3.379-3.051-3.402.215H84.44a9.23 9.23 0 0 1-2.492-.352c-2.699-.734-4.008-2.152-4.008-4.496zm4.578-.246c0 .137.043.273.082.438.246 1.172 1.352 1.824 3.023 1.824h3.852l-3.539-3.195h4.926l3.086 2.789c.57-.305.945-.766 1.074-1.363.043-.137.043-.273.043-.41v-9.668c0-.109 0-.246-.043-.383-.246-1.09-1.348-1.715-2.98-1.715h-6.418c-1.879 0-3.105.816-3.105 2.098zm41.703-19.246c-2.605-.07-4.598.172-6.301.891-.484.203-1.258.207-1.336.813.266.281.309.699.52 1.039.406.66 1.094 1.539 1.707 2 .664.508 1.355 1.047 2.074 1.484 1.273.777 2.699 1.223 3.93 2 .723.461 1.441 1.039 2.148 1.559.348.254.582.656 1.039.816v-.074c-.238-.305-.301-.723-.52-1.039l-.965-.965c-.941-1.25-2.137-2.348-3.41-3.262-1.016-.727-3.281-1.711-3.707-2.891l-.074-.074c.719-.078 1.563-.34 2.223-.516 1.117-.301 2.113-.223 3.262-.52l1.559-.449v-.293c-.582-.598-.996-1.387-1.633-1.93-1.656-1.41-3.469-2.824-5.336-4.004-1.035-.652-2.312-1.074-3.41-1.629-.367-.187-1.016-.281-1.262-.594-.574-.734-.887-1.664-1.332-2.52a96.534 96.534 0 0 1-2.668-5.633c-.562-1.285-.93-2.555-1.633-3.707-3.363-5.535-6.988-8.875-12.602-12.156-1.191-.699-2.633-.973-4.148-1.332l-2.449-.148c-.496-.211-1.012-.82-1.48-1.113-1.859-1.176-6.629-3.73-8.008-.371-.867 2.121 1.301 4.191 2.078 5.266.543.754 1.242 1.598 1.629 2.445.258.555.301 1.113.52 1.703.539 1.453 1.008 3.031 1.707 4.375.352.68.738 1.395 1.184 2 .273.371.742.539.816 1.113-.457.641-.484 1.633-.742 2.445-1.16 3.652-.723 8.191.965 10.898.516.828 1.734 2.609 3.41 1.926 1.465-.598 1.137-2.445 1.555-4.078.098-.367.039-.641.223-.887v.074l1.336 2.668c.988 1.59 2.738 3.25 4.223 4.371.773.582 1.379 1.59 2.375 1.93V68.6h-.074c-.195-.297-.496-.422-.742-.664-.582-.57-1.227-1.277-1.703-1.93-1.352-1.832-2.547-3.84-3.633-5.93-.52-.996-.973-2.098-1.41-3.113-.168-.391-.164-.984-.516-1.184-.48.742-1.187 1.344-1.559 2.223-.594 1.402-.668 3.117-.891 4.891l-.148.074c-1.031-.25-1.395-1.312-1.777-2.223-.973-2.305-1.152-6.02-.297-8.672.219-.687 1.219-2.852.813-3.484-.191-.633-.828-1-1.184-1.484a11.7 11.7 0 0 1-1.187-2.074c-.793-1.801-1.164-3.816-2-5.633-.398-.871-1.074-1.75-1.629-2.523-.617-.855-1.305-1.484-1.781-2.52-.168-.367-.398-.957-.148-1.336.078-.254.195-.359.445-.441.43-.332 1.629.109 2.074.293 1.191.496 2.184.965 3.191 1.633.48.32.969.941 1.555 1.113h.668c1.043.238 2.211.07 3.188.367 1.723.523 3.27 1.34 4.668 2.227 4.273 2.695 7.766 6.535 10.156 11.117.387.738.551 1.441.891 2.223.684 1.578 1.543 3.203 2.223 4.746s1.34 3.094 2.297 4.375c.504.672 2.453 1.031 3.336 1.406.621.262 1.637.535 2.223.891 1.125.676 2.211 1.48 3.266 2.223.523.375 2.141 1.188 2.223 1.855zM91.082 38.805a5.26 5.26 0 0 0-1.332.148v.074h.074c.258.535.715.879 1.035 1.336l.742 1.555.074-.07c.461-.324.668-.844.668-1.633-.187-.195-.211-.437-.371-.668-.211-.309-.621-.48-.891-.742zm0 0"/></svg>
                        <span class="tooltiptext">MySQL</span>
                        </div>      
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