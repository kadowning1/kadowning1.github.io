import React from 'react'
//import './App.css';
import { Nav, Navbar } from 'react-bootstrap'
import { Link, } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="d-flex flex-wrap align-items-center py-3 my-4 border-top" id='footer'>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className='text-center'>
                <Navbar.Brand as={Link} to="/">Keith Downing - Web Developer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Nav className="mr-auto d-flex justify-content-start">
                    <Nav.Link as={Link} to="/aboutme">About Me</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    <Nav.Link><a className='text-decoration-none text-white' href="mailto:kadowning1@gmail.com">Email Me!</a></Nav.Link>
                </Nav>
            </Navbar>
            <div className='d-flex justify-content-end'>
                <ul className="nav col d-flex justify-content-end list-unstyled">
                    <div className="template-demo">
                        <a href='https://github.com/kadowning1' target='_blank' rel='noreferrer'>
                            <button type="button" className="btn btn-social-icon btn-github btn-rounded">
                                <i className="fab fa-github-square"></i>
                            </button>
                        </a>
                        <a href='https://www.linkedin.com/in/keith-downing-94952224/' target='_blank' rel='noreferrer'><button type="button"
                            className="btn btn-social-icon btn-linkedin btn-rounded">
                            <i className="fab fa-linkedin"></i>
                        </button>
                        </a>
                        <a href='https://twitter.com/kadowning' target='_blank' rel='noreferrer'>
                            <button
                                type="button" className="btn btn-social-icon btn-twitter btn-rounded">
                                <i className="fab fa-twitter">
                                </i>
                            </button>
                        </a>
                    </div>
                </ul>
            </div>
        </footer>
    )
}