import React from 'react';
import './Main.css';
import { projects } from "./projects";
import MainItem from "../mainItem";

const Main = (props) => {
  //take projects
  //make list item for each one - pass down info about project
  //have container which holds all projects - href to project page
  // 1: {
  //   name: "Bettr Trip.",
  //   frontend: "React",
  //   backend: "Ruby on Rails",
  //   api: "Google Maps JS, Google Directions Services, Google Distance Matrix, Google Places, DarkSky Forecast/TimeMachine",
  //   database: "psql",
  //   image: "",
  //   type: "blog",
  //   testing: "",
  //   description: "A web tool that allows users to plan trips while referencing google map. Weather, travel duration, and nearby interesting points are also shown to allow users make better decisions."
  // },
  const projectArray = [];
  for (let project of projects) {
    projectArray.push(project);
  };
  const projectComponents = projectArray.map(function(proj, index) {
    return (
      <MainItem 
        key={index}
        name={proj.name}
        frontend={proj.frontend}
        backend={proj.backend}
        api={proj.api}
        database={proj.database}
        image={proj.image}
        type={proj.type}
        testing={proj.testing}
        description={proj.description}
      />
    )
  })
  return (<div>
    {projectComponents}
  </div>)
}

export default Main