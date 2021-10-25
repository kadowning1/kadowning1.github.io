import React from 'react'

export default function Header() {
    return (
        <div>
            <div className="container">
                <header className="d-flex justify-content-center py-3 border-bottom">
                    <ul className="nav nav-pills bg-secondary">
                        <li className="nav-item"><a href="https://github.com/kadowning1" target='_blank' rel='noreferrer' className="nav-link text-white">Home</a></li>
                        <li className="nav-item"><a href="https://github.com/kadowning1" target='_blank' rel='noreferrer' className="nav-link text-white" aria-current="page">About</a></li>
                        <li className="nav-item"><a href="https://github.com/kadowning1" target='_blank' rel='noreferrer' className="nav-link text-white">Blog</a></li>
                        <li className="nav-item"><a href="https://github.com/kadowning1" target='_blank' rel='noreferrer' className="nav-link text-white">Portfolio</a></li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-secondary" type="submit">Search</button>

                    </form>
                </header>
            </div>
        </div>
    )
}

