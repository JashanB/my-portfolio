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
      <Profile />
      <WorkExp />
      <Project/>
      <Publications />
    </div>
  );
}
