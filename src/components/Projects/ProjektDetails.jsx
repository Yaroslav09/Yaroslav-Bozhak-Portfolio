import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { imageUrl } from "../../imageURL";
import projects from './projects.json';
import './project-details.css';

function ProjectDetails() {
  const { projectId } = useParams(); 
  
  const project = projects.find((project) => project.id === parseInt(projectId));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='project-page'>
        <div className="container">
            <div className='project-card'>
                <div className='card-img'><img src={imageUrl(project.image)} alt={project.title}/></div>
                <div className='card-body'>
                    <h3 className='project-title'>{project.title}</h3>
                    <p className='project-describe'>{project.describe}</p>
                    <Button variant="primary" as = {Link} to={project.deployedLink} target='blank'className='btn btn-deployed'>Go to deployed</Button>
                    <Button variant="primary" as = {Link} to={project.githubLink} target='blank' className='btn btn-github'>Go to GitHub</Button>   
                    <Button variant="primary" as = {Link} to="/Yaroslav-Bozhak-Portfolio/projects" target='blank' className='btn btn-github'>Buck to projects</Button>          
                </div>
            </div>         
        </div>         
    </div>
  );
}

export default ProjectDetails;
