import React, { useState } from 'react';
import './App.css';
import Project from '../project';
import Profile from '../profile';
import WorkExp from '../workExp';
import Publications from '../publications';

export default function App() {
  const [collapse, setCollapse] = useState(false);
  const collapseMenu = () => {
    collapse ? setCollapse(state => false) : setCollapse(state => true);
  };
  let navClassName = 'nav';
  //give nav onclick function - collapses nav automatically and places button to repopen it
  //put this button onto other view too 

  return (
    <div className="App">
      {/* <button onClick={() => collapseMenu()}></button> */}
      <div className="nav">
        <h2>Jashan Brar</h2>
        <ul className="section-list">
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#work-exp">Work Experience</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
            <ul className="project-list">
              <li>
                <a href="#Bettr-Trip.">Bettr Trip.</a>
              </li>
              <li>
                <a href="#WeatherApp">WeatherApp</a>
              </li>
              <li>
                <a href="#Newton">Newton</a>
              </li>
              <li>
                <a href="#Life">Game of Life</a>
              </li>
              <li>
                <a href="#Number-Guesser">Number Guesser</a>
              </li>
            </ul>
            <li>
              <a href="#publications">Publications</a>
            </li>
        </ul>
      </div>
        <div className="content-wrapper">
          <Profile />
          <WorkExp />
          <Project />
          <Publications />
        </div>
      </div>
      );
    }
