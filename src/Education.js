import React from 'react';
import './App.css';

const Education = ({ logoUrl, schoolName, degree, datesStudied, activities, skills }) => {
    return (
        <div className="experience">
            <img src={logoUrl} alt="School Logo" />
            <div className="education-content">
                <div className="school-name">{schoolName}</div>
                <div className="position">{degree}</div>
                <div className="dates-worked">{datesStudied}</div>
                <div className="description">
                    <p>{activities}</p>
                </div>
                <div className="skillsWork">
                    {skills.map((skill, index) => (
                        <button key={index} className="skill-button">{skill}</button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;