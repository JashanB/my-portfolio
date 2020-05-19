import React from 'react';
import './Project.css';
import { projObj } from "../projectObj";
import ProjectItem from "../ProjectItem";

const Project = (props) => {
  //take projObj
  //make list item for each one - pass down info about project
  //have container which holds all projObj - href to project page
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
  for (let project of projObj) {
    projectArray.push(project);
  };
  const projectComponents = projectArray.map(function(proj, index) {
    return (
      <ProjectItem 
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

export default Project