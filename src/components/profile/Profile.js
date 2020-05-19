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
      <div className="skills">
        <h2>Skills At About Glance</h2>
        <p></p>
      </div>
    </div>)
}