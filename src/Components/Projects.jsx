import React from 'react';
// import { event_click } from '../lib/ga/Analytics'
import { Button, Row } from 'react-bootstrap';
import projects from '../projects.json';

export const Projects = () => {
  return (
    <Row>
      {projects.map((project) => (
        <div
          className='col-sm-12 col-md-4 py-2 justify-content-center'
          key={project.week}
        >
          <div className='card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100'>
            <img
              className='card-img-top image-fluid mx-auto p-3'
              src={project.image}
              alt={project.projectName}
            />
            <br></br>
            <h3 className='card-title text-decoration-none fat'>
              {project.projectName}
            </h3>
            <h5 className='card-text p-2'>{project.projectDescription}</h5>
            <p className='card-text'>
              <b>Tech Stack:</b> {project.techStack}
            </p>
            <Button
              variant='secondary'
              size='lg'
              href={project.liveLink}
              target='_blank'
            >
              Demo App
            </Button>
            <Button
              variant='secondary'
              size='lg'
              href={project.frontendLink}
              target='_blank'
            >
              Github Front-End Repo{' '}
            </Button>
            <Button
              variant='secondary'
              size='lg'
              href={project.backendLink}
              target='_blank'
            >
              Github Back-End Repo{' '}
            </Button>
          </div>
        </div>
      ))}
    </Row>
  );
};

export default Projects;
