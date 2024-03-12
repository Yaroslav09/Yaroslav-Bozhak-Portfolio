import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Project({ project }) {
    return (
      <>
        <Card style={{ width: '18rem', marginBottom: '1rem' }}>
          <Card.Img variant="top" src={project.image} alt={project.title} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.describe}</Card.Text>
            <Button variant="primary" as = {Link} to={project.deployedLink} target='blank'>Go to deployed</Button>
            <Button variant="primary" as = {Link} to={project.githubLink} target='blank'>Go to GitHub</Button>
            <Link to={`/projects/${project.id}`}>More Details</Link>
          </Card.Body>
        </Card>    
      </>
    );
  }
  
  export default Project;