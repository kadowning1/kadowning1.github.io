import React from 'react';
// import data from '../../src/data.json';

export const AboutMe = () => {

    return (

        <div className='container p-3' id='aboutme'>
            <div className='row d-flex justify-content-center'>
                <div className='col'>
                    <h1 className='text-center'>About Me</h1>
                    <div className='col-4 col-sm-2 offset-4 offset-sm-5 text-center'>
                        <img src="/img/mug.jpeg" className="card-img-top rounded mx-auto d-flex img-fluid img-thumbnail rounded-circle" alt="..." />
                    </div>
                </div>
                <div className="text-center text-white">
                    <p>Originally from Maysville, KY,  I have now lived in Lexington, KY for around a
                        decade after graduating from the University of Kentucky with a business degree. Previously, I have
                        worked in financial roles coordinating financial reporting and reconciliation for clients. For the past 16 weeks,
                        I have explored a career change by attending Awesome Inc U's Full Stack Web Development Bootcamp.
                        I have been able to learn at a rapid pace with deep dives into HTML, CSS, Bootstrap, React, PHP, SQL, and Laravel.
                        I am hoping to combine my pre-Bootcamp
                        skills with my Bootcamp knowledge to provide the skills necessary to complete tasks and projects as a team. </p>
                </div>
                <div className='col-4 justify-content-center'>
                    <img className="card-img-top justify-content-center" src="/img/K+B-52.jpg" alt='kentucky' />
                </div>
                <br></br>
                <div className="p-3 text-center text-white">
                    <p>When not working on broadening my professional skills, I enjoy my dogs (Sam and Molly), basketball,
                        woodworking, gardening, and getting together with friends.  My wife Bekah, a native of Fort Thomas,
                        KY works for Squires Elementary as a 4th-grade teacher.  We are proud parents of our 1-year old son, Wyatt.
                    </p>
                    <p>Please contact me at <a className='text-decoration-none text-white' href="mailto:kadowning1@gmail.com">kadowning1@gmail.com</a> for any questions or inquires!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;