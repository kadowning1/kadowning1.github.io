import React from 'react'
// import { Link } from 'react-router-dom';

export default function Splash() {
    return (
        <div class='container-fluid'>
            <div class='row'>
                <div class='col-12'>
                    <div class="card bg-dark text-dark text-color">
                        <img src="/img/kentucky-modified.jpeg" class="card-img " alt="..." />
                        <div class="card-img-overlay text-center text-color">
                            <br></br>

                            <div class='col-12'>
                                <div class='position-static text-color'>
                                    <div class="position-absolute top-50 start-50 translate-middle text-center">
                                        <h1 class="card-title fats">Keith Downing</h1>
                                        <br></br>
                                        <h3 class="card-title fats">Web Developer</h3>
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
