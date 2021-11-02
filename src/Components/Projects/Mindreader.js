import React from 'react'

export default function Mindreader() {
    return (
        <div className="col-md-6 col-sm-12 py-2 justify-content-center">
            <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100">
                <img className="card-img-top image-fluid mx-auto p-3" src='/img/Mindreader.png' alt='food' />
                <br></br>
                <a href='https://github.com/kadowning1/markdown-portfolio'><h5 class="card-title">MarkDown Project</h5></a>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor
                ineprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="card-text">
                    <b>Tech Stack:</b> HTML, CSS,
                                    React-Bootstrap, JavaScript, React Hooks,
                                    React-Router
                                </p>
            </div>
        </div>
    )
}
