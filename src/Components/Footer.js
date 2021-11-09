import React from 'react'
//import './App.css';
import { Nav, Navbar } from 'react-bootstrap'
import { Link, } from 'react-router-dom'
import Links from './Links'

export default function Footer() {
    return (
        <footer className="py-3 my-4 border-top text-center" id='footer'>
            <Navbar variant="dark" expand="sm" sticky="bottom" className='justify-content-center text-center'>
            <Navbar.Brand as={Link} to="/">Keith Downing - Web Developer</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
            </Navbar>
       <h6><a className='text-decoration-none text-white text-center' href="https://docs.google.com/forms/d/1GbrAgzJUSLAjVfId5Dn4uYOJB3lm9MfbR-pLqFehydI/prefill">Contact Me Here!</a></h6>
            <Links />
        </footer>
    )
}