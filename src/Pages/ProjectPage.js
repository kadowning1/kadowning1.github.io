import React from 'react'
import Projects from '../Components/Projects'
import { Col, Row, Container } from 'react-bootstrap'

export default function ProjectPage () {
    return (
        <Container className='container'>
            <Row className='row'>
                <h1 className='text-center'>Projects</h1>
                <Col>
                    <Projects />
                </Col>
            </Row>
        </Container>
    )
}
