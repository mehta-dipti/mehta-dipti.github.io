import React from "react";
import ellispe1 from "../assets/Ellipse 1.svg";
import ellispe2 from "../assets/Ellipse 2.svg";
import ellispe3 from "../assets/Ellipse 3.svg";
import ellispe4 from "../assets/Ellipse 4.svg";
import ellispe5 from "../assets/Ellipse 5.svg";
import ellispe6 from "../assets/Ellipse 6.svg";
import ellispe7 from "../assets/Ellipse 12.svg";
import ellispe8 from "../assets/Ellipse 11.svg";

const Skills = () => {
  const skillset = [ellispe8, ellispe1, ellispe2, ellispe3, ellispe4, ellispe5, ellispe6, ellispe7];
  return (
    <div className="skill-container">
      <h1>About me</h1>
      <p>Creative Frontend Engineer and UI developer with experience in blending the art of design with skill of developing user experience through efficient website development. Specialized in Javascript and frameworks including ReactJS, Bootstrap and Typescript. Adapt at working with agile and scrum methodologies to accomplish project milestones within specific timeframes.</p>
      <h1>Skills</h1>
      <div className="skills">
        {skillset.map((skill) => {
          return <img src={skill} alt="skill" />;
        })}
      </div>

      <h1>Experience</h1>
    </div>
  );
};

export default Skills;
