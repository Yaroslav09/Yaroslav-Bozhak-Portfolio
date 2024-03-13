import React from 'react';
import Project from './Project';
import projects from'./projects.json';
import './projects.css'

function Projects() {
  return (
    <div className="projects">
      <div>
        <h2 className='text-center'>Projects</h2>
        <div className="d-flex justify-content-around flex-wrap">
          {projects.map((project, index) => (
              <Project key={index} project={project} />
          ))}
        </div>      
      </div>
    </div>    
  );
}

export default Projects;
