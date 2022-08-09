import React from 'react';
import aboutme from '../aboutme.json'

export const AboutMe = () => {

    return (
        <div className='container p-3' id='aboutme'>
            <div className='row d-flex justify-content-center'>
                <div className='col'>
                    <h1 className='text-center'>{aboutme[0]?.title}</h1>
                    <div className='col-4 col-sm-2 offset-4 offset-sm-5 text-center'>
                        <img src={aboutme[0]?.image} className="card-img-top rounded mx-auto d-flex img-fluid img-thumbnail rounded-circle" alt="..." />
                    </div>
                </div>
                <div className="text-center text-white">
                    <p>{aboutme[0]?.preBootcamp}</p>
                </div>
                <div className='col-4 justify-content-center'>
                    <img className="card-img-top justify-content-center" src={aboutme[0]?.familyIMG} alt='kentucky' />
                </div>
                <br></br>
                <div className="p-3 text-center text-white">
                    <p>{aboutme[0]?.family}</p>
                    <p>Please contact me at <a className='text-decoration-none text-white' href="mailto:kadowning1@gmail.com">kadowning1@gmail.com</a> for any questions or inquires!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;