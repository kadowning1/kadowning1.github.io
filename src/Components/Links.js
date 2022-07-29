import React from 'react'

export default function Link () {
    return (
        <div className='d-flex justify-content-end'>
            <ul className="nav col d-flex justify-content-center list-unstyled">
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
    )
}
