import React from 'react';
import './App.css';
import Project from '../project';

function App() {
  //simply react route to either main or blog
  //have header in app - displays contact info about me
  //profile - picture, links, education, about, skills
  //work experience 
  //software projects
  //publications 
  return (
    <div className="App">
      <h1>Jashan Brar</h1>
      <Project/>
    </div>
  );
}

export default App;
