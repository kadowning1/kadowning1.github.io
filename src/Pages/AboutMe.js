import React from 'react'

export default function AboutMe() {
    return (

        <div className='container p-3' id='aboutme'>
            <div className='row d-flex justify-content-center'>
                
                <div className='col justify-content-center d-flex'>
                    <h1 className='text-center'>About Me</h1>
                <div className='col-3 p-3'>
                    <img src="/img/mug.jpeg" class="card-img-top justify-content-center rounded mx-auto d-block img-fluid img-thumbnail rounded-circle" alt="..." />
                </div>
                </div>
                <div className="text-center text-white">
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                </div>
                <div className='col-4 justify-content-center'>
                    <img className="card-img-top justify-content-center" src="/img/K+B-52.jpg" alt='kentucky' />
                </div>
                <br></br>
                <div className="p-3 text-center text-white">
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                </div>
            </div>
        </div>
    )
}
