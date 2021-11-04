import React from 'react'
//import './App.css';
import { Nav, Navbar } from 'react-bootstrap'
import { Link, } from 'react-router-dom'
import Links from './Links'

export default function Footer() {
    return (
        <footer className="py-3 my-4 border-top" id='footer'>
            <Navbar variant="dark" expand="sm" sticky="bottom" className='justify-content-center text-center'>
            <Navbar.Brand as={Link} to="/">Keith Downing - Web Developer</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/aboutme">About Me</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    <Nav.Link><a className='text-decoration-none text-white' href="mailto:kadowning1@gmail.com">Email Me!</a></Nav.Link>
                </Nav>
            </Navbar>
            <Links />
        </footer>
    )
}