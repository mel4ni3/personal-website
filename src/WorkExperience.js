import React from 'react';
import './App.css';

const WorkExperience = ({ logoUrl, companyName, position, datesWorked, description, skills }) => {
    return (
        <div className="experience">
            <img src={logoUrl} alt="Company Logo" />
            <div className="experience-content">
                <div className="company-name">{companyName}</div>
                <div className="position">{position}</div>
                <div className="dates-worked">{datesWorked}</div>
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="skills">
                    {skills.map((skill, index) => (
                        <button key={index} className="skill-button">{skill}</button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;