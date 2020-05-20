import React from 'react';
import './Profile.css';

export default function Profile(props) {
  
  return (
    <div id="profile">
      <img alt="profile-img" src="crop1.png"></img>
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
          <ul>
            <li>
              <p>JavaScript</p>
            </li>
            <li>
              <p>Ruby</p>
            </li>
            <li>
              <p>HTML</p>
            </li>
            <li>
              <p>Python</p>
            </li>
            <li>
              <p>CSS</p>
            </li>
            <li>
              <p>SASS</p>
            </li>
          </ul>
        </div>
        <div className="skill-item">
          <h4>Frameworks, Libraries & Environments</h4>
          <ul>
            <li>
              <p>React</p>
            </li>
            <li>
              <p>Express</p>
            </li>
            <li>
              <p>NodeJS</p>
            </li>
            <li>
              <p>Rails</p>
            </li>
            <li>
              <p>JQuery</p>
            </li>
            <li>
              <p>Bootstrap</p>
            </li>
          </ul>
        </div>
        <div className="skill-item">
          <h4>Systems, CMS & Databases</h4>
          <ul>
            <li>
              <p>Git</p>
            </li>
            <li>
              <p>PostgreSQL</p>
            </li>
            <li>
              <p>SQL</p>
            </li>
            <li>
              <p>MongoDB</p>
            </li>
            <li>
              <p>GraphQL</p>
            </li>
          </ul>
        </div>
        <div className="skill-item">
          <h4>Testing</h4>
          <ul>
            <li>
              <p>Cypress</p>
            </li>
            <li>
              <p>Jest</p>
            </li>
            <li>
              <p>Mocha/Chai</p>
            </li>
            <li>
              <p>React Testing Library</p>
            </li>
            <li>
              <p>Enzyme</p>
            </li>
            <li>
              <p>Apollo</p>
            </li>
          </ul>
        </div>
      </div>
    </div >)
}