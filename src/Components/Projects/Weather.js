import React from 'react'
import { Button } from 'react-bootstrap'

export default function Weather() {
    return (
      <div className="col-md-4 col-sm-12 py-2 justify-content-center">
            <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100">
                <img className="card-img-top image-fluid mx-auto p-3" src='/img/WeatherApp.png' alt='food' />
                <br></br>
                <h3 className="card-title text-decoration-none fat">Weather App</h3>
                <h5 className="card-text p-2">Application lets user input zip-code and retrive local weather information based on API calls and rendering data on the page</h5>
                <p className="card-text"><b>Tech Stack:</b> HTML, CSS, Bootstrap, JavaScript, Axios</p>
                <Button variant="secondary" size="lg" href='https://kadowning1.github.io/weather/' target='_blank'>
                    Demo App </Button>
                <Button variant="secondary" size="lg" href='https://github.com/kadowning1/weather' target='_blank'>
                    Github Repo </Button>
            </div>
        </div>
    )
}