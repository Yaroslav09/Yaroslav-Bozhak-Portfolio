import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { imageUrl } from "../../imageURL";

function Project({ project }) {
    return (
      <>
        <Card className='project-card' style={{ width: '18rem'}} >
          <Card.Img variant="top" src={imageUrl(project.image)} alt={project.title} />
          <Card.Body className='card-body'>
            <Card.Title className='project-title'>{project.title}</Card.Title>
            <Card.Text className='project-describe'>{project.describe}</Card.Text>
            <Button variant="primary" as = {Link} to={project.deployedLink} target='blank'className='btn-deployed'>Go to deployed</Button>
            <Button variant="primary" as = {Link} to={project.githubLink} target='blank' className='btn-github'>Go to GitHub</Button>
            <Button variant="primary" as = {Link} to={`/Yaroslav-Bozhak-Portfolio/projects/${project.id}`}>More Details</Button>
          </Card.Body>
        </Card>    
      </>
    );
  }
  
  export default Project;