import React, { useState } from 'react';
import blog from '../blogpost.json';
import { Button, Collapse, Col, Row, Container } from 'react-bootstrap';

export default function BlogPost() {
  const [open, setOpen] = useState(false);

  return (
    <Container className=''>
      <Row className='p-3'>
        {blog.map((blog, index) => (
          <Col className='my-3 d-flex' key={index} sm={12}>
            <div className='card position-relative top-50 start-50 translate-middle bg-secondary p-3'>
              <div className='card-body text-white'>
                <img
                  src={blog.image}
                  className='rounded mx-auto d-block img-fluid img-thumbnail p-2'
                  alt={blog.title}
                />
                <h5 className='card-title text-white pt-2'>{blog.headline}</h5>
                <p className='card-text'>{blog.p1}</p>
                {!open && (
                  <Col small={12} className='text-center'>
                    <Button
                      onClick={() => setOpen(!open)}
                      aria-controls='example-collapse-text'
                      aria-expanded={open}
                      variant='outline-light'
                    >
                      More
                    </Button>
                  </Col>
                )}
                <Collapse in={open}>
                  <div id='example-collapse-text' className='card-text'>
                    {blog.p2}
                    {blog.p3}
                  </div>
                </Collapse>
              </div>
              <div className='card-footer'>
                <small className='text-center'>{blog.date}</small>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
