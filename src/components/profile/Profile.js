import React from 'react';
import './Profile.css';

export default function Profile(props) {
  return (
    <div id="profile">
      <img alt="profile-img" src="crop1.png"></img>
      <div className="picture-border"></div>
      <h1>Jashan Brar</h1>
      <p className="info-p"><b>Lighthouse Labs</b> 2019-2020</p>
      <p className="info-p"><b>Schulich School of Medicine</b> 2016-2018</p>
      <p className="info-p"><b>Western University</b> 2015, Biomedical Cellular Biology</p>
      {/* <p className="info-p"><b>contact</b>: brarjashan417@gmail.com | <b>github</b>: <a href="https://github.com/JashanB">https://github.com/JashanB</a> | <b>linkedin</b>: <a href="https://www.linkedin.com/in/jashan-brar/">https://www.linkedin.com/in/jashan-brar/</a></p> */}
      <div className="contact-flex">
        <p className="contact-1"><b>contact:</b> brarjashan417@gmail.com</p><p> </p>
        <p className="contact-1"><b>github</b>: <a href="https://github.com/JashanB">https://github.com/JashanB</a></p><p> </p>
        <p className="contact-2"><b>linkedin</b>: <a href="https://www.linkedin.com/in/jashan-brar/">https://www.linkedin.com/in/jashan-brar/</a></p>
      </div>
      <div className="about">
        <h2>About</h2>
        <p>I am a previous medical student that decided to pursue my passion for technology and development.
          For me, medicine and programming are very similar. Both careers can be described as a craft with an infinite skill ceiling.
          To be considered competent, you must consistently plan, execute, and reflect on how you can improve.
          As someone who has a deep passion for competition, this process is extremely engaging and motivates me to try my hardest.</p>
        <p>The reason why I chose development over medicine is because of the ability to create.
          I have been in sciences all my life, yet I have always envied musicians and artists.
          To create something which did not exist before is truly magical.
            Even though I have no artistic ability, I realized that programming can be my creative outlet.</p>
        <p>In the short amount of time that I have learnt programming, I have created a few things that I am proud of.
          I made a travel planner that filled a hole in my planning needs, a weather app that provides me with more information than the one on my phone,
           and a Pinterest-clone for educational resources. I know this is only the start and I am keen to develop my skills.</p>
        <p>I am excited to continue to create and I hope you follow me on my creative journey. </p>
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
    </div >
  )
}