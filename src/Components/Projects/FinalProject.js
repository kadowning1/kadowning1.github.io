import React from 'react'
import { Button } from 'react-bootstrap'

export default function FinalProject () {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 py-2 justify-content-center">
            <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100">
                <img className="card-img-top image-fluid mx-auto p-3" src='/img/golf.png' alt='food' />
                <br></br>
                <h3 className="card-title text-decoration-none fat">PGA Golf Pool</h3>
                <h5 className="card-text p-2">Application creating golf pools from PGA tour golfers to compete against friends and family.  This app is easy to use for all ages to participate and contains a back-end storing all user data.  Create teams of golfers and groups to see how you stack up!</h5>
                <p className="card-text">
                    <b>Tech Stack:</b> HTML, CSS,
                    React-Bootstrap, JavaScript, React Hooks,
                    React-Router, Axios, PHP, Laravel
                </p>
                <Button variant="secondary" size="lg" href='https://golfpgapool.web.app/' target='_blank'>
                    Demo App</Button>
                <Button variant="secondary" size="lg" href='https://github.com/kadowning1/golfFinalFrontEnd' target='_blank'>
                    Github Front-End Repo </Button>
                <Button variant="secondary" size="lg" href='https://github.com/kadowning1/golfFinalBackEnd' target='_blank'>
                    Github Back-End Repo </Button>
            </div>
        </div>
    )
}
