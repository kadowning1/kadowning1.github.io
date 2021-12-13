import React from 'react'
// import { Link } from 'react-router-dom';

export default function Splash() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <div className="card bg-dark text-dark text-color">
                        <img src="/img/kentucky-modified2.png" className="card-img" alt="..." />
                        <div className="card-img-overlay text-center text-color">
                            <br></br>

                            <div className='col-12'>
                                <div className='position-static text-color'>
                                    <div className="position-absolute top-50 start-50 translate-middle text-center">
                                        <h1 className="card-title fats">Keith Downing</h1>
                                        {/* <br></br> */}
                                        <h2 className="card-title fatter">Web Developer</h2>
                                        {/* <Link to="/aboutme" as={Link} className="btn btn-secondary lg p-3">Enter</Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
