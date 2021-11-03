import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import { Link,} from 'react-router-dom'

export default function Header() {
    return (

        <div className="row text-center">
            <div className="col-12 text-center d-flex justify-content-center">
                <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className='text-center'>
                    <Navbar.Brand as={Link} to="/">Keith Downing - Web Developer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/aboutme">About Me</Nav.Link>
                            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link href="#footer">Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>

    )

}

