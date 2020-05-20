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
        <ul className="section-list">
          <a href="#profile">Profile</a>
          <a href="#work-exp">Work Experience</a>
          <a href="#project">Projects</a>
          <ul className="project-list">
            <a href="#Bettr-Trip.">Bettr Trip.</a>
            <a href="#WeatherApp">WeatherApp</a>
            <a href="#Newton">Newton</a>
            <a href="#Life">Game of Life</a>
            <a href="#Number-Guesser">Number Guesser</a>
          </ul>
          <a href="#publications">Publications</a>
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
