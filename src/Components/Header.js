import React from 'react'
import { Navbar, Nav, } from 'react-bootstrap'

export default function Header() {
    return (
        <div>
            <div className="row justify-content-center text-center">
                <div className="col-md-12 justify-content-center text-center">
                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className='justify-content-center'>
                        <Navbar.Brand href="#home">Keith Downing - Web Developer</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/about-us">About Me</Nav.Link>
                                <Nav.Link href="/about-us">Projects</Nav.Link>
                                <Nav.Link href="/contact-us">Blog</Nav.Link>
                                <Nav.Link href="/contact-us">Contact Me</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    )

}

