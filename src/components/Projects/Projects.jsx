import React from 'react';
import Project from './Project';
import projects from'./projects.json';

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="d-flex justify-content-around flex-wrap">
        {projects.map((project, index) => (
            <Project key={index} project={project} />
        ))}
      </div>      
    </div>
  );
}

export default Projects;
