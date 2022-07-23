import React from "react";
import "../../styles/projects.scss";
import myProjects from "../../helpers/myProjects"


const Projects = () => {
  return (
    <div className="projects">
      {myProjects.map((project,index) => {
        return (
          <div key={index}>
            <img src={project.image} alt="" />
            <a href={project.link} target="_blank" rel="noreferrer">
              Go To WebSite
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
