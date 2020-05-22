import React from 'react';
import './App.css';
import Project from '../project';
import Profile from '../profile';
import WorkExp from '../workExp';
import Publications from '../publications';

export default function App() {
  //simply react route to either main or blog
  //have header in app - displays contact info about me
  //profile - picture, links, education, about, skills
  //work experience 
  //software projects
  //publications 
  return (
    <div className="App">
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
