import React from 'react';
import './Project.css';
import { projObj } from "../projectObj";

export default function Project(props) {

  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="project-container">
        <div id="Bettr Trip.">
          <h4>Bettr Trip.</h4>
          <span>Overview</span>
          <p>A web tool that allows users to plan trips while referencing google map. Weather, travel duration, and nearby interesting points are also shown to allow users make better decisions.</p>
          <p><b>Utilizes:</b>React, Ruby on Rails, PostgreSQL, Google Maps JS, Google Directions Services, Google Distance Matrix, Google Places, DarkSky Forecast/TimeMachine</p>
          <img></img>
        </div>
        <div id="">
          <h4>WeatherApp</h4>
          <span>Overview</span>
          <p>Weather Forecast for your favourite locations - 48 hourly, weekly and historical comparisons</p>
          <p><b>Utilizes:</b></p>
          <img></img>
        </div>
        <div id="">
          <h4></h4>
          <span>Overview</span>
          <p></p>
          <p><b>Utilizes:</b></p>
          <img></img>
        </div>
        <div id="">
          <h4></h4>
          <span>Overview</span>
          <p></p>
          <p><b>Utilizes:</b></p>
          <img></img>
        </div>
        <div id="">
          <h4></h4>
          <span>Overview</span>
          <p></p>
          <p><b>Utilizes:</b></p>
          <img></img>
        </div>
        <div id="">
          <h4></h4>
          <span>Overview</span>
          <p></p>
          <p><b>Utilizes:</b></p>
          <img></img>
        </div>
        <div id="">
          <h4></h4>
          <span>Overview</span>
          <p></p>
          <p></p>
          <img></img>
        </div>
      </div>
    </div>
  )
}