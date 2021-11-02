import React from 'react'
//import './App.css';

export default function Footer() {
    return (
        <footer className="d-flex flex-wrap align-items-center py-3 my-4 border-top justify-content-center" id='footer'>
            <div className='text-center'>
                <h6>Connect with Keith Downing</h6>
                <ul className="nav col justify-content-center list-unstyled d-flex">
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