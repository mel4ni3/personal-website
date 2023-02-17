import React, { Component, useState} from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import { SocialIcon } from 'react-social-icons';

class App extends Component {
  render() {

    return (
      <><div className="title">
        <h1>Melanie Ehrlich</h1>
      </div><div className="App">
      <SocialIcon url="https://twitter.com/creamcakex"  target="_blank" rel="noopener noreferrer" style={{ margin: 20 }}/>
      <SocialIcon url="https://github.com/mel4ni3"  target="_blank" rel="noopener noreferrer" style={{ margin: 20 }}/>
      <SocialIcon url="https://instagram.com/melaniie.exe"  target="_blank" rel="noopener noreferrer" style={{ margin: 20 }}/>
      <SocialIcon url="https://www.linkedin.com/in/melanie-ehrlich/"  target="_blank" rel="noopener noreferrer" style={{ margin: 20 }}/>
    </div><div className="info">
          <p>Hi! I am Melanie Ehrlich, a Computer Science student
            at the University of Central Florida. Some of my interests
            include drawing, listening to music, and playing video games. Thanks
            for visiting my site!
          </p>
        </div><div className="projects">
          <h1>Projects</h1>
          <p>My projects!</p>
        </div><div className="resume">
          <h1>Resume</h1>
         <a href="https://mel4ni3.github.io/assets/Melanie_Resume.pdf">Click here to download resume.</a>
        </div><div className="contact">
          <h1>Contact</h1>
         <p>Feel free to reach out to me via email at <a href="mailto:melanie6104@icloud.com">melanie6104@icloud.com,</a> or through <a href="https://www.linkedin.com/in/melanie-ehrlich/">LinkedIn.</a></p>
        </div><div className="footer">
         <p>&copy; Melanie Ehrlich</p>
        </div></>
    );
  }
}

export default App;

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
