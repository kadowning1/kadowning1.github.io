import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'

export default function Splash () {
    return (
        <Container className='container-fluid'>
            <Row>
                <Col className='col-12'>
                    <Card className="card bg-dark text-dark text-color">
                        <Image src="/img/kentucky-modified2.png" className="card-img" alt="" />
                        <div className="card-img-overlay text-center text-color">
                            <br></br>
                            <Col className='col-12'>
                                <div className='position-static text-color'>
                                    <div className="position-absolute top-50 start-50 translate-middle text-center">
                                        <h1 className="card-title fats">Keith Downing</h1>
                                        <h2 className="card-title fatter">Web Developer</h2>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
