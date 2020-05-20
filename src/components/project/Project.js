import React, { useState } from 'react';
import './Project.css';
import { projObj } from "../projectObj";

export default function Project(props) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    expanded ? setExpanded(state => false) : setExpanded(state => true);
  };
  const buttonSign = (boolean) => {
    if (boolean) {
      return "-"
    } else {
      return "+"
    }
  }

  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="project-container">
        <div id="Bettr Trip.">
          <h4>Bettr Trip.</h4>
          <span>Overview</span>
          <p>A web tool that allows users to plan trips while referencing google map. Weather, travel duration, and nearby interesting points are also shown to allow users make better decisions. A RESTful backend server allows users to save trips and create multiple trips at once.</p>
          <p><b>Utilized:</b>React, Ruby on Rails, PostgreSQL, Google Maps JS, Google Directions Services, Google Distance Matrix, Google Places, DarkSky Forecast/TimeMachine</p>
          <button onClick={() => handleClick()}>{buttonSign(expanded)}</button>
          <img></img>
          {expanded &&
            <div>
              <span>Motive</span>
              <p>There are currently very few travel planning websites that allow you to plan your trip while interacting with a world map.
                The apps that do have this functionality are not intuitive and lack many of the features we thought important.
                We wanted to give travellers a one-stop shop for all their travel needs.</p>
              <span>Execution</span>
              <p>For our Lighthouse Labs final project I worked on this travel planner with two other members. The MVP of this project was an interactive world map and an interactive calendar. I built the map using a react wrapper around the Google JS Map and incorportaed key features such as markers and the search box.
                Whenever a place is searched, that location is added to our database. We used useEffects to pull from the database whenever a location is added.
                In hindsight, we should have pulled from the database only on page render and operated with a transient state for the current session.
                This would have allowed everything to still be saved into the database, but it would reduce re-renders for our app.
                Once I finished the map and my teammates finished the calendar, we set to adding APIs to make our project more functional.
                I added routing between locations using the Google Directions API, and weather using DarkSky's API.
                If the travel date for a location was within one week of the current time, the actual forecast would be fetched. Otherwise, we used historical comparisons for the weather.
                My teammates worked on reccomendations around locations and time to travel/travel method.
                Overall, we were happy with the project we had built in less than two weeks.
              </p>
              <span>Problems</span>
              <p>The main probelm we had (aside from a lack of optimization of re-renders), was in our state management.
                We started the project working on two seperate branches with myself taking care of the map and my other two teammates taking care of the calendar.
                The issue was that the map component was the overall parent component and was the one that would communicate its state down to its children.
                Since this was our first large scale project, we started both branches with their own seperate state. When we brought the two branches together the states were disjointed and did not communicate appropriately.
                I had to then refractor the states that were set in the calendar component into the map component in order for the branches to communicate appropriately.
                This made the code heavier and less efficient than it would have been if it was all organized from the start.
                Although a headache to take care of, this was an amazing learning experience in terms of the benefit of appropriately planning out the project beforehand.
              </p>
            </div>
          }
        </div>
        <div id="WeatherApp">
          <h4>WeatherApp</h4>
          <span>Overview</span>
          <p>Weather Forecast for your favourite locations - 48 hourly, weekly and historical comparisons. WeatherApp uses a RESTful backend server that saves the user's searched locations, allowing for personalized usage and reduced API calls.</p>
          <p><b>Utilized:</b>React, Ruby on Rails, PostgreSQL, Google Maps JS, DarkSky Forecast/TimeMachine, CanvasJS</p>
          <div className="image-wrapper">
            <img src="weather1.gif"></img>
            <img src="weather2.gif"></img>
          </div>
        </div>
        <div id="">
          <h4></h4>
          <span>Overview</span>
          <p></p>
          <p><b>Utilized:</b></p>
          <img></img>
        </div>
        <div id="">
          <h4></h4>
          <span>Overview</span>
          <p></p>
          <p><b>Utilized:</b></p>
          <img></img>
        </div>
        <div id="">
          <h4></h4>
          <span>Overview</span>
          <p></p>
          <p><b>Utilized:</b></p>
          <img></img>
        </div>
        <div id="">
          <h4></h4>
          <span>Overview</span>
          <p></p>
          <p><b>Utilized:</b></p>
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