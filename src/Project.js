import React from 'react';
import './App.css';
import './Project.css';

const Project = ({ url, name, imageUrl, description, children }) => {
    return (
        <div className="project">
            <div className="project-name">
                <h2>{name}</h2>
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={imageUrl} alt="Project Thumbnail" />
            </a>
            <div className="project-description">
                <p>{description}</p>
                {children}
            </div>
            <button className="project-button" onClick={() => window.open(url, '_blank')}>
                See Project
            </button>
        </div>
    );
};

export default Project;