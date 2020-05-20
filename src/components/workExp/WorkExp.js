import React from 'react';
import './WorkExp.css';

export default function WorkExp(props) {
  return (
    <div id="work-experience">
      <h2>Work Experience</h2>
      <div className="exp-list">
        <div className="exp">
          <h4>Resturant Manager: Sitara Resturant</h4>
          <p>2018-2019</p>
          <ul>
            <li>Oversaw operations of up to 15 employees at once in a fast-paced environment</li>
            <li>Consistently delivered exceptional customer service while maintaining status as the #1 out of 119 restaurant in Sarnia (4.7 rating / 641 reviews)</li>
            <li>Cultivated an efficient and professional environment through creative problem solving and progressive conflict resolution</li>
          </ul>
        </div>
        <div className="exp">
          <h4>Student Researcher: Canadian Mental Health Association</h4>
          <p>2017-2018</p>
          <ul>
            <li>Systematically analyzed qualitative data attained from client feedback reviews in order to identify disparities regarding patient satisfaction</li>
            <li>Synthesized the identified issues into a succinct and easy to digest format to be presented to staff and community stakeholders</li>
            <li>Worked with community stakeholders to apply feasible solutions to ongoing problems</li>
          </ul>
        </div>
        <div className="exp">
          <h4>Research Associate: Lawson Health Research Institute - St. Joseph's Hospital</h4>
          <p>2015-2016</p>
          <ul>
            <li>Worked on a meta-analysis project investigating trends in Rehabilitation Sciences in coordination with the Heart and Stroke Foundation of Canada</li>
            <li>Systematically extracted and analyzed published research to derive Best Practice Guidelines for clinicians in the field of Rehabilitation</li>
            <li>Identified gaps in the available literature and lead the initiative to perform and publish meta-analyses on said topics</li>
          </ul>
        </div>
      </div>
    </div>
  )
}