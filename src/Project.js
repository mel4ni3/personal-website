import React from 'react';
import './App.css';

const Project = ({ url, imageUrl, description }) => {
    return (
        <div className="project">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={imageUrl} alt="Project Thumbnail" />
            </a>
            <div className="project-description">
                <p>{description}</p>
            </div>
            <button className="project-button" onClick={() => window.open(url, '_blank')}>
                See Project
            </button>
        </div>
    );
};

export default Project;