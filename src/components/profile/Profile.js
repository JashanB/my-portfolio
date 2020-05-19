import React from 'react';
import './Profile.css';

export default function Profile(props) {
  return (
    <div id="profile">
      <img src="crop1.png"></img>
      <h1>Jashan Brar</h1>
      <p>Western University 2015, Biomedical Cellular Biology</p>
      <p>Schulich School of Medicine 2016-2018</p>
      <p>Lighthouse Labs 2019-2020</p>
      <p>contact: brarjashan417@gmail.com | github: <a href="https://github.com/JashanB">https://github.com/JashanB</a> | linkedin: <a href="https://www.linkedin.com/in/jashan-brar/">https://www.linkedin.com/in/jashan-brar/</a></p>
      <div className="about">
        <h2>About</h2>
        <p></p>
      </div>
      <h2>Skills</h2>
      <div className="skills-flex">
        <div className="skill-item">
          <h4>Languages</h4>
          <p>JavaScript</p>
          <p>Ruby</p>
          <p>HTML</p>
          <p>Python</p>
          <p>CSS</p>
          <p>SASS</p>
        </div>
        <div className="skill-item">
          <h4>Frameworks, Libraries & Environments</h4>
          <p>React</p>
          <p>Express</p>
          <p>NodeJS</p>
          <p>Rails</p>
          <p>JQuery</p>
          <p>Bootstrap</p>
          <p></p>

        </div>
        <div className="skill-item">
          <h4>Systems, CMS & Databases</h4>
          <p>Git</p>
          <p>PostgreSQL</p>
          <p>SQL</p>
          <p>MongoDB</p>
          <p>GraphQL</p>

        </div>
        <div className="skill-item">
          <h4>Testing</h4>
          <p>Cypress</p>
          <p>Jest</p>
          <p>Mocha/Chai</p>
          <p>React Testing Library</p>
          <p>Enzyme</p>
          <p>Apollo</p>
        </div>
      </div>
    </div>)
}