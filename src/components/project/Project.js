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
          <p><b>Utilized: </b>React, Ruby on Rails, PostgreSQL, Google Maps JS, Google Directions Services, Google Distance Matrix, Google Places, DarkSky Forecast/TimeMachine</p>
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
              <span>Stretch</span>
              <p>The main stretch goal for this proejct was to incorporate web sockets so multiple people can edit a trip at the same time.</p>
            </div>
          }
          <button onClick={() => handleClick()}>{buttonSign(expanded)}</button>
          <div className="image-wrapper">
            <img alt="trip-1" src="trip1.gif"></img>
            <img alt="trip-2" src="trip2.gif"></img>
            <img alt="trip-3" src="trip3.gif"></img>
          </div>
        </div>
        <div id="WeatherApp">
          <h4>WeatherApp</h4>
          <span>Overview</span>
          <p>Weather Forecast for your favourite locations - 48 hourly, weekly and historical comparisons. WeatherApp is a mobile optimized app that uses a RESTful backend server that saves the user's searched locations, allowing for personalized usage and reduced API calls.</p>
          <p><b>Utilized: </b>React, Ruby on Rails, PostgreSQL, Google Maps JS, DarkSky Forecast/TimeMachine, CanvasJS</p>
          {expanded &&
            <div>
              <span>Motive</span>
              <p>Coming out of bootcamp, I wanted to create a full stack application to practice my skills.
                In my final project I was not involved in all stages of app creation so I wanted to be familiar with the entire process.
                I had experience using the DarkSky Weather API before so I thought a good place to start would be a WeatherApp.
                I also wanted to practice styling and mobile optimization so I got to work on this right away.
              </p>
              <span>Execution</span>
              <p>I modeled this app after the Weather-Network App on my phone. I wanted to have persistent data so I decided to insert every searched location into the user's locations table.
                The database was very simple for this project and I decided to use Ruby on Rails to keep it simple.
                This app optimizes re-renders because it keeps new searched locations in a transient state and only pulls from the database on page render.
                To access DarkSky data through API calls, the request must be sent through a proxy server. I used axios calls from the front-end to make Excon calls from the back-end.
                Whenever a location is clicked, the user is taken to a detailed weather page for that location.
                Along with daily and weekly data, another request is sent that obtains historical data for the location.
                The weekly forecast is plotted on the CanvasJS scatterplot, along with the historical data.
              </p>
              <span>Problems</span>
              <p>The main problem I ran into was the number of API calls I was making. I had limited the API calls for the current forecast, but I did not save the historical comparisons.
                Since I was fetching historical data from multiple years, my API call limit was reached very quickly.
                In hindsight I should have created a database table for historical data of a location and only made new API calls if there was no previous data present.
              </p>
              <span>Stretch</span>
              <p>The stretch I want to do for this project is make it into a full mobile app and not just mobile optimized. I plan to first build more projects and build on my web development skills before taking it to mobile.</p>
            </div>
          }
          <button onClick={() => handleClick()}>{buttonSign(expanded)}</button>
          <div className="image-wrapper">
            <img alt="weather-gif-1" src="weather1.gif"></img>
            <img alt="weather-gif-2" src="weather2.gif"></img>
          </div>
        </div>
        <div id="Newton">
          <h4>Newton</h4>
          <span>Overview</span>
          <p>Pinterest-like app for learners. Express web app that allows learners to save learning resources like tutorials, blogs and videos in a central place that is publicly available to any user.
            Search community resources or topics, comment on and rate resources, or upload your own!
            User signup and authentication is fully supported through cookies.
          </p>
          <p><b>Utilized: </b>Node.js/Express RESTful API, PostgreSQL, CookieParser, Material UI, Styled-components</p>
          {expanded &&
            <div>
              <span>Motive</span>
              <p>This app was created as a midterm project for Lighthouse Labs. An educational board was the prompt we chose as we felt it would be a great learning experience and we ran with it.
              </p>
              <span>Execution</span>
              <p>What makes this project great is its backend. When a user signs up, they select three topics of intreset.
                Their homepage is then populated by resources based on the topics they have liked. Liking a resource will also add all of its associated topics to your bank of topics liked.
                Users can also search all resources by topic or by name. Additionally, users can rate and comment on all resources!
                All of these functions required careful planning of the database structure as well as complex SQL queries to collect all of the data.
                My role was to create the database and manage these queries and it required a lot of probelm solving to make work.
                It was a stressful process to fix all of the bugs but it was a very fun process.
                I've never felt more like a hacker than I did finding and fixing one last bug 10 minutes before our presentation!
              </p>
              <span>Problems</span>
              <p>The main issue with this project was the limited time we had to complete it. One of the things we wanted to incorporate was JQuery to make the app more responsive.
                However, we decided to leave that until the end and make sure everything was functioning before incorporating JQuery.
                This resulted in the application being very complex by the time we were thinking about JQuery and we could not incorporate it with the remaining time.
              </p>
              <span>Stretch</span>
              <p>The main thing we wanted to incorporate in this app was JQuery. It would have made it more clean and less relient on CSS magic to make it look responsive.</p>
            </div>
          }
          <button onClick={() => handleClick()}>{buttonSign(expanded)}</button>
          <div className="image-wrapper">
            <img alt="Newton-1" src="Newton1.png"></img>
            <img alt="Newton-2" src="Newton2.png"></img>
          </div>
        </div>
        <div id="Life">
          <h4>Game of Life</h4>
          <span>Overview</span>
          <p>React/Redux front-end only app that models Conway's Game of Life. Set a minimum of 5 tiles alive by clicking them and then press start!</p>
          <p><b>Utilized: </b>React and Redux</p>
          {expanded &&
            <div>
              <span>Motive</span>
              <p>This app was built as part of a MintBean hackathon. After first creating it with React, I decided to practice Redux by refractoring all states to use Redux instead.
              </p>
              <span>Execution</span>
              <p>The basics of this app are the grid, tile columns and tiles. The grid holds the main states and uses hooks to communicates with its children.
                Each tile senses the number of adjacent tiles that are alive. Clicking a tile uses a hook to set it alive. 
                Once the game is started, a set interval function is used to determine if the tile should be dead or should be alive, based on the status of its adjacent tiles.
                In order to appropriately sense the tiles, I had to modify the algorithm based on the number of bordering squares. 
                I also ended up making the number of tiles and the speed of the app alterable. This was easy to do because I properly set those states at the highest level.
              </p>
              <span>Problems</span>
              <p>The main issue with this project was my use of the set interval function. 
                There was no way to stop it and the timing of turning a tile alive or dead became desynced.
              </p>
              <span>Stretch</span>
              <p>This is an app I want to style and deploy.</p>
            </div>
          }
          <button onClick={() => handleClick()}>{buttonSign(expanded)}</button>
          <div className="image-wrapper">
            <img alt="Life-1" src="life1.gif"></img>
          </div>
        </div>
        <div id="Number-Guesser">
          <h4>Number-Guesser</h4>
          <span>Overview</span>
          <p>This app is a New Tab Override Chrome Extension, built in 2 hours as part of a MintBean hackathon. Guess a number between 0 and the default range, or set the range to whatever number you want.</p>
          <p><b>Utilized: </b>React, Jest, Cypress, React Testing Library</p>
          {expanded &&
            <div>
              <span>Motive</span>
              <p>I decided to build a number guesser because I had never done it before and I was stressing for ideas while the clock was ticking.
                After the hackathon, I thought that this would be a great place to practice unit and integration testing.
              </p>
              <span>Execution</span>
              <p>This app is very simple and uses only 3 components: input form, number setter and result. 
                Default states are set in the parent component and children communicate with the parent through hooks.
                The actual answer is generated through useEffect on page render, when the range change, or when the restart button is clicked.
                There are multiple levels of error handling to allow for only proper inputs.
                This app has full coverage unit tests as well as integration tests.
              </p>
              <span>Problems</span>
              <p>This was my first time creating a chrome extension and I was very confused at first. 
                I spent a lot of time initially in the hackathon reading documentation. 
                I figuered out that I had to use a manifest.json but at the end, the final product wasn't working!
                I ended up realizing that I had to run build for the project before it could be accessed as a chrome extension. 
              </p>
              <span>Stretch</span>
              <p>I will also practice end to end testing with Cypress using this app.</p>
            </div>
          }
          <button onClick={() => handleClick()}>{buttonSign(expanded)}</button>
          <div className="image-wrapper">
            <img alt="Number-Guesser" src="numberguesser.gif"></img>
          </div>
        </div>
      </div>
    </div>
  )
}